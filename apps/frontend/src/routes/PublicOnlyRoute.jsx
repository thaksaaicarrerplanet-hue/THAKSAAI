import { Navigate, Outlet } from "react-router-dom";
import { clearStoredSession, dashboardPathForRole, readStoredSession } from "../services/authSession";

export default function PublicOnlyRoute({ children }) {
  const session = readStoredSession();
  if (session) {
    return <Navigate to={dashboardPathForRole(session.user.role)} replace />;
  }

  // Remove malformed/stale data if present. The route remains public when no valid session exists.
  clearStoredSession();
  return children || <Outlet />;
}
