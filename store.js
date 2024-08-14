    const items = [
       {id: 'vitragenoirs', keywords :"lunettes blanches", price :"10€", img : "hawkers-boost-white-dark-blue-HBOO24HLT0-d1.jpg"},
       {id: 'nuits', keywords :"lunettes bleu nuit", price :"10€", img : "hawkers-one-raw-polarized-air-sky-HONR21TLTP-d1.jpg"},
       {id: 'bleumarines', keywords :"lunettes bleumarine", price :"10€", img : "hawkers-one-uptown-blue-ocean-HOUP21LLX0-d1.jpg"},
       {id: 'verts', keywords :"lunettes vert", price :"10€", img : "hawkers-one-uptown-green-dark-HOUP21EBX0-d1.jpg"},
       {id: 'roses', keywords :"lunettes rose", price :"10€", img : "hawkers-radiante-pink-salmon-HRAD24KKT0-d1.jpg"},
       {id: 'oranges', keywords :"lunettes orange", price :"10€", img : "hawkers-speed-fluor-orange-ruby-HSPD24ORT0-d1.jpg"},
       {id: 'natures', keywords :"lunettes vert nature", price :"10€", img : "hawkers-one-uptown-green-dark-HOUP21EBX0-d1.jpg"},
       {id: 'oceans', keywords :"lunettes ocean", price :"10€", img : "hawkers-one-uptown-blue-ocean-HOUP21LLX0-d1.jpg"},
       {id: 'carrotes', keywords :"lunettes carrote", price :"10€", img : "hawkers-speed-fluor-orange-ruby-HSPD24ORT0-d1.jpg"},
       {id: 'blanches', keywords :"lunettes blanche", price :"10€", img : "hawkers-boost-white-dark-blue-HBOO24HLT0-d1.jpg"},
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
        text.textContent = selectedItem.keywords;

        const prix = document.createElement('h4');
        prix.textContent = selectedItem.price;

        const quitlogo = document.createElement('span');
        quitlogo.className = 'boxstores';

        const logo = document.createElement('i');
        logo.className = "fa-solid fa-xmark";

        imgContentDiv.appendChild(img);
        quitlogo.appendChild(logo);
        itemDiv.appendChild(imgContentDiv);
        title.appendChild(text);
        title.appendChild(prix);
        itemDiv.appendChild(title);
        itemDiv.appendChild(quitlogo);
        parentContainer.appendChild(itemDiv);
    }
    });
    const darkBtn = document.querySelector('.localmouve');

    darkBtn.addEventListener('click', () => {
        localStorage.removeItem('text');
        localStorage.removeItem('numbersElement,textContent');
        localStorage.removeItem('selectedItem');
        location.reload();

    });
});