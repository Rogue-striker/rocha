//! Native test file discovery for Rocha.
//!
//! Provides fast, parallel-ready file discovery matching Mocha's lookupFiles semantics:
//! - Resolves files, directories, and glob patterns
//! - Applies extension filtering, recursive traversal, ignore patterns, and deduplication
//! - Deterministic ordering with `--sort` support

use globset::{GlobBuilder, GlobSet, GlobSetBuilder};
use std::collections::HashSet;
use std::path::{Path, PathBuf};
use thiserror::Error;
use walkdir::WalkDir;

/// Errors that can occur during file discovery.
#[derive(Debug, Error)]
pub enum DiscoveryError {
    /// Failure compiling a glob pattern.
    #[error("Invalid glob pattern '{pattern}': {source}")]
    InvalidGlob {
        /// The invalid pattern string.
        pattern: String,
        /// Underlying globset error.
        #[source]
        source: globset::Error,
    },
    /// Standard I/O error during directory traversal.
    #[error("I/O error during file discovery: {0}")]
    Io(#[from] std::io::Error),
}

/// Options controlling file discovery.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct DiscoveryOptions {
    /// Specifications: individual files, directories, or glob patterns.
    pub specs: Vec<String>,
    /// Recognized file extensions (e.g. `["js", "cjs", "mjs", "ts", "tsx"]`).
    pub extensions: Vec<String>,
    /// Search directories recursively.
    pub recursive: bool,
    /// Sort discovered file paths alphabetically.
    pub sort: bool,
    /// Patterns to ignore during discovery.
    pub ignore: Vec<String>,
    /// Working directory for relative paths (defaults to current dir).
    pub root_dir: PathBuf,
}

impl Default for DiscoveryOptions {
    fn default() -> Self {
        Self {
            specs: Vec::new(),
            extensions: vec![
                "js".into(),
                "cjs".into(),
                "mjs".into(),
                "ts".into(),
                "tsx".into(),
                "jsx".into(),
            ],
            recursive: false,
            sort: false,
            ignore: Vec::new(),
            root_dir: PathBuf::from("."),
        }
    }
}

/// Discovers test files matching given options.
pub fn discover_files(options: &DiscoveryOptions) -> Result<Vec<PathBuf>, DiscoveryError> {
    let mut ignore_builder = GlobSetBuilder::new();
    for pattern in &options.ignore {
        let glob = GlobBuilder::new(pattern)
            .literal_separator(false)
            .build()
            .map_err(|e| DiscoveryError::InvalidGlob {
                pattern: pattern.clone(),
                source: e,
            })?;
        ignore_builder.add(glob);
    }
    let ignore_set = ignore_builder
        .build()
        .map_err(|e| DiscoveryError::InvalidGlob {
            pattern: "<combined ignore>".into(),
            source: e,
        })?;

    let specs = if options.specs.is_empty() {
        let default_test_dir = options.root_dir.join("test");
        if default_test_dir.is_dir() {
            vec!["test".to_string()]
        } else {
            vec!["test/**/*.js".to_string()]
        }
    } else {
        options.specs.clone()
    };

    let mut discovered: Vec<PathBuf> = Vec::new();
    let mut seen: HashSet<PathBuf> = HashSet::new();

    for spec in specs {
        let has_magic =
            spec.contains('*') || spec.contains('?') || spec.contains('[') || spec.contains('{');
        let spec_path = options.root_dir.join(&spec);

        if !has_magic && spec_path.is_file() {
            let canonical = spec_path
                .canonicalize()
                .unwrap_or_else(|_| spec_path.clone());
            if seen.insert(canonical)
                && !is_ignored(&spec_path, &options.root_dir, &ignore_set, &options.ignore)
            {
                discovered.push(spec_path);
            }
        } else if !has_magic && spec_path.is_dir() {
            let mut walker = WalkDir::new(&spec_path);
            if !options.recursive {
                walker = walker.max_depth(1);
            }

            for entry in walker.into_iter().filter_map(|e| e.ok()) {
                let path = entry.path().to_path_buf();
                if path.is_file() && has_matching_extension(&path, &options.extensions) {
                    let canonical = path.canonicalize().unwrap_or_else(|_| path.clone());
                    if seen.insert(canonical)
                        && !is_ignored(&path, &options.root_dir, &ignore_set, &options.ignore)
                    {
                        discovered.push(path);
                    }
                }
            }
        } else {
            // Glob pattern
            let glob = GlobBuilder::new(&spec)
                .literal_separator(false)
                .build()
                .map_err(|e| DiscoveryError::InvalidGlob {
                    pattern: spec.clone(),
                    source: e,
                })?;
            let glob_set = GlobSetBuilder::new().add(glob).build().map_err(|e| {
                DiscoveryError::InvalidGlob {
                    pattern: spec.clone(),
                    source: e,
                }
            })?;

            // Walk from root_dir to find matching files
            for entry in WalkDir::new(&options.root_dir)
                .into_iter()
                .filter_map(|e| e.ok())
            {
                let path = entry.path();
                if path.is_file() {
                    let rel = path.strip_prefix(&options.root_dir).unwrap_or(path);
                    let rel_str = rel.to_string_lossy();
                    let full_str = path.to_string_lossy();

                    if (glob_set.is_match(rel_str.as_ref()) || glob_set.is_match(full_str.as_ref()))
                        && has_matching_extension(path, &options.extensions)
                    {
                        let canonical = path.canonicalize().unwrap_or_else(|_| path.to_path_buf());
                        if seen.insert(canonical)
                            && !is_ignored(path, &options.root_dir, &ignore_set, &options.ignore)
                        {
                            discovered.push(path.to_path_buf());
                        }
                    }
                }
            }
        }
    }

    discovered.sort();

    Ok(discovered)
}

fn has_matching_extension(path: &Path, extensions: &[String]) -> bool {
    if extensions.is_empty() {
        return true;
    }
    if let Some(ext) = path.extension().and_then(|s| s.to_str()) {
        extensions
            .iter()
            .any(|target| target.eq_ignore_ascii_case(ext))
    } else {
        false
    }
}

fn is_ignored(path: &Path, root_dir: &Path, ignore_set: &GlobSet, raw_patterns: &[String]) -> bool {
    if raw_patterns.is_empty() {
        return false;
    }
    let rel = path.strip_prefix(root_dir).unwrap_or(path);
    let rel_str = rel.to_string_lossy();
    let path_str = path.to_string_lossy();

    if ignore_set.is_match(rel_str.as_ref()) || ignore_set.is_match(path_str.as_ref()) {
        return true;
    }

    if let Some(file_name) = path.file_name() {
        if ignore_set.is_match(file_name.to_string_lossy().as_ref()) {
            return true;
        }
    }

    // Check if any path component matches raw ignore pattern
    for component in rel.components() {
        let comp_str = component.as_os_str().to_string_lossy();
        for pat in raw_patterns {
            let clean_pat = pat.trim_matches('*').trim_matches('/');
            if comp_str == clean_pat || rel_str.contains(clean_pat) {
                return true;
            }
        }
    }

    false
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::fs;

    #[test]
    fn test_discover_files_basic() {
        let temp = tempfile::tempdir().unwrap();
        let test_dir = temp.path().join("test");
        fs::create_dir_all(&test_dir).unwrap();

        fs::write(test_dir.join("a.test.js"), "it('a')").unwrap();
        fs::write(test_dir.join("b.test.js"), "it('b')").unwrap();
        fs::write(test_dir.join("readme.md"), "docs").unwrap();

        let opts = DiscoveryOptions {
            specs: vec!["test".into()],
            extensions: vec!["js".into()],
            root_dir: temp.path().to_path_buf(),
            ..Default::default()
        };

        let files = discover_files(&opts).unwrap();
        assert_eq!(files.len(), 2);
        assert!(files.iter().any(|f| f.ends_with("a.test.js")));
        assert!(files.iter().any(|f| f.ends_with("b.test.js")));
    }

    #[test]
    fn test_discover_recursive_and_ignore() {
        let temp = tempfile::tempdir().unwrap();
        let sub = temp.path().join("test/nested");
        fs::create_dir_all(&sub).unwrap();

        fs::write(temp.path().join("test/top.js"), "").unwrap();
        fs::write(sub.join("nested.js"), "").unwrap();
        fs::write(sub.join("ignored.js"), "").unwrap();

        let opts = DiscoveryOptions {
            specs: vec!["test".into()],
            extensions: vec!["js".into()],
            recursive: true,
            ignore: vec!["**/ignored.js".into()],
            root_dir: temp.path().to_path_buf(),
            ..Default::default()
        };

        let files = discover_files(&opts).unwrap();
        assert_eq!(files.len(), 2);
        assert!(files.iter().any(|f| f.ends_with("top.js")));
        assert!(files.iter().any(|f| f.ends_with("nested.js")));
        assert!(!files.iter().any(|f| f.ends_with("ignored.js")));
    }
}
