import express from 'express';
import {
  changePassword,
  getProfile,
  login,
  logout,
  refreshToken,
  requestResetOtp,
  resetPasswordWithOtp,
  updateProfile,
  verifyResetOtp,
} from '../controller/userController.js';
import authUser from '../middlewares/authMiddleware.js';

const userRouter = express.Router();

// ── Auth (Admin-Provisioned — no public registration) ───────────────────────
userRouter.post('/login', login);
userRouter.post('/logout', logout);
userRouter.post('/refresh-token', refreshToken);

// ── Password Recovery ────────────────────────────────────────────────────────
userRouter.post('/forgot-password/request-otp', requestResetOtp);
userRouter.post('/forgot-password/verify-otp', verifyResetOtp);
userRouter.post('/forgot-password/reset', resetPasswordWithOtp);

// Profile
userRouter.get('/profile',authUser, getProfile);
userRouter.put('/profile', authUser, updateProfile);
userRouter.put('/change-password', authUser, changePassword);

export default userRouter;
