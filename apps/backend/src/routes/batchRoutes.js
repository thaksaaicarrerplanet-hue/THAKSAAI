import express from 'express';
import authUser from '../middlewares/authMiddleware.js';
import allowRoles from '../middlewares/roleMiddleware.js';
import {
  createBatch,
  getInstructorBatches,
} from '../controller/batchController.js';
import { getBatchStudents, removeStudentFromBatch } from '../controller/instructorStudentController.js';

const batchRouter = express.Router();

// ── Instructor Batch Management (auth required) ──────────────────────────────
// Public unauthenticated batch/course listings removed:
// Internship batches are assigned by Admin — not browsed publicly by students.
batchRouter.post('/instructor/courses/:courseId/batches', authUser, allowRoles('instructor'), createBatch);
batchRouter.get('/instructor/batches', authUser, allowRoles('instructor'), getInstructorBatches);
batchRouter.get('/instructor/batches/:batchId/students', authUser, allowRoles('instructor'), getBatchStudents);
batchRouter.delete('/instructor/batches/:batchId/students/:studentId', authUser, allowRoles('instructor'), removeStudentFromBatch);

export default batchRouter;
