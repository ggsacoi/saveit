addEventListener('DOMContentLoaded', () => {
const span = document.querySelector('.boxdevices');

span.addEventListener("click", (event) => {
    event.stopPropagation();
    window.open("c'estbien.html", "_top");
  });
});