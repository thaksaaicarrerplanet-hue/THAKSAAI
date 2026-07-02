import re
import os

def replace_fixed_widths(text):
    text = re.sub(r'maxWidth:\s*"[0-9]+px"', 'maxWidth: "min(100%, 1280px)"', text)
    text = re.sub(r'width:\s*"[0-9]+px"', 'width: "min(100%, 1280px)"', text)
    text = re.sub(r'maxWidth:\s*[0-9]+,', 'maxWidth: "min(100%, 1280px)",', text)
    return text

directory = "apps/frontend/src"
for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith(".jsx") or file.endswith(".js"):
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()
            new_content = replace_fixed_widths(content)
            if new_content != content:
                print(f"Modifying {filepath}")
                with open(filepath, 'w') as f:
                    f.write(new_content)
