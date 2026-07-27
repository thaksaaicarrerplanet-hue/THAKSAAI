import re

with open('/app/apps/frontend/index.html', 'r') as f:
    html = f.read()

# Update favicon to transparent
html = re.sub(r'<link rel="icon" type="image/jpeg" href="/new-brand-logo.jpg" />', '<link rel="icon" type="image/png" href="/transparent-brand-logo.png" />', html)

with open('/app/apps/frontend/index.html', 'w') as f:
    f.write(html)


with open('/app/apps/frontend/src/layout/Navbar.jsx', 'r') as f:
    nav = f.read()

# Update logo import
nav = re.sub(r'import brandLogo from "/new-brand-logo.jpg";', 'import brandLogo from "/transparent-brand-logo.png";', nav)


# Restore "THAKSA.AI" text right after the logo in the desktop menu
# Find:
#              <Box
#                component="img"
#                src={brandLogo}
#                alt="THAKSA.AI Logo"
#                sx={{
#                  width: 'auto',
#                  height: { xs: 48, md: 56 },
#                  borderRadius: "12px",
#                  objectFit: "contain",
#                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
#                  transition: "transform 0.3s ease",
#                }}
#              />
#              </Box>

desktop_logo_pattern = r'(<Box\s*component="img"\s*src=\{brandLogo\}\s*alt="THAKSA\.AI Logo"\s*sx=\{\{[\s\S]*?\}\}\s*/>\s*)(</Box>)'

text_to_insert_desktop = '''
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.45rem" },
                  letterSpacing: "-0.04em",
                  fontFamily: "'Roboto', sans-serif",
                  color: "#FFFFFF",
                }}
              >
                THAKSA.AI
              </Typography>
            '''

nav = re.sub(desktop_logo_pattern, r'\1' + text_to_insert_desktop + r'\2', nav, count=1)


# Restore in drawer menu
drawer_logo_pattern = r'(<Box\s*component="img"\s*src=\{brandLogo\}\s*alt="THAKSA\.AI Logo"\s*sx=\{\{\s*width: \'auto\',\s*height: 48,\s*borderRadius: "10px",\s*objectFit: "contain",\s*boxShadow: "0 2px 8px rgba\(0,0,0,0.08\)"\s*\}\}\s*/>\s*)(</Box>)'

text_to_insert_drawer = '''
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.1rem", sm: "1.3rem" },
                  color: "#FFFFFF",
                  fontFamily: "'Roboto', sans-serif",
                  letterSpacing: "-0.04em",
                }}
              >
                THAKSA.AI
              </Typography>
            '''

nav = re.sub(drawer_logo_pattern, r'\1' + text_to_insert_drawer + r'\2', nav, count=1)

with open('/app/apps/frontend/src/layout/Navbar.jsx', 'w') as f:
    f.write(nav)
