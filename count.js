const nasilisi = document.querySelector('.numbers');
document.addEventListener("DOMContentLoaded", function() {

    let nayebité = localStorage.getItem('text');
    nasilisi.textContent = nayebité;
});