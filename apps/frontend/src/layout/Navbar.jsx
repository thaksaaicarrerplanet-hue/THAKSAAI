import { useMemo, useState, useEffect } from "react";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import brandLogo from "/new-logo.png";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const baseNavItems = [
  { label: "Home", to: "/" },
  { label: "Workshops", to: "/workshops" },
  { label: "CRT Training", to: "/training" },
];

const homeStickyNavItems = [
  { label: "Home", to: "/" },
  { label: "Workshops", to: "/workshops" },
  { label: "CRT Training", to: "/training" },
];

const workshopStickyNavItems = [
  { label: "Home", to: "/" },
  { label: "Workshops", to: "/workshops" },
];

const projectsStickyNavItems = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/final-year-projects" },
];

const placementsStickyNavItems = [
  { label: "Home", to: "/" },
  { label: "Placement", to: "/placements" },
];

const trainingPageNavItems = [
  { label: "Home", to: "/" },
  { label: "CRT Training", to: "/training" },
  { label: "Courses & Batches", to: "/courses" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const user = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("user") || "null");
    } catch {
      return null;
    }
  }, []);
  const token = localStorage.getItem("token");
  const isAuth = Boolean(token);
  const dashboardPath = user?.role === "admin" ? "/admin" : user?.role === "instructor" ? "/instructor" : "/dashboard";
  const isHomePage = location.pathname === "/";
  const isWorkshopPage = location.pathname === "/workshops" || location.pathname.startsWith("/workshops/");
  const isProjectsPage = location.pathname === "/final-year-projects" || location.pathname.startsWith("/final-year-projects/");
  const isPlacementsPage = location.pathname === "/placements" || location.pathname.startsWith("/placements/");
  const isTrainingContext =
    location.pathname === "/training" ||
    location.pathname.startsWith("/training/") ||
    location.pathname === "/courses" ||
    location.pathname.startsWith("/courses/") ||
    location.pathname === "/batches" ||
    location.pathname.startsWith("/batches/") ||
    location.pathname === "/contact" ||
    location.pathname.startsWith("/contact/");
  const isFixedNav = isHomePage || isWorkshopPage || isProjectsPage || isPlacementsPage || isTrainingContext;
  const navItems = isHomePage
    ? homeStickyNavItems
    : isWorkshopPage
      ? workshopStickyNavItems
      : isProjectsPage
        ? projectsStickyNavItems
        : isPlacementsPage
          ? placementsStickyNavItems
    : isTrainingContext
      ? trainingPageNavItems
      : baseNavItems;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(`${path}/`);

  return (
    <>
      <AppBar
        position={isFixedNav ? "fixed" : "static"}
        elevation={0}
        sx={{
          bgcolor: scrolled ? "rgba(5, 10, 25, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "blur(10px)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
          transition: "all 300ms ease",
          zIndex: 1100,
        }}
      >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 }, transition: "min-height 0.3s ease" }}>
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
                width: { xs: 36, md: 42 },
                height: { xs: 36, md: 42 },
                borderRadius: "12px",
                objectFit: "cover",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                transition: "transform 0.3s ease",
              }}
            />
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.45rem" },
                letterSpacing: "-0.04em",
                fontFamily: "'Sora', 'Plus Jakarta Sans', sans-serif",
                color: "#FFFFFF",
              }}
            >
              THAKSA.AI
            </Typography>
          </Box>

          <Stack
            direction="row"
            spacing={1}
            sx={{ ml: 6, display: { xs: "none", md: "flex" }, flexGrow: 1 }}
          >
            {navItems.map((item) => (
              <Button
                key={item.to}
                component={RouterLink}
                to={item.to}
                color="inherit"
                disableRipple
                sx={{
                  color: isActive(item.to) ? "#FFFFFF" : "rgba(255, 255, 255, 0.75)",
                  fontWeight: 500,
                  fontSize: "15px",
                  textTransform: "none",
                  px: 2,
                  py: 1,
                  borderRadius: "8px",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: "#A78BFA",
                    bgcolor: "rgba(255, 255, 255, 0.05)",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          <Stack
            direction="row"
            spacing={1.5}
            sx={{ ml: "auto", display: { xs: "none", md: isAuth || isTrainingContext ? "flex" : "none" } }}
          >
            {!isAuth ? (
              <>
                <Button
                  component={RouterLink}
                  to="/login"
                  disableRipple
                  sx={{
                    color: "rgba(255, 255, 255, 0.75)",
                    fontWeight: 500,
                    fontSize: "15px",
                    textTransform: "none",
                    px: 2.5,
                    borderRadius: "8px",
                    transition: "all 0.2s ease",
                    "&:hover": { color: "#FFFFFF", bgcolor: "rgba(255, 255, 255, 0.05)" }
                  }}
                >
                  Login
                </Button>
                <Button
                  component={RouterLink}
                  to="/signup"
                  variant="contained"
                  disableElevation
                  sx={{
                    bgcolor: "#FFFFFF",
                    color: "#0F172A",
                    fontWeight: 600,
                    fontSize: "15px",
                    textTransform: "none",
                    borderRadius: "8px",
                    px: 3,
                    py: 1,
                    transition: "all 0.2s ease",
                    "&:hover": {
                      bgcolor: "rgba(255, 255, 255, 0.9)",
                      transform: "translateY(-1px)",
                    }
                  }}
                >
                  Start Learning
                </Button>
              </>
            ) : (
              <>
                <Button
                  component={RouterLink}
                  to={dashboardPath}
                  sx={{
                    color: "rgba(255, 255, 255, 0.75)",
                    fontWeight: 500,
                    fontSize: "15px",
                    textTransform: "none",
                    borderRadius: "8px",
                    transition: "all 0.2s ease",
                    "&:hover": { color: "#FFFFFF", bgcolor: "rgba(255,255,255,0.05)" }
                  }}
                >
                  Dashboard
                </Button>
                <Button
                  onClick={handleLogout}
                  color="error"
                  variant="text"
                  sx={{
                    fontSize: "15px",
                    fontWeight: 500,
                    textTransform: "none",
                    borderRadius: "8px",
                    transition: "all 0.2s ease",
                    "&:hover": { bgcolor: "rgba(239,68,68,0.15)" }
                  }}
                >
                  Logout
                </Button>
              </>
            )}
          </Stack>

          <IconButton
            edge="end"
            aria-label="Open navigation menu"
            onClick={() => setMobileOpen(true)}
            sx={{
              ml: "auto",
              display: { xs: "inline-flex", md: "none" },
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
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        SlideProps={{ direction: "left", timeout: 300 }}
        PaperProps={{
          sx: {
            width: { xs: "100%", sm: 380 },
            borderLeft: "1px solid rgba(255,255,255,0.08)",
            bgcolor: "rgba(5,10,25,0.98)",
            backdropFilter: "blur(30px)",
          }
        }}
      >
        <Box sx={{ p: { xs: 2, sm: 3 }, height: "100%", display: "flex", flexDirection: "column" }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
            <Box
              component={RouterLink}
              to="/"
              onClick={() => setMobileOpen(false)}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                textDecoration: "none",
              }}
            >
              <Box
                component="img"
                src={brandLogo}
                alt="THAKSA.AI Logo"
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "10px",
                  objectFit: "cover",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
                }}
              />
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.1rem", sm: "1.3rem" },
                  color: "#FFFFFF",
                  fontFamily: "'Sora', 'Plus Jakarta Sans', sans-serif",
                  letterSpacing: "-0.04em",
                }}
              >
                THAKSA.AI
              </Typography>
            </Box>
            <IconButton
              aria-label="Close navigation menu"
              onClick={() => setMobileOpen(false)}
              sx={{
                color: "rgba(255,255,255,0.75)",
                bgcolor: "rgba(255,255,255,0.05)",
                "&:hover": { bgcolor: "rgba(255,255,255,0.1)", color: "#FFFFFF" }
              }}
            >
              <CloseRoundedIcon />
            </IconButton>
          </Stack>

          <Stack spacing={1} sx={{ flexGrow: 1 }}>
            {navItems.map((item) => {
              const active = isActive(item.to);
              return (
                <Button
                  key={item.to}
                  component={RouterLink}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  sx={{
                    justifyContent: "flex-start",
                    color: active ? "#FFFFFF" : "rgba(255,255,255,0.75)",
                    bgcolor: active ? "rgba(255,255,255,0.05)" : "transparent",
                    fontWeight: active ? 600 : 500,
                    fontSize: "1.1rem",
                    textTransform: "none",
                    py: 1.5,
                    px: 2.5,
                    borderRadius: "12px",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.05)",
                      color: "#FFFFFF",
                      transform: "translateX(4px)"
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Stack>

          <Box sx={{ mt: 'auto', pt: 4 }}>
            <Stack spacing={2} sx={{ display: isAuth || isTrainingContext ? "flex" : "none" }}>
              {!isAuth ? (
                <>
                  <Button
                    component={RouterLink}
                    to="/login"
                    onClick={() => setMobileOpen(false)}
                    fullWidth
                    sx={{
                      color: "rgba(255,255,255,0.9)",
                      bgcolor: "rgba(255,255,255,0.05)",
                      fontSize: "1.05rem",
                      textTransform: "none",
                      py: 1.5,
                      borderRadius: "12px",
                      fontWeight: 600,
                      transition: "all 0.2s ease",
                      "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    component={RouterLink}
                    to="/signup"
                    variant="contained"
                    fullWidth
                    disableElevation
                    onClick={() => setMobileOpen(false)}
                    sx={{
                      bgcolor: "#FFFFFF",
                      color: "#0F172A",
                      fontSize: "1.05rem",
                      textTransform: "none",
                      py: 1.5,
                      borderRadius: "12px",
                      fontWeight: 600,
                      transition: "all 0.2s ease",
                      "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
                    }}
                  >
                    Start Learning
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    component={RouterLink}
                    to={dashboardPath}
                    onClick={() => setMobileOpen(false)}
                    variant="contained"
                    fullWidth
                    disableElevation
                    sx={{
                      bgcolor: "rgba(255,255,255,0.05)",
                      color: "#FFFFFF",
                      fontSize: "1.05rem",
                      textTransform: "none",
                      py: 1.5,
                      borderRadius: "12px",
                      fontWeight: 600,
                      transition: "all 0.2s ease",
                      "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                    }}
                  >
                    Dashboard
                  </Button>
                  <Button
                    color="error"
                    fullWidth
                    onClick={() => {
                      setMobileOpen(false);
                      handleLogout();
                    }}
                    sx={{
                      bgcolor: "rgba(239,68,68,0.1)",
                      fontSize: "1.05rem",
                      textTransform: "none",
                      py: 1.5,
                      borderRadius: "12px",
                      fontWeight: 600,
                      transition: "all 0.2s ease",
                      "&:hover": { bgcolor: "rgba(239,68,68,0.2)" }
                    }}
                  >
                    Logout
                  </Button>
                </>
              )}
            </Stack>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
    </>
  );
}
