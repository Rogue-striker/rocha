//! Persistent on-disk transform cache adhering to docs/cache.md.

use serde::{Deserialize, Serialize};
use std::fs;
use std::io;
use std::path::{Path, PathBuf};
use std::sync::atomic::{AtomicU64, Ordering};
use std::time::{SystemTime, UNIX_EPOCH};

static TMP_COUNTER: AtomicU64 = AtomicU64::new(1);

/// Version of rocha transform engine for cache invalidation.
pub const ROCHA_TRANSFORM_VERSION: &str = env!("CARGO_PKG_VERSION");

/// Version of underlying Oxc parser/transformer.
pub const OXC_VERSION: &str = "0.152.0";

/// Default cache size cap: 1 GiB.
pub const DEFAULT_MAX_CACHE_BYTES: u64 = 1024 * 1024 * 1024;

/// Metadata stored alongside cached transform output.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct CacheMeta {
    /// Format schema version.
    pub version: u32,
    /// 64-character hex BLAKE3 cache key.
    pub key: String,
    /// Original file path.
    pub original_file: String,
    /// Original file size in bytes.
    pub original_size: u64,
    /// Original file last modified time in milliseconds since Unix epoch.
    pub original_mtime_ms: u64,
    /// Size of transformed JavaScript output.
    pub transformed_size: u64,
    /// Cache creation timestamp in milliseconds.
    pub created_at_ms: u64,
    /// Last accessed timestamp in milliseconds for LRU tracking.
    pub last_accessed_ms: u64,
    /// Oxc compiler version used.
    pub oxc_version: String,
}

/// Compute 64-character hex BLAKE3 cache key according to docs/cache.md.
///
/// Format:
/// `blake3(source ‖ 0x00 ‖ ext ‖ 0x00 ‖ opts_json ‖ 0x00 ‖ rocha_ver ‖ 0x00 ‖ oxc_ver ‖ 0x00 ‖ node_class)`
pub fn compute_cache_key(
    source_bytes: &[u8],
    file_extension: &str,
    canonical_options_json: &str,
    target_node_version_class: &str,
) -> String {
    let mut hasher = blake3::Hasher::new();
    hasher.update(source_bytes);
    hasher.update(&[0x00]);
    hasher.update(file_extension.as_bytes());
    hasher.update(&[0x00]);
    hasher.update(canonical_options_json.as_bytes());
    hasher.update(&[0x00]);
    hasher.update(ROCHA_TRANSFORM_VERSION.as_bytes());
    hasher.update(&[0x00]);
    hasher.update(OXC_VERSION.as_bytes());
    hasher.update(&[0x00]);
    hasher.update(target_node_version_class.as_bytes());

    hasher.finalize().to_hex().to_string()
}

/// A retrieved cached entry.
#[derive(Debug, Clone)]
pub struct CachedEntry {
    /// Transformed JavaScript code.
    pub code: String,
    /// External source map JSON if generated.
    pub source_map: Option<String>,
    /// Metadata associated with the cache entry.
    pub meta: CacheMeta,
}

/// Disk cache manager for transformed files.
#[derive(Debug, Clone)]
pub struct DiskCache {
    root_dir: PathBuf,
    max_bytes: u64,
}

impl DiskCache {
    /// Create a new DiskCache pointing to cache directory root (e.g. `.rocha/cache/v1`).
    pub fn new(root_dir: impl Into<PathBuf>, max_bytes: u64) -> io::Result<Self> {
        let root = root_dir.into();
        fs::create_dir_all(&root)?;
        fs::create_dir_all(root.join("tmp"))?;
        Ok(Self {
            root_dir: root,
            max_bytes,
        })
    }

    /// Retrieve entry by BLAKE3 cache key.
    ///
    /// Returns `Some(entry)` on hit. If any file is missing or corrupted,
    /// automatically purges the entry and returns `None` (self-healing).
    pub fn get(&self, key: &str) -> Option<CachedEntry> {
        if key.len() < 2 {
            return None;
        }
        let shard = &key[0..2];
        let base = self.root_dir.join(shard).join(key);
        let js_path = base.with_extension("js");
        let meta_path = base.with_extension("meta");
        let map_path = base.with_extension("map");

        if !js_path.is_file() || !meta_path.is_file() {
            return None;
        }

        let meta_bytes = match fs::read(&meta_path) {
            Ok(b) => b,
            Err(_) => {
                self.purge_entry(&base);
                return None;
            }
        };

        let mut meta: CacheMeta = match serde_json::from_slice(&meta_bytes) {
            Ok(m) => m,
            Err(_) => {
                self.purge_entry(&base);
                return None;
            }
        };

        let code = match fs::read_to_string(&js_path) {
            Ok(c) => c,
            Err(_) => {
                self.purge_entry(&base);
                return None;
            }
        };

        let source_map = if map_path.is_file() {
            fs::read_to_string(&map_path).ok()
        } else {
            None
        };

        // Update LRU access timestamp
        let now = SystemTime::now()
            .duration_since(UNIX_EPOCH)
            .unwrap_or_default()
            .as_millis() as u64;
        meta.last_accessed_ms = now;

        Some(CachedEntry {
            code,
            source_map,
            meta,
        })
    }

    /// Store a transformed result using atomic temp-write and rename protocol.
    pub fn put(
        &self,
        key: &str,
        code: &str,
        source_map: Option<&str>,
        meta: &CacheMeta,
    ) -> io::Result<()> {
        if key.len() < 2 {
            return Err(io::Error::new(
                io::ErrorKind::InvalidInput,
                "Cache key too short",
            ));
        }

        let shard = &key[0..2];
        let shard_dir = self.root_dir.join(shard);
        let tmp_dir = self.root_dir.join("tmp");

        fs::create_dir_all(&shard_dir)?;
        fs::create_dir_all(&tmp_dir)?;

        let pid = std::process::id();
        let counter = TMP_COUNTER.fetch_add(1, Ordering::Relaxed);
        let tmp_prefix = format!("tmp_{}_{}_{}", pid, counter, key);

        let tmp_js = tmp_dir.join(format!("{}.js", tmp_prefix));
        let tmp_map = tmp_dir.join(format!("{}.map", tmp_prefix));
        let tmp_meta = tmp_dir.join(format!("{}.meta", tmp_prefix));

        // 1. Write temporary files
        fs::write(&tmp_js, code)?;
        if let Some(map) = source_map {
            fs::write(&tmp_map, map)?;
        }
        let meta_json = serde_json::to_vec_pretty(meta)
            .map_err(|e| io::Error::new(io::ErrorKind::InvalidData, e.to_string()))?;
        fs::write(&tmp_meta, meta_json)?;

        // 2. Atomically rename into shard directory
        let dest_base = shard_dir.join(key);
        let dest_js = dest_base.with_extension("js");
        let dest_map = dest_base.with_extension("map");
        let dest_meta = dest_base.with_extension("meta");

        fs::rename(&tmp_js, &dest_js)?;
        if source_map.is_some() {
            fs::rename(&tmp_map, &dest_map)?;
        }
        fs::rename(&tmp_meta, &dest_meta)?;

        Ok(())
    }

    /// Check total cache directory size and evict oldest entries if exceeding cap.
    ///
    /// Purges until size is below 80% of max_bytes.
    pub fn evict_if_needed(&self) -> io::Result<usize> {
        let mut entries = Vec::new();
        let mut total_size: u64 = 0;

        for shard_entry in fs::read_dir(&self.root_dir)? {
            let shard_entry = shard_entry?;
            let shard_path = shard_entry.path();
            if !shard_path.is_dir() || shard_path.file_name() == Some(std::ffi::OsStr::new("tmp")) {
                continue;
            }

            for file_entry in fs::read_dir(&shard_path)? {
                let file_entry = file_entry?;
                let path = file_entry.path();
                if path.extension() == Some(std::ffi::OsStr::new("meta")) {
                    if let Ok(metadata) = fs::read(&path) {
                        if let Ok(meta) = serde_json::from_slice::<CacheMeta>(&metadata) {
                            let base = path.with_extension("");
                            let js_size = fs::metadata(base.with_extension("js"))
                                .map(|m| m.len())
                                .unwrap_or(0);
                            let map_size = fs::metadata(base.with_extension("map"))
                                .map(|m| m.len())
                                .unwrap_or(0);
                            let meta_size = metadata.len() as u64;
                            let entry_size = js_size + map_size + meta_size;
                            total_size += entry_size;
                            entries.push((meta.last_accessed_ms, base, entry_size));
                        }
                    }
                }
            }
        }

        if total_size <= self.max_bytes {
            return Ok(0);
        }

        // Sort oldest access first
        entries.sort_by_key(|&(accessed, _, _)| accessed);

        let target_size = (self.max_bytes as f64 * 0.8) as u64;
        let mut evicted_count = 0;

        for (_, base, entry_size) in entries {
            if total_size <= target_size {
                break;
            }
            self.purge_entry(&base);
            total_size = total_size.saturating_sub(entry_size);
            evicted_count += 1;
        }

        Ok(evicted_count)
    }

    fn purge_entry(&self, base_path: &Path) {
        let _ = fs::remove_file(base_path.with_extension("js"));
        let _ = fs::remove_file(base_path.with_extension("map"));
        let _ = fs::remove_file(base_path.with_extension("meta"));
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_compute_cache_key_deterministic() {
        let k1 = compute_cache_key(b"const x = 1;", "ts", "{}", "node20");
        let k2 = compute_cache_key(b"const x = 1;", "ts", "{}", "node20");
        assert_eq!(k1, k2);
        assert_eq!(k1.len(), 64);

        let k3 = compute_cache_key(b"const x = 2;", "ts", "{}", "node20");
        assert_ne!(k1, k3);
    }

    #[test]
    fn test_cache_hit_and_miss() {
        let temp = tempfile::tempdir().unwrap();
        let cache = DiskCache::new(temp.path(), DEFAULT_MAX_CACHE_BYTES).unwrap();

        let key = compute_cache_key(b"test", "ts", "{}", "node20");
        assert!(cache.get(&key).is_none());

        let meta = CacheMeta {
            version: 1,
            key: key.clone(),
            original_file: "test.ts".into(),
            original_size: 10,
            original_mtime_ms: 1000,
            transformed_size: 20,
            created_at_ms: 2000,
            last_accessed_ms: 2000,
            oxc_version: OXC_VERSION.into(),
        };

        cache
            .put(
                &key,
                "console.log('hello');",
                Some("{\"version\":3}"),
                &meta,
            )
            .unwrap();

        let entry = cache.get(&key).expect("should hit cache");
        assert_eq!(entry.code, "console.log('hello');");
        assert_eq!(entry.source_map.as_deref(), Some("{\"version\":3}"));
        assert_eq!(entry.meta.original_file, "test.ts");
    }

    #[test]
    fn test_corrupt_entry_recovery() {
        let temp = tempfile::tempdir().unwrap();
        let cache = DiskCache::new(temp.path(), DEFAULT_MAX_CACHE_BYTES).unwrap();

        let key = compute_cache_key(b"corrupt", "ts", "{}", "node20");
        let meta = CacheMeta {
            version: 1,
            key: key.clone(),
            original_file: "corrupt.ts".into(),
            original_size: 10,
            original_mtime_ms: 1000,
            transformed_size: 20,
            created_at_ms: 2000,
            last_accessed_ms: 2000,
            oxc_version: OXC_VERSION.into(),
        };

        cache.put(&key, "valid js", None, &meta).unwrap();
        assert!(cache.get(&key).is_some());

        // Corrupt the metadata file with garbage
        let shard = &key[0..2];
        let meta_file = temp.path().join(shard).join(&key).with_extension("meta");
        fs::write(&meta_file, b"corrupted non-json bytes").unwrap();

        // Should detect corruption, purge damaged files, and return None (cache miss)
        assert!(cache.get(&key).is_none());
        assert!(
            !meta_file.exists(),
            "corrupt meta file should have been purged"
        );
    }

    #[test]
    fn test_concurrent_writers_safety() {
        use std::thread;

        let temp = tempfile::tempdir().unwrap();
        let cache = DiskCache::new(temp.path(), DEFAULT_MAX_CACHE_BYTES).unwrap();
        let key = compute_cache_key(b"concurrent", "ts", "{}", "node20");

        let meta = CacheMeta {
            version: 1,
            key: key.clone(),
            original_file: "concurrent.ts".into(),
            original_size: 10,
            original_mtime_ms: 1000,
            transformed_size: 20,
            created_at_ms: 2000,
            last_accessed_ms: 2000,
            oxc_version: OXC_VERSION.into(),
        };

        // Spawn 4 threads writing identical output to the same cache key simultaneously
        let mut handles = Vec::new();
        for _ in 0..4 {
            let cache_clone = cache.clone();
            let key_clone = key.clone();
            let meta_clone = meta.clone();
            handles.push(thread::spawn(move || {
                cache_clone
                    .put(&key_clone, "const c = 42;", None, &meta_clone)
                    .unwrap();
            }));
        }

        for h in handles {
            h.join().unwrap();
        }

        // Cache must be intact and readable
        let hit = cache
            .get(&key)
            .expect("cache entry should be intact after concurrent writes");
        assert_eq!(hit.code, "const c = 42;");
    }

    #[test]
    fn test_eviction_under_size_cap() {
        let temp = tempfile::tempdir().unwrap();
        // Set tiny cap: 500 bytes
        let cache = DiskCache::new(temp.path(), 500).unwrap();

        for i in 0..10 {
            let key = format!(
                "00{:02x}000000000000000000000000000000000000000000000000000000000000",
                i
            );
            let meta = CacheMeta {
                version: 1,
                key: key.clone(),
                original_file: format!("file_{}.ts", i),
                original_size: 100,
                original_mtime_ms: 1000 + i,
                transformed_size: 100,
                created_at_ms: 1000 + i,
                last_accessed_ms: 1000 + i, // Older entries have lower timestamp
                oxc_version: OXC_VERSION.into(),
            };
            cache
                .put(&key, "const a = 1234567890;", None, &meta)
                .unwrap();
        }

        // Total size will exceed 500 bytes. Run eviction:
        let evicted = cache.evict_if_needed().unwrap();
        assert!(evicted > 0, "must evict entries exceeding cap");
    }
}
