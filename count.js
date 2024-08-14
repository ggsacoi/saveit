const nasilisi = document.querySelector('.numbers');
document.addEventListener("DOMContentLoaded", function() {

    let nayebité = localStorage.getItem('text');
    nasilisi.textContent = nayebité;

    let baelokonioso = [
        { element: document.getElementById('produit1'), url: "egain.html" },
        { element: document.getElementById('produit2'), url: "egain2.html" },
        { element: document.getElementById('produit3'), url: "egain3.html" },
        { element: document.getElementById('produit4'), url: "egain4.html" },
        { element: document.getElementById('produit5'), url: "egain5.html" },
        { element: document.getElementById('produit6'), url: "egain6.html" },
        { element: document.getElementById('produit7'), url: "egain7.html" },
        { element: document.getElementById('produit8'), url: "egain8.html" },
        { element: document.getElementById('produit9'), url: "egain9.html" },
        { element: document.getElementById('produit10'), url: "egain10.html" },
    ];

    baelokonioso.forEach(({ element, url }) => {
        if (element) {
            element.addEventListener('click', () => {
                window.open(url, '_top');
            });
        }
      });
});