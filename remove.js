addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('section');
    const menu = document.querySelector(".options");
    const checker = document.getElementById("see");
    const span = document.querySelector('.boxdevices');
    const buybtn = document.getElementById('container');
    const popup = document.querySelector(".contact-container");
section.addEventListener("click", () => {
    if (checker.checked) {
        checker.checked = false;
    }
});
span.addEventListener("click", (event) => {
  event.stopPropagation();
  window.open("c'estbien.html", "_top");
});
buybtn.addEventListener("click", (event) => {
  event.stopPropagation();
  window.open("c'estbien.html", "_top");
});
});