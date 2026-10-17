#!/usr/bin/env python3
"""
Validates markdown links across documentation files to ensure no broken references.
"""

import os
import re
import sys

WORKSPACE_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
DOC_FILES = []

# Collect all markdown files
for root, _, files in os.walk(WORKSPACE_ROOT):
    if any(skip in root for skip in [".git", "node_modules", "target", ".rocha", "fuzz"]):
        continue
    for f in files:
        if f.endswith(".md"):
            DOC_FILES.append(os.path.join(root, f))

LINK_PATTERN = re.compile(r'\[([^\]]+)\]\(([^)]+)\)')

errors = []
checked_links = 0

for doc_path in DOC_FILES:
    rel_doc = os.path.relpath(doc_path, WORKSPACE_ROOT)
    with open(doc_path, "r", encoding="utf-8") as f:
        content = f.read()

    for match in LINK_PATTERN.finditer(content):
        text, url = match.groups()
        # Skip external URLs
        if url.startswith("http://") or url.startswith("https://") or url.startswith("mailto:"):
            continue

        # Split path and fragment/anchor
        parts = url.split("#", 1)
        link_target = parts[0]
        anchor = parts[1] if len(parts) > 1 else None

        if not link_target and anchor:
            # Anchor in same file
            target_path = doc_path
        else:
            doc_dir = os.path.dirname(doc_path)
            target_path = os.path.normpath(os.path.join(doc_dir, link_target))

        checked_links += 1

        if not os.path.exists(target_path):
            errors.append(f"{rel_doc}: Broken link '{url}' -> '{os.path.relpath(target_path, WORKSPACE_ROOT)}' not found")

if errors:
    print(f"FAILED: Found {len(errors)} broken links:")
    for err in errors:
        print(f"  - {err}")
    sys.exit(1)
else:
    print(f"SUCCESS: Checked {checked_links} local links across {len(DOC_FILES)} documents. Zero broken links found.")
    sys.exit(0)
