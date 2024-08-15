addEventListener('DOMContentLoaded', () => {
    const buttonleft = document.getElementById("A");
    const buttonright = document.getElementById("B");
    const slider = document.querySelector(".photos");
    const google = document.getElementById("container");
    const scrollAmount = window.innerWidth;
    let currentTranslateX = 0;

    buttonright.addEventListener("click", ()=> {
        if (slider) { 
            slider.scrollLeft += scrollAmount;
        }
    });

    buttonleft.addEventListener("click", ()=> {
        if (slider) { 
            slider.scrollLeft -= scrollAmount;
        }
    });

//     google.addEventListener("click", () => {
//         window.open("c'estbien.html", "_top");
//       });
});