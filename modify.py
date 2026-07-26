import re

# 1. Update index.html
with open('/app/apps/frontend/index.html', 'r') as f:
    html = f.read()

html = re.sub(r'<link rel="icon" type="image/png" href=".*?" />', '<link rel="icon" type="image/jpeg" href="/new-brand-logo.jpg" />', html)

with open('/app/apps/frontend/index.html', 'w') as f:
    f.write(html)


# 2. Update Navbar.jsx
with open('/app/apps/frontend/src/layout/Navbar.jsx', 'r') as f:
    nav = f.read()

# Make sure brandLogo imports new-brand-logo.jpg
nav = re.sub(r'import brandLogo from "/.*?";', 'import brandLogo from "/new-brand-logo.jpg";', nav)

# The Box logo sx:
#               sx={{
#                 width: { xs: 36, md: 42 },
#                 height: { xs: 36, md: 42 },
#                 borderRadius: "12px",
#                 objectFit: "cover",
#                 boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
#                 transition: "transform 0.3s ease",
#               }}
logo_sx_search = r'''sx=\{\{\s*width: \{ xs: 36, md: 42 \},\s*height: \{ xs: 36, md: 42 \},\s*borderRadius: "12px",\s*objectFit: "cover",\s*boxShadow: "0 2px 8px rgba\(0,0,0,0\.08\)",\s*transition: "transform 0\.3s ease",\s*\}\}'''
logo_sx_replace = '''sx={{
                width: 'auto',
                height: { xs: 40, md: 48 },
                borderRadius: "12px",
                objectFit: "contain",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                transition: "transform 0.3s ease",
              }}'''

# Replace in desktop logo
nav = re.sub(logo_sx_search, logo_sx_replace, nav)

# The drawer logo sx:
#               sx={{
#                 width: 36,
#                 height: 36,
#                 borderRadius: "10px",
#                 objectFit: "cover",
#                 boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
#               }}
drawer_logo_sx_search = r'''sx=\{\{\s*width: 36,\s*height: 36,\s*borderRadius: "10px",\s*objectFit: "cover",\s*boxShadow: "0 2px 8px rgba\(0,0,0,0\.08\)"\s*\}\}'''
drawer_logo_sx_replace = '''sx={{
                  width: 'auto',
                  height: 40,
                  borderRadius: "10px",
                  objectFit: "contain",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
                }}'''

nav = re.sub(drawer_logo_sx_search, drawer_logo_sx_replace, nav)

with open('/app/apps/frontend/src/layout/Navbar.jsx', 'w') as f:
    f.write(nav)

print("Done")
