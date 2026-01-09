#!/usr/bin/env python3
"""
Build a self-contained standalone HTML file from the portfolio.
Inlines all CSS, JavaScript, and converts local images to base64 data URIs.
"""

import os
import base64
import re
from pathlib import Path

# Paths
BASE_DIR = Path(__file__).parent
HTML_FILE = BASE_DIR / "index.html"
CSS_DIR = BASE_DIR / "css"
JS_DIR = BASE_DIR / "js"
IMAGES_DIR = BASE_DIR / "assets" / "images"
OUTPUT_FILE = BASE_DIR / "portfolio-standalone.html"

# MIME types based on extension
MIME_TYPES = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".webp": "image/webp",
    ".svg": "image/svg+xml",
}


def get_mime_type(filepath: Path) -> str:
    """Get MIME type for an image file."""
    ext = filepath.suffix.lower()
    return MIME_TYPES.get(ext, "application/octet-stream")


def file_to_base64(filepath: Path) -> str:
    """Convert a file to a base64 data URI."""
    if not filepath.exists():
        print(f"  Warning: File not found: {filepath}")
        return ""
    
    mime_type = get_mime_type(filepath)
    with open(filepath, "rb") as f:
        data = base64.b64encode(f.read()).decode("utf-8")
    return f"data:{mime_type};base64,{data}"


def read_css_files() -> str:
    """Read and concatenate all CSS files."""
    css_content = []
    
    # Read styles.css first, then animations.css
    for css_file in ["styles.css", "animations.css"]:
        css_path = CSS_DIR / css_file
        if css_path.exists():
            print(f"  Reading CSS: {css_file}")
            with open(css_path, "r", encoding="utf-8") as f:
                css_content.append(f"/* === {css_file} === */\n")
                css_content.append(f.read())
                css_content.append("\n")
    
    return "".join(css_content)


def read_js_file() -> str:
    """Read the JavaScript file."""
    js_path = JS_DIR / "scripts.js"
    if js_path.exists():
        print(f"  Reading JS: scripts.js")
        with open(js_path, "r", encoding="utf-8") as f:
            return f.read()
    return ""


def convert_js_images_to_base64(js_content: str, images_cache: dict) -> str:
    """Convert image paths in JS to base64 data URIs."""
    
    def replace_image_path(match):
        image_path = match.group(1)
        # Normalize the path
        if image_path.startswith("assets/images/"):
            filename = image_path.replace("assets/images/", "")
            if filename in images_cache:
                return f'"{images_cache[filename]}"'
        return match.group(0)
    
    # Match patterns like "assets/images/filename.ext"
    pattern = r'"(assets/images/[^"]+)"'
    return re.sub(pattern, replace_image_path, js_content)


def build_standalone():
    """Build the standalone HTML file."""
    print("Building standalone HTML file...")
    
    # Read the original HTML
    print("\n1. Reading index.html...")
    with open(HTML_FILE, "r", encoding="utf-8") as f:
        html_content = f.read()
    
    # Pre-cache all images as base64
    print("\n2. Converting images to base64...")
    images_cache = {}
    for image_file in IMAGES_DIR.iterdir():
        if image_file.is_file() and image_file.suffix.lower() in MIME_TYPES:
            print(f"  Converting: {image_file.name}")
            images_cache[image_file.name] = file_to_base64(image_file)
    
    print(f"  Total images converted: {len(images_cache)}")
    
    # Read and combine CSS
    print("\n3. Inlining CSS...")
    css_content = read_css_files()
    
    # Read JavaScript and convert image paths
    print("\n4. Inlining JavaScript with embedded images...")
    js_content = read_js_file()
    js_content = convert_js_images_to_base64(js_content, images_cache)
    
    # Build the new HTML
    print("\n5. Assembling standalone HTML...")
    
    # Remove external CSS links
    html_content = re.sub(r'<link\s+href="css/styles\.css"\s+rel="stylesheet"\s*/?\s*>', '', html_content)
    html_content = re.sub(r'<link\s+href="css/animations\.css"\s+rel="stylesheet"\s*/?\s*>', '', html_content)
    
    # Remove external JS script tag
    html_content = re.sub(r'<script\s+src="js/scripts\.js"\s*>\s*</script>', '', html_content)
    
    # Add inlined CSS in <head> before </head>
    style_tag = f"\n<style>\n{css_content}</style>\n"
    html_content = html_content.replace("</head>", f"{style_tag}</head>")
    
    # Add inlined JS before </body>
    script_tag = f"\n<script>\n{js_content}</script>\n"
    html_content = html_content.replace("</body>", f"{script_tag}</body>")
    
    # Write the output
    print(f"\n6. Writing to {OUTPUT_FILE.name}...")
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(html_content)
    
    # Report file size
    file_size = OUTPUT_FILE.stat().st_size
    print(f"\n✅ Done! Standalone file created: {OUTPUT_FILE}")
    print(f"   File size: {file_size / 1024 / 1024:.2f} MB")


if __name__ == "__main__":
    build_standalone()
