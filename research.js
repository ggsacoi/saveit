const nasilisi = document.querySelector('.numbers');
document.addEventListener("DOMContentLoaded", function() {

    let nayebité = localStorage.getItem('text');
    nasilisi.textContent = nayebité;

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
            const highlightedText = item.value.replace();
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