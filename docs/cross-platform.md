# Rocha Cross-Platform Architecture & Compatibility Specification

Rocha provides consistent test orchestration across Linux, macOS, and Windows.

---

## 1. Windows File System & IPC Handling

### 1.1 Path Normalization
Windows paths present several unique challenges that Rocha normalizes natively (`rocha_discover::path_norm`):
- **Verbatim Paths:** Strips extended-length `\\?\` prefixes emitted by Windows API.
- **Drive Letters:** Standardizes drive letters to lowercase (e.g. `C:\` -> `c:/`) for deterministic map keys.
- **Separators:** Unifies all backslashes (`\`) to forward slashes (`/`).
- **Case Sensitivity:** Supports case-insensitive matching on Windows while preserving POSIX exact matches on Linux/macOS.

### 1.2 IPC Transport
Inter-process communication between the native orchestrator and Node workers uses standard I/O byte streams framed with 4-byte little-endian length prefixes and MessagePack encoding. This design functions identically over anonymous pipes on POSIX and named pipes / anonymous standard handles on Windows, avoiding platform-specific socket semantics.

---

## 2. macOS Code Signing & Notarization

When distributing prebuilt binaries for macOS (Apple Silicon `aarch64-apple-darwin` and Intel `x86_64-apple-darwin`):

### 2.1 Code Signing
Binaries are signed with the Apple Developer ID Application certificate and hardened runtime enabled:
```bash
codesign --force --options runtime --deep --sign "Developer ID Application: YourOrg (TEAM_ID)" ./target/release/rocha
```

### 2.2 Notarization
Submit the zipped binary to Apple's notary service using `notarytool`:
```bash
xcrun notarytool submit rocha-macos.zip --keychain-profile "rocha-notary" --wait
```

### 2.3 Stapling
Staple the validated notarization ticket to the binary:
```bash
xcrun stapler staple ./target/release/rocha
```

---

## 3. Linux Distribution & Toolchains
- **glibc:** Builds target glibc 2.28+ for broad distribution compatibility across Ubuntu, Debian, RHEL, and CentOS.
- **musl:** Fully static binaries available for Alpine Linux and containerized CI runners.
