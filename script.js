// Add a pop-up message when the page loads
window.onload = function () {
alert("Welcome to ILead Innovationary Workforce!");
};

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior: 'smooth'
});
});
});

// Update the year dynamically in the footer
const currentYear = new Date().getFullYear();
document.getElementById('footer-year').textContent = currentYear;

