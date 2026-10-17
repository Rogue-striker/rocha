#![no_main]

use libfuzzer_sys::fuzz_target;
use rocha_protocol::{StreamingDecoder, WorkerMessage};

fuzz_target!(|data: &[u8]| {
    let mut decoder = StreamingDecoder::<WorkerMessage>::new();
    decoder.feed(data);
    while let Ok(Some(_)) = decoder.poll_next() {}
});
