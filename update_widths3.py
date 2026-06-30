import re
import os

def replace_hardcoded_margins(text):
    # E.g. mt: 10, mb: 12, etc. which translate to 80px, 96px, etc.
    # In MUI, 1 unit = 8px. 10 * 8 = 80px, 12 * 8 = 96px
    # Actually, the user says:
    # "Replace large fixed spacing values. Avoid: margin-top:120px; Prefer: margin-top: clamp(56px,8vw,120px); Do this consistently."
    # We can rewrite things like `mb: { xs: 8, md: 10 }` to `mb: "clamp(56px, 8vw, 120px)"`. Let's see what is used mostly.
    return text
