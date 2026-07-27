import re

with open('/app/apps/frontend/src/layout/Navbar.jsx', 'r') as f:
    nav = f.read()

# Make sure brandLogo imports new-brand-logo.jpg (because the original one we checked out imports new-logo.png)
nav = re.sub(r'import brandLogo from "/.*?";', 'import brandLogo from "/new-brand-logo.jpg";', nav)

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

drawer_logo_sx_search = r'''sx=\{\{\s*width: 36,\s*height: 36,\s*borderRadius: "10px",\s*objectFit: "cover",\s*boxShadow: "0 2px 8px rgba\(0,0,0,0\.08\)"\s*\}\}'''
drawer_logo_sx_replace = '''sx={{
                  width: 'auto',
                  height: 40,
                  borderRadius: "10px",
                  objectFit: "contain",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
                }}'''

nav = re.sub(drawer_logo_sx_search, drawer_logo_sx_replace, nav)

# The user explicitly asked to keep the original scrolling and background effect
# The checked out version has position={isFixedNav ? "fixed" : "static"} and bgcolor: scrolled ? ...

with open('/app/apps/frontend/src/layout/Navbar.jsx', 'w') as f:
    f.write(nav)
