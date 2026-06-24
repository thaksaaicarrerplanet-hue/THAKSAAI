import re

with open("apps/frontend/src/pages/FinalYearProjectsPage/FinalYearProjectsPage.jsx", "r") as f:
    content = f.read()

# Fix unused icons
content = re.sub(r'import DescriptionIcon from "@mui/icons-material/Description";\nimport AssessmentIcon from "@mui/icons-material/Assessment";\nimport SchoolIcon from "@mui/icons-material/School";\n', '', content)

# Fix invisible CTA button background issue
content = content.replace(
    'variant="outlined"',
    'variant="outlined"\n                        bgcolor="transparent"'
)

with open("apps/frontend/src/pages/FinalYearProjectsPage/FinalYearProjectsPage.jsx", "w") as f:
    f.write(content)
