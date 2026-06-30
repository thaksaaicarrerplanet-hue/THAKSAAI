import re
import os

def update_fixed_widths(text):
    # Replace fixed max-width and width for large sizes
    text = re.sub(r'maxWidth:\s*["\'](6[0-9]{2}|[7-9][0-9]{2}|1[0-9]{3})px["\']', 'maxWidth: "min(100%, \\1px)"', text)
    text = re.sub(r'width:\s*["\'](6[0-9]{2}|[7-9][0-9]{2}|1[0-9]{3})px["\']', 'width: "min(100%, \\1px)"', text)

    # Replace hardcoded margins like mt, mb, pt, pb, py, my which are huge
    # e.g., mt: 10 (80px), pt: { xs: "90px", ... } => let's focus on px units or large MUI units

    # We will do margin and padding dynamically via clamp
    return text

directory = "apps/frontend/src"
for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith(".jsx") or file.endswith(".js"):
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()
            new_content = update_fixed_widths(content)
            if new_content != content:
                print(f"Modifying {filepath}")
                with open(filepath, 'w') as f:
                    f.write(new_content)
