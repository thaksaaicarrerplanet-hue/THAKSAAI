import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Box, Button, Card, CardContent, Grid, Stack, Typography, CircularProgress } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PersonAddAlt1RoundedIcon from "@mui/icons-material/PersonAddAlt1Rounded";
import { adminDashboard } from "../../services/adminServices";
import CreateUserDialog from "./components/CreateUserDialog";

const statMeta = [
  { key: "totalUsers", label: "Total Users", color: "#1a1a1a", icon: <PeopleIcon fontSize="small" />, path: "/admin/students" },
  { key: "students", label: "Students", color: "#2563eb", icon: <SchoolIcon fontSize="small" />, path: "/admin/students" },
  { key: "instructors", label: "Instructors", color: "#16a34a", icon: <PeopleIcon fontSize="small" />, path: "/admin/students" },
  { key: "totalCourses", label: "Total Courses", color: "#0ea5e9", icon: <MenuBookIcon fontSize="small" />, path: "/admin/courses" },
  { key: "pendingCourses", label: "Pending Approval", color: "#dc2626", icon: <PendingActionsIcon fontSize="small" />, path: "/admin/courses" },
  { key: "approvedCourses", label: "Approved Courses", color: "#16a34a", icon: <CheckCircleIcon fontSize="small" />, path: "/admin/courses" },
  { key: "enrollments", label: "Course Enrollments", color: "#8b5cf6", icon: <SchoolIcon fontSize="small" />, path: "/admin/batches" },
  { key: "revenue", label: "Total Revenue", color: "#059669", icon: <AttachMoneyIcon fontSize="small" />, path: null },
];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");
  const [createDialogOpen, setCreateDialogOpen] = useState(false);

  const fetchDashboard = useCallback(async (isBackgroundRefresh = false) => {
    try {
      if (isBackgroundRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }
      const res = await adminDashboard();
      setStats(res);
      setError("");
    } catch (requestError) {
      setError(requestError?.response?.data?.message || requestError.message || "Could not load admin dashboard records.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchDashboard();
    const intervalId = setInterval(() => fetchDashboard(true), 20000);
    const onFocus = () => fetchDashboard(true);
    window.addEventListener("focus", onFocus);
    return () => {
      clearInterval(intervalId);
      window.removeEventListener("focus", onFocus);
    };
  }, [fetchDashboard]);

  const values = useMemo(() => {
    return {
      totalUsers: Number(stats?.users?.total || 0),
      students: Number(stats?.users?.students || 0),
      instructors: Number(stats?.users?.instructors || 0),
      totalCourses: Number(stats?.courses?.total || 0),
      pendingCourses: Number(stats?.courses?.pending || 0),
      approvedCourses: Number(stats?.courses?.approved || 0),
      enrollments: Number(stats?.enrollments || 0),
      revenue: Number(stats?.revenue || 0),
    };
  }, [stats]);

  if (loading) {
    return (
      <Stack direction="row" spacing={2} alignItems="center" sx={{ py: 6, px: 2 }}>
        <CircularProgress size={24} sx={{ color: "#1a1a1a" }} />
        <Typography sx={{ fontWeight: 600, color: "#64748b", fontFamily: "'Work Sans', sans-serif" }}>
          Loading admin dashboard...
        </Typography>
      </Stack>
    );
  }

  return (
    <Box sx={{ pb: 6 }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", mb: 4, pb: 2.5, borderBottom: "1px solid rgba(0,0,0,0.08)", gap: 2 }}>
        <Box>
          <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, bgcolor: "#1a1a1a", color: "#9fff00", px: 2.2, py: 0.5, borderRadius: "20px", fontSize: "0.75rem", fontWeight: 700, mb: 1.5 }}>
            <span>● ADMIN MANAGEMENT PORTAL</span>
          </Box>
          <Typography component="h1" sx={{ fontSize: { xs: "1.9rem", sm: "2.5rem" }, fontFamily: "'Instrument Serif', serif", fontWeight: 700, color: "#1a1a1a", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
            Platform Operations & Account Management
          </Typography>
          <Typography sx={{ color: "#64748b", fontSize: "0.96rem", mt: 0.5, fontWeight: 500 }}>
            Oversee student enrollments, assign faculty courses, review curriculum submissions, and provision new accounts.
          </Typography>
        </Box>

        <Stack direction="row" spacing={2} alignItems="center">
          <Button
            variant="outlined"
            onClick={() => fetchDashboard(true)}
            disabled={refreshing}
            sx={{
              textTransform: "none",
              fontWeight: 600,
              fontSize: "0.82rem",
              borderColor: "rgba(0,0,0,0.15)",
              color: "#1a1a1a",
              borderRadius: "50px",
              px: 2.5,
              py: 1.2,
              "&:hover": { bgcolor: "rgba(0,0,0,0.04)", borderColor: "#1a1a1a" }
            }}
          >
            {refreshing ? "Updating..." : "Refresh Data"}
          </Button>

          <Button
            variant="contained"
            onClick={() => setCreateDialogOpen(true)}
            startIcon={<PersonAddAlt1RoundedIcon />}
            sx={{
              bgcolor: "#1a1a1a",
              color: "#ffffff",
              fontWeight: 700,
              textTransform: "none",
              fontSize: "0.85rem",
              px: 3,
              py: 1.2,
              borderRadius: "50px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              display: "flex",
              alignItems: "center",
              "&:hover": { bgcolor: "#000000", transform: "translateY(-1px)", boxShadow: "0 6px 16px rgba(0,0,0,0.2)" }
            }}
          >
            <span style={{ display: "inline-block", width: 7, height: 7, borderRadius: "50%", backgroundColor: "#9fff00", marginRight: 2 }} />
            Create User Account
          </Button>
        </Stack>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 3, borderRadius: "10px" }}>
          {error}
        </Alert>
      )}

      {/* Overview Grid - Styled identically to marketing website feature cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {statMeta.map(({ key, label, color, icon, path }) => (
          <Grid item xs={12} sm={6} md={3} key={key}>
            <Card 
              elevation={0} 
              onClick={() => path && navigate(path)}
              sx={{ 
                borderRadius: "14px", 
                border: "1px solid rgba(0,0,0,0.08)", 
                bgcolor: "#ffffff", 
                cursor: path ? "pointer" : "default",
                transition: "all 0.2s",
                height: "100%",
                boxShadow: "0 4px 16px rgba(0,0,0,0.02)",
                "&:hover": { 
                  transform: path ? "translateY(-3px)" : "none", 
                  borderColor: path ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.08)",
                  boxShadow: path ? "0 12px 24px rgba(0,0,0,0.06)" : "0 4px 16px rgba(0,0,0,0.02)"
                } 
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1.5 }}>
                  <Typography sx={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", color: "#64748b", letterSpacing: "0.05em", fontFamily: "'Work Sans', sans-serif" }}>
                    {label}
                  </Typography>
                  <Box sx={{ color }}>{icon}</Box>
                </Stack>
                <Typography sx={{ fontSize: "2.2rem", fontWeight: 700, color: "#1a1a1a", fontFamily: "'Instrument Serif', serif" }}>
                  {key === "revenue" ? `₹${values[key].toLocaleString()}` : values[key].toLocaleString()}
                </Typography>
                {path && (
                  <Typography sx={{ fontSize: "0.78rem", color: "#2563eb", fontWeight: 600, mt: 1.5, display: "inline-block" }}>
                    View management page →
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <CreateUserDialog
        open={createDialogOpen}
        onClose={() => setCreateDialogOpen(false)}
        onSuccess={() => fetchDashboard(true)}
      />
    </Box>
  );
}
