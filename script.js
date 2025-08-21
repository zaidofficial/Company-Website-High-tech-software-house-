//Dark/Light Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        // Button icon toggle
        if (document.body.classList.contains("dark")) {
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>'; // Light mode icon
        } else {
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>'; // Dark mode icon
        }
    });
}


// Form Validation + Modal Popup
const form = document.getElementById("contactForm");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Stop default form submission

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const subject = document.getElementById("subject").value.trim();
const message = document.getElementById("message").value.trim();

// Simple validation
    if (!name || !email || !subject || !message) {
        alert("⚠️ Please fill all fields before submitting.");
        return;
    }

    // Email format validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("⚠️ Please enter a valid email address.");
        return;
    }

    // Show modal if everything is correct
    modal.style.display = "flex";
    form.reset();
    });
}

// Close modal on button click
if (closeModal) {
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

// Close modal if clicked outside content
if (modal) {
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
        modal.style.display = "none";
    }
    });
}