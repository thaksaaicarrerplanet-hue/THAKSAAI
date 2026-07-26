import re

with open('/app/apps/frontend/src/layout/Navbar.jsx', 'r') as f:
    nav = f.read()

# 1. Update Toolbar minHeight back to 64/72
nav = re.sub(
    r'minHeight: \{ xs: 60, md: 64 \}',
    'minHeight: { xs: 64, md: 72 }',
    nav
)

# 2. Update desktop logo size
nav = re.sub(
    r'height: \{ xs: 40, md: 48 \},',
    'height: { xs: 48, md: 56 },',
    nav
)

# 3. Update drawer logo size
nav = re.sub(
    r'height: 40,(\s*borderRadius: "10px",\s*objectFit: "contain",)',
    r'height: 48,\1',
    nav
)

# 4. Remove THAKSA.AI text from center logo area
# Look for <Typography ...> THAKSA.AI </Typography> inside the center Box.
text_pattern = r'(<Box[^>]*component=\{RouterLink\}[^>]*to="/"[^>]*>[\s\S]*?<Box[^>]*component="img"[^>]*/>\s*)<Typography[\s\S]*?>\s*THAKSA\.AI\s*</Typography>\s*(</Box>)'

nav = re.sub(text_pattern, r'\1\2', nav)

with open('/app/apps/frontend/src/layout/Navbar.jsx', 'w') as f:
    f.write(nav)
