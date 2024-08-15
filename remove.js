addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('section');
    const menu = document.querySelector(".options");
    const checker = document.getElementById("see");
section.addEventListener("click", () => {
    if (checker.checked) {
        checker.checked = false;
    }
});

let baelokonioso = [
    { element: document.getElementById('liA'), url: "c'estbien.html" },
    { element: document.getElementById('jsp'), url: "index.html" },
    { element: document.getElementById('drn'), url: "#footer" },
    { element: document.getElementById('set'), url: "settings.html" },
];

baelokonioso.forEach(({ element, url }) => {
    if (element) {
        element.addEventListener('click', () => {
            window.open(url, '_top');
        });
    }
  });
});