/**
 * Handles routing of all form submissions on the THAKSAAI platform.
 * 
 * Uses Web3Forms to instantly email contact@thaksaai.in in the background.
 * Future-proofed to ping a WhatsApp API endpoint if an API key is provided in .env.
 */

const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
const WHATSAPP_KEY = import.meta.env.VITE_CALLMEBOT_API_KEY;
const ADMIN_PHONE = import.meta.env.VITE_ADMIN_PHONE || "9494808669";

export const sendInquiry = async (formData, source) => {
  if (!ACCESS_KEY) {
    console.error("Missing Web3Forms Access Key");
    throw new Error("CRITICAL_ERROR: Missing Web3Forms API Key. You must restart the local server so Vite can read the .env file.");
  }

  // Construct FormData payload for Web3Forms (required to bypass Cloudflare)
  const payload = new FormData();
  payload.append("access_key", ACCESS_KEY);
  payload.append("subject", `New ${source} Inquiry from ${formData.name || formData.company || 'Website'}`);
  payload.append("from_name", "THAKSAAI Automated Routing");
  
  // Append all form fields
  Object.keys(formData).forEach(key => {
    payload.append(key, formData[key]);
  });

  try {
    // 1. Send Email via Web3Forms
    const response = await fetch(WEB3FORMS_URL, {
      method: "POST",
      body: payload
    });

    let result;
    try {
      result = await response.json();
    } catch (parseError) {
      throw new Error(`NETWORK_ERROR: Web3Forms returned an invalid response (Cloudflare Block or Outage). Status: ${response.status}`);
    }

    if (!result.success) {
      console.error("Email routing failed:", result);
      throw new Error(`API_ERROR: ${result.message || "Web3Forms rejected the payload"}`);
    }

    // 2. Try sending WhatsApp Notification (if CallMeBot key is configured)
    if (WHATSAPP_KEY) {
      try {
        const textMessage = `*New ${source} Inquiry*\nName/Company: ${formData.name || formData.company}\nEmail: ${formData.email}\nScope: ${formData.scope || formData.message}`;
        const encodedText = encodeURIComponent(textMessage);
        
        // This hits the CallMeBot API silently without opening the WhatsApp app.
        // It requires the admin to have authorized the bot via their phone.
        fetch(`https://api.callmebot.com/whatsapp.php?phone=${ADMIN_PHONE}&text=${encodedText}&apikey=${WHATSAPP_KEY}`)
          .catch(err => console.warn("WhatsApp ping failed:", err)); 
          // Catch and ignore WP failure so the form still shows success for email.
      } catch (wpError) {
        console.warn("WhatsApp configuration error:", wpError);
      }
    }

    return true;

  } catch (error) {
    console.error("Submission error:", error);
    throw error;
  }
};
