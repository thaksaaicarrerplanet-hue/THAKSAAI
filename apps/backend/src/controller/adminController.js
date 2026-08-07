import bcrypt from "bcrypt";
import db from "../config/db.js";
import { sendAdminProvisionedMail } from "../utils/sendAccountMail.js";

const createUserByAdmin = async (req, res) => {
    try {
        const { name, email, role = "student", defaultPassword = "Welcome@Thaksa" } = req.body;

        if (!email || !name) {
            return res.status(400).json({ message: "Name and email are required fields." });
        }

        const allowedRoles = ["student", "instructor", "admin"];
        if (!allowedRoles.includes(role)) {
            return res.status(400).json({ message: "Invalid role specified." });
        }

        const existingUser = await db.query(
            "SELECT id FROM users WHERE email = $1", [email.toLowerCase().trim()]
        );

        if (existingUser.rows.length > 0) {
            return res.status(400).json({ message: "A user with this email address already exists in the database." });
        }

        const hashedPassword = await bcrypt.hash(defaultPassword, 10);

        const client = await db.connect();
        try {
            await client.query("BEGIN");
            const result = await client.query(
                "INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING id, name, email, role, created_at",
                [name.trim(), email.toLowerCase().trim(), hashedPassword, role]
            );
            const newUser = result.rows[0];

            // Initialize default empty profile record
            await client.query(
                "INSERT INTO user_profiles (user_id, bio, phone, date_of_birth, profile_image) VALUES ($1, '', '', NULL, '') ON CONFLICT (user_id) DO NOTHING",
                [newUser.id]
            );
            await client.query("COMMIT");

            // Attempt to deliver onboarding email notification asynchronously
            try {
                await sendAdminProvisionedMail(newUser.email, newUser.name, defaultPassword, newUser.role);
            } catch (mailError) {
                console.error("Failed to deliver onboarding email:", mailError.message);
            }

            res.status(201).json({ message: "User account provisioned successfully by Admin.", user: newUser });
        } catch (txnErr) {
            await client.query("ROLLBACK");
            throw txnErr;
        } finally {
            client.release();
        }
    } catch (err) {
        res.status(500).json({ message: "Error provisioning user account: " + err.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const result = await db.query(
            "SELECT id, name, email, role, created_at FROM users ORDER BY created_at DESC"
        );

        res.status(200).json({ users: result.rows });
    } catch (err) {
        res.status(500).json({ message: "Error fetching users: " + err.message });
    }
}

const getUserById = async (req, res) => {
    const { id } = req.params;

    const result = await db.query(
        `SELECT u.id, u.name, u.email, u.role, u.created_at, p.phone, p.bio, p.profile_image, p.date_of_birth FROM users u LEFT JOIN user_profiles p ON p.user_id = u.id WHERE u.id = $1`, [id]
    );

    if (result.rows.length === 0) {
        res.status(404).json({ message: "User not found" });
    }
    res.json(result.rows[0]);
}

const updateUserRole = async (req, res) => {
    const {id} = req.params;
    const {role} = req.body;

    const allowedRoles = ["student", "instructor", "admin"];

    if (!allowedRoles.includes(role)) {
        return res.status(400).json({message: "Invalid role specified"});
    }

    const result = await db.query(
        "UPDATE users SET role = $1 WHERE id = $2 RETURNING id, role",[role, id]
    );

    if (result.rowCount === 0) {
        return res.status(404).json({message: "User not found"});
    }
    res.json({message: "User role updated successfully", user: result.rows[0]});
};

const deleteUser = async (req, res) => {
    const { id } = req.params;

    const result = await db.query(
        "DELETE FROM users WHERE id = $1 RETURNING id", [id]
    );

    if (result.rowCount === 0) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully", userId: result.rows[0].id });
}

const getAllBatchesAdmin = async (req, res) => {
    try {
        const result = await db.query(
            `SELECT b.*, c.title AS course_title, u.name AS instructor_name,
                COALESCE(be.enrolled_count, 0) AS enrolled_count
             FROM batches b
             JOIN courses c ON b.course_id = c.id
             JOIN users u ON c.instructor_id = u.id
             LEFT JOIN (
                SELECT batch_id, COUNT(*)::int AS enrolled_count
                FROM batch_enrollments
                GROUP BY batch_id
             ) be ON be.batch_id = b.id
             ORDER BY b.start_date DESC`
        );

        res.json({ batches: result.rows });
    } catch (err) {
        res.status(500).json({ message: "Error fetching batches: " + err.message });
    }
};

export { createUserByAdmin, getAllUsers, getUserById, updateUserRole, deleteUser, getAllBatchesAdmin };