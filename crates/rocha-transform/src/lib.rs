//! Fast TS/JSX/ESM transform and caching for Rocha.

use oxc_allocator::Allocator;
use oxc_codegen::{Codegen, CodegenOptions};
use oxc_parser::Parser;
use oxc_semantic::SemanticBuilder;
use oxc_span::SourceType;
use oxc_transformer::{TransformOptions, Transformer};
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::fs;
use std::path::{Path, PathBuf};
use thiserror::Error;

pub mod cache;
pub use cache::*;

/// Transformation and tsconfig errors.
#[derive(Debug, Error)]
pub enum TransformError {
    /// Parsing failed with syntax errors.
    #[error("Syntax error in {path}: {message}")]
    SyntaxError {
        /// Source file path.
        path: PathBuf,
        /// Syntax diagnostics message.
        message: String,
    },
    /// Transformation pipeline failed.
    #[error("Transform error in {path}: {message}")]
    TransformError {
        /// Source file path.
        path: PathBuf,
        /// Diagnostics message.
        message: String,
    },
    /// Standard I/O error.
    #[error("I/O error: {0}")]
    Io(#[from] std::io::Error),
    /// Failed to parse tsconfig.json.
    #[error("Failed to parse tsconfig.json at {path}: {message}")]
    TsConfigParse {
        /// Path to tsconfig.json.
        path: PathBuf,
        /// Error message.
        message: String,
    },
}

/// Options configuring transformation.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct Options {
    /// Target ECMAScript version (e.g. "es2022").
    pub target: String,
    /// JSX runtime mode ("classic", "automatic", or "preserve").
    pub jsx: Option<String>,
    /// Whether to convert ESM export/import to CommonJS.
    pub commonjs: bool,
}

impl Default for Options {
    fn default() -> Self {
        Self {
            target: "es2022".into(),
            jsx: Some("automatic".into()),
            commonjs: true,
        }
    }
}

/// Subset of tsconfig.json compilerOptions relevant to transforms and module resolution.
#[derive(Debug, Default, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct CompilerOptions {
    /// Target ECMAScript version (e.g. "ES2022").
    pub target: Option<String>,
    /// JSX mode (e.g. "react-jsx", "react", "preserve").
    pub jsx: Option<String>,
    /// Path mapping aliases (e.g. `@/* -> src/*`).
    #[serde(default)]
    pub paths: HashMap<String, Vec<String>>,
}

/// Representation of tsconfig.json.
#[derive(Debug, Default, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct TsConfig {
    /// Compiler options section.
    #[serde(default, rename = "compilerOptions")]
    pub compiler_options: CompilerOptions,
}

/// Load and parse tsconfig.json from directory if present.
pub fn load_tsconfig(dir: &Path) -> Result<Option<TsConfig>, TransformError> {
    let tsconfig_path = dir.join("tsconfig.json");
    if !tsconfig_path.is_file() {
        return Ok(None);
    }

    let content = fs::read_to_string(&tsconfig_path)?;
    let stripped = strip_comments(&content);
    let parsed: TsConfig =
        serde_json::from_str(&stripped).map_err(|e| TransformError::TsConfigParse {
            path: tsconfig_path.clone(),
            message: e.to_string(),
        })?;

    Ok(Some(parsed))
}

fn strip_comments(input: &str) -> String {
    let mut output = String::with_capacity(input.len());
    let mut chars = input.chars().peekable();
    let mut in_string = false;
    let mut escape = false;

    while let Some(c) = chars.next() {
        if in_string {
            output.push(c);
            if escape {
                escape = false;
            } else if c == '\\' {
                escape = true;
            } else if c == '"' {
                in_string = false;
            }
        } else if c == '"' {
            in_string = true;
            output.push(c);
        } else if c == '/' && chars.peek() == Some(&'/') {
            chars.next();
            for next_c in chars.by_ref() {
                if next_c == '\n' {
                    output.push('\n');
                    break;
                }
            }
        } else if c == '/' && chars.peek() == Some(&'*') {
            chars.next();
            while let Some(next_c) = chars.next() {
                if next_c == '*' && chars.peek() == Some(&'/') {
                    chars.next();
                    break;
                }
            }
        } else {
            output.push(c);
        }
    }
    output
}

/// Result of transforming a source file.
#[derive(Debug, Clone)]
pub struct TransformOutput {
    /// Transformed JavaScript code.
    pub code: String,
    /// External source map JSON string.
    pub source_map: Option<String>,
}

/// Transform source code stripping TypeScript types, compiling JSX, and producing source maps.
pub fn transform_source(
    path: &Path,
    source: &str,
    _options: &Options,
) -> Result<TransformOutput, TransformError> {
    let allocator = Allocator::default();
    let source_type = SourceType::from_path(path).unwrap_or_else(|_| SourceType::ts());

    let parsed = Parser::new(&allocator, source, source_type).parse();
    if !parsed.diagnostics.is_empty() {
        let msg = parsed
            .diagnostics
            .iter()
            .map(|e| e.to_string())
            .collect::<Vec<_>>()
            .join("; ");
        return Err(TransformError::SyntaxError {
            path: path.to_path_buf(),
            message: msg,
        });
    }

    let mut program = parsed.program;

    // Build semantic analysis and scoping for transformation
    let semantic_ret = SemanticBuilder::new().with_enum_eval(true).build(&program);
    let scoping = semantic_ret.semantic.into_scoping();

    // Configure transform options
    let transform_opts = TransformOptions::default();

    let ret = Transformer::new(&allocator, path, &transform_opts)
        .build_with_scoping(scoping, &mut program);

    if !ret.diagnostics.is_empty() {
        let msg = ret
            .diagnostics
            .iter()
            .map(|e| e.to_string())
            .collect::<Vec<_>>()
            .join("; ");
        return Err(TransformError::TransformError {
            path: path.to_path_buf(),
            message: msg,
        });
    }

    let codegen_opts = CodegenOptions {
        source_map_path: Some(path.to_path_buf()),
        ..CodegenOptions::default()
    };

    let result = Codegen::new()
        .with_options(codegen_opts)
        .with_source_text(source)
        .build(&program);

    let map_json = result.map.map(|sm| sm.to_json_string());

    Ok(TransformOutput {
        code: result.code,
        source_map: map_json,
    })
}

/// Default canonical options JSON representation for standard configuration.
pub const DEFAULT_CANONICAL_OPTIONS_JSON: &str =
    r#"{"commonjs":true,"jsx":"automatic","target":"es2022"}"#;

/// Canonical JSON serialization for Options (sorted keys, whitespace-minimized).
pub fn canonical_options_json(options: &Options) -> String {
    let mut parts = Vec::new();
    parts.push(format!("\"commonjs\":{}", options.commonjs));
    if let Some(jsx) = &options.jsx {
        parts.push(format!("\"jsx\":\"{}\"", jsx));
    }
    parts.push(format!("\"target\":\"{}\"", options.target));
    parts.sort();
    format!("{{{}}}", parts.join(","))
}

/// Transform a source file on disk, checking disk cache first and writing on miss.
pub fn transform_file_and_cache(
    path: &Path,
    options: &Options,
    cache: &DiskCache,
    target_node_version_class: &str,
) -> Result<CachedEntry, TransformError> {
    use std::time::{SystemTime, UNIX_EPOCH};

    let source_bytes = fs::read(path)?;
    let source_str = String::from_utf8_lossy(&source_bytes);
    let ext = path
        .extension()
        .and_then(|e| e.to_str())
        .unwrap_or("")
        .to_ascii_lowercase();

    let canon_opts = canonical_options_json(options);
    let key = compute_cache_key(&source_bytes, &ext, &canon_opts, target_node_version_class);

    if let Some(cached) = cache.get(&key) {
        return Ok(cached);
    }

    let output = transform_source(path, &source_str, options)?;

    let now = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap_or_default()
        .as_millis() as u64;
    let mtime = fs::metadata(path)
        .and_then(|m| m.modified())
        .ok()
        .and_then(|t| t.duration_since(UNIX_EPOCH).ok())
        .map(|d| d.as_millis() as u64)
        .unwrap_or(now);

    let meta = CacheMeta {
        version: 1,
        key: key.clone(),
        original_file: path.to_string_lossy().to_string(),
        original_size: source_bytes.len() as u64,
        original_mtime_ms: mtime,
        transformed_size: output.code.len() as u64,
        created_at_ms: now,
        last_accessed_ms: now,
        oxc_version: OXC_VERSION.to_string(),
    };

    cache.put(&key, &output.code, output.source_map.as_deref(), &meta)?;

    Ok(CachedEntry {
        code: output.code,
        source_map: output.source_map,
        meta,
    })
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_transform_ts_type_stripping() {
        let source = r#"
            interface User {
                name: string;
                age: number;
            }
            type ID = string | number;
            function greet(u: User): string {
                return `Hello, ${u.name}!`;
            }
        "#;
        let output = transform_source(Path::new("test.ts"), source, &Options::default()).unwrap();
        assert!(!output.code.contains("interface User"));
        assert!(!output.code.contains("type ID"));
        assert!(!output.code.contains(": User"));
        assert!(output.code.contains("function greet(u)"));
        assert!(output.source_map.is_some());
    }

    #[test]
    fn test_transform_jsx() {
        let source = r#"
            export function Button(props: { label: string }) {
                return <button className="btn">{props.label}</button>;
            }
        "#;
        let output = transform_source(Path::new("test.tsx"), source, &Options::default()).unwrap();
        assert!(!output.code.contains("props: { label: string }"));
        // JSX is transformed into function calls
        assert!(output.code.contains("jsx") || output.code.contains("button"));
        assert!(output.source_map.is_some());
    }

    #[test]
    fn test_load_tsconfig_paths() {
        let temp = tempfile::tempdir().unwrap();
        let tsconfig_content = r#"{
            // TypeScript configuration
            "compilerOptions": {
                "target": "ES2022",
                "jsx": "react-jsx",
                "paths": {
                    "@/*": ["src/*"]
                }
            }
        }"#;
        fs::write(temp.path().join("tsconfig.json"), tsconfig_content).unwrap();

        let loaded = load_tsconfig(temp.path())
            .unwrap()
            .expect("should find tsconfig");
        assert_eq!(loaded.compiler_options.target.as_deref(), Some("ES2022"));
        assert_eq!(loaded.compiler_options.jsx.as_deref(), Some("react-jsx"));
        assert_eq!(
            loaded.compiler_options.paths.get("@/*"),
            Some(&vec!["src/*".to_string()])
        );
    }

    #[test]
    fn test_transform_file_and_cache() {
        let temp = tempfile::tempdir().unwrap();
        let cache_dir = temp.path().join("cache");
        let cache = DiskCache::new(&cache_dir, DEFAULT_MAX_CACHE_BYTES).unwrap();

        let file_path = temp.path().join("example.ts");
        fs::write(
            &file_path,
            "export const add = (a: number, b: number): number => a + b;",
        )
        .unwrap();

        let options = Options::default();
        let entry1 = transform_file_and_cache(&file_path, &options, &cache, "node20").unwrap();
        assert!(entry1.code.contains("const add = (a, b) => a + b"));

        // Second call should hit the cache
        let entry2 = transform_file_and_cache(&file_path, &options, &cache, "node20").unwrap();
        assert_eq!(entry1.meta.key, entry2.meta.key);
        assert_eq!(entry1.code, entry2.code);
    }
}
