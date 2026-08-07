import { createTransport } from "nodemailer";

const createMailer = () =>
  createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL,
      pass: process.env.PASSWORD,
    },
  });

const sendWelcomeMail = async (email, name) => {
  const transport = createMailer();

  const htmlContent = `
    <div style="font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #0f172a;">
      <h2 style="margin-bottom: 8px;">Welcome to Thaksa E-Learning</h2>
      <p>Hello ${name || "Learner"},</p>
      <p>Your account has been created successfully.</p>
      <p>We are excited to support your learning journey.</p>
      <p style="margin-top: 18px;">- Team Thaksa</p>
    </div>
  `;

  await transport.sendMail({
    from: process.env.GMAIL,
    to: email,
    subject: "Welcome to Thaksa E-Learning",
    html: htmlContent,
  });
};

const sendLoginAlertMail = async (email, name) => {
  const transport = createMailer();
  const loginTime = new Date().toISOString();

  const htmlContent = `
    <div style="font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #0f172a;">
      <h2 style="margin-bottom: 8px;">Login Alert - Thaksa E-Learning</h2>
      <p>Hello ${name || "Learner"},</p>
      <p>Your account was just logged in successfully.</p>
      <p><strong>Time (UTC):</strong> ${loginTime}</p>
      <p>If this was not you, please change your password immediately.</p>
      <p style="margin-top: 18px;">- Team Thaksa</p>
    </div>
  `;

  await transport.sendMail({
    from: process.env.GMAIL,
    to: email,
    subject: "New Login to Your Thaksa Account",
    html: htmlContent,
  });
};

const sendAdminProvisionedMail = async (email, name, defaultPassword, role) => {
  const transport = createMailer();
  const htmlContent = `
    <div style="font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #0f172a; max-width: 600px;">
      <h2 style="color: #4f46e5; margin-bottom: 8px;">Welcome to Thaksa LMS Portal</h2>
      <p>Hello ${name || "Student"},</p>
      <p>Your institutional account has been provisioned by an Administrator for the <strong>${role || "student"}</strong> LMS portal.</p>
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 16px; border-radius: 8px; margin: 16px 0;">
        <p style="margin: 4px 0;"><strong>Login Username:</strong> ${email}</p>
        <p style="margin: 4px 0;"><strong>Default Password:</strong> ${defaultPassword}</p>
      </div>
      <p>Please sign in at our portal gateway and change your password under your Profile Settings.</p>
      <p style="margin-top: 24px; color: #64748b;">- Team Thaksa.AI</p>
    </div>
  `;

  await transport.sendMail({
    from: process.env.GMAIL,
    to: email,
    subject: "Welcome to Thaksa LMS - Account Credentials",
    html: htmlContent,
  });
};

export { sendWelcomeMail, sendLoginAlertMail, sendAdminProvisionedMail };
