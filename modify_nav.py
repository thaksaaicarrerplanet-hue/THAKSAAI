import re

with open('/app/apps/frontend/src/layout/Navbar.jsx', 'r') as f:
    nav = f.read()

# 1. Update position to "sticky" and add top: 0 to AppBar sx
nav = re.sub(
    r'position=\{isFixedNav \? "fixed" : "static"\}',
    'position="sticky"',
    nav
)

nav = re.sub(
    r'bgcolor: scrolled \? "rgba\(5, 10, 25, 0\.85\)" : "transparent",',
    'top: 0,\n          bgcolor: scrolled ? "rgba(5, 10, 25, 0.85)" : "transparent",',
    nav
)

# 2. Update Toolbar minHeight
nav = re.sub(
    r'minHeight: \{ xs: 64, md: 72 \}',
    'minHeight: { xs: 60, md: 64 }',
    nav
)

# 3. Stack wrapper inside Toolbar
# Currently, it looks like:
# <Toolbar ...>
#   <Box component={RouterLink} ...> [Logo] </Box>
#   <Stack ...> [Nav items] </Stack>
#   <Stack ...> [Auth buttons] </Stack>
#   <IconButton ...> [Mobile menu] </IconButton>
# </Toolbar>
#
# I need to wrap everything in a Stack direction="row" justifyContent="space-between" alignItems="center" width="100%"

toolbar_pattern = r'(<Toolbar[^>]*>)([\s\S]*?)(</Toolbar>)'

def wrap_toolbar(match):
    toolbar_open = match.group(1)
    content = match.group(2)
    toolbar_close = match.group(3)

    # Wait, the prompt said: Wrap the logo and navigation items inside the `<Toolbar>` in a `<Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">` to align the logo to the left and the links to the right.
    # Actually, Toolbar already is a flex container, but we'll follow the exact instruction.
    new_content = f'\n          <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">{content}\n          </Stack>\n        '
    return toolbar_open + new_content + toolbar_close

nav = re.sub(toolbar_pattern, wrap_toolbar, nav)

with open('/app/apps/frontend/src/layout/Navbar.jsx', 'w') as f:
    f.write(nav)
