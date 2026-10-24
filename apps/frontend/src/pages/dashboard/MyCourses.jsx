import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import { getUserDashboard } from "../../services/userServices";
import CourseSkeleton from "../../components/skeletons/CourseSkeleton";

export default function MyCourses() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [retryKey, setRetryKey] = useState(0);

  useEffect(() => {
    let active = true;

    const loadData = async () => {
      setLoading(true);
      setLoadError("");
      try {
        const dashboard = await getUserDashboard();
        if (active) {
          setEnrolledCourses(
            Array.isArray(dashboard?.enrolledCourses) ? dashboard.enrolledCourses : []
          );
        }
      } catch (error) {
        if (active) {
          setLoadError(
            error?.normalized?.message ||
              error?.response?.data?.message ||
              "We couldn't load your enrolled courses. Check your connection and try again."
          );
        }
      } finally {
        if (active) setLoading(false);
      }
    };

    loadData();
    return () => {
      active = false;
    };
  }, [retryKey]);

  if (loading) {
    return (
      <Box>
        <Typography variant="h4" sx={{ mb: 3.2 }}>My Courses</Typography>
        <Grid container spacing={2.5}>
          {[1, 2, 3].map((item) => (
            <Grid key={item} size={{ xs: 12, sm: 6, lg: 4 }}>
              <CourseSkeleton />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 2,
          mb: 3.2,
        }}
      >
        <Box>
          <Typography variant="h4" sx={{ mb: 0.6 }}>My Courses</Typography>
          <Typography color="text.secondary">
            Continue your enrolled programs and review your lesson progress.
          </Typography>
        </Box>
        <Button
          component={RouterLink}
          to="/courses"
          variant="outlined"
          sx={{ minHeight: 44, textTransform: "none", borderRadius: 2.5 }}
        >
          Browse course catalogue
        </Button>
      </Box>

      {loadError ? (
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
      ) : enrolledCourses.length === 0 ? (
        <Card
          elevation={0}
          sx={{
            border: "1px solid #e2e8f0",
            borderRadius: 3,
            textAlign: "center",
            p: { xs: 3, sm: 5 },
            bgcolor: "#fff",
          }}
        >
          <Box
            aria-hidden="true"
            sx={{
              width: 54,
              height: 54,
              mx: "auto",
              mb: 2,
              borderRadius: 3,
              bgcolor: "#eef2ff",
              color: "#3659D9",
              display: "grid",
              placeItems: "center",
              fontSize: "1.5rem",
            }}
          >
            ↗
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            Your learning journey starts here
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 520, mx: "auto", mt: 1 }}>
            There are no active course enrolments on your account yet. Browse the catalogue to
            explore workshops, campus training, and capstone mentoring options.
          </Typography>
          <Button
            component={RouterLink}
            to="/courses"
            variant="contained"
            sx={{ mt: 3, minHeight: 44, borderRadius: 2.5, textTransform: "none" }}
          >
            Explore courses <span aria-hidden="true">→</span>
          </Button>
        </Card>
      ) : (
        <>
          <Grid container spacing={2.2}>
            {enrolledCourses.map((course) => {
              const progress = Math.max(0, Math.min(100, Number(course.progress ?? 0)));
              const coursePath = `/dashboard/my-courses/${course.id}`;

              return (
                <Grid key={course.id} size={{ xs: 12, md: 6, xl: 4 }}>
                  <Card
                    elevation={0}
                    sx={{
                      borderRadius: 3,
                      border: "1px solid #e2e8f0",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      bgcolor: "#fff",
                      transition: "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        borderColor: "#cbd5e1",
                        boxShadow: "0 12px 28px rgba(15,23,42,0.06)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 2.6, flexGrow: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.4 }}>
                        {course.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2.2 }}>
                        Instructor: {course.instructor || "Not assigned"}
                      </Typography>
                      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 0.8 }}>
                        <Typography variant="body2" color="text.secondary">Lesson progress</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 800, fontVariantNumeric: "tabular-nums" }}>
                          {progress}%
                        </Typography>
                      </Stack>
                      <LinearProgress
                        variant="determinate"
                        value={progress}
                        aria-label={`${course.title} lesson progress`}
                        sx={{
                          height: 9,
                          borderRadius: 999,
                          bgcolor: "#e2e8f0",
                          "& .MuiLinearProgress-bar": { borderRadius: 999, bgcolor: "#3659D9" },
                        }}
                      />
                    </CardContent>
                    <CardActions sx={{ px: 2.6, pb: 2.6, pt: 0 }}>
                      <Button
                        component={RouterLink}
                        to={coursePath}
                        variant="contained"
                        fullWidth
                        sx={{ borderRadius: 2.5, textTransform: "none", minHeight: 44 }}
                      >
                        Continue learning <span aria-hidden="true">→</span>
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
          <Box
            sx={{
              mt: 3,
              p: { xs: 2.5, sm: 3 },
              borderRadius: 3,
              border: "1px solid #e2e8f0",
              bgcolor: "#fff",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: 800, mb: 0.4 }}>Looking for another program?</Typography>
              <Typography variant="body2" color="text.secondary">
                Browse the full catalogue separately from your current enrolments.
              </Typography>
            </Box>
            <Button
              component={RouterLink}
              to="/courses"
              variant="outlined"
              sx={{ minHeight: 44, textTransform: "none" }}
            >
              Browse course catalogue
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}
