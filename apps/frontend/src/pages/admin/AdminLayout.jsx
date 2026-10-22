import { useMemo, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import BrandLogo from "../../components/common/BrandLogo";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { MASTER_PALETTE } from "../../theme/masterThemeConfig";

const drawerWidth = 260;

const navItems = [
  { to: "/admin", label: "Dashboard Overview", icon: <DashboardRoundedIcon fontSize="small" /> },
  { to: "/admin/batches", label: "Batch Enrollments", icon: <GroupsRoundedIcon fontSize="small" /> },
  { to: "/admin/courses", label: "Course Approvals", icon: <MenuBookRoundedIcon fontSize="small" /> },
  { to: "/admin/students", label: "Users & Accounts", icon: <PeopleRoundedIcon fontSize="small" /> },
  { to: "/admin/settings", label: "Settings", icon: <SettingsRoundedIcon fontSize="small" /> },
];

export default function AdminLayout() {
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
        <BrandLogo variant="dashboard" customSub="Admin" disableLink />
        <Box sx={{ mt: 2.5, p: 1.5, bgcolor: "rgba(255,255,255,0.05)", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)" }}>
          <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, color: "#9fff00", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Admin Portal
          </Typography>
          <Typography sx={{ fontSize: "0.78rem", color: "#a1a1aa", mt: 0.2 }}>
            Platform Management
          </Typography>
        </Box>
      </Box>

      <List sx={{ p: 0, flexGrow: 1 }}>
        {navItems.map((item) => {
          const selected =
            item.to === "/admin"
              ? location.pathname === "/admin"
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
                bgcolor: selected ? "#9fff00" : "transparent",
                transition: "all 0.15s ease",
                "&:hover": {
                  bgcolor: selected ? "#9fff00" : "rgba(255,255,255,0.08)",
                  color: selected ? "#1a1a1a" : "#ffffff",
                },
                "&.Mui-selected": {
                  bgcolor: "#9fff00",
                  color: "#1a1a1a",
                  fontWeight: 700,
                  "&:hover": {
                    bgcolor: "#8be600",
                  },
                },
              }}
            >
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Box sx={{ color: selected ? "#1a1a1a" : "#9fff00", display: "flex" }}>
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
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f8f9fa", color: "#1a1a1a", selection: { bgcolor: "#9fff00", color: "#000000" } }}>
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
                Admin Management Portal
              </Typography>
              <Typography sx={{ fontSize: "0.8rem", color: "#64748b", fontWeight: 500 }}>
                {user?.name ? `Signed in as: ${user.name}` : "Administrator Account"}
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
              <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", gap: 1, bgcolor: "#EDEEF5", px: 2, py: 0.6, borderRadius: "50px", border: "1px solid rgba(0,0,0,0.05)" }}>
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
