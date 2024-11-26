//Math object
const distanceEl = document.getElementById("distance");
const angleEl = document.getElementById("angle");
const resultEl = document.getElementById("result");
const btnEl = document.getElementById("btn");

function calculation(){
    const distance = distanceEl.value;
    const angle = angleEl.value;
    const height = parseFloat(distance*Math.tan(angle*Math.PI/180));
    const heightRound = height.toFixed(2);
    resultEl.innerText = `The height of the building is = ${heightRound} meter`;
}

btnEl.addEventListener("click", calculation);


