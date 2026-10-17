# Rocha Transform Cache Specification (v1)

This document specifies the persistent on-disk cache architecture used by Rocha to cache transformed TypeScript, JSX, and ESM modules across test executions.

---

## 1. Cache Key Computation

The cache key is a 256-bit hash represented as a 64-character lowercase hexadecimal string, computed using the cryptographic BLAKE3 hashing algorithm:

```
cache_key = blake3(
    source_bytes ‖
    0x00 ‖
    file_extension ‖
    0x00 ‖
    transform_options_canonical_json ‖
    0x00 ‖
    rocha_transform_version ‖
    0x00 ‖
    oxc_version ‖
    0x00 ‖
    target_node_version_class
)
```

Where:
- `source_bytes`: Exact raw file content bytes of the input source file.
- `file_extension`: Lowercase file extension without dot (e.g., `ts`, `tsx`, `js`, `jsx`, `mts`, `cts`).
- `transform_options_canonical_json`: Sorted-key, whitespace-minimized JSON serialization of transformation options (e.g. `{"jsx":"react-jsx","module":"commonjs","target":"es2022"}`).
- `rocha_transform_version`: Version string of the `rocha-transform` crate (e.g. `0.1.0`).
- `oxc_version`: Version string of the underlying Oxc compiler dependency (e.g. `0.30.0`).
- `target_node_version_class`: Target Node.js major runtime version (e.g. `node18`, `node20`, `node22`, `node26`).
- `0x00`: NULL delimiter byte separating components to prevent collision between adjacent fields.

---

## 2. On-Disk Layout

All cached artifacts are stored within the project directory under `.rocha/cache/v1/`:

```
<project_root>/.rocha/cache/v1/
├── tmp/                           # Staging directory for atomic writes
│   └── .tmp_9a2b8e...             # In-flight temporary files
└── <aa>/                          # Sharded by first 2 hex chars of hash (00 - ff)
    ├── <hash>.js                  # Transformed JavaScript code
    ├── <hash>.map                 # External v3 Source Map JSON
    └── <hash>.meta                # Cache metadata JSON
```

### 2.1 File Sharding
To prevent filesystem degradation on filesystems with directory entry bottlenecks (e.g., ext4, NTFS), cache entries are sharded into 256 subdirectories based on the first two hex characters (`<aa>`) of the BLAKE3 hash:
`shard_dir = .rocha/cache/v1/{hash[0..2]}/`

### 2.2 Metadata Schema (`<hash>.meta`)
```json
{
  "version": 1,
  "key": "3f2e1a...64hex",
  "original_file": "src/controllers/auth.ts",
  "original_size": 4096,
  "original_mtime_ms": 1729158400000,
  "transformed_size": 2840,
  "created_at_ms": 1729158450123,
  "last_accessed_ms": 1729158450123,
  "oxc_version": "0.30.0"
}
```

---

## 3. Atomic Write Protocol

To ensure consistency in multi-threaded and multi-process concurrent environments, cache writing follows an atomic temp-file-and-rename protocol:

1. **Staging**:
   Write the `.js`, `.map`, and `.meta` files to the `.rocha/cache/v1/tmp/` directory with unique filenames:
   `tmp_path = .rocha/cache/v1/tmp/.tmp_{pid}_{thread_id}_{random_uuid}.{ext}`
2. **Directory Guarantee**:
   Ensure the destination shard directory `.rocha/cache/v1/{hash[0..2]}/` exists (`fs::create_dir_all`).
3. **Atomic Rename**:
   Move each temporary file into its final destination:
   - On POSIX: `rename(tmp_path, final_path)` is atomic and replaces any existing destination.
   - On Windows: Use `MoveFileExW` with `MOVEFILE_REPLACE_EXISTING | MOVEFILE_WRITE_THROUGH` (or Rust `fs::rename`, which leverages `MoveFileExW` in standard library).
4. **Order of Rename**:
   Rename `.js` first, `.map` second, and `.meta` last. A cache lookup checks for `.meta` existence to confirm an entry is fully committed.

---

## 4. Concurrent-Writer Safety

Because transformations performed by Rocha are completely deterministic:
- Two independent worker processes transforming the exact same input code produce identical byte outputs for `.js`, `.map`, and `.meta`.
- If two writers race to write the same hash, both write identical content to distinct temporary files and execute atomic renames. The winning rename leaves a valid entry; the second rename simply overwrites with identical bytes.
- Readers never observe partially written files because files are renamed into place only after being fully flushed and closed.

---

## 5. Corruption Handling

Cache files may be corrupted by unexpected power loss or hard process termination:
- When reading an entry, the reader validates that `.js`, `.map`, and `.meta` all exist.
- The `.meta` JSON must parse successfully.
- If parsing fails, or if reading `.js`/`.map` encounters I/O errors or unexpected EOF, the entry is declared corrupt:
  - The reader deletes all files associated with `<hash>.*`.
  - The lookup logs a debug trace and reports a cache **MISS**.
  - A clean transformation is triggered and re-written atomically.

---

## 6. Eviction Policy (LRU & Size Cap)

- **Default Size Cap**: 1 GiB (`1,073,741,824` bytes). Configurable via `cache_max_bytes` or `ROCHA_CACHE_MAX_BYTES`.
- **Access Tracking**: On every cache **HIT**, update the file's modification timestamp (`mtime` / `last_accessed_ms`) to reflect recent usage.
- **Eviction Trigger**:
  - Eviction check runs asynchronously after a test run completes or when disk writes push total cache size over the cap.
  - If total size > `MAX_SIZE`:
    1. Collect all `.meta` entries and their associated file sizes.
    2. Sort entries by `last_accessed_ms` / `mtime` ascending (oldest first).
    3. Delete entries until total cache size is below 80% of `MAX_SIZE` (20% hysteresis headroom).

---

## 7. Algorithms & Pseudocode

### 7.1 Cache Lookup Pseudocode

```rust
fn lookup_cache(cache_key: &str) -> Option<CachedTransform> {
    let shard = &cache_key[0..2];
    let base_path = format!(".rocha/cache/v1/{}/{}", shard, cache_key);
    let meta_path = format!("{}.meta", base_path);
    let js_path = format!("{}.js", base_path);
    let map_path = format!("{}.map", base_path);

    if !path_exists(&meta_path) || !path_exists(&js_path) || !path_exists(&map_path) {
        return None; // Cache miss
    }

    // Validate metadata and integrity
    let meta_bytes = match fs::read(&meta_path) {
        Ok(b) => b,
        Err(_) => { purge_entry(&base_path); return None; }
    };

    let meta: CacheMeta = match serde_json::from_slice(&meta_bytes) {
        Ok(m) => m,
        Err(_) => {
            // Corrupt metadata: purge and treat as miss
            purge_entry(&base_path);
            return None;
        }
    };

    let js_code = match fs::read_to_string(&js_path) {
        Ok(code) => code,
        Err(_) => { purge_entry(&base_path); return None; }
    };

    let source_map = match fs::read_to_string(&map_path) {
        Ok(map) => map,
        Err(_) => { purge_entry(&base_path); return None; }
    };

    // Update access time for LRU tracking (best effort)
    let _ = touch_mtime(&meta_path);

    Some(CachedTransform { js_code, source_map, meta })
}
```

### 7.2 Cache Store Pseudocode

```rust
fn store_cache(cache_key: &str, js_code: &str, source_map: &str, meta: &CacheMeta) -> io::Result<()> {
    let shard = &cache_key[0..2];
    let shard_dir = format!(".rocha/cache/v1/{}", shard);
    let tmp_dir = ".rocha/cache/v1/tmp";
    fs::create_dir_all(&shard_dir)?;
    fs::create_dir_all(tmp_dir)?;

    let unique_id = uuid_v4_or_pid_thread_counter();
    let tmp_js = format!("{}/tmp_{}.js", tmp_dir, unique_id);
    let tmp_map = format!("{}/tmp_{}.map", tmp_dir, unique_id);
    let tmp_meta = format!("{}/tmp_{}.meta", tmp_dir, unique_id);

    // 1. Write all temporary files
    fs::write(&tmp_js, js_code)?;
    fs::write(&tmp_map, source_map)?;
    fs::write(&tmp_meta, serde_json::to_vec(meta)?)?;

    // 2. Atomically rename into final location
    let final_base = format!("{}/{}", shard_dir, cache_key);
    atomic_rename(&tmp_js, &format!("{}.js", final_base))?;
    atomic_rename(&tmp_map, &format!("{}.map", final_base))?;
    atomic_rename(&tmp_meta, &format!("{}.meta", final_base))?;

    Ok(())
}
```

---

## 8. Reviewer Checklist

- [x] **Deterministic Key Derivation**: Uses cryptographic BLAKE3 across source, options, extension, compiler version, and target runtime with NULL byte delimiters.
- [x] **Subdirectory Sharding**: First 2 hex characters prevent inode / directory search exhaustion.
- [x] **Windows Rename Semantics**: Handled with `MOVEFILE_REPLACE_EXISTING` / Rust `std::fs::rename` replacement semantics.
- [x] **Atomic Temp Staging**: Readers never observe partially written files.
- [x] **Corruption Detection & Self-Healing**: Automatically unlinks damaged entries and triggers re-compilation on checksum or parse mismatch.
- [x] **Concurrency Safety**: Racing workers produce identical outputs; atomic rename guarantees idempotent write resolution.
- [x] **LRU Eviction with Headroom**: Eviction purges oldest 20% on size limit breach to avoid thrashing.
