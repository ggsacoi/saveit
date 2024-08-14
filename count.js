const nasilisi = document.querySelector('.numbers');
document.addEventListener("DOMContentLoaded", function() {

    let nayebité = localStorage.getItem('text');
    nasilisi.textContent = nayebité;

    const span = document.querySelector('.boxstore');
    span.addEventListener('click', (event) => {
        window.open("store.html", "_top");
    });
});