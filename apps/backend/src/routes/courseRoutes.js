import express from 'express';
import authUser from '../middlewares/authMiddleware.js';
import allowRoles from '../middlewares/roleMiddleware.js';
import { getMyCourses, createCourse, toggleCourseActive } from '../controller/instructorController.js';

const courseRouter = express.Router();

// ── Instructor Course Management (auth required) ─────────────────────────────
// Public unauthenticated course listings removed:
// Internship programs are assigned by Admin — not browsed publicly.
// The public marketing website (Internships page) uses static content.
courseRouter.get('/', authUser, allowRoles('instructor', 'admin'), getMyCourses);
courseRouter.post('/', authUser, allowRoles('instructor'), createCourse);
courseRouter.put('/:id/toggle-active', authUser, allowRoles('instructor'), toggleCourseActive);

export default courseRouter;
