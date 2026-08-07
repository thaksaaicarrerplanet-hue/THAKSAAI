import express from 'express';
import { getMyEnrollments } from '../controller/enrollmentController.js';
import authUser from '../middlewares/authMiddleware.js';
import allowRoles from '../middlewares/roleMiddleware.js';

const enrollmentRouter = express.Router();

// Students can view their admin-assigned enrollments (read-only)
// Enrollment creation is handled exclusively by Admin via POST /api/admin/users/create
enrollmentRouter.get('/student/enrollments', authUser, allowRoles('student'), getMyEnrollments);

export default enrollmentRouter;