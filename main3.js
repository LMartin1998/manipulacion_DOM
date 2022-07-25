const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn    = document.querySelector('#btnCalcular')
const presult = document.querySelector('#result');

// form.addEventListener('submit', Suma); //No se llama con parentesis


// function Suma(event){
//     event.preventDefault();
//     const sumaImputs = Number(input1.value) + Number(input2.value);
//     presult.innerText = "Resultado " + sumaImputs;
// }

btn.addEventListener('click', Suma);

function Suma(event){
//     event.preventDefault();
    const sumaImputs = Number(input1.value) + Number(input2.value);
    presult.innerText = "Resultado " + sumaImputs;
}