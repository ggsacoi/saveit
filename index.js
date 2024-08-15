    import { items } from './store.js';

    const nuits = document.getElementById('nuits');
    const blanches = document.getElementById('blanches');
    const bleumarines = document.getElementById('bleumarines');
    const verts = document.getElementById('verts');
    const roses = document.getElementById('roses');
    const natures = document.getElementById('natures');
    const vitragenoirs = document.getElementById('vitragenoirs');
    const oceans = document.getElementById('oceans');
    const carrotes = document.getElementById('carrotes');
    const oranges = document.getElementById('oranges');
    const span = document.querySelector('.boxstore');

    const objects = [
        nuits,
        blanches,
        bleumarines,
        verts,
        roses,
        natures,
        vitragenoirs,
        oceans,
        carrotes,
        oranges
    ];

 export { objects };



 document.addEventListener("DOMContentLoaded", function() {
    let itwork = document.querySelector('.numbers');

    objects.forEach((object) => {
        object.addEventListener('click', (event) => {
            event.stopPropagation();
            let id = object.id;

            // Récupérer l'élément actuel du localStorage
            let selectedItems = localStorage.getItem('selectedItem');

            // Vérifier si selectedItems existe et s'il est en format JSON valide
            if (selectedItems) {
                try {
                    selectedItems = JSON.parse(selectedItems);
                } catch (e) {
                    // Si ce n'est pas un tableau JSON valide, on le transforme en tableau
                    selectedItems = [selectedItems];
                }
            } else {
                // Si selectedItems n'existe pas encore, initialiser avec un tableau vide
                selectedItems = [];
            }

         
                selectedItems.push(id);


            // Enregistrer la liste mise à jour dans le localStorage
            localStorage.setItem('selectedItem', JSON.stringify(selectedItems));

                // Récupérer l'élément actuel du localStorage
                let thenumbers = localStorage.getItem('numbersElement,textContent');

                // Vérifier si selectedItems existe et s'il est en format JSON valide
                if (thenumbers) {
                    try {
                        thenumbers = JSON.parse(thenumbers);
                    } catch (e) {
                        // Si ce n'est pas un tableau JSON valide, on le transforme en tableau
                        thenumbers = [thenumbers];
                    }
                } else {
                    // Si selectedItems n'existe pas encore, initialiser avec un tableau vide
                    thenumbers = [];
                }
    
                    thenumbers.push('Mervie');
    
                // Enregistrer la liste mise à jour dans le localStorage
                localStorage.setItem('numbersElement,textContent', JSON.stringify(thenumbers));

                let thenumbersLength = thenumbers.length;

itwork.textContent = thenumbersLength
localStorage.setItem('text', itwork.textContent);
    });

    span.addEventListener('click', (event) => {
        window.open("store.html", "_top");
    });


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
});