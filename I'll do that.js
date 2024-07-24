const slider = () => {
    const buttonleft = document.getElementById("A");
    const buttonright = document.getElementById("B");
    const slider = document.querySelector(".photos");
    const suns = document.querySelector(".suns");
    const menu = document.querySelector(".options");
    const checker = document.getElementById(".see");
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


// suns.addEventListener("click", ()=> {
//        if (menu.classList.contains("show") ) {
//            menu.classList.remove("show")
//        } {
//          menu.classList.add("show");
//        }
//    });
};

window.addEventListener("load", slider);