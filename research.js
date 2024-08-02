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
        'lunettes blanche',
        'lunettes bleu nuit',
        'lunettes bleumarine',
        'lunettes ocean',
    ];

    const resultBox = document.querySelector('.things');
    const inputBox = document.getElementById('input-box');

    inputBox.onkeyup = function(){
        let result = [];
        let input = inputBox.value;
        if(input.length > 0){
            result = availableKeywords.filter((keyword)=>{
               return keyword.toLowerCase().includes(input.toLowerCase());
            });
            console.log(result);
        }
        display(result);
    }

    function display(result){
        const content = result.map((list)=>{
            return"<li>" + list + "</li>";
        }).join("");
        resultBox.innerHTML = "<ul class='list'>" + content + "</ul>";
    }
});