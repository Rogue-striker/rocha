//! Cross-platform path normalization utilities.

use std::path::{Path, PathBuf};

/// Normalize Windows and Unix file paths into a canonical, consistent representation.
/// Strips Windows verbatim prefix (`\\?\`), standardizes drive letters to lowercase,
/// and standardizes path separators to forward slashes.
pub fn normalize_path(path: &Path) -> PathBuf {
    let s = path.to_string_lossy();

    // Strip Windows verbatim prefix (`\\?\`)
    let trimmed = if let Some(stripped) = s.strip_prefix(r"\\?\") {
        stripped
    } else {
        &s
    };

    // Standardize drive letters on Windows: e.g. "C:\" -> "c:\"
    let mut chars = trimmed.chars();
    let normalized_str = if let (Some(c), Some(':')) = (chars.next(), chars.next()) {
        if c.is_ascii_alphabetic() {
            format!("{}:{}", c.to_ascii_lowercase(), &trimmed[2..])
        } else {
            trimmed.to_string()
        }
    } else {
        trimmed.to_string()
    };

    // Standardize backslashes to forward slashes
    PathBuf::from(normalized_str.replace('\\', "/"))
}

/// Check if two paths point to the same file, handling Windows case-insensitivity.
pub fn paths_equal(a: &Path, b: &Path) -> bool {
    let norm_a = normalize_path(a);
    let norm_b = normalize_path(b);

    #[cfg(windows)]
    {
        norm_a.to_string_lossy().to_lowercase() == norm_b.to_string_lossy().to_lowercase()
    }
    #[cfg(not(windows))]
    {
        norm_a == norm_b
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_normalize_windows_verbatim_path() {
        let p = Path::new(r"\\?\C:\Projects\Rocha\test\unit.spec.js");
        let norm = normalize_path(p);
        assert_eq!(
            norm.to_str().unwrap(),
            "c:/Projects/Rocha/test/unit.spec.js"
        );
    }

    #[test]
    fn test_normalize_windows_drive_letter_and_slashes() {
        let p = Path::new(r"D:\Rocha\tests/sub\test.ts");
        let norm = normalize_path(p);
        assert_eq!(norm.to_str().unwrap(), "d:/Rocha/tests/sub/test.ts");
    }

    #[test]
    fn test_normalize_unix_path() {
        let p = Path::new("/var/projects/rocha/test.js");
        let norm = normalize_path(p);
        assert_eq!(norm.to_str().unwrap(), "/var/projects/rocha/test.js");
    }

    #[test]
    fn test_paths_equal_consistency() {
        let p1 = Path::new(r"\\?\c:\Repo\Test.js");
        let p2 = Path::new("C:/Repo/Test.js");
        assert!(paths_equal(p1, p2));
    }
}
