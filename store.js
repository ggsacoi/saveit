    const items = [
       {id: 'vitragenoirs', keywords :"lunettes blanches", price :"10", devise :"€", img : "hawkers-boost-white-dark-blue-HBOO24HLT0-d1.jpg"},
       {id: 'nuits', keywords :"lunettes bleu nuit", price :"10", devise :"€", img : "hawkers-one-raw-polarized-air-sky-HONR21TLTP-d1.jpg"},
       {id: 'bleumarines', keywords :"lunettes bleumarine", price :"10", devise :"€", img : "hawkers-one-uptown-blue-ocean-HOUP21LLX0-d1.jpg"},
       {id: 'verts', keywords :"lunettes vert", price :"10", devise :"€", img : "hawkers-one-uptown-green-dark-HOUP21EBX0-d1.jpg"},
       {id: 'roses', keywords :"lunettes rose", price :"10", devise :"€", img : "hawkers-radiante-pink-salmon-HRAD24KKT0-d1.jpg"},
       {id: 'oranges', keywords :"lunettes orange", price :"10", devise :"€", img : "hawkers-speed-fluor-orange-ruby-HSPD24ORT0-d1.jpg"},
       {id: 'natures', keywords :"lunettes vert nature", price :"10", devise :"€", img : "hawkers-one-uptown-green-dark-HOUP21EBX0-d1.jpg"},
       {id: 'oceans', keywords :"lunettes ocean", price :"10", devise :"€", img : "hawkers-one-uptown-blue-ocean-HOUP21LLX0-d1.jpg"},
       {id: 'carrotes', keywords :"lunettes carrote", price :"10", devise :"€", img : "hawkers-speed-fluor-orange-ruby-HSPD24ORT0-d1.jpg"},
       {id: 'blanches', keywords :"lunettes blanche", price :"10", devise :"€", img : "hawkers-boost-white-dark-blue-HBOO24HLT0-d1.jpg"},
    ];

    export { items };

    const parentContainer = document.getElementById('paginationheart');

    const selectedItemsIds = JSON.parse(localStorage.getItem('selectedItem')) || [];

    addEventListener("DOMContentLoaded", ()=> {

    selectedItemsIds.forEach(selectedItemId => {
        
    const selectedItem = items.find(item => item.id === selectedItemId);

    if(selectedItem) {
        const itemDiv = document.createElement("div");
        itemDiv.className ='item';
        
        const imgContentDiv = document.createElement("div");
        imgContentDiv.className ='imgcontent';

        const img = document.createElement("img");
        img.src = selectedItem.img;
        img.className = 'lastseenimg';

        const title = document.createElement('div');
        title.className = 'titlecontent';

        const text = document.createElement('h4');
        text.className ='jsvp';
        text.textContent = selectedItem.keywords;

        const prix = document.createElement('h4');
        prix.className = 'jstp';
        prix.textContent = selectedItem.price + selectedItem.devise;

        imgContentDiv.appendChild(img);
        itemDiv.appendChild(imgContentDiv);
        title.appendChild(text);
        title.appendChild(prix);
        itemDiv.appendChild(title);
        parentContainer.appendChild(itemDiv);
    }
    });
      // // Calculer le total après avoir ajouté tous les items
    // const totalPrices = Array.from(document.querySelectorAll('.jstp')).map(item => {
    //     const priceText = item.textContent;
    //     const priceNumber = parseFloat(priceText.replace(/[^0-9]/g, ''));
    //     return priceNumber;
    // });

    // const sum = totalPrices.reduce((acc, num) => acc + num, 0);

    // const total = document.createElement("h2");
    // total.className = 'mbongo';
    // total.textContent = "Le montant total est de " + sum + "€";  // Ajoutez la devise ici si nécessaire

    // // Ajouter l'élément total après les items
    // parentContainer.appendChild(total);
    const darkBtn = document.querySelector('.localmouve');

    darkBtn.addEventListener('click', () => {
        localStorage.removeItem('text');
        localStorage.removeItem('numbersElement,textContent');
        localStorage.removeItem('selectedItem');
        location.reload();

    });
});