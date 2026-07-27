import re

with open('/app/apps/frontend/src/pages/HomePage/sections/HeroSection.jsx', 'r') as f:
    content = f.read()

# Pattern for the main headline Typography block
pattern = r'(<Typography\s*variant="h1"[\s\S]*?>)[\s\S]*?(</Typography>)'

new_headline = r'''\1
              <Box component="span" sx={{ position: "relative", display: "block" }}>
                Learn. Build. Get Placed
              </Box>
              <Box component="span" sx={{ color: "#a5b4fc", display: "block", mt: 1 }}>
                Your Career Starts Here
              </Box>
            \2'''

content = re.sub(pattern, new_headline, content, count=1)

with open('/app/apps/frontend/src/pages/HomePage/sections/HeroSection.jsx', 'w') as f:
    f.write(content)
