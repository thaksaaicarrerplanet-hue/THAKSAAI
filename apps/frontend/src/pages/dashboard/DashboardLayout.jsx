import { useMemo, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import BrandLogo from "../../components/common/BrandLogo";
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { MASTER_PALETTE } from "../../theme/masterThemeConfig";

const drawerWidth = 260;

const navItems = [
  { to: "/dashboard", label: "Dashboard Overview", icon: <DashboardRoundedIcon fontSize="small" /> },
  { to: "/dashboard/courses", label: "My Courses", icon: <SchoolRoundedIcon fontSize="small" /> },
  { to: "/dashboard/batch", label: "My Batch & Peers", icon: <GroupsRoundedIcon fontSize="small" /> },
  { to: "/dashboard/attendance", label: "Attendance Record", icon: <EventAvailableRoundedIcon fontSize="small" /> },
  { to: "/dashboard/assessments", label: "Assessments & Quizzes", icon: <AssignmentRoundedIcon fontSize="small" /> },
  { to: "/dashboard/profile", label: "My Profile", icon: <PersonRoundedIcon fontSize="small" /> },
  { to: "/dashboard/settings", label: "Account Settings", icon: <SettingsRoundedIcon fontSize="small" /> },
];

export default function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const user = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("user") || "null");
    } catch {
      return null;
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const drawerContent = (
    <Box sx={{ p: 2.5, display: "flex", flexDirection: "column", height: "100%", bgcolor: "#1a1a1a", color: "#ffffff" }}>
      <Box sx={{ mb: 4, pt: 1 }}>
        <BrandLogo variant="dashboard" customSub="Student" disableLink />
        <Box sx={{ mt: 2.5, p: 1.5, bgcolor: "rgba(255,255,255,0.05)", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)" }}>
          <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, color: "#C7F36B", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Student Portal
          </Typography>
          <Typography sx={{ fontSize: "0.78rem", color: "#a1a1aa", mt: 0.2 }}>
            THAKSA.AI Learning Suite
          </Typography>
        </Box>
      </Box>

      <List sx={{ p: 0, flexGrow: 1 }}>
        {navItems.map((item) => {
          const selected = item.to === "/dashboard" 
            ? location.pathname === "/dashboard" 
            : location.pathname === item.to || location.pathname.startsWith(`${item.to}/`);
          return (
            <ListItemButton
              key={item.to}
              component={NavLink}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              selected={selected}
              sx={{
                mb: 0.6,
                py: 1.1,
                px: 2,
                borderRadius: "8px",
                color: selected ? "#1a1a1a" : "#d4d4d8",
                bgcolor: selected ? "#C7F36B" : "transparent",
                transition: "all 0.15s ease",
                "&:hover": {
                  bgcolor: selected ? "#C7F36B" : "rgba(255,255,255,0.08)",
                  color: selected ? "#1a1a1a" : "#ffffff",
                },
                "&.Mui-selected": {
                  bgcolor: "#C7F36B",
                  color: "#1a1a1a",
                  fontWeight: 700,
                  "&:hover": {
                    bgcolor: "#8be600",
                  },
                },
              }}
            >
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Box sx={{ color: selected ? "#1a1a1a" : "#C7F36B", display: "flex" }}>
                  {item.icon}
                </Box>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ 
                    fontWeight: selected ? 700 : 500, 
                    fontSize: "0.88rem",
                    fontFamily: "'Work Sans', sans-serif"
                  }}
                />
              </Stack>
            </ListItemButton>
          );
        })}
      </List>

      <Box sx={{ pt: 2, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <Button
          fullWidth
          startIcon={<LogoutRoundedIcon />}
          onClick={handleLogout}
          sx={{
            py: 1.2,
            color: "#ffffff",
            bgcolor: "rgba(255,255,255,0.08)",
            borderRadius: "8px",
            textTransform: "none",
            fontWeight: 600,
            fontSize: "0.85rem",
            "&:hover": {
              bgcolor: "rgba(255,107,107,0.2)",
              color: "#ff6b6b",
            },
          }}
        >
          Sign Out of Portal
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f8f9fa", color: "#1a1a1a", selection: { bgcolor: "#C7F36B", color: "#000000" } }}>
      <AppBar
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          borderBottom: "1px solid rgba(0,0,0,0.08)",
          bgcolor: "rgba(255, 255, 255, 0.95)",
        }}
      >
        <Toolbar sx={{ minHeight: 70, px: { xs: 2, sm: 4 } }}>
          <IconButton aria-label="Open navigation menu" onClick={() => setMobileOpen(true)} sx={{ display: { md: "none" }, mr: 2, color: "#1a1a1a" }}>
            <MenuRoundedIcon />
          </IconButton>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
            <Box>
              <Typography sx={{ fontWeight: 700, color: "#1a1a1a", fontSize: "1.15rem", fontFamily: "'Instrument Serif', serif" }}>
                Student Learning Portal
              </Typography>
              <Typography sx={{ fontSize: "0.8rem", color: "#64748b", fontWeight: 500 }}>
                {user?.name ? `Signed in as: ${user.name}` : "Student Account"}
              </Typography>
            </Box>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Button
                size="small"
                variant="outlined"
                startIcon={<ArrowBackRoundedIcon sx={{ fontSize: "1rem !important" }} />}
                onClick={() => navigate("/")}
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "0.78rem",
                  borderColor: "rgba(0,0,0,0.15)",
                  color: "#475569",
                  borderRadius: "50px",
                  px: 2,
                  py: 0.5,
                  "&:hover": { borderColor: "#1a1a1a", color: "#1a1a1a", bgcolor: "rgba(0,0,0,0.02)" }
                }}
              >
                Public Website
              </Button>
              <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", gap: 1, bgcolor: "#F7F8F4", px: 2, py: 0.6, borderRadius: "50px", border: "1px solid rgba(0,0,0,0.05)" }}>
                <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#16a34a" }} />
                <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#1a1a1a" }}>
                  Online
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box", bgcolor: "#1a1a1a" },
          }}
        >
          {drawerContent}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              borderRight: "1px solid rgba(0,0,0,0.08)",
              bgcolor: "#1a1a1a",
            },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      </Box>

      <Box component="main" sx={{ flexGrow: 1, width: { md: `calc(100% - ${drawerWidth}px)` }, overflowX: "hidden" }}>
        <Toolbar sx={{ minHeight: 70 }} />
        <Container maxWidth="xl" sx={{ py: { xs: 3, md: 5 }, px: { xs: 2.5, sm: 4 } }}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}
