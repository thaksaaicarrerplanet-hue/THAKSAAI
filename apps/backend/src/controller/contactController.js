import { createMailer } from "../utils/sendMail.js";

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const readField = (value) => (typeof value === "string" ? value.trim() : "");
const LIMITS = {
  name: 120,
  email: 254,
  phone: 40,
  organization: 180,
  subject: 180,
  message: 8000,
};

const sendWhatsAppNotification = async ({ name, email, phone, organization, subject, message }) => {
  const apiKey = process.env.CALLMEBOT_API_KEY;
  const adminPhone = process.env.WHATSAPP_ADMIN_PHONE;
  if (!apiKey || !adminPhone) return;

  const text = [
    "New THAKSAAI website enquiry",
    `Name: ${name}`,
    `Organization: ${organization || "Not provided"}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    `Subject: ${subject}`,
    `Message: ${message.slice(0, 1200)}`,
  ].join("\n");

  const query = new URLSearchParams({ phone: adminPhone, text, apikey: apiKey });
  try {
    const response = await fetch(`https://api.callmebot.com/whatsapp.php?${query}`, {
      signal: AbortSignal.timeout(3000),
    });
    if (!response.ok) console.warn("Contact WhatsApp notification failed with HTTP", response.status);
  } catch {
    console.warn("Optional contact WhatsApp notification could not be delivered.");
  }
};

const submitContactForm = async (req, res) => {
  try {
    const fields = {
      name: readField(req.body?.name),
      email: readField(req.body?.email),
      phone: readField(req.body?.phone),
      organization: readField(req.body?.organization),
      subject: readField(req.body?.subject),
      message: readField(req.body?.message),
    };

    if (!fields.name || !fields.email || !fields.subject || !fields.message) {
      return res.status(400).json({ message: "Name, email, subject, and message are required." });
    }

    for (const [field, value] of Object.entries(fields)) {
      if (value.length > LIMITS[field]) {
        return res.status(400).json({
          message: `${field.charAt(0).toUpperCase() + field.slice(1)} exceeds the allowed length.`,
        });
      }
    }

    if (!isValidEmail(fields.email)) {
      return res.status(400).json({ message: "Please enter a valid email address." });
    }

    // GMAIL is the authenticated SMTP sender. CONTACT_RECEIVER_EMAIL is optional;
    // when omitted, enquiries are delivered to the same professional Gmail account.
    const senderEmail = process.env.GMAIL;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || senderEmail;
    if (!senderEmail || !receiverEmail || !process.env.PASSWORD) {
      console.error("Contact delivery is not configured: GMAIL/PASSWORD (and optional CONTACT_RECEIVER_EMAIL) must be set.");
      return res.status(503).json({
        message: "Online enquiry delivery is temporarily unavailable. Please use the WhatsApp or email contact options.",
      });
    }

    const submittedAt = new Date().toISOString();
    const transport = createMailer();
    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New THAKSAAI Website Enquiry</h2>
        <p><strong>Submitted At (UTC):</strong> ${submittedAt}</p>
        <p><strong>Name:</strong> ${escapeHtml(fields.name)}</p>
        <p><strong>Organization:</strong> ${escapeHtml(fields.organization || "Not provided")}</p>
        <p><strong>Email:</strong> ${escapeHtml(fields.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(fields.phone || "Not provided")}</p>
        <p><strong>Subject:</strong> ${escapeHtml(fields.subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(fields.message).replace(/\n/g, "<br/>")}</p>
      </div>
    `;

    await transport.sendMail({
      from: senderEmail,
      to: receiverEmail,
      subject: `[THAKSAAI Enquiry] ${fields.subject}`,
      replyTo: fields.email,
      html,
      text: [
        `Name: ${fields.name}`,
        `Organization: ${fields.organization || "Not provided"}`,
        `Email: ${fields.email}`,
        `Phone: ${fields.phone || "Not provided"}`,
        `Subject: ${fields.subject}`,
        "",
        fields.message,
      ].join("\n"),
    });

    void sendWhatsAppNotification(fields);
    return res.status(200).json({ success: true, message: "Enquiry submitted successfully." });
  } catch (error) {
    console.error("Contact delivery failed:", error?.code || error?.name || "unknown error");
    return res.status(500).json({
      message: "We could not send your enquiry. Please try again or use the direct contact options.",
    });
  }
};

export { submitContactForm };
