import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Alert, Box, Button, Card, CardContent, CircularProgress, Grid, Stack, Typography } from "@mui/material";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import { getUserDashboard, getStudentSessions, getMyAttendance, markSessionAttendance } from "../../services/userServices";
import useToast from "../../hooks/useToast";

const attendanceTone = {
  Present: { background: "#14251c", foreground: "#c7f36b", label: "Present" },
  Absent: { background: "#fff1f0", foreground: "#b42318", label: "Absent" },
  Cancelled: { background: "#f1f5f9", foreground: "#64748b", label: "Cancelled" },
  Upcoming: { background: "#eef4ff", foreground: "#3659d9", label: "Upcoming" },
};

export default function UserDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [sessions, setSessions] = useState([]);
  const [attendance, setAttendance] = useState(null);
  const [marking, setMarking] = useState(null);
  const [retryKey, setRetryKey] = useState(0);
  const { showToast } = useToast();

  useEffect(() => {
    let active = true;

    const loadDashboard = async () => {
      setLoading(true);
      setLoadError("");
      try {
        const [dashboardData, sessionsData, attendanceData] = await Promise.all([
          getUserDashboard(),
          getStudentSessions(),
          getMyAttendance().catch((error) => {
            console.error(
              "Attendance summary unavailable:",
              error?.response?.status || error?.name || "unknown"
            );
            return null;
          }),
        ]);

        if (!active) return;
        setData(dashboardData || null);
        setSessions(Array.isArray(sessionsData) ? sessionsData : []);
        setAttendance(
          attendanceData && Array.isArray(attendanceData.records) && attendanceData.stats
            ? attendanceData
            : null
        );
      } catch (error) {
        if (active) {
          setLoadError(
            error?.normalized?.message ||
              error?.response?.data?.message ||
              "We couldn't load your learning dashboard. Check your connection and try again."
          );
        }
      } finally {
        if (active) setLoading(false);
      }
    };

    loadDashboard();
    return () => {
      active = false;
    };
  }, [retryKey]);

  const handleMarkAttendance = async (sessionId) => {
    setMarking(sessionId);
    try {
      await markSessionAttendance(sessionId);
      const [nextSessions, nextAttendance] = await Promise.all([
        getStudentSessions(),
        getMyAttendance(),
      ]);
      setSessions(Array.isArray(nextSessions) ? nextSessions : []);
      setAttendance(
        nextAttendance && Array.isArray(nextAttendance.records) && nextAttendance.stats
          ? nextAttendance
          : null
      );
      showToast("Attendance marked successfully.", "success");
    } catch (error) {
      showToast(
        error?.normalized?.message ||
          error?.response?.data?.message ||
          "Could not mark attendance. Try again when the session is live.",
        "error"
      );
    } finally {
      setMarking(null);
    }
  };

  if (loading) {
    return (
      <Stack direction="row" spacing={2} alignItems="center" sx={{ py: 6, px: 2 }}>
        <CircularProgress size={24} sx={{ color: "#1a1a1a" }} />
        <Typography sx={{ fontWeight: 600, color: "#64748b", fontFamily: "'Work Sans', sans-serif" }}>
          Loading your learning dashboard…
        </Typography>
      </Stack>
    );
  }

  if (loadError) {
    return (
      <Box sx={{ py: 2 }}>
        <Alert
          severity="error"
          action={
            <Button color="inherit" onClick={() => setRetryKey((value) => value + 1)}>
              Retry
            </Button>
          }
        >
          {loadError}
        </Alert>
      </Box>
    );
  }

  const stats = data?.stats || {};
  const courses = Array.isArray(data?.enrolledCourses) ? data.enrolledCourses : [];
  const upcomingSessions =
    stats.upcomingSessions ??
    sessions.filter((session) => session.status === "scheduled" || session.status === "live").length;
  const attendanceRate =
    typeof attendance?.stats?.attendanceRate === "number"
      ? `${attendance.stats.attendanceRate}%`
      : "—";

  const statCards = [
    {
      title: "Enrolled Programs",
      value: stats.totalEnrolled ?? courses.length,
      caption: "Active course enrolments",
      icon: <MenuBookRoundedIcon sx={{ color: "#3659D9" }} />,
    },
    {
      title: "Completed Courses",
      value: stats.completedCourses ?? 0,
      caption: "Based on completed lessons",
      icon: <CheckCircleRoundedIcon sx={{ color: "#16805d" }} />,
    },
    {
      title: "Ongoing Courses",
      value: stats.ongoingCourses ?? 0,
      caption: "Programs still in progress",
      icon: <CodeRoundedIcon sx={{ color: "#6d5ce7" }} />,
    },
    {
      title: "Upcoming Sessions",
      value: upcomingSessions,
      caption: "Scheduled or live sessions",
      icon: <EventAvailableRoundedIcon sx={{ color: "#0e7490" }} />,
    },
  ];

  const liveSessions = sessions.filter((session) => session.status === "live");
  const recentAttendance = (attendance?.records || []).slice(0, 7).reverse();

  return (
    <Box sx={{ pb: 6 }}>
      <Box
        sx={{
          mb: 4,
          pb: 3,
          borderBottom: "1px solid rgba(0,0,0,0.08)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Box>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              bgcolor: "#101828",
              color: "#C7F36B",
              px: 2,
              py: 0.65,
              borderRadius: 99,
              fontSize: "0.72rem",
              fontWeight: 800,
              mb: 1.5,
              letterSpacing: "0.08em",
            }}
          >
            <span aria-hidden="true">●</span>
            STUDENT LEARNING DASHBOARD
          </Box>
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "1.9rem", sm: "2.5rem" },
              fontFamily: "'Instrument Serif', serif",
              fontWeight: 700,
              color: "#101828",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            Develop engineers who can create value independently.
          </Typography>
          <Typography sx={{ color: "#64748b", fontSize: "0.96rem", mt: 0.8, fontWeight: 500, maxWidth: "700px" }}>
            Review your enrolments, course progress, live sessions, and recorded attendance.
          </Typography>
        </Box>
        <Button
          component={RouterLink}
          to="/dashboard/my-courses"
          variant="contained"
          sx={{
            bgcolor: "#101828",
            color: "#ffffff",
            fontWeight: 700,
            textTransform: "none",
            px: 3.5,
            py: 1.4,
            minHeight: 44,
            borderRadius: 50,
            boxShadow: "none",
            "&:hover": { bgcolor: "#1A2335", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" },
          }}
        >
          Go to My Courses <span aria-hidden="true">→</span>
        </Button>
      </Box>

      <Grid container spacing={2.2} sx={{ mb: 4 }}>
        {statCards.map((card) => (
          <Grid key={card.title} size={{ xs: 12, sm: 6, xl: 3 }}>
            <Card
              elevation={0}
              sx={{
                height: "100%",
                borderRadius: 3,
                border: "1px solid rgba(0,0,0,0.08)",
                bgcolor: "#fff",
                transition: "transform 180ms ease, box-shadow 180ms ease",
                "&:hover": { transform: "translateY(-2px)", boxShadow: "0 12px 28px rgba(15,23,42,0.06)" },
              }}
            >
              <CardContent sx={{ p: 2.7 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                  <Typography sx={{ fontSize: "0.76rem", fontWeight: 800, textTransform: "uppercase", color: "#64748b", letterSpacing: "0.05em", fontFamily: "'Work Sans', sans-serif" }}>
                    {card.title}
                  </Typography>
                  {card.icon}
                </Stack>
                <Typography sx={{ fontSize: "2.25rem", fontWeight: 800, color: "#101828", lineHeight: 1.1, fontVariantNumeric: "tabular-nums" }}>
                  {card.value}
                </Typography>
                <Typography sx={{ mt: 1, fontSize: "0.76rem", color: "#64748b", lineHeight: 1.4 }}>
                  {card.caption}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {liveSessions.length > 0 && (
        <Card
          elevation={0}
          sx={{
            borderRadius: 3,
            border: "1px solid rgba(199,243,107,0.55)",
            mb: 4,
            bgcolor: "#fff",
            boxShadow: "0 10px 28px rgba(15,23,42,0.04)",
          }}
        >
          <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
            <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 3 }}>
              <Box sx={{ width: 9, height: 9, borderRadius: "50%", bgcolor: "#C7F36B", border: "1px solid #101828" }} />
              <Typography sx={{ fontWeight: 800, fontSize: "1.05rem", color: "#101828", fontFamily: "'Instrument Serif', serif" }}>
                Live classroom and lab sessions
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
                  sx={{ bgcolor: "#f8f9fa", p: { xs: 2, sm: 2.5 }, borderRadius: 2, border: "1px solid rgba(0,0,0,0.06)" }}
                >
                  <Box>
                    <Typography sx={{ fontWeight: 800, fontSize: "1rem", color: "#101828" }}>{session.title}</Typography>
                    <Typography variant="body2" sx={{ color: "#475569", mt: 0.5 }}>
                      {session.course_title} · Instructor: {session.instructor_name}
                    </Typography>
                    {session.scheduled_at && (
                      <Typography variant="caption" sx={{ display: "block", color: "#64748b", mt: 0.5 }}>
                        {new Date(session.scheduled_at).toLocaleString("en-IN")}
                      </Typography>
                    )}
                  </Box>
                  <Button
                    variant="contained"
                    onClick={() => handleMarkAttendance(session.id)}
                    disabled={Boolean(session.is_present) || marking === session.id}
                    sx={{
                      textTransform: "none",
                      fontWeight: 800,
                      px: 2.5,
                      py: 1.1,
                      minHeight: 44,
                      borderRadius: 2.5,
                      bgcolor: session.is_present ? "#16805d" : "#101828",
                      color: session.is_present ? "#ffffff" : "#C7F36B",
                      "&:hover": { bgcolor: "#1A2335" },
                      "&.Mui-disabled": { bgcolor: "#e2e8f0", color: "#64748b" },
                    }}
                  >
                    {session.is_present ? "Attendance recorded" : marking === session.id ? "Saving…" : "Mark present"}
                  </Button>
                </Stack>
              ))}
            </Stack>
          </CardContent>
        </Card>
      )}

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 7 }}>
          <Card elevation={0} sx={{ borderRadius: 3, border: "1px solid rgba(0,0,0,0.08)", bgcolor: "#fff", height: "100%" }}>
            <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
              <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems={{ xs: "flex-start", sm: "center" }} spacing={1.5} sx={{ mb: 2.5 }}>
                <Typography sx={{ fontSize: "1.35rem", fontWeight: 800, color: "#101828", fontFamily: "'Instrument Serif', serif" }}>
                  Recent attendance
                </Typography>
                <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, fontSize: "0.75rem", fontWeight: 800, px: 2, py: 0.8, bgcolor: attendance ? "#ecfdf3" : "#f1f5f9", color: attendance ? "#166534" : "#64748b", borderRadius: 99 }}>
                  {attendance ? `${attendanceRate} recorded attendance` : "Attendance unavailable"}
                </Box>
              </Stack>
              <Typography sx={{ fontSize: "0.87rem", color: "#64748b", mb: 3, lineHeight: 1.6 }}>
                This summary is based on the sessions recorded by your institution. Open the attendance page for complete session history.
              </Typography>

              {recentAttendance.length === 0 ? (
                <Box sx={{ border: "1px dashed #cbd5e1", borderRadius: 2.5, p: 3, textAlign: "center", bgcolor: "#f8fafc" }}>
                  <Typography sx={{ fontWeight: 700, color: "#334155" }}>
                    {attendance ? "No session records yet" : "Attendance summary unavailable"}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#64748b", mt: 0.6 }}>
                    {attendance ? "Attendance will appear here after sessions have been scheduled." : "Check again later or open the attendance page."}
                  </Typography>
                </Box>
              ) : (
                <Grid container spacing={1.2}>
                  {recentAttendance.map((record) => {
                    const status = record.attendance_status || "Upcoming";
                    const tone = attendanceTone[status] || attendanceTone.Upcoming;
                    return (
                      <Grid key={record.session_id} size={{ xs: 6, sm: 4, md: "auto" }}>
                        <Box
                          title={record.session_title}
                          sx={{
                            minWidth: { md: 82 },
                            p: 1.5,
                            textAlign: "center",
                            borderRadius: 2,
                            bgcolor: tone.background,
                            color: tone.foreground,
                            border: "1px solid rgba(0,0,0,0.06)",
                          }}
                        >
                          <Typography sx={{ fontSize: "0.74rem", fontWeight: 800, display: "block" }}>
                            {new Date(record.scheduled_at).toLocaleDateString("en-IN", { weekday: "short", day: "2-digit" })}
                          </Typography>
                          <Typography sx={{ fontSize: "0.68rem", mt: 0.7, fontWeight: 700 }}>
                            {tone.label}
                          </Typography>
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              )}
              <Button component={RouterLink} to="/dashboard/attendance" variant="text" sx={{ mt: 2.5, px: 0, minHeight: 42, textTransform: "none", fontWeight: 800 }}>
                Open attendance history →
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, lg: 5 }}>
          <Card elevation={0} sx={{ borderRadius: 3, border: "1px solid rgba(255,255,255,0.1)", bgcolor: "#101828", color: "#fff", height: "100%" }}>
            <CardContent sx={{ p: { xs: 2.5, md: 3.5 }, display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", gap: 3 }}>
              <Box>
                <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, color: "#C7F36B", fontSize: "0.72rem", fontWeight: 800, textTransform: "uppercase", mb: 1.5, letterSpacing: "0.08em" }}>
                  <span aria-hidden="true">●</span> Final-year project support
                </Box>
                <Typography sx={{ fontSize: "1.45rem", fontWeight: 800, color: "#fff", fontFamily: "'Instrument Serif', serif", mb: 1.5 }}>
                  Build something you can explain.
                </Typography>
                <Typography sx={{ fontSize: "0.9rem", color: "#cbd5e1", lineHeight: 1.65 }}>
                  Explore project mentoring options, expected deliverables, and the steps involved in preparing a capstone for a clear technical demonstration.
                </Typography>
              </Box>
              <Button
                component={RouterLink}
                to="/final-year-projects"
                variant="contained"
                fullWidth
                sx={{
                  py: 1.5,
                  minHeight: 46,
                  bgcolor: "#C7F36B",
                  color: "#101828",
                  fontWeight: 800,
                  fontSize: "0.85rem",
                  borderRadius: 2.5,
                  textTransform: "none",
                  "&:hover": { bgcolor: "#d9fb88" },
                }}
              >
                Explore project mentoring <span aria-hidden="true">→</span>
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
