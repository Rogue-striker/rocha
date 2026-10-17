//! JS Reporter Bridge: runs third-party and custom Node.js Mocha reporters.

use crate::{Reporter, Summary};
use rocha_protocol::WorkerMessage as Event;
use serde_json::json;
use std::collections::HashMap;
use std::io::{self, Write};
use std::path::PathBuf;
use std::process::{Child, ChildStdin, Command, Stdio};

/// A Reporter that forwards events to an external Node process running a JS Mocha reporter.
pub struct JsReporterBridge {
    child: Child,
    stdin: Option<ChildStdin>,
}

impl JsReporterBridge {
    /// Spawn a Node bridge process hosting the requested reporter.
    pub fn new(
        reporter_name: &str,
        reporter_options: HashMap<String, String>,
        custom_bridge_path: Option<PathBuf>,
    ) -> io::Result<Self> {
        let manifest_dir = PathBuf::from(env!("CARGO_MANIFEST_DIR"));
        let workspace_root = manifest_dir
            .parent()
            .and_then(|p| p.parent())
            .unwrap_or(&manifest_dir);

        let bridge_script = if let Some(p) = custom_bridge_path {
            if p.is_absolute() || p.exists() {
                p
            } else {
                let cand = workspace_root.join(&p);
                if cand.exists() {
                    cand
                } else {
                    p
                }
            }
        } else {
            let local = PathBuf::from("harness/bridge/index.js");
            if local.exists() {
                local
            } else {
                workspace_root.join("harness/bridge/index.js")
            }
        };

        let resolved_reporter = if reporter_name.starts_with("./") {
            let cand = PathBuf::from(reporter_name);
            if cand.exists() {
                reporter_name.to_string()
            } else {
                let ws_cand = workspace_root.join(reporter_name.trim_start_matches("./"));
                if ws_cand.exists() {
                    ws_cand.to_string_lossy().to_string()
                } else {
                    reporter_name.to_string()
                }
            }
        } else {
            reporter_name.to_string()
        };

        let mut cmd = Command::new("node");
        cmd.arg(&bridge_script);
        cmd.arg("--reporter");
        cmd.arg(&resolved_reporter);

        for (k, v) in &reporter_options {
            cmd.arg("--reporter-option");
            cmd.arg(format!("{}={}", k, v));
        }

        cmd.stdin(Stdio::piped());
        cmd.stdout(Stdio::inherit());
        cmd.stderr(Stdio::inherit());

        let mut child = cmd.spawn()?;
        let stdin = child.stdin.take();

        Ok(Self { child, stdin })
    }
}

impl Reporter for JsReporterBridge {
    fn on_event(&mut self, ev: &Event) {
        if let Some(ref mut stdin) = self.stdin {
            if let Ok(json_str) = serde_json::to_string(ev) {
                let _ = writeln!(stdin, "{}", json_str);
                let _ = stdin.flush();
            }
        }
    }

    fn finish(&mut self, summary: &Summary) -> io::Result<()> {
        if let Some(mut stdin) = self.stdin.take() {
            let finish_msg = json!({
                "type": "Finish",
                "summary": summary
            });
            let _ = writeln!(stdin, "{}", finish_msg);
            let _ = stdin.flush();
            drop(stdin);
        }

        let status = self.child.wait()?;
        if !status.success() {
            return Err(io::Error::other(format!(
                "JS reporter bridge process exited with status: {}",
                status
            )));
        }

        Ok(())
    }
}
