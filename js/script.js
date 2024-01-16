/* DOM */
const cantidadPancitos = document.getElementById('cantidadPancitos');
const pesoPancitos = document.getElementById('pesoPancitos');
const calcularButton = document.getElementById('button');
const form = document.getElementById('form');
const ingredientesContainer = document.getElementById('ingredientes_container');
const divs = document.getElementsByClassName('ingredientes');
let divsLength = divs.length;

/* Ingredientes agrupados en un objeto */
const objReceta = {
    harina000 : 200,
    agua : 190,
    levadura : 10,
    harina0000 : 300,
    lechePolvo : 30,
    azucar : 30,
    sal : 10,
    papa : 150,
    manteca : 50
}

/* precio / 1000grs de los ingredientes */

const precioKg = {
    harina000 : 400,
    agua : 0,
    levadura : 100,
    harina0000 : 450,
    lechePolvo : 1000,
    azucar : 500,
    sal : 500,
    papa : 600,
    manteca : 2000
}

/* sumar ingredientes */
let pesoMasaCruda = () => {
    let totalIngredientes = 0;
    for (const ingredientes in objReceta){
        totalIngredientes += objReceta[ingredientes]
    }
    return totalIngredientes;
}

/* mostrar las entradas del usuario */
function mostrar(a,b) {
    console.log(parseInt(a));
    console.log(parseInt(b));
}

/* peso de los bollitos, se le suma un 10% al numero ingresado por el usuario */
let gramosBollitos = (a) => {
    return parseInt(a) + ((10 / 100) * parseInt(a));
}

/* cantidad de bollitos, es el resultado de la division entre el peso de la masa cruda y el resultado de sumarle un 10% al numero ingresado por el usuario */
let cantidadBollitos = (a) => {
    return pesoMasaCruda() / a;
}

/* calcular ingredientes por cada bollito */

let harina000Bollito = (a) => {
    return objReceta.harina000 / a;
}

let aguaBollito = (a) => {
    return objReceta.agua / a;
}

let levaduraBollito = (a) => {
    return objReceta.levadura / a;
}

let harina0000Bollito = (a) => {
    return objReceta.harina0000 / a;
}

let lechePolvoBollito = (a) => {
    return objReceta.lechePolvo / a;
}

let azucarBollito = (a) => {
    return objReceta.azucar / a;
}

let salBollito = (a) => {
    return objReceta.sal / a;
}

let papaBollito = (a) => {
    return objReceta.papa / a;
}

let mantecaBollito = (a) => {
    return objReceta.manteca / a;
}

/* Ingredientes necesarios en total */

let harina000Necesaria = (a) => {
    console.log(a * cantidadPancitos.value);
    return a * cantidadPancitos.value;
}

let aguaNecesaria = (a) =>{
    console.log(a * cantidadPancitos.value);
    return a * cantidadPancitos.value;
}

let levaduraNecesaria = (a) =>{
    console.log(a * cantidadPancitos.value);
    return a * cantidadPancitos.value;
}

let harina0000Necesaria  = (a) =>{
    console.log(a * cantidadPancitos.value);
    return a * cantidadPancitos.value;
}

let lechePolvoNecesaria = (a) =>{
    console.log(a * cantidadPancitos.value);
    return a * cantidadPancitos.value;
}

let azucarNecesaria = (a) =>{
    console.log(a * cantidadPancitos.value);
    return a * cantidadPancitos.value;
}

let salNecesaria = (a) =>{
    console.log(a * cantidadPancitos.value);
    return a * cantidadPancitos.value;
}

let papaNecesaria = (a) =>{
    console.log(a * cantidadPancitos.value);
    return a * cantidadPancitos.value;
}

let mantecaNecesaria = (a) =>{
    console.log(a * cantidadPancitos.value);
    return a * cantidadPancitos.value;
}

/* listener del boton calcular */
calcularButton.addEventListener('click', () => {
    mostrar(pesoPancitos.value, cantidadPancitos.value);

    form.style.display = 'none';
    ingredientesContainer.style.display = 'block';

    gramosBollitos(pesoPancitos.value);

    cantidadBollitos(gramosBollitos(pesoPancitos.value));
    harina000Bollito(cantidadBollitos(gramosBollitos(pesoPancitos.value)));
    aguaBollito(cantidadBollitos(gramosBollitos(pesoPancitos.value)));
    levaduraBollito(cantidadBollitos(gramosBollitos(pesoPancitos.value)));
    harina0000Bollito(cantidadBollitos(gramosBollitos(pesoPancitos.value)));
    lechePolvoBollito(cantidadBollitos(gramosBollitos(pesoPancitos.value)));
    azucarBollito(cantidadBollitos(gramosBollitos(pesoPancitos.value)));
    salBollito(cantidadBollitos(gramosBollitos(pesoPancitos.value)));
    papaBollito(cantidadBollitos(gramosBollitos(pesoPancitos.value)));
    mantecaBollito(cantidadBollitos(gramosBollitos(pesoPancitos.value)));

    const ingredientesNecesarios = [
        harina000Necesaria(harina000Bollito(cantidadBollitos(gramosBollitos(pesoPancitos.value)))),
        aguaNecesaria(aguaBollito(cantidadBollitos(gramosBollitos(pesoPancitos.value)))),
        levaduraNecesaria(levaduraBollito(cantidadBollitos(gramosBollitos(pesoPancitos.value)))),
        harina0000Necesaria(harina0000Bollito(cantidadBollitos(gramosBollitos(pesoPancitos.value)))),
        lechePolvoNecesaria(lechePolvoBollito(cantidadBollitos(gramosBollitos(pesoPancitos.value)))),
        azucarNecesaria(azucarBollito(cantidadBollitos(gramosBollitos(pesoPancitos.value)))),
        salNecesaria(salBollito(cantidadBollitos(gramosBollitos(pesoPancitos.value)))),
        papaNecesaria(papaBollito(cantidadBollitos(gramosBollitos(pesoPancitos.value)))),
        mantecaNecesaria(mantecaBollito(cantidadBollitos(gramosBollitos(pesoPancitos.value))))
    ]

    for (let i = 0; i < divsLength; i++) {
        let p = document.createElement('p');
        p.textContent = ingredientesNecesarios[i].toFixed(2) + ' ' + 'grs.';
        divs[i].appendChild(p);
    }

});