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
    const span = document.getElementById('boxmdr');

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

    let count = 0;

    function addNuit() {
        count++; // Incrémente le compteur à chaque ajout
        const newNuit = document.createElement('div');
        newNuit.classList.add('nuit');
        newNuit.textContent = `Nuit ${count}`; // Texte affiché

        targetSection.appendChild(newNuit); // Ajoute l'élément à la section cible
    }

    span.addEventListener('click', addNuit);

});