import re
import os

directory = "apps/frontend/src/pages"
for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith(".jsx") or file.endswith(".js"):
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()
            # Find and replace large pixel sizes like "600px", "700px", "800px" inside maxWidth strings
            # and non-string large numbers inside maxWidth.
            new_content = re.sub(r'maxWidth:\s*["\'](600|700|800|1000)px["\']', 'maxWidth: "min(100%, \\1px)"', content)
            new_content = re.sub(r'maxWidth:\s*(600|700|800|1000),', 'maxWidth: "min(100%, \\1px)",', new_content)
            if new_content != content:
                print(f"Modifying {filepath}")
                with open(filepath, 'w') as f:
                    f.write(new_content)
