use rocha_protocol::*;
use std::fs;
use std::path::Path;

#[test]
fn test_golden_file_roundtrip() {
    let golden_dir = Path::new(env!("CARGO_MANIFEST_DIR")).join("tests/golden");
    fs::create_dir_all(&golden_dir).unwrap();
    let golden_path = golden_dir.join("protocol_events.bin");

    let messages = vec![
        WorkerMessage::Ready {
            protocol_version: PROTOCOL_VERSION,
        },
        WorkerMessage::TestPass {
            id: "test-1".into(),
            duration_ms: 15,
            slow: false,
        },
        WorkerMessage::TestFail {
            id: "test-2".into(),
            duration_ms: 45,
            error: ProtocolError {
                name: "AssertionError".into(),
                message: "expected 42 to equal 99".into(),
                stack: Some("Error\n    at test.js:5:10".into()),
                code: Some("ERR_ASSERTION".into()),
                actual: Some("42".into()),
                expected: Some("99".into()),
                show_diff: true,
                operator: Some("strictEqual".into()),
            },
        },
    ];

    // Frame format: [4 bytes little-endian length][MessagePack bytes]
    let mut framed_bytes = Vec::new();
    for msg in &messages {
        let payload = rmp_serde::to_vec_named(msg).expect("serialization failed");
        let len = payload.len() as u32;
        framed_bytes.extend_from_slice(&len.to_le_bytes());
        framed_bytes.extend_from_slice(&payload);
    }

    fs::write(&golden_path, &framed_bytes).unwrap();

    // Verify reading back from golden file
    let read_bytes = fs::read(&golden_path).unwrap();
    let mut cursor = 0;
    let mut decoded_messages = Vec::new();

    while cursor < read_bytes.len() {
        assert!(cursor + 4 <= read_bytes.len());
        let len = u32::from_le_bytes(read_bytes[cursor..cursor + 4].try_into().unwrap()) as usize;
        cursor += 4;
        assert!(cursor + len <= read_bytes.len());
        let slice = &read_bytes[cursor..cursor + len];
        let decoded: WorkerMessage = rmp_serde::from_slice(slice).expect("decode failed");
        decoded_messages.push(decoded);
        cursor += len;
    }

    assert_eq!(messages, decoded_messages);
}
