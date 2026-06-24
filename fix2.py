with open("apps/frontend/src/pages/FinalYearProjectsPage/FinalYearProjectsPage.jsx", "r") as f:
    content = f.read()

content = content.replace(
'''                        variant="outlined"
                        bgcolor="transparent"
                        startIcon={<WhatsAppIcon />}''',
'''                        variant="outlined"
                        startIcon={<WhatsAppIcon />}'''
)

content = content.replace(
'''                        variant="outlined"
                        startIcon={<WhatsAppIcon />}
                        sx={{
                            borderColor: "rgba(255,255,255,0.2)",
                            color: "white",''',
'''                        variant="outlined"
                        startIcon={<WhatsAppIcon />}
                        sx={{
                            bgcolor: "transparent",
                            borderColor: "rgba(255,255,255,0.2)",
                            color: "white",'''
)

with open("apps/frontend/src/pages/FinalYearProjectsPage/FinalYearProjectsPage.jsx", "w") as f:
    f.write(content)
