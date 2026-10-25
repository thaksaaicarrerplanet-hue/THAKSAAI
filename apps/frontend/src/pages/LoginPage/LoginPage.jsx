import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { login } from "../../services/userServices";
import AuthLayout from "../auth/AuthLayout";
import useToast from "../../hooks/useToast";
import BrandLogo from "../../components/common/BrandLogo";
import { SITE_BRANDING } from "../../theme/masterThemeConfig";
import { dashboardPathForRole, persistStoredSession } from "../../services/authSession";

export default function LoginPage() {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const temp = {};
    if (!formData.email.trim()) temp.email = "Please enter your email address";
    if (!formData.password.trim()) temp.password = "Please enter your password";
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validate() || loading) return;

    setLoading(true);
    try {
      const response = await login({
        email: formData.email.trim(),
        password: formData.password,
      });

      if (!response?.token || !response?.user) {
        showToast(
          response?.message || "Incorrect email or password. Please try again.",
          "error"
        );
        return;
      }

      const session = persistStoredSession(response);
      showToast("Signed in successfully.", "success");
      navigate(dashboardPathForRole(session.user.role), { replace: true });
    } catch (error) {
      // Never fabricate a session when the API is unavailable or credentials fail.
      console.warn(
        "Login request failed:",
        error?.response?.status || error?.normalized?.code || error?.name || "unknown"
      );
      showToast(
        error?.normalized?.message ||
          error?.message ||
          "Unable to sign in. Please check your details and try again.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign In | THAKSA.AI Learning Dashboard</title>
        <meta 
          name="description" 
          content="Sign in to your THAKSA.AI account to access your enrolled courses, classroom schedules, and practical projects." 
        />
      </Helmet>

      <AuthLayout onBackHome={() => navigate("/")}>
        {/* Simple, Professional Header */}
        <div className="text-center mb-8 pb-6 border-b border-black/[0.08] flex flex-col items-center">
          <BrandLogo variant="auth" disableLink className="mb-5" />
          <div className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide mb-4 shadow-2xs border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#C7F36B] block"></span>
            <span>Learning Portal · {SITE_BRANDING.shortAddress}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#1a1a1a] tracking-tight leading-[1.15]">
            Sign in to your account
          </h1>
          <p className="text-xs sm:text-sm font-sans text-zinc-600 mt-2 max-w-sm mx-auto leading-relaxed">
            Enter your email and password to open your student, instructor, or administrator dashboard.
          </p>
        </div>

        {/* Clean Login Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-6 font-sans">
          
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-zinc-800">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`px-4 py-3.5 rounded-xl bg-white border text-sm font-medium text-[#1a1a1a] shadow-2xs focus:outline-none transition-all ${
                errors.email 
                  ? "border-red-500 focus:ring-2 focus:ring-red-300" 
                  : "border-black/20 focus:border-[#1a1a1a] focus:ring-2 focus:ring-[#C7F36B]/50"
              }`}
            />
            {errors.email && (
              <span id="email-error" className="text-xs text-red-600 font-semibold">{errors.email}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-xs font-bold uppercase tracking-wider text-zinc-800">
                Password
              </label>
              <Link
                to="/forgot-password"
                className="text-xs font-medium text-zinc-600 hover:text-[#1a1a1a] underline decoration-[#C7F36B] decoration-2 underline-offset-3 transition-colors"
              >
                Forgot your password?
              </Link>
            </div>
            <div className="relative flex items-center">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                aria-invalid={Boolean(errors.password)}
                aria-describedby={errors.password ? "password-error" : undefined}
                className={`w-full pl-4 pr-16 py-3.5 rounded-xl bg-white border text-sm font-medium text-[#1a1a1a] shadow-2xs focus:outline-none transition-all ${
                  errors.password 
                    ? "border-red-500 focus:ring-2 focus:ring-red-300" 
                    : "border-black/20 focus:border-[#1a1a1a] focus:ring-2 focus:ring-[#C7F36B]/50"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password text" : "Show password text"}
                className="absolute right-4 text-xs font-bold font-mono text-zinc-600 hover:text-[#1a1a1a] focus:outline-none bg-zinc-100 px-2.5 py-1.5 rounded"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <span id="password-error" className="text-xs text-red-600 font-semibold">{errors.password}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-[#1a1a1a] text-white py-4 rounded-xl text-sm font-bold tracking-wide uppercase hover:bg-black transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-[#C7F36B] disabled:opacity-60 disabled:pointer-events-none"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#C7F36B]"></span>
            {loading ? "Signing in..." : "Sign In â†’"}
          </button>
        </form>

        {/* Clear, Plain English Notice on How to Get an Account */}
        <div className="mt-10 p-5 bg-[#f8f9fa] rounded-xl border border-black/[0.06] text-left">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#1a1a1a] font-sans mb-1.5 flex items-center gap-2">
            <span>Don&apos;t have an account yet?</span>
          </h2>
          <p className="text-xs text-zinc-600 font-sans leading-relaxed">
            Accounts are created directly by your college placement officer or our classroom mentors when you enroll in a campus training course or office internship. We do not offer public online sign-up.
          </p>
        </div>
      </AuthLayout>
    </>
  );
}
