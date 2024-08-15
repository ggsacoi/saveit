const myInput = document.getElementById("many");
const object = document.querySelector('.boxdevices');
function stepper(btn){
    let id = btn.getAttribute("id");
    let min = myInput.getAttribute("min");
    let max = myInput.getAttribute("max");
    let step = myInput.getAttribute("step");
    let val = myInput.getAttribute("value");
    let calcStep = (id == "plus")  ? (step*1)  :
    (step * -1);
    let newValue = parseInt(val) + calcStep;
    
    if(newValue >= min && newValue <= max) {
        myInput.setAttribute("value", newValue);
    }
}