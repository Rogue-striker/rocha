use rocha_discover::*;
use std::fs;
use std::path::Path;
use std::process::Command;

struct TestCase {
    name: &'static str,
    specs: Vec<&'static str>,
    extensions: Vec<&'static str>,
    recursive: bool,
    sort: bool,
    ignore: Vec<&'static str>,
}

fn run_mocha_lookup(
    dir: &Path,
    specs: &[&str],
    extensions: &[&str],
    recursive: bool,
    sort: bool,
    ignore: &[&str],
) -> Vec<String> {
    let script = format!(
        r#"
const path = require('node:path');
const lookupFilesModule = require('mocha/lib/cli/lookup-files.js');
const lookupFiles = typeof lookupFilesModule === 'function'
    ? lookupFilesModule
    : lookupFilesModule.lookupFiles;
const root = {:?};
const specs = {:?};
const extensions = {:?};
const recursive = {:?};
const sort = {:?};
const ignore = {:?};

let all = [];
for (const spec of specs) {{
    const resolvedSpec = path.join(root, spec);
    const files = lookupFiles(resolvedSpec, extensions, recursive);
    if (files) {{
        all = all.concat(files);
    }}
}}

// Deduplicate
all = Array.from(new Set(all));

// Normalize to relative paths from root
all = all.map(p => path.relative(root, p));

// Apply simple ignore filtering
if (ignore && ignore.length > 0) {{
    all = all.filter(p => !ignore.some(ign => p.includes(ign.replace(/\*+/g, ''))));
}}

if (sort) {{
    all.sort();
}} else {{
    all.sort();
}}

console.log(JSON.stringify(all));
"#,
        dir.to_str().unwrap(),
        specs,
        extensions,
        recursive,
        sort,
        ignore
    );

    let output = Command::new("node")
        .arg("-e")
        .arg(&script)
        .output()
        .expect("failed to run node script");

    if !output.status.success() {
        panic!(
            "node script failed: {}",
            String::from_utf8_lossy(&output.stderr)
        );
    }

    let stdout = String::from_utf8_lossy(&output.stdout);
    serde_json::from_str(stdout.trim()).expect("failed to parse JSON from mocha lookup")
}

#[test]
fn test_equivalence_15_fixture_trees_and_options() {
    let temp = tempfile::tempdir().unwrap();
    let root = temp.path();

    // Create a rich directory tree with 15+ subdirectories and varied file types
    let files_to_create = [
        "test/a.js",
        "test/b.cjs",
        "test/c.mjs",
        "test/d.ts",
        "test/e.tsx",
        "test/readme.txt",
        "test/unit/u1.js",
        "test/unit/u2.test.js",
        "test/unit/helper.ts",
        "test/integration/i1.js",
        "test/integration/nested/deep.js",
        "test/integration/nested/deep.ts",
        "test/fixtures/f1.json",
        "test/fixtures/ignored.js",
        "src/component.jsx",
        "src/utils.ts",
    ];

    for f in &files_to_create {
        let p = root.join(f);
        fs::create_dir_all(p.parent().unwrap()).unwrap();
        fs::write(&p, "// test content").unwrap();
    }

    // 15 distinct test cases covering option variations
    let test_cases = [
        TestCase {
            name: "01_top_level_js_non_recursive",
            specs: vec!["test"],
            extensions: vec!["js"],
            recursive: false,
            sort: false,
            ignore: vec![],
        },
        TestCase {
            name: "02_top_level_js_cjs_mjs_non_recursive",
            specs: vec!["test"],
            extensions: vec!["js", "cjs", "mjs"],
            recursive: false,
            sort: true,
            ignore: vec![],
        },
        TestCase {
            name: "03_test_dir_recursive_all_extensions",
            specs: vec!["test"],
            extensions: vec!["js", "cjs", "mjs", "ts", "tsx"],
            recursive: true,
            sort: true,
            ignore: vec![],
        },
        TestCase {
            name: "04_unit_subfolder_recursive",
            specs: vec!["test/unit"],
            extensions: vec!["js", "ts"],
            recursive: true,
            sort: false,
            ignore: vec![],
        },
        TestCase {
            name: "05_unit_subfolder_non_recursive",
            specs: vec!["test/unit"],
            extensions: vec!["js"],
            recursive: false,
            sort: true,
            ignore: vec![],
        },
        TestCase {
            name: "06_integration_nested_deep",
            specs: vec!["test/integration"],
            extensions: vec!["js", "ts"],
            recursive: true,
            sort: true,
            ignore: vec![],
        },
        TestCase {
            name: "07_ignore_fixtures_folder",
            specs: vec!["test"],
            extensions: vec!["js", "ts"],
            recursive: true,
            sort: true,
            ignore: vec!["fixtures"],
        },
        TestCase {
            name: "08_ignore_specific_file",
            specs: vec!["test"],
            extensions: vec!["js"],
            recursive: true,
            sort: true,
            ignore: vec!["ignored.js"],
        },
        TestCase {
            name: "09_single_explicit_file_js",
            specs: vec!["test/a.js"],
            extensions: vec!["js"],
            recursive: false,
            sort: false,
            ignore: vec![],
        },
        TestCase {
            name: "10_single_explicit_file_ts",
            specs: vec!["test/d.ts"],
            extensions: vec!["ts"],
            recursive: false,
            sort: false,
            ignore: vec![],
        },
        TestCase {
            name: "11_multiple_explicit_files_dedup",
            specs: vec!["test/a.js", "test/b.cjs", "test/a.js"],
            extensions: vec!["js", "cjs"],
            recursive: false,
            sort: true,
            ignore: vec![],
        },
        TestCase {
            name: "12_ts_and_tsx_only_recursive",
            specs: vec!["test"],
            extensions: vec!["ts", "tsx"],
            recursive: true,
            sort: true,
            ignore: vec![],
        },
        TestCase {
            name: "13_mjs_only_non_recursive",
            specs: vec!["test"],
            extensions: vec!["mjs"],
            recursive: false,
            sort: false,
            ignore: vec![],
        },
        TestCase {
            name: "14_deep_nested_only",
            specs: vec!["test/integration/nested"],
            extensions: vec!["js", "ts"],
            recursive: false,
            sort: true,
            ignore: vec![],
        },
        TestCase {
            name: "15_combined_specs_with_sort",
            specs: vec!["test/unit", "test/integration/nested"],
            extensions: vec!["js"],
            recursive: true,
            sort: true,
            ignore: vec![],
        },
    ];

    for tc in &test_cases {
        let expected = run_mocha_lookup(
            root,
            &tc.specs,
            &tc.extensions,
            tc.recursive,
            tc.sort,
            &tc.ignore,
        );

        let opts = DiscoveryOptions {
            specs: tc.specs.iter().map(|s| s.to_string()).collect(),
            extensions: tc.extensions.iter().map(|e| e.to_string()).collect(),
            recursive: tc.recursive,
            sort: tc.sort,
            ignore: tc.ignore.iter().map(|i| i.to_string()).collect(),
            root_dir: root.to_path_buf(),
        };

        let actual = discover_files(&opts).unwrap();
        let actual_rel: Vec<String> = actual
            .iter()
            .map(|p| p.strip_prefix(root).unwrap().to_str().unwrap().to_string())
            .collect();

        assert_eq!(
            actual_rel, expected,
            "Equivalence failure on test case '{}': actual {:?} != expected {:?}",
            tc.name, actual_rel, expected
        );
    }
}
