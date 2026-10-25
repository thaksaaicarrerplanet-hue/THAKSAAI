const SUPPORTED_ROLES = new Set(["student", "user", "instructor", "admin"]);

export function normalizeUserRole(role) {
  const normalized = typeof role === "string" ? role.trim().toLowerCase() : "";
  return SUPPORTED_ROLES.has(normalized) ? normalized : null;
}

export function clearStoredSession() {
  try {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
  } catch {
    // Storage may be disabled by browser policy; callers still get a safe signed-out state.
  }
}

export function readStoredSession() {
  let token;
  let storedUser;
  try {
    token = window.localStorage.getItem("token");
    storedUser = window.localStorage.getItem("user");
  } catch {
    return null;
  }

  if (!token || !storedUser) {
    if (token || storedUser) clearStoredSession();
    return null;
  }

  try {
    const parsedUser = JSON.parse(storedUser);
    const role = normalizeUserRole(parsedUser?.role);
    if (!parsedUser || typeof parsedUser !== "object" || !role) {
      clearStoredSession();
      return null;
    }
    return { token, user: { ...parsedUser, role } };
  } catch {
    clearStoredSession();
    return null;
  }
}

export function persistStoredSession(payload) {
  const token = typeof payload?.token === "string" ? payload.token.trim() : "";
  const sourceUser = payload?.user;
  const role = normalizeUserRole(sourceUser?.role);

  if (!token || !sourceUser || typeof sourceUser !== "object") {
    throw new Error("The server did not return a valid sign-in session.");
  }
  if (!role) {
    throw new Error("This account has an unsupported role. Please contact your administrator.");
  }

  const user = { ...sourceUser, role };
  try {
    window.localStorage.setItem("token", token);
    window.localStorage.setItem("user", JSON.stringify(user));
  } catch {
    clearStoredSession();
    throw new Error("This browser could not save your sign-in session. Enable site storage and try again.");
  }
  return { token, user };
}

export function dashboardPathForRole(roleOrUser) {
  const role = normalizeUserRole(
    typeof roleOrUser === "string" ? roleOrUser : roleOrUser?.role
  );
  if (role === "admin") return "/admin";
  if (role === "instructor") return "/instructor";
  if (role === "student" || role === "user") return "/dashboard";
  return "/login";
}
