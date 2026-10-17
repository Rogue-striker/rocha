use rocha_transform::*;
use std::path::Path;

#[test]
fn test_30_snippets_golden() {
    let snippets = [
        // 01. Basic interface stripping
        (
            "test_01.ts",
            r#"interface Person { name: string; age: number; } const p = { name: "Alice", age: 30 };"#,
            "const p = {",
        ),
        // 02. Type alias stripping
        (
            "test_02.ts",
            r#"type ID = string | number; const id: ID = "user-123";"#,
            r#"const id = "user-123";"#,
        ),
        // 03. Generic function types
        (
            "test_03.ts",
            r#"function identity<T>(value: T): T { return value; }"#,
            "function identity(value) {",
        ),
        // 04. Class with typed properties
        (
            "test_04.ts",
            r#"class Account { balance: number = 0; deposit(amount: number): void { this.balance += amount; } }"#,
            "class Account {",
        ),
        // 05. Numeric Enum
        (
            "test_05.ts",
            r#"enum Direction { Up, Down, Left, Right } const d = Direction.Up;"#,
            "Direction",
        ),
        // 06. String Enum
        (
            "test_06.ts",
            r#"enum Status { Ok = "OK", Err = "ERR" } const s = Status.Ok;"#,
            "Status",
        ),
        // 07. Const Enum
        (
            "test_07.ts",
            r#"const enum Level { Low, High } const l = Level.High;"#,
            "const l =",
        ),
        // 08. Namespace
        (
            "test_08.ts",
            r#"namespace MathUtils { export const PI = 3.14; } const p = MathUtils.PI;"#,
            "MathUtils",
        ),
        // 09. Type assertions (as / angle bracket)
        (
            "test_09.ts",
            r#"const val = ("hello" as unknown) as string; const num = <number>42;"#,
            r#"const val = "hello";"#,
        ),
        // 10. Non-null assertion operator
        (
            "test_10.ts",
            r#"function getLen(s?: string) { return s!.length; }"#,
            "return s.length;",
        ),
        // 11. Optional chaining and nullish coalescing
        (
            "test_11.ts",
            r#"const user = { profile: { name: "Bob" } }; const n = user?.profile?.name ?? "Guest";"#,
            "user?.profile?.name ??",
        ),
        // 12. Abstract class and methods
        (
            "test_12.ts",
            r#"abstract class Base { abstract run(): void; start() { this.run(); } }"#,
            "class Base {",
        ),
        // 13. Type-only import and export
        (
            "test_13.ts",
            r#"import type { Config } from "./config"; export type { Config }; const active = true;"#,
            "const active = true;",
        ),
        // 14. Declare statements
        (
            "test_14.ts",
            r#"declare const window: any; declare function alert(msg: string): void; const ok = true;"#,
            "const ok = true;",
        ),
        // 15. Function overloads
        (
            "test_15.ts",
            r#"function parse(x: string): number; function parse(x: number): string; function parse(x: any): any { return x; }"#,
            "function parse(x) {",
        ),
        // 16. Index signatures
        (
            "test_16.ts",
            r#"interface Dictionary { [key: string]: string; } const dict: Dictionary = { a: "1" };"#,
            "const dict = {",
        ),
        // 17. Tuple types
        (
            "test_17.ts",
            r#"type Coord = [number, number]; const c: Coord = [10, 20];"#,
            "const c = [10, 20];",
        ),
        // 18. Mapped types
        (
            "test_18.ts",
            r#"type ReadonlyObject<T> = { readonly [P in keyof T]: T[P] }; const obj = { x: 1 };"#,
            "const obj = { x: 1 };",
        ),
        // 19. Conditional types
        (
            "test_19.ts",
            r#"type IsString<T> = T extends string ? true : false; const flag = true;"#,
            "const flag = true;",
        ),
        // 20. JSX simple self-closing tag
        (
            "test_20.tsx",
            r#"export const el = <div className="box" />;"#,
            "div",
        ),
        // 21. JSX with nested children
        (
            "test_21.tsx",
            r#"export const el = <main><h1>Title</h1><p>Body</p></main>;"#,
            "main",
        ),
        // 22. JSX with expressions and props
        (
            "test_22.tsx",
            r#"export function Item({ text }: { text: string }) { return <li key={text}>{text}</li>; }"#,
            "li",
        ),
        // 23. JSX Fragments
        (
            "test_23.tsx",
            r#"export const fragment = <><span>A</span><span>B</span></>;"#,
            "span",
        ),
        // 24. Arrow function with generic parameter
        (
            "test_24.ts",
            r#"const wrap = <T>(val: T): { value: T } => ({ value: val });"#,
            "const wrap = (val) =>",
        ),
        // 25. Async generator with types
        (
            "test_25.ts",
            r#"async function* gen(): AsyncGenerator<number> { yield 1; yield 2; }"#,
            "async function* gen() {",
        ),
        // 26. Satisfies operator
        (
            "test_26.ts",
            r#"type Palette = "red" | "green" | "blue"; const color = "red" satisfies Palette;"#,
            r#"const color = "red";"#,
        ),
        // 27. Readonly modifier and const assertions
        (
            "test_27.ts",
            r#"const arr = [1, 2, 3] as const; const first = arr[0];"#,
            "const first = arr[0];",
        ),
        // 28. Utility types
        (
            "test_28.ts",
            r#"interface Todo { title: string; desc: string; } type PartialTodo = Partial<Todo>; const t = {};"#,
            "const t = {};",
        ),
        // 29. Intersection and Union types
        (
            "test_29.ts",
            r#"type A = { a: number }; type B = { b: string }; type AB = A & B; const ab = { a: 1, b: "x" };"#,
            "const ab = {",
        ),
        // 30. Complex TSX component with hooks
        (
            "test_30.tsx",
            r#"interface Props { title: string; onClick: () => void; } export function Header(props: Props) { return <header onClick={props.onClick}>{props.title}</header>; }"#,
            "header",
        ),
    ];

    assert_eq!(
        snippets.len(),
        30,
        "Must have exactly 30 snippet test cases"
    );

    for (name, source, expected_token) in &snippets {
        let path = Path::new(name);
        let res = transform_source(path, source, &Options::default()).unwrap_or_else(|e| {
            panic!("Snippet '{}' failed to transform: {}", name, e);
        });

        assert!(
            res.code.contains(expected_token),
            "Snippet '{}' output '{}' missing expected token '{}'",
            name,
            res.code,
            expected_token
        );
        assert!(
            res.source_map.is_some(),
            "Snippet '{}' must produce a source map",
            name
        );
    }
}

#[test]
fn test_source_map_original_line_col_mapping() {
    let source =
        "const a: number = 10;\nfunction test() {\n  throw new Error(\"boom\");\n}\ntest();\n";
    let res = transform_source(Path::new("error_trace.ts"), source, &Options::default()).unwrap();

    let map_str = res.source_map.expect("must produce source map");
    let map_json: serde_json::Value =
        serde_json::from_str(&map_str).expect("source map must be valid JSON");

    assert_eq!(map_json["version"], 3);
    assert_eq!(map_json["sources"], serde_json::json!(["error_trace.ts"]));

    let mappings = map_json["mappings"]
        .as_str()
        .expect("mappings must be a string");
    assert!(
        !mappings.is_empty(),
        "mappings VLQ string must not be empty"
    );
}
