document.addEventListener("DOMContentLoaded", function() {
    const nuit = document.getElementById('nuit');
    const blanche = document.getElementById('blanche');
    const bleumarine = document.getElementById('bleumarine');
    const vert = document.getElementById('vert');
    const rose = document.getElementById('rose');
    const nature = document.getElementById('nature');
    const vitragenoir = document.getElementById('vitragenoir');
    const ocean = document.getElementById('ocean');
    const carrote = document.getElementById('.carrote');
    const orange = document.getElementById('orange');
    const span = document.querySelector('.boxdevices');

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
    const numbers = document.getElementsByClassName('.numbers').textContent;

    vitragenoirs.addEventListener('click', ()=> {
        window.open("egain.html", "_top");
    })
    nuits.addEventListener('click', ()=> {
        window.open("egain2.html", "_top");
    })
    bleumarines.addEventListener('click', ()=> {
        window.open("egain3.html", "_top");
    })
    verts.addEventListener('click', ()=> {
        window.open("egain4.html", "_top");
    })
    roses.addEventListener('click', ()=> {
        window.open("egain5.html", "_top");
    })
    oranges.addEventListener('click', ()=> {
        window.open("egain6.html", "_top");
    })
    natures.addEventListener('click', ()=> {
        window.open("egain7.html", "_top");
    })

    oceans.addEventListener('click', ()=> {
        window.open("egain8.html", "_top");
    })

    carrotes.addEventListener('click', ()=> {
        window.open("egain9.html", "_top");
    })
    blanches.addEventListener('click', ()=> {
        window.open("egain10.html", "_top");
    })

    // span.addEventListener('click', ()=> {
    //     window.open("egain10.html", "_top");
    // });

    let availableKeywords = [
        {value:'lunettes blanche', url: "egain.html"},
        {value:'lunettes bleu nuit', url:"egain2.html"},
        {value:'lunettes bleumarine', url:"egain3.html"},
       {value:'lunettes ocean', url:"egain8.html"},
    ];

    const resultBox = document.querySelector('.things');
    const inputBox = document.getElementById('input-box');
    const clickedBtn = document.getElementById('onclick');
    inputBox.onkeyup = function(){
        let result = [];
        let input = inputBox.value.trim();
        if(input.length > 0){
            result = availableKeywords.filter((item)=>{
               return item.value.toLowerCase().includes(input.toLowerCase());
            });
            console.log(result);
        }
        display(result);
    }

    function display(result){
        const content = result.map((item)=>{
            const regex = new RegExp(`(${inputBox.value})`, 'gi');
            const highlightedText = item.value.replace(regex, "<mark>$1</mark>");
            return `<li data-url="${item.url}">${highlightedText}</li>`;
        }).join("");
        resultBox.innerHTML = "<ul class='list'>" + content + "</ul>";
        
        const items = resultBox.querySelectorAll('li');

            items.forEach(item => {
                item.addEventListener('click', function() {
                    const url = item.getAttribute('data-url');
                    window.open(url, '_top'); // Ouvre l'URL dans un nouvel onglet
                });
            });
    }

   clickedBtn.onclick = function() {
            let input = inputBox.value.trim();

            if (input.length > 0) {
                const match = availableKeywords.find(item => item.value.toLowerCase() === input.toLowerCase());

                if (match) {
                    window.open(match.url, '_top'); // Ouvre l'URL dans la même fenêtre si une correspondance exacte est trouvée
                } else {
                    alert('Aucun résultat exact trouvé. Essayez avec des mots clés disponibles.');
                }
            }
        }
});