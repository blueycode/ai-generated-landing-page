const check = document.querySelector("#check");
const navLinks = document.querySelector("#nav-links");

check.addEventListener("click", () => {
    if (check.checked) {
        navLinks.style.left = '0';
    } else {
        navLinks.style.left = '-100%';
    }
});