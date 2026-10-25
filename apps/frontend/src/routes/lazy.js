import React from "react";

/**
 * Route-level code splitting with prefetch support on pointerenter / focus
 * or requestIdleCallback.
 */
export const lazyWithPrefetch = (factory) => {
  const Component = React.lazy(factory);
  Component.prefetch = factory;
  return Component;
};

// Public Marketing Routes
export const HomePage = lazyWithPrefetch(() => import("../pages/HomePage"));
export const AboutPage = lazyWithPrefetch(() => import("../pages/AboutPage"));
export const StudioPage = lazyWithPrefetch(() => import("../pages/StudioPage"));
export const WorkshopPage = lazyWithPrefetch(() => import("../pages/WorkshopPage"));
export const TrainingPage = lazyWithPrefetch(() => import("../pages/TrainingPage"));
export const InternshipsPage = lazyWithPrefetch(() => import("../pages/InternshipsPage/InternshipsPage"));
export const FinalYearProjectsPage = lazyWithPrefetch(() => import("../pages/FinalYearProjectsPage"));
export const PlacementsPage = lazyWithPrefetch(() => import("../pages/PlacementsPage"));
export const ContactPage = lazyWithPrefetch(() => import("../pages/ContactPage"));
export const CoursesPage = lazyWithPrefetch(() => import("../pages/CoursesPage"));
export const CourseDetail = lazyWithPrefetch(() => import("../pages/CourseDetail"));
export const BatchesPage = lazyWithPrefetch(() => import("../pages/BatchesPage"));
export const PricingPage = lazyWithPrefetch(() => import("../pages/PricingPage"));
export const InstitutionalCollaborationPage = lazyWithPrefetch(() =>
  import("../pages/InstitutionalCollaborationPage")
);
export const ComplianceAndSecurityPage = lazyWithPrefetch(() =>
  import("../pages/ComplianceAndSecurityPage")
);
export const NotFound = lazyWithPrefetch(() => import("../pages/NotFound"));
export const AccessDenied = lazyWithPrefetch(() => import("../pages/AccessDenied"));

// Auth Routes
export const LoginPage = lazyWithPrefetch(() => import("../pages/LoginPage"));
export const ForgotPasswordPage = lazyWithPrefetch(() => import("../pages/ForgotPasswordPage"));
export const UpdatePasswordPage = lazyWithPrefetch(() => import("../pages/UpdatePasswordPage"));

// Student Portal Routes
export const DashboardLayout = lazyWithPrefetch(() => import("../pages/dashboard/DashboardLayout"));
export const UserDashboard = lazyWithPrefetch(() => import("../pages/dashboard/UserDashboard"));
export const MyCourses = lazyWithPrefetch(() => import("../pages/dashboard/MyCourses"));
export const CourseLearning = lazyWithPrefetch(() => import("../pages/dashboard/CourseLearning"));
export const MyBatch = lazyWithPrefetch(() => import("../pages/dashboard/MyBatch"));
export const BatchDetail = lazyWithPrefetch(() => import("../pages/dashboard/BatchDetail"));
export const Profile = lazyWithPrefetch(() => import("../pages/dashboard/Profile"));
export const Settings = lazyWithPrefetch(() => import("../pages/dashboard/Settings"));
export const ViewAttendance = lazyWithPrefetch(() => import("../pages/dashboard/ViewAttendance"));
export const Assessment = lazyWithPrefetch(() => import("../pages/dashboard/Assessment"));

// Instructor Portal Routes
export const InstructorLayout = lazyWithPrefetch(() => import("../pages/instructor/InstructorLayout"));
export const InstructorDashboard = lazyWithPrefetch(() =>
  import("../pages/instructor/InstructorDashboard")
);
export const ManageBatch = lazyWithPrefetch(() => import("../pages/instructor/ManageBatch"));
export const ManageCourses = lazyWithPrefetch(() => import("../pages/instructor/ManageCourses"));
export const ManageCourseContent = lazyWithPrefetch(() =>
  import("../pages/instructor/ManageCourseContent")
);
export const StudentAttendance = lazyWithPrefetch(() =>
  import("../pages/instructor/StudentAttendance")
);

// Admin Portal Routes
export const AdminLayout = lazyWithPrefetch(() => import("../pages/admin/AdminLayout"));
export const AdminDashboard = lazyWithPrefetch(() => import("../pages/admin/AdminDashboard"));
export const AdminBatches = lazyWithPrefetch(() => import("../pages/admin/AdminBatches"));
export const AdminCourses = lazyWithPrefetch(() => import("../pages/admin/AdminCourses"));
export const AdminStudents = lazyWithPrefetch(() => import("../pages/admin/AdminStudents"));
export const AdminSettings = lazyWithPrefetch(() => import("../pages/admin/AdminSettings"));

const PREFETCH_MAP = {
  "/": HomePage,
  "/about": AboutPage,
  "/studio": StudioPage,
  "/workshops": WorkshopPage,
  "/crt": TrainingPage,
  "/internships": InternshipsPage,
  "/final-year-projects": FinalYearProjectsPage,
  "/placements": PlacementsPage,
  "/contact": ContactPage,
};

export function prefetchRoute(path) {
  const clean = path?.split("?")[0];
  const target = PREFETCH_MAP[clean];
  if (target?.prefetch) {
    target.prefetch();
  }
}
