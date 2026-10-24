/**
 * Handles routing of all form submissions on the THAKSA.AI platform.
 * Preserves Web3Forms + CallMeBot contract while adding honeypot,
 * timing-based spam checks, and double-submit debouncing.
 */

const WEB3FORMS_URL = 'https://api.web3forms.com/submit';
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
const WHATSAPP_KEY = import.meta.env.VITE_CALLMEBOT_API_KEY;
const ADMIN_PHONE = import.meta.env.VITE_ADMIN_PHONE || '9494808669';

let lastSubmitTimestamp = 0;
const SUBMIT_COOLDOWN_MS = 2500;

export const sendInquiry = async (formData, source = 'Website') => {
  const now = Date.now();

  // Honeypot spam filter
  if (formData._honeypot || formData.website_url_hp || formData.botcheck) {
    return true;
  }

  // Timing-based bot check (if form rendered < 800ms before submit)
  const mountedAt = formData._mountedAt || formData.formLoadedAt;
  if (mountedAt && now - Number(mountedAt) < 800) {
    return true;
  }

  // Debounce rapid double submissions
  if (now - lastSubmitTimestamp < SUBMIT_COOLDOWN_MS) {
    throw new Error('Please wait a moment before submitting again.');
  }
  lastSubmitTimestamp = now;

  if (!ACCESS_KEY) {
    // Graceful fallback in local dev if .env key is not configured
    return true;
  }

  const payload = new FormData();
  payload.append('access_key', ACCESS_KEY);
  payload.append(
    'subject',
    `New ${source} Inquiry from ${formData.name || formData.company || 'Website'}`
  );
  payload.append('from_name', 'THAKSA.AI Automated Routing');

  Object.keys(formData).forEach((key) => {
    if (!key.startsWith('_') && key !== 'botcheck' && key !== 'formLoadedAt') {
      payload.append(key, formData[key]);
    }
  });

  try {
    const response = await fetch(WEB3FORMS_URL, {
      method: 'POST',
      body: payload,
    });

    let result;
    try {
      result = await response.json();
    } catch {
      throw new Error(
        `NETWORK_ERROR: Web3Forms returned an invalid response. Status: ${response.status}`
      );
    }

    if (!result.success) {
      throw new Error(`API_ERROR: ${result.message || 'Web3Forms rejected the payload'}`);
    }

    if (WHATSAPP_KEY) {
      try {
        const textMessage = `*New ${source} Inquiry*\nName/Company: ${
          formData.name || formData.company
        }\nEmail: ${formData.email}\nScope: ${formData.scope || formData.message}`;
        const encodedText = encodeURIComponent(textMessage);
        fetch(
          `https://api.callmebot.com/whatsapp.php?phone=${ADMIN_PHONE}&text=${encodedText}&apikey=${WHATSAPP_KEY}`
        ).catch((err) => console.warn('WhatsApp ping failed:', err));
      } catch (wpError) {
        console.warn('WhatsApp configuration error:', wpError);
      }
    }

    return true;
  } catch (error) {
    console.error('Submission error:', error);
    throw error;
  }
};

export const sendContactMessage = (formData) =>
  sendInquiry(formData, formData.subject || 'Direct Contact');

export default { sendInquiry, sendContactMessage };
