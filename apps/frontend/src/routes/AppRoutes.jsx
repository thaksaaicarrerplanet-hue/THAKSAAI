import React, { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import PublicLayout from "../layout/PublicLayout";
import ProtectedRoute from "./ProtectedRoute";
import PublicOnlyRoute from "./PublicOnlyRoute";
import RouteSkeleton from "../components/ui/RouteSkeleton";
import {
  HomePage,
  AboutPage,
  StudioPage,
  WorkshopPage,
  TrainingPage,
  InternshipsPage,
  FinalYearProjectsPage,
  PlacementsPage,
  ContactPage,
  CoursesPage,
  CourseDetail,
  BatchesPage,
  PricingPage,
  InstitutionalCollaborationPage,
  ComplianceAndSecurityPage,
  NotFound,
  AccessDenied,
  LoginPage,
  ForgotPasswordPage,
  UpdatePasswordPage,
  DashboardLayout,
  UserDashboard,
  MyCourses,
  CourseLearning,
  MyBatch,
  BatchDetail,
  Profile,
  Settings,
  ViewAttendance,
  Assessment,
  InstructorLayout,
  InstructorDashboard,
  ManageBatch,
  ManageCourses,
  ManageCourseContent,
  StudentAttendance,
  AdminLayout,
  AdminDashboard,
  AdminBatches,
  AdminCourses,
  AdminStudents,
  AdminSettings,
  prefetchRoute,
} from "./lazy";

export default function AppRoutes() {
  useEffect(() => {
    const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 1200));
    const handle = idle(() => {
      prefetchRoute("/workshops");
      prefetchRoute("/contact");
    });
    return () => {
      if (window.cancelIdleCallback) window.cancelIdleCallback(handle);
    };
  }, []);

  return (
    <Suspense fallback={<RouteSkeleton />}>
      <Routes>
        {/* PUBLIC MARKETING ROUTES */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/studio" element={<StudioPage />} />

          {/* Core Career Accelerator Programs */}
          <Route path="/workshops" element={<WorkshopPage />} />
          <Route path="/internships" element={<InternshipsPage />} />
          <Route path="/crt" element={<TrainingPage />} />
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

        {/* AUTHENTICATION ROUTES */}
        <Route element={<PublicOnlyRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/update-password" element={<UpdatePasswordPage />} />
        </Route>

        {/* STUDENT DASHBOARD */}
        <Route element={<ProtectedRoute allowedRoles={["student", "user"]} />}>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<RouteSkeleton label="Loading student portal..." />}>
                <DashboardLayout />
              </Suspense>
            }
          >
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

        {/* INSTRUCTOR DASHBOARD */}
        <Route element={<ProtectedRoute allowedRoles={["instructor"]} />}>
          <Route
            path="/instructor"
            element={
              <Suspense fallback={<RouteSkeleton label="Loading instructor portal..." />}>
                <InstructorLayout />
              </Suspense>
            }
          >
            <Route index element={<InstructorDashboard />} />
            <Route path="manage-batch" element={<ManageBatch />} />
            <Route path="manage-courses" element={<ManageCourses />} />
            <Route path="manage-courses/:courseId" element={<ManageCourseContent />} />
            <Route path="student-attendance" element={<StudentAttendance />} />
          </Route>
        </Route>

        {/* ADMIN DASHBOARD */}
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route
            path="/admin"
            element={
              <Suspense fallback={<RouteSkeleton label="Loading admin portal..." />}>
                <AdminLayout />
              </Suspense>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="batches" element={<AdminBatches />} />
            <Route path="courses" element={<AdminCourses />} />
            <Route path="students" element={<AdminStudents />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}
