import { useEffect, useMemo, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { getAllUsers } from "../../../services/adminServices";
import { useNavigate } from "react-router-dom";

const filterTabs = ["all", "student", "instructor", "admin"];
const filterLabels = { all: "All Accounts", student: "Students", instructor: "Instructors", admin: "Administrators" };

const roleColors = {
  admin: { bg: "#f3e8ff", color: "#6b21a8" },
  instructor: { bg: "#e0f2fe", color: "#0369a1" },
  student: { bg: "#dcfce7", color: "#15803d" },
};

export const UserTable = ({ onView, onEditRole, onDelete }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await getAllUsers();
      setUsers(data?.users || []);
    } catch (requestError) {
      setError(requestError?.response?.data?.message || "Could not load user accounts from database.");
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers = useMemo(
    () => (roleFilter === "all" ? users : users.filter((u) => u.role === roleFilter)),
    [users, roleFilter]
  );

  if (loading) {
    return (
      <Stack direction="row" spacing={1.5} alignItems="center" sx={{ py: 6, px: 2 }}>
        <CircularProgress size={24} sx={{ color: "#1a1a1a" }} />
        <Typography sx={{ fontWeight: 600, color: "#64748b", fontFamily: "'Work Sans', sans-serif" }}>
          Loading user accounts...
        </Typography>
      </Stack>
    );
  }

  return (
    <Card elevation={0} sx={{ borderRadius: "14px", border: "1px solid rgba(0,0,0,0.08)", bgcolor: "#ffffff", boxShadow: "0 4px 20px rgba(0,0,0,0.02)" }}>
      <CardContent sx={{ p: { xs: 2.5, sm: 3.5 } }}>
        <Typography component="h2" sx={{ fontSize: "1.35rem", fontFamily: "'Instrument Serif', serif", fontWeight: 700, color: "#1a1a1a", mb: 2 }}>
          Registered Accounts Directory
        </Typography>
        {error ? <Alert severity="error" sx={{ mb: 2.5, borderRadius: "8px" }}>{error}</Alert> : null}

        <Tabs
          value={filterTabs.indexOf(roleFilter)}
          onChange={(e, newVal) => setRoleFilter(filterTabs[newVal])}
          variant={isMobile ? "scrollable" : "standard"}
          scrollButtons="auto"
          allowScrollButtonsMobile
          sx={{ 
            mb: 3, 
            borderBottom: "1px solid rgba(0,0,0,0.08)",
            "& .MuiTab-root": { textTransform: "none", fontWeight: 600, fontSize: "0.88rem", color: "#64748b", pb: 1.5 },
            "& .Mui-selected": { color: "#1a1a1a", fontWeight: 800 },
            "& .MuiTabs-indicator": { backgroundColor: "#1a1a1a", height: "3px", borderRadius: "3px 3px 0 0" }
          }}
        >
          {filterTabs.map((tab) => (
            <Tab key={tab} label={filterLabels[tab]} />
          ))}
        </Tabs>

        {/* Mobile card view */}
        {isMobile ? (
          <Stack spacing={2}>
            {filteredUsers.length === 0 ? (
              <Box sx={{ p: 4, textAlign: "center", bgcolor: "#f8f9fa", borderRadius: "10px", border: "1px dashed rgba(0,0,0,0.1)" }}>
                <Typography sx={{ color: "#64748b", fontWeight: 500 }}>
                  No user accounts found in this category.
                </Typography>
              </Box>
            ) : (
              filteredUsers.map((user) => {
                const rc = roleColors[user.role] || { bg: "#f1f5f9", color: "#475569" };
                return (
                  <Box
                    key={user.id}
                    sx={{
                      border: "1px solid rgba(0,0,0,0.08)",
                      borderRadius: "12px",
                      p: 2.5,
                      bgcolor: "#ffffff",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                    }}
                  >
                    <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
                      <Box
                        sx={{
                          width: 42,
                          height: 42,
                          borderRadius: "50%",
                          bgcolor: "#1a1a1a",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#C7F36B",
                          flexShrink: 0,
                        }}
                      >
                        <PersonRoundedIcon fontSize="small" />
                      </Box>
                      <Box sx={{ minWidth: 0, flexGrow: 1 }}>
                        <Typography sx={{ fontWeight: 700, color: "#1a1a1a", fontSize: "1rem" }} noWrap>
                          {user.name || "Unnamed User"}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#64748b", fontSize: "0.82rem" }} noWrap>
                          {user.email}
                        </Typography>
                      </Box>
                      <Chip
                        label={String(user.role).toUpperCase()}
                        size="small"
                        sx={{
                          fontWeight: 700,
                          fontSize: "0.68rem",
                          bgcolor: rc.bg,
                          color: rc.color,
                          flexShrink: 0,
                        }}
                      />
                    </Stack>

                    <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
                      <Button
                        variant="contained"
                        size="small"
                        sx={{ textTransform: "none", bgcolor: "#1a1a1a", color: "#ffffff", borderRadius: "50px", fontWeight: 600, fontSize: "0.75rem", flex: 1, "&:hover": { bgcolor: "#000" } }}
                        onClick={() => (onView ? onView(user.id) : navigate(`/admin/students/${user.id}`))}
                      >
                        View Profile
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{ textTransform: "none", borderColor: "rgba(0,0,0,0.15)", color: "#1a1a1a", borderRadius: "50px", fontWeight: 600, fontSize: "0.75rem", flex: 1 }}
                        onClick={() => (onEditRole ? onEditRole(user) : navigate(`/admin/students/${user.id}/role`))}
                      >
                        Change Role
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{ textTransform: "none", borderColor: "rgba(220,38,38,0.3)", color: "#dc2626", borderRadius: "50px", fontWeight: 600, fontSize: "0.75rem", flex: 1, "&:hover": { bgcolor: "rgba(220,38,38,0.04)" } }}
                        onClick={() => (onDelete ? onDelete(user.id) : navigate(`/admin/students/${user.id}/delete`))}
                      >
                        Delete
                      </Button>
                    </Stack>
                  </Box>
                );
              })
            )}
          </Stack>
        ) : (
          /* Desktop table view */
          <TableContainer sx={{ borderRadius: "10px", border: "1px solid rgba(0,0,0,0.06)", overflowX: "auto" }}>
            <Table sx={{ minWidth: 700 }}>
              <TableHead sx={{ bgcolor: "#F7F8F4" }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", color: "#475569", py: 1.5 }}>Name</TableCell>
                  <TableCell sx={{ fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", color: "#475569", py: 1.5 }}>Email Address</TableCell>
                  <TableCell sx={{ fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", color: "#475569", py: 1.5 }}>Account Role</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", color: "#475569", py: 1.5 }}>Management Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredUsers.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} sx={{ py: 5, textAlign: "center" }}>
                      <Typography sx={{ color: "#64748b", fontWeight: 500 }}>No users found in this category.</Typography>
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredUsers.map((user) => {
                    const rc = roleColors[user.role] || { bg: "#f1f5f9", color: "#475569" };
                    return (
                      <TableRow key={user.id} sx={{ "&:hover": { bgcolor: "#f8f9fa" }, transition: "background 0.2s" }}>
                        <TableCell sx={{ fontWeight: 600, color: "#1a1a1a", py: 2 }}>{user.name || "Unnamed User"}</TableCell>
                        <TableCell sx={{ color: "#475569", fontWeight: 500, py: 2 }}>{user.email}</TableCell>
                        <TableCell sx={{ py: 2 }}>
                          <Chip 
                            label={String(user.role).toUpperCase()} 
                            size="small" 
                            sx={{ fontWeight: 700, fontSize: "0.68rem", bgcolor: rc.bg, color: rc.color }} 
                          />
                        </TableCell>
                        <TableCell align="right" sx={{ py: 2 }}>
                          <Stack direction="row" spacing={1} justifyContent="flex-end">
                            <Button
                              variant="contained"
                              size="small"
                              sx={{ textTransform: "none", bgcolor: "#1a1a1a", color: "#ffffff", borderRadius: "50px", fontWeight: 600, px: 2, "&:hover": { bgcolor: "#000000" } }}
                              onClick={() => (onView ? onView(user.id) : navigate(`/admin/students/${user.id}`))}
                            >
                              View
                            </Button>
                            <Button
                              variant="outlined"
                              size="small"
                              sx={{ textTransform: "none", borderColor: "rgba(0,0,0,0.15)", color: "#1a1a1a", borderRadius: "50px", fontWeight: 600, px: 2, "&:hover": { bgcolor: "rgba(0,0,0,0.03)", borderColor: "#1a1a1a" } }}
                              onClick={() => (onEditRole ? onEditRole(user) : navigate(`/admin/students/${user.id}/role`))}
                            >
                              Edit Role
                            </Button>
                            <Button
                              variant="outlined"
                              size="small"
                              sx={{ textTransform: "none", borderColor: "rgba(220,38,38,0.3)", color: "#dc2626", borderRadius: "50px", fontWeight: 600, px: 2, "&:hover": { bgcolor: "rgba(220,38,38,0.05)", borderColor: "#dc2626" } }}
                              onClick={() => (onDelete ? onDelete(user.id) : navigate(`/admin/students/${user.id}/delete`))}
                            >
                              Delete
                            </Button>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </CardContent>
    </Card>
  );
};
