import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, CardContent, CircularProgress, Grid, Stack, Typography } from "@mui/material";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import { getUserDashboard, getStudentSessions, markSessionAttendance } from "../../services/userServices";
import useToast from "../../hooks/useToast";

export default function UserDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sessions, setSessions] = useState([]);
  const [marking, setMarking] = useState(null);
  const { showToast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    let active = true;
    const loadDashboard = async () => {
      try {
        const [dashboardData, sessionsData] = await Promise.all([
          getUserDashboard(),
          getStudentSessions(),
        ]);
        if (active) {
          setData(dashboardData);
          setSessions(sessionsData);
        }
      } catch (err) {
        console.error("Dashboard error:", err);
      } finally {
        if (active) setLoading(false);
      }
    };
    loadDashboard();
    return () => { active = false; };
  }, []);

  if (loading) {
    return (
      <Stack direction="row" spacing={2} alignItems="center" sx={{ py: 6, px: 2 }}>
        <CircularProgress size={24} sx={{ color: "#1a1a1a" }} />
        <Typography sx={{ fontWeight: 600, color: "#64748b", fontFamily: "'Work Sans', sans-serif" }}>
          Loading your learning dashboard...
        </Typography>
      </Stack>
    );
  }

  const stats = data?.stats || {};
  const courses = data?.enrolledCourses || [];

  const statCards = [
    { title: "Enrolled Programs", value: stats.totalEnrolled || 2, icon: <MenuBookRoundedIcon sx={{ color: "#1a1a1a" }} /> },
    { title: "Completed Projects", value: stats.completedCourses || 1, icon: <CheckCircleRoundedIcon sx={{ color: "#16a34a" }} /> },
    { title: "Project Submissions", value: 34, icon: <CodeRoundedIcon sx={{ color: "#2563eb" }} /> },
    { title: "Attendance Rate", value: "94%", icon: <EventAvailableRoundedIcon sx={{ color: "#059669" }} /> },
  ];

  const handleMarkAttendance = async (sessionId) => {
    setMarking(sessionId);
    try {
      await markSessionAttendance(sessionId);
      showToast("Attendance marked successfully", "success");
      const sessionsData = await getStudentSessions();
      setSessions(sessionsData);
    } catch (err) {
      showToast(err.response?.data?.message || "Could not mark attendance", "error");
    } finally {
      setMarking(null);
    }
  };

  const liveSessions = sessions.filter((s) => s.status === "live");

  const attendanceCommitDays = [
    { day: "Mon", status: "present", hours: "4h Class" },
    { day: "Tue", status: "present", hours: "5h Lab" },
    { day: "Wed", status: "present", hours: "3h Project" },
    { day: "Thu", status: "excused", hours: "0h (Exam)" },
    { day: "Fri", status: "present", hours: "6h Workshop" },
    { day: "Sat", status: "present", hours: "4h Practice" },
    { day: "Sun", status: "rest", hours: "Self Study" },
  ];

  return (
    <Box sx={{ pb: 6 }}>
      {/* Simple Header Banner */}
      <Box sx={{ mb: 5, pb: 3, borderBottom: "1px solid rgba(0,0,0,0.08)", display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 2 }}>
        <Box>
          <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, bgcolor: "#1a1a1a", color: "#9fff00", px: 2, py: 0.5, borderRadius: "20px", fontSize: "0.75rem", fontWeight: 700, mb: 1.5 }}>
            <span>● STUDENT LEARNING DASHBOARD</span>
          </Box>
          <Typography component="h1" sx={{ fontSize: { xs: "1.9rem", sm: "2.5rem" }, fontFamily: "'Instrument Serif', serif", fontWeight: 700, color: "#1a1a1a", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
            Develop engineers who can create value independently.
          </Typography>
          <Typography sx={{ color: "#64748b", fontSize: "0.96rem", mt: 0.8, fontWeight: 500, maxWidth: "700px" }}>
            View your active courses, check your attendance history, and upload your coding assignments and projects.
          </Typography>
        </Box>
        <Button
          variant="contained"
          onClick={() => navigate("/dashboard/my-courses")}
          sx={{
            bgcolor: "#1a1a1a",
            color: "#ffffff",
            fontWeight: 700,
            textTransform: "none",
            px: 3.5,
            py: 1.4,
            borderRadius: "50px",
            boxShadow: "none",
            "&:hover": { bgcolor: "#000000", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }
          }}
        >
          Go to My Courses →
        </Button>
      </Box>

      {/* KPI Cards */}
      <Grid container spacing={3} sx={{ mb: 5 }}>
        {statCards.map((card, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Card elevation={0} sx={{ borderRadius: "12px", border: "1px solid rgba(0,0,0,0.08)", bgcolor: "#ffffff", height: "100%", transition: "transform 0.2s", "&:hover": { transform: "translateY(-2px)", borderColor: "rgba(0,0,0,0.15)" } }}>
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                  <Typography sx={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", color: "#64748b", letterSpacing: "0.05em", fontFamily: "'Work Sans', sans-serif" }}>
                    {card.title}
                  </Typography>
                  {card.icon}
                </Stack>
                <Typography sx={{ fontSize: "2.1rem", fontWeight: 700, color: "#1a1a1a", fontFamily: "'Instrument Serif', serif" }}>
                  {card.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Today's Live Classes */}
      {liveSessions.length > 0 && (
        <Card elevation={0} sx={{ borderRadius: "14px", border: "1px solid rgba(0,0,0,0.12)", mb: 5, bgcolor: "#ffffff", boxShadow: "0 8px 24px rgba(0,0,0,0.04)" }}>
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 3 }}>
              <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#9fff00", border: "1px solid #1a1a1a" }} />
              <Typography sx={{ fontWeight: 700, fontSize: "1.2rem", color: "#1a1a1a", fontFamily: "'Instrument Serif', serif", textTransform: "uppercase", letterSpacing: "0.03em" }}>
                Live Classroom & Lab Sessions In Progress
              </Typography>
            </Stack>
            <Stack spacing={2}>
              {liveSessions.map((session) => (
                <Stack
                  key={session.id}
                  direction={{ xs: "column", sm: "row" }}
                  justifyContent="space-between"
                  alignItems={{ xs: "flex-start", sm: "center" }}
                  spacing={2}
                  sx={{ bgcolor: "#f8f9fa", p: 3, borderRadius: "10px", border: "1px solid rgba(0,0,0,0.06)" }}
                >
                  <Box>
                    <Typography sx={{ fontWeight: 700, fontSize: "1.1rem", color: "#1a1a1a" }}>{session.title}</Typography>
                    <Typography variant="body2" sx={{ color: "#475569", mt: 0.5, fontWeight: 500 }}>
                      {session.course_title} • Instructor: {session.instructor_name}
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    onClick={() => handleMarkAttendance(session.id)}
                    disabled={session.is_present || marking === session.id}
                    sx={{
                      textTransform: "uppercase",
                      fontWeight: 700,
                      px: 3,
                      py: 1.2,
                      borderRadius: "50px",
                      fontSize: "0.75rem",
                      bgcolor: session.is_present ? "#16a34a" : "#1a1a1a",
                      color: session.is_present ? "#ffffff" : "#9fff00",
                      "&:hover": { bgcolor: "#000000" },
                      "&.Mui-disabled": { bgcolor: "#e2e8f0", color: "#64748b" }
                    }}
                  >
                    {session.is_present ? "✓ Attendance Recorded" : marking === session.id ? "Saving..." : "Mark Present →"}
                  </Button>
                </Stack>
              ))}
            </Stack>
          </CardContent>
        </Card>
      )}

      {/* Attendance & Projects Section */}
      <Grid container spacing={4}>
        <Grid item xs={12} lg={7}>
          <Card elevation={0} sx={{ borderRadius: "14px", border: "1px solid rgba(0,0,0,0.08)", bgcolor: "#ffffff", h: "100%" }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                <Typography sx={{ fontSize: "1.4rem", fontWeight: 700, color: "#1a1a1a", fontFamily: "'Instrument Serif', serif" }}>
                  Recent Classroom & Lab Attendance
                </Typography>
                <Box sx={{ fontSize: "0.75rem", fontWeight: 700, px: 2.5, py: 0.5, bgcolor: "#dcfce7", color: "#166534", borderRadius: "20px" }}>
                  94% Attendance Rate
                </Box>
              </Box>
              <Typography sx={{ fontSize: "0.85rem", color: "#64748b", mb: 3.5, lineHeight: 1.6 }}>
                To earn graduation certificates and receive job interview referrals, students are required to keep an overall attendance rate of 85% or higher across all classes and labs.
              </Typography>

              <Grid container spacing={1.5}>
                {attendanceCommitDays.map((item, idx) => (
                  <Grid item xs={12/7} key={idx}>
                    <Box sx={{
                      p: 1.5,
                      textAlign: "center",
                      borderRadius: "8px",
                      bgcolor: item.status === "present" ? "#1a1a1a" : item.status === "excused" ? "#fef3c7" : "#f1f5f9",
                      color: item.status === "present" ? "#9fff00" : item.status === "excused" ? "#92400e" : "#64748b",
                      border: "1px solid rgba(0,0,0,0.06)"
                    }}>
                      <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", display: "block" }}>
                        {item.day}
                      </Typography>
                      <Typography sx={{ fontSize: "0.65rem", mt: 0.5, opacity: 0.9, color: item.status === "present" ? "#ffffff" : "inherit" }}>
                        {item.hours}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} lg={5}>
          <Card elevation={0} sx={{ borderRadius: "14px", border: "1px solid rgba(0,0,0,0.08)", bgcolor: "#1a1a1a", color: "#ffffff", h: "100%" }}>
            <CardContent sx={{ p: 4, display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
              <Box>
                <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, color: "#9fff00", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", mb: 1.5 }}>
                  <span>● REAL-WORLD PROJECTS</span>
                </Box>
                <Typography sx={{ fontSize: "1.4rem", fontWeight: 700, color: "#ffffff", fontFamily: "'Instrument Serif', serif", mb: 1.5 }}>
                  Final-Year Project Workspace
                </Typography>
                <Typography sx={{ fontSize: "0.85rem", color: "#cbd5e1", lineHeight: 1.6, mb: 4 }}>
                  Work directly with experienced software engineers to code, design, and launch your working project application. Receive personalized feedback and code review every week.
                </Typography>
              </Box>
              <Button
                onClick={() => navigate("/dashboard/my-courses")}
                sx={{
                  w: "100%",
                  py: 1.6,
                  bgcolor: "#9fff00",
                  color: "#1a1a1a",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  borderRadius: "50px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  "&:hover": { bgcolor: "#ffffff" }
                }}
              >
                Open Project Studio →
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
