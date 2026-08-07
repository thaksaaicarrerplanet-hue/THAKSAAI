import { Route, Routes } from "react-router-dom";
import PublicLayout from "../layout/PublicLayout";
import ProtectedRoute from "./ProtectedRoute";
import PublicOnlyRoute from "./PublicOnlyRoute";
import RouteFallback from "./RouteFallback";

import HomePage from "../pages/HomePage";
import CoursesPage from "../pages/CoursesPage";
import BatchesPage from "../pages/BatchesPage";
import CourseDetail from "../pages/CourseDetail";
import PricingPage from "../pages/PricingPage/index.js";
import ContactPage from "../pages/ContactPage/index.js";
import WorkshopPage from "../pages/WorkshopPage";
import TrainingPage from "../pages/TrainingPage";
import FinalYearProjectsPage from "../pages/FinalYearProjectsPage";
import PlacementsPage from "../pages/PlacementsPage";
import InternshipsPage from "../pages/InternshipsPage/InternshipsPage";
import InstitutionalCollaborationPage from "../pages/InstitutionalCollaborationPage";
import ComplianceAndSecurityPage from "../pages/ComplianceAndSecurityPage";
import NotFound from "../pages/NotFound";
import AccessDenied from "../pages/AccessDenied";
import AboutPage from "../pages/AboutPage";

import LoginPage from "../pages/LoginPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import UpdatePasswordPage from "../pages/UpdatePasswordPage";

import DashboardLayout from "../pages/dashboard/DashboardLayout";
import UserDashboard from "../pages/dashboard/UserDashboard";
import MyCourses from "../pages/dashboard/MyCourses";
import CourseLearning from "../pages/dashboard/CourseLearning";
import MyBatch from "../pages/dashboard/MyBatch";
import BatchDetail from "../pages/dashboard/BatchDetail";
import Profile from "../pages/dashboard/Profile";
import Settings from "../pages/dashboard/Settings";
import ViewAttendance from "../pages/dashboard/ViewAttendance";
import Assessment from "../pages/dashboard/Assessment";

import AdminLayout from "../pages/admin/AdminLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminBatches from "../pages/admin/AdminBatches";
import AdminCourses from "../pages/admin/AdminCourses";
import AdminStudents from "../pages/admin/AdminStudents";
import AdminSettings from "../pages/admin/AdminSettings";

import InstructorLayout from "../pages/instructor/InstructorLayout";
import InstructorDashboard from "../pages/instructor/InstructorDashboard";
import ManageBatch from "../pages/instructor/ManageBatch";
import ManageCourses from "../pages/instructor/ManageCourses";
import ManageCourseContent from "../pages/instructor/ManageCourseContent";
import StudentAttendance from "../pages/instructor/StudentAttendance";

export default function AppRoutes() {
  return (
    <Routes>
      {/* -----------------------------
          PUBLIC ROUTES
      ------------------------------ */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        
        {/* Core Career Accelerator Programs */}
        <Route path="/workshops" element={<WorkshopPage />} />
        <Route path="/internships" element={<InternshipsPage />} />
        <Route path="/crt" element={<TrainingPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/final-year-projects" element={<FinalYearProjectsPage />} />

        {/* Institutional & Catalogue Pages */}
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:courseId" element={<CourseDetail />} />
        <Route path="/placements" element={<PlacementsPage />} />
        <Route path="/batches" element={<BatchesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Institutional Collaboration (TPO & Faculty) */}
        <Route path="/faculty-collaboration" element={<InstitutionalCollaborationPage />} />
        <Route path="/tpo-advisory-line" element={<InstitutionalCollaborationPage />} />
        <Route path="/college-partnerships" element={<InstitutionalCollaborationPage />} />

        {/* Legal Governance & Campus Security */}
        <Route path="/terms-of-service" element={<ComplianceAndSecurityPage />} />
        <Route path="/privacy-policy" element={<ComplianceAndSecurityPage />} />
        <Route path="/campus-security-guidelines" element={<ComplianceAndSecurityPage />} />

        {/* Fallback Pages */}
        <Route path="/access-denied" element={<AccessDenied />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* -----------------------------
          AUTHENTICATION ROUTES
      ------------------------------ */}
      <Route element={<PublicOnlyRoute />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/update-password" element={<UpdatePasswordPage />} />
      </Route>

      {/* -----------------------------
          STUDENT DASHBOARD
      ------------------------------ */}
      <Route element={<ProtectedRoute allowedRoles={["student", "user"]} />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<UserDashboard />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="my-courses/:courseId" element={<CourseLearning />} />
          <Route path="my-batch" element={<MyBatch />} />
          <Route path="my-batch/:batchId" element={<BatchDetail />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="attendance" element={<ViewAttendance />} />
          <Route path="assessment" element={<Assessment />} />
        </Route>
      </Route>

      {/* -----------------------------
          INSTRUCTOR DASHBOARD
      ------------------------------ */}
      <Route element={<ProtectedRoute allowedRoles={["instructor"]} />}>
        <Route path="/instructor" element={<InstructorLayout />}>
          <Route index element={<InstructorDashboard />} />
          <Route path="manage-batch" element={<ManageBatch />} />
          <Route path="manage-courses" element={<ManageCourses />} />
          <Route path="manage-courses/:courseId" element={<ManageCourseContent />} />
          <Route path="student-attendance" element={<StudentAttendance />} />
        </Route>
      </Route>

      {/* -----------------------------
          ADMIN DASHBOARD
      ------------------------------ */}
      <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="batches" element={<AdminBatches />} />
          <Route path="courses" element={<AdminCourses />} />
          <Route path="students" element={<AdminStudents />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Route>

      {/* Global Fallback Wrapper */}
      <Route path="*" element={<RouteFallback />} />
    </Routes>
  );
}
