import express from "express";
import rateLimit from "express-rate-limit";
import { submitContactForm } from "../controller/contactController.js";

const contactRouter = express.Router();

const contactSubmissionLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: { message: "Too many enquiry attempts. Please wait a few minutes and try again." },
});

contactRouter.post("/contact", contactSubmissionLimiter, submitContactForm);

export default contactRouter;
