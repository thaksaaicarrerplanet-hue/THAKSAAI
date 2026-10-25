import React, { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import PersonAddAlt1RoundedIcon from "@mui/icons-material/PersonAddAlt1Rounded";
import { UserTable } from "./components/UserTable";
import CreateUserDialog from "./components/CreateUserDialog";
import { useNavigate } from "react-router-dom";

export default function AdminStudents() {
  const navigate = useNavigate();
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  return (
    <Box sx={{ pb: 6 }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", mb: 4, pb: 2.5, borderBottom: "1px solid rgba(0,0,0,0.08)", gap: 2 }}>
        <Box>
          <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, bgcolor: "#1a1a1a", color: "#C7F36B", px: 2.2, py: 0.5, borderRadius: "20px", fontSize: "0.75rem", fontWeight: 700, mb: 1.5 }}>
            <span>â— USER DIRECTORY</span>
          </Box>
          <Typography component="h1" sx={{ fontSize: { xs: "1.8rem", sm: "2.4rem" }, fontFamily: "'Instrument Serif', serif", fontWeight: 700, color: "#1a1a1a", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
            User Account Management
          </Typography>
          <Typography sx={{ color: "#64748b", fontSize: "0.95rem", mt: 0.5, fontWeight: 500 }}>
            View, edit, and provision login accounts for students, instructors, and campus administrators.
          </Typography>
        </Box>

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
          <span style={{ display: "inline-block", width: 7, height: 7, borderRadius: "50%", backgroundColor: "#C7F36B", marginRight: 2 }} />
          Create User Account
        </Button>
      </Box>

      <UserTable
        key={refreshTrigger}
        onView={(id) => navigate(`/admin/students/${id}`)}
        onEditRole={(user) => navigate(`/admin/students/${user.id}/role`)}
        onDelete={(id) => navigate(`/admin/students/${id}/delete`)}
      />

      <CreateUserDialog
        open={createDialogOpen}
        onClose={() => setCreateDialogOpen(false)}
        onSuccess={() => setRefreshTrigger((prev) => prev + 1)}
      />
    </Box>
  );
}
