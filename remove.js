addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('section');
    const menu = document.querySelector(".options");
    const checker = document.getElementById("see");
section.addEventListener("click", () => {
    if (checker.checked) {
        checker.checked = false;
    }
});
});