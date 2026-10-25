/**
 * Contact delivery adapter.
 * Prefer the configured backend so SMTP and notification credentials stay server-side.
 * Web3Forms is an optional fallback when its public form key is explicitly configured.
 */
const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();
const API_URL = import.meta.env.VITE_API_URL?.trim().replace(/\/+$/, "");

let lastSubmitTimestamp = 0;
const SUBMIT_COOLDOWN_MS = 2500;

const safeJson = async (response) => {
  try {
    return await response.json();
  } catch {
    return {};
  }
};

export const sendInquiry = async (formData, source = "Website") => {
  const now = Date.now();

  // A honeypot remains a silent no-op for bots. No timing threshold is used:
  // autofill and fast real users must not receive false success responses.
  if (formData._honeypot || formData.website_url_hp || formData.botcheck) return true;

  if (now - lastSubmitTimestamp < SUBMIT_COOLDOWN_MS) {
    throw new Error("Please wait a moment before submitting again.");
  }

  if (!API_URL && !ACCESS_KEY) {
    throw new Error(
      "Online enquiry delivery is not configured yet. Please contact us using the WhatsApp or email details on this page."
    );
  }

  const payloadData = {
    name: String(formData.name || "").trim(),
    email: String(formData.email || "").trim(),
    phone: String(formData.phone || "").trim(),
    organization: String(formData.organization || formData.company || "").trim(),
    subject: String(formData.subject || `New ${source} enquiry`).trim(),
    message: String(formData.message || formData.scope || "").trim(),
  };

  if (!payloadData.name || !payloadData.email || !payloadData.subject || !payloadData.message) {
    throw new Error("Please complete the required fields before submitting.");
  }

  lastSubmitTimestamp = now;

  if (API_URL) {
    const response = await fetch(`${API_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payloadData),
    });
    const result = await safeJson(response);
    if (!response.ok || result.success === false) {
      throw new Error(result.message || "We could not submit your enquiry. Please try again or contact us directly.");
    }
    return true;
  }

  const payload = new FormData();
  payload.append("access_key", ACCESS_KEY);
  payload.append("subject", `New ${source} Inquiry from ${payloadData.name || payloadData.organization || "Website"}`);
  payload.append("from_name", "THAKSAAI Website");
  Object.entries(payloadData).forEach(([key, value]) => payload.append(key, value));

  const response = await fetch(WEB3FORMS_URL, { method: "POST", body: payload });
  const result = await safeJson(response);
  if (!response.ok || result.success !== true) {
    throw new Error(result.message || "We could not submit your enquiry. Please try again or contact us directly.");
  }

  return true;
};

export const sendContactMessage = (formData) =>
  sendInquiry(formData, formData.subject || "Direct Contact");

export default { sendInquiry, sendContactMessage };
