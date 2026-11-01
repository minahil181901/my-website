const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");
const dropdown = document.querySelector(".dropdown");
const dropBtn = document.querySelector(".dropbtn");

// Open and close the mobile navigation
menuBtn.addEventListener("click", function () {
    const isOpen = navbar.classList.toggle("active");
    menuBtn.textContent = isOpen ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", String(isOpen));
});

// Open and close the Services dropdown
dropBtn.addEventListener("click", function () {
    const isOpen = dropdown.classList.toggle("open");
    dropBtn.setAttribute("aria-expanded", String(isOpen));
});

// Close the mobile menu after selecting a link
navbar.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("active");
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-expanded", "false");
        dropdown.classList.remove("open");
        dropBtn.setAttribute("aria-expanded", "false");
    });
});

// Close the dropdown when clicking outside it
document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("open");
        dropBtn.setAttribute("aria-expanded", "false");
    }
});
