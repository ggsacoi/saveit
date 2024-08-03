addEventListener('DOMContentLoaded', () => {
const spans = document.querySelectorAll('.boxdevices');

spans.forEach(span => {
    span.addEventListener("click", (event) => {
      event.stopPropagation();
      window.open("cestbien.html", "_top");
    });
});
});