//! Configuration file loader and precedence merger for Rocha.

use crate::schema::Config;
use serde_json::Value;
use std::collections::{HashMap, HashSet};
use std::fs;
use std::path::{Path, PathBuf};
use std::process::Command;
use thiserror::Error;

/// Configuration loading and parsing errors.
#[derive(Debug, Error)]
pub enum ConfigError {
    /// Specified configuration file does not exist.
    #[error("Config file not found: {0}")]
    NotFound(PathBuf),

    /// File I/O read failure.
    #[error("Failed to read config file {path}: {source}")]
    Io {
        /// Path to the file.
        path: PathBuf,
        /// Underlying I/O error.
        source: std::io::Error,
    },

    /// Parsing failure for JSON/YAML/JS.
    #[error("Parse error in {path} (key: {key:?}): {message}")]
    Parse {
        /// Path to the configuration file.
        path: PathBuf,
        /// Config key where the error occurred if known.
        key: Option<String>,
        /// Error description.
        message: String,
    },

    /// Failure executing Node.js to evaluate dynamic JS config.
    #[error("Failed to evaluate JS config {path}: {message}")]
    Evaluation {
        /// Path to the configuration file.
        path: PathBuf,
        /// Process stderr output or failure reason.
        message: String,
    },

    /// Circular reference detected in `extends` chain.
    #[error("Circular dependency detected in config extends: {0}")]
    CyclicExtends(PathBuf),
}

/// Strip line (`//`) and block (`/* ... */`) comments from JSONC content.
pub fn strip_json_comments(input: &str) -> String {
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
            // Line comment: skip until newline
            chars.next();
            for next_c in chars.by_ref() {
                if next_c == '\n' {
                    output.push('\n');
                    break;
                }
            }
        } else if c == '/' && chars.peek() == Some(&'*') {
            // Block comment: skip until */
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

/// Configuration loader capable of finding, reading, parsing, and merging config files.
pub struct ConfigLoader {
    visited_extends: HashSet<PathBuf>,
}

impl Default for ConfigLoader {
    fn default() -> Self {
        Self::new()
    }
}

impl ConfigLoader {
    /// Create a new config loader instance.
    pub fn new() -> Self {
        Self {
            visited_extends: HashSet::new(),
        }
    }

    /// Default candidates for configuration auto-discovery in directory.
    pub const CANDIDATE_NAMES: &'static [&'static str] = &[
        ".mocharc.json",
        ".mocharc.jsonc",
        ".mocharc.yaml",
        ".mocharc.yml",
        ".mocharc.js",
        ".mocharc.cjs",
        ".mocharc.mjs",
        "package.json",
    ];

    /// Discover and load configuration for project root, resolving `extends`.
    pub fn load_auto(&mut self, dir: &Path) -> Result<Option<Value>, ConfigError> {
        for candidate in Self::CANDIDATE_NAMES {
            let path = dir.join(candidate);
            if path.is_file() {
                let val = self.load_file(&path)?;
                return Ok(Some(val));
            }
        }
        Ok(None)
    }

    /// Load a specific configuration file by path, recursively resolving `extends`.
    pub fn load_file(&mut self, path: &Path) -> Result<Value, ConfigError> {
        let canonical = path
            .canonicalize()
            .map_err(|_| ConfigError::NotFound(path.to_path_buf()))?;

        if !self.visited_extends.insert(canonical.clone()) {
            return Err(ConfigError::CyclicExtends(path.to_path_buf()));
        }

        let mut config_val = self.parse_raw_file(path)?;

        // Check if config has an `extends` property
        if let Some(extends_val) = config_val.get("extends") {
            if let Some(extends_str) = extends_val.as_str() {
                let parent_path = if extends_str.starts_with('.') {
                    path.parent()
                        .unwrap_or_else(|| Path::new("."))
                        .join(extends_str)
                } else {
                    PathBuf::from(extends_str)
                };

                let parent_val = self.load_file(&parent_path)?;
                config_val = Self::merge_json_values(parent_val, config_val);
            }
        }

        self.visited_extends.remove(&canonical);
        Ok(config_val)
    }

    /// Parse single file into raw JSON Value without resolving extends.
    fn parse_raw_file(&self, path: &Path) -> Result<Value, ConfigError> {
        if !path.exists() {
            return Err(ConfigError::NotFound(path.to_path_buf()));
        }

        let file_name = path
            .file_name()
            .and_then(|n| n.to_str())
            .unwrap_or("")
            .to_lowercase();

        if file_name == "package.json" {
            let content = fs::read_to_string(path).map_err(|e| ConfigError::Io {
                path: path.to_path_buf(),
                source: e,
            })?;
            let root_val: Value =
                serde_json::from_str(&content).map_err(|e| ConfigError::Parse {
                    path: path.to_path_buf(),
                    key: None,
                    message: e.to_string(),
                })?;
            return Ok(root_val.get("mocha").cloned().unwrap_or(Value::Null));
        }

        if file_name.ends_with(".json") || file_name.ends_with(".jsonc") {
            let content = fs::read_to_string(path).map_err(|e| ConfigError::Io {
                path: path.to_path_buf(),
                source: e,
            })?;
            let stripped = strip_json_comments(&content);
            let val: Value = serde_json::from_str(&stripped).map_err(|e| {
                let line = e.line();
                let col = e.column();
                ConfigError::Parse {
                    path: path.to_path_buf(),
                    key: None,
                    message: format!("{} at line {} column {}", e, line, col),
                }
            })?;
            return Ok(val);
        }

        if file_name.ends_with(".yaml") || file_name.ends_with(".yml") {
            let content = fs::read_to_string(path).map_err(|e| ConfigError::Io {
                path: path.to_path_buf(),
                source: e,
            })?;
            let val: Value = serde_yaml::from_str(&content).map_err(|e| ConfigError::Parse {
                path: path.to_path_buf(),
                key: None,
                message: e.to_string(),
            })?;
            return Ok(val);
        }

        if file_name.ends_with(".js") || file_name.ends_with(".cjs") || file_name.ends_with(".mjs")
        {
            return self.evaluate_js_config(path);
        }

        Err(ConfigError::Parse {
            path: path.to_path_buf(),
            key: None,
            message: format!("Unsupported config format: {}", file_name),
        })
    }

    /// Shell out to Node.js to evaluate JS/CJS/MJS config files.
    fn evaluate_js_config(&self, path: &Path) -> Result<Value, ConfigError> {
        let abs_path = path
            .canonicalize()
            .map_err(|_| ConfigError::NotFound(path.to_path_buf()))?;

        let node_script = format!(
            "import('url').then(u => import(u.pathToFileURL({:?}).href)).then(m => console.log(JSON.stringify(m.default || m)))",
            abs_path.to_str().unwrap()
        );

        let output = Command::new("node")
            .arg("-e")
            .arg(&node_script)
            .output()
            .map_err(|e| ConfigError::Evaluation {
                path: path.to_path_buf(),
                message: format!("Failed to spawn node: {}", e),
            })?;

        if !output.status.success() {
            let stderr = String::from_utf8_lossy(&output.stderr);
            return Err(ConfigError::Evaluation {
                path: path.to_path_buf(),
                message: stderr.to_string(),
            });
        }

        let stdout = String::from_utf8_lossy(&output.stdout);
        let val: Value = serde_json::from_str(stdout.trim()).map_err(|e| ConfigError::Parse {
            path: path.to_path_buf(),
            key: None,
            message: format!("Node output was not valid JSON: {}", e),
        })?;

        Ok(val)
    }

    /// Deep merge two JSON values (overlay replaces base).
    pub fn merge_json_values(base: Value, overlay: Value) -> Value {
        match (base, overlay) {
            (Value::Object(mut base_map), Value::Object(overlay_map)) => {
                for (k, v) in overlay_map {
                    if let Some(existing) = base_map.remove(&k) {
                        base_map.insert(k, Self::merge_json_values(existing, v));
                    } else {
                        base_map.insert(k, v);
                    }
                }
                Value::Object(base_map)
            }
            (_, overlay) => overlay,
        }
    }
}

/// Resolved configuration builder applying CLI > env > file > defaults.
pub fn resolve_config(
    file_val: Option<Value>,
    env_vars: &HashMap<String, String>,
    cli_overrides: Option<ConfigOverrides>,
) -> Result<Config, ConfigError> {
    // 1. Start from default config
    let mut config = Config::default();

    // 2. Overlay file config
    if let Some(val) = file_val {
        if !val.is_null() {
            // Apply deserialized JSON value to config
            let file_cfg: Config = serde_json::from_value(val).map_err(|e| ConfigError::Parse {
                path: PathBuf::from(".mocharc"),
                key: None,
                message: e.to_string(),
            })?;
            config = file_cfg;
        }
    }

    // 3. Overlay environment variables
    if let Some(timeout_str) = env_vars.get("MOCHA_TIMEOUT") {
        if let Ok(t) = timeout_str.parse::<u64>() {
            config.timeout = t;
        }
    }
    if let Some(reporter) = env_vars.get("MOCHA_REPORTER") {
        config.reporter = reporter.clone();
    }
    if let Some(color_str) = env_vars.get("MOCHA_COLORS") {
        config.color = Some(color_str == "1" || color_str == "true");
    } else if env_vars.contains_key("NO_COLOR") {
        config.color = Some(false);
    }

    // 4. Overlay CLI flags
    if let Some(cli) = cli_overrides {
        if let Some(timeout) = cli.timeout {
            config.timeout = timeout;
        }
        if let Some(slow) = cli.slow {
            config.slow = slow;
        }
        if let Some(bail) = cli.bail {
            config.bail = bail;
        }
        if let Some(parallel) = cli.parallel {
            config.parallel = parallel;
        }
        if let Some(jobs) = cli.jobs {
            config.jobs = jobs;
        }
        if let Some(reporter) = cli.reporter {
            config.reporter = reporter;
        }
        if let Some(ui) = cli.ui {
            config.ui = ui;
        }
        if let Some(grep) = cli.grep {
            config.grep = Some(grep);
        }
        if let Some(fgrep) = cli.fgrep {
            config.fgrep = Some(fgrep);
        }
        if let Some(invert) = cli.invert {
            config.invert = invert;
        }
        if let Some(retries) = cli.retries {
            config.retries = retries;
        }
        if let Some(color) = cli.color {
            config.color = Some(color);
        }
        if let Some(specs) = cli.spec {
            if !specs.is_empty() {
                config.spec = specs;
            }
        }
    }

    Ok(config)
}

/// CLI overrides structure representing explicitly set command-line arguments.
#[derive(Debug, Default, Clone)]
pub struct ConfigOverrides {
    pub spec: Option<Vec<String>>,
    pub timeout: Option<u64>,
    pub slow: Option<u64>,
    pub bail: Option<bool>,
    pub parallel: Option<bool>,
    pub jobs: Option<usize>,
    pub reporter: Option<String>,
    pub ui: Option<String>,
    pub grep: Option<String>,
    pub fgrep: Option<String>,
    pub invert: Option<bool>,
    pub retries: Option<u32>,
    pub color: Option<bool>,
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_strip_jsonc_comments() {
        let jsonc = r#"{
            // Line comment
            "timeout": 3000, /* Block comment */
            "reporter": "json" // Trailing comment
        }"#;
        let stripped = strip_json_comments(jsonc);
        let val: Value = serde_json::from_str(&stripped).unwrap();
        assert_eq!(val["timeout"], 3000);
        assert_eq!(val["reporter"], "json");
    }

    #[test]
    fn test_merge_precedence_table_driven_10_options() {
        // Test precedence across 10 options: CLI > env > file > default

        // 1. timeout (CLI overrides env, file, default)
        // 2. reporter (env overrides file, default)
        // 3. slow (file overrides default)
        // 4. bail (CLI overrides default)
        // 5. parallel (file overrides default)
        // 6. jobs (CLI overrides file)
        // 7. ui (file overrides default)
        // 8. retries (CLI overrides default)
        // 9. color (env NO_COLOR overrides default)
        // 10. grep (CLI overrides default)

        let file_val = serde_json::json!({
            "timeout": 4000,
            "reporter": "dot",
            "slow": 150,
            "parallel": true,
            "jobs": 4,
            "ui": "tdd"
        });

        let mut env_vars = HashMap::new();
        env_vars.insert("MOCHA_TIMEOUT".into(), "5000".into());
        env_vars.insert("MOCHA_REPORTER".into(), "tap".into());
        env_vars.insert("NO_COLOR".into(), "1".into());

        let cli = ConfigOverrides {
            timeout: Some(6000), // Should beat 5000 (env), 4000 (file), 2000 (default)
            bail: Some(true),
            jobs: Some(8), // Should beat 4 (file)
            retries: Some(3),
            grep: Some("unit".into()),
            ..Default::default()
        };

        let resolved = resolve_config(Some(file_val), &env_vars, Some(cli)).unwrap();

        // Option 1: timeout (CLI wins)
        assert_eq!(resolved.timeout, 6000);
        // Option 2: reporter (env wins over file "dot")
        assert_eq!(resolved.reporter, "tap");
        // Option 3: slow (file wins over default 75)
        assert_eq!(resolved.slow, 150);
        // Option 4: bail (CLI wins over default false)
        assert!(resolved.bail);
        // Option 5: parallel (file wins over default false)
        assert!(resolved.parallel);
        // Option 6: jobs (CLI wins over file 4)
        assert_eq!(resolved.jobs, 8);
        // Option 7: ui (file wins over default "bdd")
        assert_eq!(resolved.ui, "tdd");
        // Option 8: retries (CLI wins over default 0)
        assert_eq!(resolved.retries, 3);
        // Option 9: color (NO_COLOR env wins)
        assert_eq!(resolved.color, Some(false));
        // Option 10: grep (CLI wins)
        assert_eq!(resolved.grep, Some("unit".into()));
    }
}
