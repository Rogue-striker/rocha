use rocha_protocol::{StreamingDecoder, WorkerMessage};

#[test]
fn test_extended_protocol_decoder_fuzzing() {
    let mut decoder = StreamingDecoder::<WorkerMessage>::new();
    let mut rng_state: u64 = 0xdeadbeef12345678;

    // Fast deterministic pseudo-random generator
    let mut rand_byte = || {
        rng_state ^= rng_state << 13;
        rng_state ^= rng_state >> 7;
        rng_state ^= rng_state << 17;
        (rng_state & 0xFF) as u8
    };

    // Run 10,000 randomized chunks with various sizes and corruptions
    for i in 0..10_000 {
        let chunk_size = (rand_byte() as usize % 64) + 1;
        let mut chunk = Vec::with_capacity(chunk_size);
        for _ in 0..chunk_size {
            chunk.push(rand_byte());
        }

        // Occasionally inject valid frame header with garbage body
        if i % 100 == 0 {
            let fake_len = ((rand_byte() as u32) % 32) + 1;
            let len_bytes = fake_len.to_le_bytes();
            decoder.feed(&len_bytes);
        }

        decoder.feed(&chunk);

        // Drain messages; expect Err or Ok without panicking
        while let Ok(Some(_)) = decoder.poll_next() {}
    }

    // Decoder survived 10,000 random mutations without panicking
}
