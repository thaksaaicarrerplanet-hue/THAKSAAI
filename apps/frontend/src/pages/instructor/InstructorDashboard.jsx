import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PeopleIcon from "@mui/icons-material/People";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { getInstructorStats } from "../../services/instructorService.js";

const statMeta = [
  { key: "totalCourses", label: "Active Courses", color: "#1a1a1a", icon: <MenuBookIcon fontSize="small" /> },
  { key: "totalStudents", label: "Enrolled Students", color: "#16a34a", icon: <PeopleIcon fontSize="small" /> },
  { key: "totalRevenue", label: "Program Revenue", color: "#2563eb", icon: <AttachMoneyIcon fontSize="small" /> },
];

export default function InstructorDashboard() {
  const [stats, setStats] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  const fetchStats = useCallback(async (isBackgroundRefresh = false) => {
    try {
      if (isBackgroundRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }
      setError("");
      const data = await getInstructorStats();
      setStats(data?.stats || null);
      setCourses(data?.courseStats || []);
    } catch (requestError) {
      setError(requestError?.response?.data?.message || "Could not load instructor dashboard data.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchStats().catch(console.error);
    const intervalId = setInterval(() => fetchStats(true), 20000);
    const onFocus = () => fetchStats(true);
    window.addEventListener("focus", onFocus);
    return () => {
      clearInterval(intervalId);
      window.removeEventListener("focus", onFocus);
    };
  }, [fetchStats]);

  const normalizedStats = useMemo(() => ({
    totalCourses: Number(stats?.totalCourses || 0),
    totalStudents: Number(stats?.totalStudents || 0),
    totalRevenue: Number(stats?.totalRevenue || 0),
  }), [stats]);

  if (loading) {
    return (
      <Stack direction="row" spacing={2} alignItems="center" sx={{ py: 6, px: 2 }}>
        <CircularProgress size={24} sx={{ color: "#1a1a1a" }} />
        <Typography sx={{ fontWeight: 600, color: "#64748b", fontFamily: "'Work Sans', sans-serif" }}>
          Loading instructor records...
        </Typography>
      </Stack>
    );
  }

  return (
    <Box sx={{ pb: 6 }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", mb: 4, pb: 2.5, borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
        <Box>
          <Typography component="h1" sx={{ fontSize: { xs: "1.8rem", sm: "2.4rem" }, fontFamily: "'Instrument Serif', serif", fontWeight: 700, color: "#1a1a1a", letterSpacing: "-0.02em" }}>
            Instructor Dashboard
          </Typography>
          <Typography sx={{ color: "#64748b", fontSize: "0.96rem", mt: 0.5, fontWeight: 400 }}>
            Manage your courses, view student rosters, and record attendance for your classroom training sessions.
          </Typography>
        </Box>
        <Button 
          size="small" 
          variant="outlined" 
          onClick={() => fetchStats(true)} 
          disabled={refreshing}
          sx={{ 
            textTransform: "uppercase", 
            fontWeight: 700, 
            fontSize: "0.75rem",
            letterSpacing: "0.05em",
            borderColor: "#1a1a1a",
            color: "#1a1a1a",
            px: 2.5,
            py: 0.8,
            mt: { xs: 2, sm: 0 },
            "&:hover": { bgcolor: "rgba(0,0,0,0.05)", borderColor: "#000000" }
          }}
        >
          {refreshing ? "Refreshing..." : "Refresh Data"}
        </Button>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {/* KPI Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {statMeta.map(({ key, label, icon }) => (
          <Grid item xs={12} sm={6} md={4} key={key}>
            <Card elevation={0} sx={{ borderRadius: "12px", border: "1px solid rgba(0,0,0,0.08)", bgcolor: "#ffffff", transition: "transform 0.2s", "&:hover": { transform: "translateY(-2px)", borderColor: "rgba(0,0,0,0.15)" } }}>
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1.5 }}>
                  <Typography sx={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", color: "#64748b", letterSpacing: "0.05em" }}>
                    {label}
                  </Typography>
                  {icon}
                </Stack>
                <Typography sx={{ fontSize: "2rem", fontWeight: 700, color: "#1a1a1a", fontFamily: "'Instrument Serif', serif" }}>
                  {key === "totalRevenue" ? `₹${normalizedStats[key].toLocaleString()}` : normalizedStats[key].toLocaleString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Courses Overview Table */}
      <Card elevation={0} sx={{ borderRadius: "12px", border: "1px solid rgba(0,0,0,0.08)", bgcolor: "#ffffff" }}>
        <CardContent sx={{ p: { xs: 2.5, sm: 3.5 } }}>
          <Typography component="h2" sx={{ fontSize: "1.25rem", fontFamily: "'Instrument Serif', serif", fontWeight: 700, color: "#1a1a1a", mb: 2.5 }}>
            Course Overview
          </Typography>
          {courses.length === 0 ? (
            <Box sx={{ textAlign: "center", py: 4, bgcolor: "#EDEEF5", borderRadius: "8px", border: "1px dashed rgba(0,0,0,0.1)" }}>
              <Typography sx={{ color: "#64748b", fontWeight: 500 }}>
                No active courses assigned to your account yet.
              </Typography>
            </Box>
          ) : (
            <TableContainer>
              <Table sx={{ minWidth: 600 }}>
                <TableHead sx={{ bgcolor: "#EDEEF5" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", color: "#475569", py: 1.5 }}>Course Name</TableCell>
                    <TableCell align="center" sx={{ fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", color: "#475569", py: 1.5 }}>Status</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", color: "#475569", py: 1.5 }}>Enrolled Students</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", color: "#475569", py: 1.5 }}>Course Fee</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", color: "#475569", py: 1.5 }}>Total Revenue</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {courses.map((course) => (
                    <TableRow key={course.id} sx={{ "&:hover": { bgcolor: "#f8f9fa" }, transition: "background 0.2s" }}>
                      <TableCell sx={{ fontWeight: 600, color: "#1a1a1a", py: 2 }}>{course.title || "Untitled Course"}</TableCell>
                      <TableCell align="center" sx={{ py: 2 }}>
                        <Chip
                          label={String(course.approval_status || "pending").toUpperCase()}
                          size="small"
                          sx={{
                            fontWeight: 700,
                            fontSize: "0.65rem",
                            bgcolor: course.approval_status === "approved" ? "#dcfce7" : "#fee2e2",
                            color: course.approval_status === "approved" ? "#166534" : "#991b1b",
                          }}
                        />
                      </TableCell>
                      <TableCell align="right" sx={{ fontWeight: 600, color: "#1a1a1a", py: 2 }}>{Number(course.students_count || 0)}</TableCell>
                      <TableCell align="right" sx={{ fontWeight: 600, color: "#64748b", py: 2 }}>₹{Number(course.price || 0).toLocaleString()}</TableCell>
                      <TableCell align="right" sx={{ fontWeight: 700, color: "#16a34a", py: 2 }}>₹{Number(course.revenue || 0).toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
