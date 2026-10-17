use rocha_config::*;
use std::path::Path;

#[test]
fn test_load_json_fixture() {
    let mut loader = ConfigLoader::new();
    let fixture = Path::new(env!("CARGO_MANIFEST_DIR")).join("tests/fixtures/config.json");
    let val = loader.load_file(&fixture).expect("load json failed");

    let cfg: Config = serde_json::from_value(val).unwrap();
    assert_eq!(cfg.timeout, 4500);
    assert!(cfg.bail);
    assert_eq!(cfg.reporter, "min");
}

#[test]
fn test_load_jsonc_fixture() {
    let mut loader = ConfigLoader::new();
    let fixture = Path::new(env!("CARGO_MANIFEST_DIR")).join("tests/fixtures/config.jsonc");
    let val = loader.load_file(&fixture).expect("load jsonc failed");

    let cfg: Config = serde_json::from_value(val).unwrap();
    assert_eq!(cfg.timeout, 3500);
    assert_eq!(cfg.slow, 120);
    assert_eq!(cfg.reporter, "dot");
}

#[test]
fn test_load_yaml_fixture() {
    let mut loader = ConfigLoader::new();
    let fixture = Path::new(env!("CARGO_MANIFEST_DIR")).join("tests/fixtures/config.yaml");
    let val = loader.load_file(&fixture).expect("load yaml failed");

    let cfg: Config = serde_json::from_value(val).unwrap();
    assert_eq!(cfg.timeout, 5500);
    assert!(cfg.parallel);
    assert_eq!(cfg.jobs, 6);
    assert_eq!(cfg.ui, "tdd");
}

#[test]
fn test_load_js_fixture() {
    let mut loader = ConfigLoader::new();
    let fixture = Path::new(env!("CARGO_MANIFEST_DIR")).join("tests/fixtures/config.js");
    let val = loader.load_file(&fixture).expect("load js failed");

    let cfg: Config = serde_json::from_value(val).unwrap();
    assert_eq!(cfg.timeout, 7000);
    assert_eq!(cfg.retries, 2);
    assert_eq!(cfg.reporter, "tap");
}

#[test]
fn test_load_package_json_fixture() {
    let mut loader = ConfigLoader::new();
    let fixture = Path::new(env!("CARGO_MANIFEST_DIR")).join("tests/fixtures/package.json");
    let val = loader
        .load_file(&fixture)
        .expect("load package.json failed");

    let cfg: Config = serde_json::from_value(val).unwrap();
    assert_eq!(cfg.timeout, 4200);
    assert!(!cfg.diff);
    assert_eq!(cfg.reporter, "list");
}

#[test]
fn test_load_extends_hierarchy() {
    let mut loader = ConfigLoader::new();
    let fixture = Path::new(env!("CARGO_MANIFEST_DIR")).join("tests/fixtures/child_extends.json");
    let val = loader
        .load_file(&fixture)
        .expect("load child extends failed");

    let cfg: Config = serde_json::from_value(val).unwrap();
    // Inherited from parent.json:
    assert!(cfg.bail);
    assert_eq!(cfg.slow, 90);
    // Overridden by child_extends.json:
    assert_eq!(cfg.timeout, 8000);
    assert_eq!(cfg.reporter, "json");
}

#[test]
fn test_error_message_names_file() {
    let mut loader = ConfigLoader::new();
    let non_existent = Path::new("tests/fixtures/does_not_exist.json");
    let err = loader.load_file(non_existent).unwrap_err();

    let err_str = err.to_string();
    assert!(
        err_str.contains("does_not_exist.json"),
        "Error message must name the missing file: {}",
        err_str
    );
}
