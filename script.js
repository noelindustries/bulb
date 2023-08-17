let bulb = document.querySelector("h1");
let  bulbSwitch = document.querySelector("button");

bulbSwitch.addEventListener("click", () => {
    if(bulb.style.backgroundColor === 'black'){
        bulb.style.backgroundColor = "yellow";
        bulbSwitch.innerHTML = "OFF"
    }else{
        bulb.style.backgroundColor = "black"
        bulbSwitch.innerHTML = "ON"
    }
});