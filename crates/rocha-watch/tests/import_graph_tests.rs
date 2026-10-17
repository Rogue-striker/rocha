use rocha_watch::ImportGraph;
use std::fs;
use tempfile::tempdir;

#[test]
fn test_3_level_dependency_chain_reruns_correct_subset() {
    let dir = tempdir().unwrap();
    let root = dir.path();

    let level1 = root.join("level1.js");
    let level2 = root.join("level2.js");
    let spec_a = root.join("spec_a.js");

    let unrelated = root.join("unrelated.js");
    let spec_b = root.join("spec_b.js");

    fs::write(&level1, "export const val = 42;\n").unwrap();
    fs::write(
        &level2,
        "import { val } from './level1.js';\nexport const doubled = val * 2;\n",
    )
    .unwrap();
    fs::write(
        &spec_a,
        "import { doubled } from './level2.js';\ndescribe('A', () => it('passes', () => {}));\n",
    )
    .unwrap();

    fs::write(&unrelated, "export const hello = 'world';\n").unwrap();
    fs::write(
        &spec_b,
        "import { hello } from './unrelated.js';\ndescribe('B', () => it('passes', () => {}));\n",
    )
    .unwrap();

    let mut graph = ImportGraph::new();
    graph.add_file(&level1).unwrap();
    graph.add_file(&level2).unwrap();
    graph.add_file(&spec_a).unwrap();
    graph.add_file(&unrelated).unwrap();
    graph.add_file(&spec_b).unwrap();

    let all_specs = vec![spec_a.clone(), spec_b.clone()];

    // Change level1 -> should only affect spec_a transitively through level2
    let affected = graph
        .affected_specs(std::slice::from_ref(&level1), &all_specs)
        .expect("should return affected subset");

    assert_eq!(affected.len(), 1);
    assert_eq!(affected[0], spec_a);

    // Change unrelated -> should only affect spec_b
    let affected_b = graph
        .affected_specs(std::slice::from_ref(&unrelated), &all_specs)
        .expect("should return affected subset");

    assert_eq!(affected_b.len(), 1);
    assert_eq!(affected_b[0], spec_b);
}

#[test]
fn test_dynamic_require_triggers_full_run() {
    let dir = tempdir().unwrap();
    let root = dir.path();

    let helper = root.join("helper.js");
    let dynamic_spec = root.join("dynamic_spec.js");

    fs::write(&helper, "module.exports = { value: 100 };\n").unwrap();
    // Dynamic require: argument is an identifier, not a string literal
    fs::write(
        &dynamic_spec,
        "const pathVar = './helper';\nconst h = require(pathVar);\ndescribe('dyn', () => it('works', () => {}));\n",
    )
    .unwrap();

    let mut graph = ImportGraph::new();
    graph.add_file(&helper).unwrap();
    graph.add_file(&dynamic_spec).unwrap();

    let all_specs = vec![dynamic_spec.clone()];

    // Changing dynamic_spec itself or an imported helper triggers None (full run)
    let affected = graph.affected_specs(std::slice::from_ref(&dynamic_spec), &all_specs);
    assert_eq!(
        affected, None,
        "dynamic require must return None to trigger a full run"
    );
}
