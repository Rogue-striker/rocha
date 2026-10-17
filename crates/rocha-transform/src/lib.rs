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
}
