const remover = () => {
    const section = document.querySelector('section');
    const menu = document.querySelector(".options");
    const checker = document.getElementById("see");
    const scrollAmount = window.innerWidth;
section.addEventListener("click", () => {
    if (checker.checked) {
        checker.checked = false;
    }
});
};

window.addEventListener("load", remover);