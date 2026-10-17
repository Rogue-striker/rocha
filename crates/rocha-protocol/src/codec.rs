//! Streaming decoder and frame encoder for Rocha wire protocol.

use crate::events::MAX_FRAME_SIZE;
use serde::{de::DeserializeOwned, Serialize};
use thiserror::Error;

/// Errors that can occur during encoding or decoding frames.
#[derive(Debug, Error)]
pub enum CodecError {
    /// Received a frame exceeding maximum allowable size.
    #[error("Frame size {size} exceeds maximum allowed size {max}")]
    OversizedFrame {
        /// Actual frame size parsed.
        size: usize,
        /// Maximum allowable frame size.
        max: usize,
    },
    /// MessagePack deserialization failed.
    #[error("MessagePack deserialization error: {0}")]
    Decode(#[from] rmp_serde::decode::Error),
    /// MessagePack serialization failed.
    #[error("MessagePack serialization error: {0}")]
    Encode(#[from] rmp_serde::encode::Error),
    /// Standard I/O error.
    #[error("I/O error: {0}")]
    Io(#[from] std::io::Error),
}

/// Encode a typed message into a length-prefixed binary frame.
///
/// Frame layout:
/// - 4 bytes: payload length in Little-Endian (`u32`)
/// - N bytes: MessagePack payload
pub fn encode_frame<T: Serialize>(msg: &T) -> Result<Vec<u8>, CodecError> {
    let payload = rmp_serde::to_vec_named(msg)?;
    if payload.len() > MAX_FRAME_SIZE {
        return Err(CodecError::OversizedFrame {
            size: payload.len(),
            max: MAX_FRAME_SIZE,
        });
    }
    let mut frame = Vec::with_capacity(4 + payload.len());
    frame.extend_from_slice(&(payload.len() as u32).to_le_bytes());
    frame.extend_from_slice(&payload);
    Ok(frame)
}

/// Incremental streaming decoder for length-prefixed MessagePack frames.
#[derive(Debug, Default)]
pub struct StreamingDecoder<T> {
    buffer: Vec<u8>,
    _marker: std::marker::PhantomData<T>,
}

impl<T: DeserializeOwned> StreamingDecoder<T> {
    /// Create a new streaming decoder with an empty buffer.
    pub fn new() -> Self {
        Self {
            buffer: Vec::new(),
            _marker: std::marker::PhantomData,
        }
    }

    /// Feed an arbitrary chunk of raw bytes into the decoder buffer.
    pub fn feed(&mut self, chunk: &[u8]) {
        self.buffer.extend_from_slice(chunk);
    }

    /// Attempt to decode the next message from buffered bytes.
    ///
    /// Returns:
    /// - `Ok(Some(msg))` when a complete valid frame has been decoded.
    /// - `Ok(None)` when more data is needed to complete the next frame.
    /// - `Err(CodecError)` if the frame header is oversized or deserialization fails.
    pub fn poll_next(&mut self) -> Result<Option<T>, CodecError> {
        if self.buffer.len() < 4 {
            return Ok(None);
        }

        let frame_len = u32::from_le_bytes(self.buffer[0..4].try_into().unwrap()) as usize;
        if frame_len > MAX_FRAME_SIZE {
            return Err(CodecError::OversizedFrame {
                size: frame_len,
                max: MAX_FRAME_SIZE,
            });
        }

        let total_frame_len = 4 + frame_len;
        if self.buffer.len() < total_frame_len {
            // Need more data
            return Ok(None);
        }

        // Complete frame ready to decode
        let payload = &self.buffer[4..total_frame_len];
        let message = rmp_serde::from_slice(payload)?;
        self.buffer.drain(0..total_frame_len);
        Ok(Some(message))
    }

    /// Number of bytes currently remaining in the unparsed buffer.
    pub fn buffered_len(&self) -> usize {
        self.buffer.len()
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::events::{ProtocolError, WorkerMessage, PROTOCOL_VERSION};
    use proptest::prelude::*;

    #[test]
    fn test_encode_and_decode_single_frame() {
        let msg = WorkerMessage::Ready {
            protocol_version: PROTOCOL_VERSION,
        };
        let frame = encode_frame(&msg).unwrap();
        assert!(frame.len() > 4);

        let mut decoder = StreamingDecoder::<WorkerMessage>::new();
        decoder.feed(&frame);
        let decoded = decoder.poll_next().unwrap().expect("should decode frame");
        assert_eq!(msg, decoded);
        assert_eq!(decoder.buffered_len(), 0);
    }

    #[test]
    fn test_oversized_frame_rejection() {
        let mut decoder = StreamingDecoder::<WorkerMessage>::new();
        let huge_len: u32 = (MAX_FRAME_SIZE + 1) as u32;
        decoder.feed(&huge_len.to_le_bytes());

        let err = decoder.poll_next().unwrap_err();
        match err {
            CodecError::OversizedFrame { size, max } => {
                assert_eq!(size, MAX_FRAME_SIZE + 1);
                assert_eq!(max, MAX_FRAME_SIZE);
            }
            other => panic!("expected OversizedFrame error, got {:?}", other),
        }
    }

    #[test]
    fn test_partial_frame_streaming() {
        let msg = WorkerMessage::TestPass {
            id: "test-streaming".into(),
            duration_ms: 10,
            slow: false,
        };
        let frame = encode_frame(&msg).unwrap();
        let mut decoder = StreamingDecoder::<WorkerMessage>::new();

        // Feed byte by byte
        for (i, byte) in frame.iter().enumerate() {
            decoder.feed(&[*byte]);
            if i < frame.len() - 1 {
                assert!(decoder.poll_next().unwrap().is_none());
            } else {
                let decoded = decoder
                    .poll_next()
                    .unwrap()
                    .expect("should decode at last byte");
                assert_eq!(msg, decoded);
            }
        }
    }

    proptest! {
        #[test]
        fn test_arbitrary_chunk_boundaries(
            chunk_sizes in proptest::collection::vec(1usize..128, 1..50),
            test_id in "[a-zA-Z0-9_-]{1,16}",
            duration in 0u64..10000u64
        ) {
            let messages = vec![
                WorkerMessage::Ready { protocol_version: PROTOCOL_VERSION },
                WorkerMessage::TestPass { id: test_id.clone(), duration_ms: duration, slow: false },
                WorkerMessage::TestFail {
                    id: format!("{}-fail", test_id),
                    duration_ms: duration + 10,
                    error: ProtocolError {
                        name: "AssertionError".into(),
                        message: "test failure".into(),
                        stack: None,
                        code: None,
                        actual: None,
                        expected: None,
                        show_diff: false,
                        operator: None,
                    }
                }
            ];

            let mut all_bytes = Vec::new();
            for msg in &messages {
                let frame = encode_frame(msg).unwrap();
                all_bytes.extend(frame);
            }

            let mut decoder = StreamingDecoder::<WorkerMessage>::new();
            let mut decoded_messages = Vec::new();

            let mut offset = 0;
            let mut chunk_idx = 0;
            while offset < all_bytes.len() {
                let chunk_size = chunk_sizes[chunk_idx % chunk_sizes.len()];
                chunk_idx += 1;
                let end = std::cmp::min(offset + chunk_size, all_bytes.len());
                decoder.feed(&all_bytes[offset..end]);
                offset = end;

                while let Some(msg) = decoder.poll_next().unwrap() {
                    decoded_messages.push(msg);
                }
            }

            assert_eq!(messages, decoded_messages);
            assert_eq!(decoder.buffered_len(), 0);
        }

        #[test]
        fn test_fuzz_smoke_random_bytes(data in proptest::collection::vec(any::<u8>(), 0..4096)) {
            let mut decoder = StreamingDecoder::<WorkerMessage>::new();
            decoder.feed(&data);
            while let Ok(Some(_)) = decoder.poll_next() {
                // Should consume valid frames and never panic
            }
        }
    }
}
