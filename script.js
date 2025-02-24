// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        const target = this.getAttribute('href');

        if (!target.startsWith("#")) return;

        event.preventDefault();
        document.getElementById(target.substring(1)).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Image Hover Effect with Golden Glow
document.querySelectorAll('.image-box img').forEach(img => {
    img.addEventListener('mouseover', function () {
        this.style.boxShadow = '0px 0px 30px rgba(255, 204, 0, 1)';
    });
    img.addEventListener('mouseout', function () {
        this.style.boxShadow = 'none'; // Instantly removes the glow
    });
});

// Full-Screen Avengers Logo Click Effect
window.onload = function () {
    const avengersLogo = document.getElementById("avengers-logo");
    const heroGallery = document.getElementById("hero-gallery");

    if (avengersLogo) {
        avengersLogo.addEventListener("click", function () {
            if (heroGallery) {
                heroGallery.style.display = "flex"; // Show hero gallery
            }
            this.style.display = "none"; // Hide logo
        });
    }

    // Dynamic Greeting Message Based on Time of Day
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good Morning, Marvel Fan! ☀️";
    } else if (hours < 18) {
        greeting = "Good Afternoon, Marvel Enthusiast! 🔥";
    } else {
        greeting = "Good Evening, True Believer! 🌙";
    }

    const header = document.querySelector("header h1");
    if (header) {
        header.innerHTML = greeting;
    }
};
