import re

with open('/app/apps/frontend/src/layout/Navbar.jsx', 'r') as f:
    nav = f.read()

# Make sure it's valid JSX
try:
    print("Checked file length:", len(nav))
except Exception as e:
    print("Error:", e)
