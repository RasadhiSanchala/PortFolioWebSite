
function contactMe() {
    
}

function downloadCV() {
    alert("Downloading CV...");
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {  
    anchor.addEventListener('click', function (e) {  
        e.preventDefault();  

        const target = document.querySelector(this.getAttribute('href'));  
        if (target) {  
            target.scrollIntoView({  
                behavior: 'smooth',  
                block: 'start'  
            });  
        }  
    });  
});  

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when a link is clicked
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });
}