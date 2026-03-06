// Typewriter cycling animation for hero section
const roles = [
    "Full Stack Developer",
    "Mobile App Developer",
    "UI/UX Designer"
];

const typedEl  = document.getElementById("typed-text");
const cursorEl = document.querySelector(".typed-cursor");

let roleIndex  = 0;
let charIndex  = 0;
let isDeleting = false;

const TYPING_SPEED   = 80;   // ms per character while typing
const DELETING_SPEED = 45;   // ms per character while deleting
const PAUSE_AFTER    = 1800; // ms to pause when word is fully typed
const PAUSE_BEFORE   = 300;  // ms before starting to delete

function type() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        // Typing forward
        typedEl.textContent = currentRole.slice(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            // Fully typed — pause then start deleting
            isDeleting = true;
            setTimeout(type, PAUSE_AFTER);
            return;
        }
        setTimeout(type, TYPING_SPEED);
    } else {
        // Deleting
        typedEl.textContent = currentRole.slice(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            // Fully deleted — move to next role
            isDeleting = false;
            roleIndex  = (roleIndex + 1) % roles.length;
            setTimeout(type, PAUSE_BEFORE);
            return;
        }
        setTimeout(type, DELETING_SPEED);
    }
}

// Start after page animations settle
setTimeout(type, 2800);
