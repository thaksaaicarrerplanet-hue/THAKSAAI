import { Navigate, Outlet } from "react-router-dom";
import {
  clearStoredSession,
  dashboardPathForRole,
  normalizeUserRole,
  readStoredSession,
} from "../services/authSession";

export default function ProtectedRoute({ children, role, allowedRoles }) {
  const session = readStoredSession();
  if (!session) {
    clearStoredSession();
    return <Navigate to="/login" replace />;
  }

  const userRole = normalizeUserRole(session.user.role);
  const expectedRole = role ? normalizeUserRole(role) : null;
  const normalizedAllowed = Array.isArray(allowedRoles)
    ? allowedRoles.map(normalizeUserRole).filter(Boolean)
    : null;

  if (!userRole) {
    clearStoredSession();
    return <Navigate to="/login" replace />;
  }

  const destination = dashboardPathForRole(userRole);
  if (expectedRole && userRole !== expectedRole) {
    return <Navigate to={destination} replace />;
  }
  if (normalizedAllowed && !normalizedAllowed.includes(userRole)) {
    return <Navigate to={destination} replace />;
  }

  return children || <Outlet />;
}
