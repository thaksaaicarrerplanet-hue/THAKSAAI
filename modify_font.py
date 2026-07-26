import re

# Update index.html to add Roboto
with open('/app/apps/frontend/index.html', 'r') as f:
    html = f.read()

# Replace Inter with Roboto
html = re.sub(
    r'<link\s*href="https://fonts\.googleapis\.com/css2\?family=Inter.*?rel="stylesheet"\s*/>',
    '<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />',
    html, flags=re.DOTALL
)

with open('/app/apps/frontend/index.html', 'w') as f:
    f.write(html)

# Update appTheme.js to use Roboto
with open('/app/apps/frontend/src/theme/appTheme.js', 'r') as f:
    theme = f.read()

theme = re.sub(
    r'const bodyFont = ".*?";',
    'const bodyFont = "\\"Roboto\\", sans-serif";',
    theme
)
theme = re.sub(
    r'const headingFont = ".*?";',
    'const headingFont = "\\"Roboto\\", sans-serif";',
    theme
)

with open('/app/apps/frontend/src/theme/appTheme.js', 'w') as f:
    f.write(theme)
