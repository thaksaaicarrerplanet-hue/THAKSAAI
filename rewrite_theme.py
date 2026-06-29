import re

with open('apps/frontend/src/theme/appTheme.js', 'r') as f:
    content = f.read()

# To make the container fluid across all screens while retaining the max width of 1280px
# and dynamic padding, we can override MuiContainer globally

if 'MuiContainer:' not in content:
    replacement = """
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: 'min(100%, 1280px) !important',
          marginInline: 'auto',
          paddingInline: 'clamp(20px, 4vw, 64px) !important',
        },
      },
    },
    MuiButton:"""
    content = content.replace('MuiButton:', replacement)

with open('apps/frontend/src/theme/appTheme.js', 'w') as f:
    f.write(content)
