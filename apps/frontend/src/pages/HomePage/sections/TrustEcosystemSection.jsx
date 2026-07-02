import { Box, Container, Typography, Grid, Paper, Stack } from "@mui/material";
import MemoryRoundedIcon from "@mui/icons-material/MemoryRounded";
import CloudQueueRoundedIcon from "@mui/icons-material/CloudQueueRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import RecordVoiceOverRoundedIcon from "@mui/icons-material/RecordVoiceOverRounded";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import HandymanRoundedIcon from "@mui/icons-material/HandymanRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";

const domains = [
  { name: "AI & Machine Learning", icon: MemoryRoundedIcon },
  { name: "Cloud Computing", icon: CloudQueueRoundedIcon },
  { name: "DevOps", icon: TerminalRoundedIcon },
  { name: "Cybersecurity", icon: SecurityRoundedIcon },
  { name: "Data Analytics", icon: AnalyticsRoundedIcon },
  { name: "Software Development", icon: CodeRoundedIcon },
  { name: "Web Development", icon: LanguageRoundedIcon },
  { name: "System Design", icon: AccountTreeRoundedIcon },
  { name: "Career Readiness", icon: BusinessCenterRoundedIcon },
  { name: "Interview Preparation", icon: SupportAgentRoundedIcon },
  { name: "Project Development", icon: RocketLaunchRoundedIcon },
  { name: "Professional Communication", icon: RecordVoiceOverRoundedIcon },
];

const journeySteps = [
  { title: "Learn" },
  { title: "Practice" },
  { title: "Build" },
  { title: "Mentorship" },
  { title: "Placement Readiness" },
  { title: "Career Growth" },
];

const features = [
  {
    title: "Industry Exposure",
    desc: "Real-world workshops guided by professionals.",
    icon: WorkspacePremiumRoundedIcon,
  },
  {
    title: "Practical Learning",
    desc: "Projects and implementation over theory.",
    icon: HandymanRoundedIcon,
  },
  {
    title: "Career Transformation",
    desc: "Structured preparation for industry expectations.",
    icon: TrendingUpRoundedIcon,
  },
];

export default function TrustEcosystemSection() {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #090E17, #0F172A)",
        py: { xs: 10, md: 15 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {/* Header Section */}
        <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
          <Typography
            sx={{
              fontSize: "14px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#818CF8", // slightly lighter indigo for dark mode
              fontWeight: 600,
              mb: 2,
            }}
          >
            TRUSTED LEARNING ECOSYSTEM
          </Typography>
          <Typography
            variant="h2"
            sx={{

              fontWeight: 700,
              color: "#F8FAFC",
              mb: 3,
              lineHeight: 1.2,
            }}
          >
            Built Around The Skills Modern Companies Demand
          </Typography>
          <Typography
            sx={{
              color: "#94A3B8",
              maxWidth: "700px",
              mx: "auto",
              fontSize: "18px",
              lineHeight: 1.6,
            }}
          >
            Students learn through practical exposure across high-demand domains
            that align with today's technology landscape and hiring ecosystem.
          </Typography>
        </Box>

        {/* PART 1 - TECHNOLOGY ECOSYSTEM */}
        <Box mb={{ xs: 8, md: 10 }}>
          <Grid container spacing={2}>
            {domains.map((item, index) => {
              const Icon = item.icon;
              return (
                <Grid size={{ xs: 6, sm: 4, md: 3 }} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      height: "100%",
                      borderRadius: "20px",
                      background: "rgba(255, 255, 255, 0.03)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 10px 25px rgba(99, 102, 241, 0.2)",
                        borderColor: "rgba(99, 102, 241, 0.4)",
                        background: "rgba(255, 255, 255, 0.05)",
                        "& .MuiSvgIcon-root": {
                          color: "#818CF8",
                        },
                      },
                    }}
                  >
                    <Icon
                      sx={{
                        fontSize: 32,
                        color: "#64748B",
                        mb: 1.5,
                        transition: "color 0.3s ease",
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#E2E8F0",
                        lineHeight: 1.3,
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* PART 2 - LEARNING MODEL */}
        <Box mb={{ xs: 8, md: 12 }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 2, md: 0 }}
            alignItems="center"
            justifyContent="space-between"
            sx={{
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: "50%",
                left: { xs: "auto", md: "5%" },
                right: { xs: "auto", md: "5%" },
                height: { xs: "100%", md: "2px" },
                width: { xs: "2px", md: "auto" },
                background: "rgba(99, 102, 241, 0.2)",
                zIndex: 0,
                display: { xs: "block", md: "block" },
              },
            }}
          >
            {journeySteps.map((step, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  bgcolor: "transparent",
                  px: 2,
                  py: 1,
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "rgba(15, 23, 42, 0.8)",
                    backdropFilter: "blur(8px)",
                    border: "2px solid rgba(99, 102, 241, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 1,
                    color: "#818CF8",
                    fontWeight: 700,
                    fontSize: "16px",
                  }}
                >
                  {index + 1}
                </Box>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "15px",
                    color: "#F8FAFC",
                    textAlign: "center",
                  }}
                >
                  {step.title}
                </Typography>
                {/* Visual Arrow for mobile layout only */}
                {index < journeySteps.length - 1 && (
                  <ArrowDownwardRoundedIcon
                    sx={{
                      display: { xs: "block", md: "none" },
                      color: "#64748B",
                      mt: 1,
                    }}
                  />
                )}
              </Box>
            ))}
          </Stack>
        </Box>

        {/* PART 3 - TRUST METRICS BAR */}
        <Box mb={{ xs: 8, md: 10 }}>
          <Paper
            elevation={0}
            sx={{
              background: "rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(16px)",
              borderRadius: "24px",
              py: { xs: 4, md: 5 },
              px: { xs: 3, md: 6 },
              border: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
            }}
          >
            <Grid container spacing={3} justifyContent="space-between" alignItems="center">
              {[
                { value: "1000+", label: "Students Mentored" },
                { value: "40+", label: "Workshops Conducted" },
                { value: "50+", label: "CRT Programs" },
                { value: "500+", label: "Mentorship Sessions" },
                { value: "100+", label: "Projects Guided" },
              ].map((item, idx) => (
                <Grid size={{ xs: 6, sm: 4, md: "auto" }} key={idx}>
                  <Box textAlign="center">
                    <Typography
                      sx={{
                        fontSize: { xs: "28px", md: "36px" },
                        fontWeight: 700,
                        color: "#FFFFFF",
                        mb: 0.5,
                        lineHeight: 1,
                      }}
                    >
                      {item.value}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#94A3B8",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        fontWeight: 600,
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Box>

        {/* PART 4 - WHY IT WORKS */}
        <Grid container spacing={3}>
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Grid size={{ xs: 12, md: 4 }} key={idx}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: "24px",
                    background: "rgba(255, 255, 255, 0.03)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                    transition: "all 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 12px 30px rgba(0, 0, 0, 0.3)",
                      borderColor: "rgba(99, 102, 241, 0.4)",
                      background: "rgba(255, 255, 255, 0.05)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: "16px",
                      background: "rgba(99, 102, 241, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                    }}
                  >
                    <Icon sx={{ color: "#818CF8", fontSize: 28 }} />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 600,
                      color: "#F8FAFC",
                      mb: 1.5,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#94A3B8",
                      lineHeight: 1.6,
                      fontSize: "15px",
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
