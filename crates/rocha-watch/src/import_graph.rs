//! Static and dynamic import dependency graph for incremental test execution.

use rocha_transform::extract_imports;
use std::collections::{HashMap, HashSet, VecDeque};
use std::fs;
use std::path::{Path, PathBuf};

/// Dependency graph tracking module imports, reverse dependents, and dynamic imports.
#[derive(Debug, Default, Clone)]
pub struct ImportGraph {
    /// File path -> Set of imported file paths.
    pub dependencies: HashMap<PathBuf, HashSet<PathBuf>>,
    /// File path -> Set of files that import it (reverse dependencies).
    pub dependents: HashMap<PathBuf, HashSet<PathBuf>>,
    /// Files containing dynamic imports or requires.
    pub files_with_dynamic: HashSet<PathBuf>,
}

impl ImportGraph {
    /// Create a new empty import graph.
    pub fn new() -> Self {
        Self::default()
    }

    /// Analyze a source file on disk and add its import edges to the graph.
    pub fn add_file(&mut self, path: &Path) -> Result<(), std::io::Error> {
        let canonical_path = path.canonicalize().unwrap_or_else(|_| path.to_path_buf());
        let content = fs::read_to_string(path)?;

        let imports = match extract_imports(&content, path) {
            Ok(imp) => imp,
            Err(_) => {
                // Parse or syntax error: treat as dynamic/incomplete to force full run
                self.files_with_dynamic.insert(canonical_path);
                return Ok(());
            }
        };

        if imports.has_dynamic {
            self.files_with_dynamic.insert(canonical_path.clone());
        }

        let parent_dir = path.parent().unwrap_or_else(|| Path::new("."));

        for specifier in &imports.static_imports {
            if specifier.starts_with('.') {
                if let Some(resolved) = resolve_relative_specifier(parent_dir, specifier) {
                    let canonical_resolved = resolved.canonicalize().unwrap_or(resolved);
                    self.dependencies
                        .entry(canonical_path.clone())
                        .or_default()
                        .insert(canonical_resolved.clone());

                    self.dependents
                        .entry(canonical_resolved)
                        .or_default()
                        .insert(canonical_path.clone());
                }
            }
        }

        Ok(())
    }

    /// Determine which test spec files are affected by a set of changed files.
    ///
    /// Returns `Some(vec)` with the affected spec files, or `None` if the graph is incomplete
    /// or contains dynamic imports (requiring a full run).
    pub fn affected_specs(
        &self,
        changed_files: &[PathBuf],
        all_specs: &[PathBuf],
    ) -> Option<Vec<PathBuf>> {
        let all_specs_canonical: HashMap<PathBuf, PathBuf> = all_specs
            .iter()
            .map(|s| (s.canonicalize().unwrap_or_else(|_| s.clone()), s.clone()))
            .collect();

        let mut affected_nodes: HashSet<PathBuf> = HashSet::new();
        let mut queue: VecDeque<PathBuf> = VecDeque::new();

        for file in changed_files {
            let canon = file.canonicalize().unwrap_or_else(|_| file.clone());
            if self.files_with_dynamic.contains(&canon) {
                // Changed file itself has dynamic imports: trigger full run
                return None;
            }
            affected_nodes.insert(canon.clone());
            queue.push_back(canon);
        }

        while let Some(curr) = queue.pop_front() {
            if let Some(deps) = self.dependents.get(&curr) {
                for dep in deps {
                    if self.files_with_dynamic.contains(dep) {
                        // Any dependent along the path has dynamic imports: trigger full run
                        return None;
                    }
                    if affected_nodes.insert(dep.clone()) {
                        queue.push_back(dep.clone());
                    }
                }
            }
        }

        // Intersect affected nodes with all_specs
        let mut result = Vec::new();
        for (canon_spec, orig_spec) in &all_specs_canonical {
            if affected_nodes.contains(canon_spec) {
                result.push(orig_spec.clone());
            }
        }

        Some(result)
    }
}

/// Resolve relative import specifier to an existing file on disk.
fn resolve_relative_specifier(base_dir: &Path, specifier: &str) -> Option<PathBuf> {
    let candidate = base_dir.join(specifier);
    if candidate.is_file() {
        return Some(candidate);
    }

    let extensions = ["js", "ts", "tsx", "jsx", "mjs", "cjs"];
    for ext in extensions {
        let with_ext = base_dir.join(format!("{}.{}", specifier, ext));
        if with_ext.is_file() {
            return Some(with_ext);
        }
    }

    for ext in extensions {
        let index_file = candidate.join(format!("index.{}", ext));
        if index_file.is_file() {
            return Some(index_file);
        }
    }

    None
}
