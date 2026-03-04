// ─── EmailJS Configuration ───────────────────────────────────────────────────
// Replace the placeholders below with your real EmailJS credentials.
// Sign up free at: https://www.emailjs.com/
//   1. Public Key  → Account > API Keys
//   2. Service ID  → Email Services tab
//   3. Template ID → Email Templates tab
// ──────────────────────────────────────────────────────────────────────────────

const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";   // 🔑 replace this
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";   // 📨 replace this
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";  // 📋 replace this

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

function sendEmail(event) {
    event.preventDefault();

    const btn     = document.getElementById("send-btn");
    const btnText = document.getElementById("btn-text");
    const loader  = document.getElementById("btn-loader");
    const status  = document.getElementById("form-status");

    // Show loading state
    btn.disabled   = true;
    btnText.style.display = "none";
    loader.style.display  = "inline";
    status.textContent    = "";
    status.className      = "form-status";

    const templateParams = {
        user_name:  document.getElementById("user_name").value.trim(),
        user_email: document.getElementById("user_email").value.trim(),
        message:    document.getElementById("message").value.trim(),
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        .then(() => {
            status.textContent  = "✅ Message sent! I'll get back to you soon.";
            status.classList.add("success");
            document.getElementById("contact-form").reset();
        })
        .catch((error) => {
            console.error("EmailJS error:", error);
            status.textContent  = "❌ Something went wrong. Please try again or email me directly.";
            status.classList.add("error");
        })
        .finally(() => {
            btn.disabled          = false;
            btnText.style.display = "inline";
            loader.style.display  = "none";
        });
}
