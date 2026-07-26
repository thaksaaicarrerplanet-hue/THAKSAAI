import re

with open('/app/apps/frontend/src/layout/Navbar.jsx', 'r') as f:
    nav = f.read()

# Fix slight indentation issue created by regex
nav = nav.replace('              </Box>', '            </Box>')

with open('/app/apps/frontend/src/layout/Navbar.jsx', 'w') as f:
    f.write(nav)
