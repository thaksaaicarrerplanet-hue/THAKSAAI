import re

with open('/app/apps/frontend/src/layout/Navbar.jsx', 'r') as f:
    nav = f.read()

# Add new icons
if 'SearchRoundedIcon' not in nav:
    nav = re.sub(
        r'import CloseRoundedIcon from "@mui/icons-material/CloseRounded";',
        'import CloseRoundedIcon from "@mui/icons-material/CloseRounded";\nimport SearchRoundedIcon from "@mui/icons-material/SearchRounded";\nimport PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";',
        nav
    )

# The Toolbar currently contains:
# 1. Box with logo
# 2. Stack with navItems
# 3. Stack with auth buttons
# 4. IconButton for mobile menu

# Let's replace the content of Toolbar completely
toolbar_pattern = r'(<Toolbar[^>]*>)([\s\S]*?)(</Toolbar>)'

def replace_toolbar(match):
    toolbar_open = match.group(1)
    toolbar_close = match.group(3)

    new_toolbar = '''
          <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
            {/* Left: Menu Icon */}
            <IconButton
              edge="start"
              aria-label="Open navigation menu"
              onClick={() => setMobileOpen(true)}
              sx={{
                color: "#ffffff",
                width: "42px",
                height: "42px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                transition: "all 0.2s ease",
                "&:hover": {
                  background: "rgba(255,255,255,0.1)",
                  boxShadow: "0 0 10px rgba(255,255,255,0.1)",
                }
              }}
            >
              <MenuRoundedIcon />
            </IconButton>

            {/* Center: Logo */}
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                textDecoration: "none",
                color: "#FFFFFF",
                "&:hover img": {
                  transform: "scale(1.05)",
                }
              }}
            >
              <Box
                component="img"
                src={brandLogo}
                alt="THAKSA.AI Logo"
                sx={{
                  width: 'auto',
                  height: { xs: 40, md: 48 },
                  borderRadius: "12px",
                  objectFit: "contain",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  transition: "transform 0.3s ease",
                }}
              />
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
            </Box>

            {/* Right: Icons */}
            <Stack direction="row" spacing={1}>
              <IconButton
                aria-label="Search"
                sx={{
                  color: "#ffffff",
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    background: "rgba(255,255,255,0.1)",
                  }
                }}
              >
                <SearchRoundedIcon />
              </IconButton>
              <IconButton
                component={RouterLink}
                to={isAuth ? dashboardPath : "/login"}
                aria-label="User Profile"
                sx={{
                  color: "#ffffff",
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    background: "rgba(255,255,255,0.1)",
                  }
                }}
              >
                <PersonOutlineRoundedIcon />
              </IconButton>
            </Stack>
          </Stack>
    '''
    return toolbar_open + new_toolbar + toolbar_close

nav = re.sub(toolbar_pattern, replace_toolbar, nav)

with open('/app/apps/frontend/src/layout/Navbar.jsx', 'w') as f:
    f.write(nav)
