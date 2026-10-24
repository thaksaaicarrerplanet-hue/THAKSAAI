import express from 'express';
import userRouter from './src/routes/users.js';
import userDashboardRouter from './src/routes/userDashboardRoutes.js';
import adminRouter from './src/routes/adminRoutes.js';
import adminDashboardRoutes from './src/routes/adminDashboardRoutes.js';
import instructorRouter from './src/routes/instructorRoutes.js';
import instructorDashboardRouter from './src/routes/instructorDashboardRoutes.js';
import courseRouter from './src/routes/courseRoutes.js';
import courseContentRouter from './src/routes/courseContentRoutes.js';
import moduleRouter from './src/routes/moduleRoutes.js';
import lessonRouter from './src/routes/lessonRoutes.js';
import batchRouter from './src/routes/batchRoutes.js';
import enrollmentRouter from './src/routes/enrollmentRoutes.js';
import lessonProgressRouter from './src/routes/lessonProgressRoutes.js';
import certificateRouter from './src/routes/certificateRoutes.js';
import reviewRouter from './src/routes/reviewRoutes.js';
import contactRouter from './src/routes/contactRoutes.js';
import liveSessionRouter from './src/routes/liveSessionRoutes.js';
import attendanceRouter from './src/routes/attendanceRoutes.js';
import uploadRouter from './src/routes/uploadRoutes.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import hpp from 'hpp';

dotenv.config({ quiet: true });

const app = express();
const PORT = process.env.PORT || 5000;

// ==========================================
// 1. SECURITY & PRODUCTION MIDDLEWARE
// ==========================================

// Set security HTTP headers to prevent sniffing and clickjacking
app.use(helmet());

// Rate Limiting: Prevent DDoS and Brute Force attacks
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 300, // Limit each IP to 300 requests per window
    standardHeaders: true, 
    legacyHeaders: false,
    message: { message: 'Too many requests from this IP, please try again after 15 minutes.' }
});
// Apply rate limiter to all API routes
app.use('/api', limiter);

// Strict CORS: Allow only the production Vercel frontend and local dev
const configuredOrigins = (process.env.FRONTEND_ORIGINS || '')
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean);

const allowedOrigins = new Set([
    'https://thaksaai.in',
    'https://www.thaksaai.in',
    'https://thaksaelearningplatform.vercel.app',
    'http://localhost:5173',
    ...configuredOrigins
]);
app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin (like mobile apps, curl, or server-to-server)
        if (!origin) return callback(null, true);
        if (!allowedOrigins.has(origin)) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS']
}));

// Limit body payload to 50kb to prevent payload explosion attacks (Default is 100kb+)
app.use(express.json({ limit: '50kb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50kb' }));

// Prevent HTTP Parameter Pollution (e.g., ?sort=asc&sort=desc)
app.use(hpp());

// ==========================================
// 2. ROUTING & BUSINESS LOGIC
// ==========================================

app.get('/', (req, res) => {
    res.send('Thaksa LMS API is running.');
});

// ── Auth & User ─────────────────────────────────────────────────────────────
app.use('/api/users', userRouter);
app.use('/api/users', userDashboardRouter);

// ── Admin ───────────────────────────────────────────────────────────────────
app.use('/api/admin', adminRouter);
app.use('/api/admin', adminDashboardRoutes);

// ── Instructor ──────────────────────────────────────────────────────────────
app.use('/api/instructor', instructorRouter);
app.use('/api/instructor', instructorDashboardRouter);

// ── Curriculum (Programs / Modules / Lessons) ────────────────────────────────
app.use('/api/courses', courseRouter);
app.use('/api/courses', courseContentRouter);
app.use('/api/courses', moduleRouter);
app.use('/api/lessons', lessonRouter);

// ── Batches & Enrollments ────────────────────────────────────────────────────
app.use('/api', batchRouter);
app.use('/api', enrollmentRouter);

// ── Learning Tracking ────────────────────────────────────────────────────────
app.use('/api', lessonProgressRouter);
app.use('/api', attendanceRouter);
app.use('/api', liveSessionRouter);

// ── Outcomes ─────────────────────────────────────────────────────────────────
app.use('/api', certificateRouter);
app.use('/api', reviewRouter);

// ── Platform ─────────────────────────────────────────────────────────────────
app.use('/api', contactRouter);
app.use('/api/upload', uploadRouter);

// ── Error Handlers ───────────────────────────────────────────────────────────
app.use((err, req, res, next) => {
    if (err.name === 'MulterError' || err.message?.includes('Invalid file type')) {
        return res.status(400).json({ message: err.message });
    }
    console.error('Unhandled server error:', err.message);
    res.status(500).json({ message: 'Internal server error.' });
});

app.listen(PORT, () => {
    console.log(`Thaksa LMS server running on http://localhost:${PORT}`);
});
