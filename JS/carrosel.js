let index = 0;
const total = 3;

function update(){
    const carrosel_principal = document.getElementById("carrosel-principal");
    carrosel_principal.style.transform = `trasnlateX(-${index * 100}%)`;
}
function next(){
    index = (index + 1) % total;
    update();
}
function prev(){
    index = (index - 1) % total;
    update();
}