const h1 = document.querySelector('h1');
const p  = document.querySelectorAll('p');
const parrafito = document.getElementsByClassName('parrafito') ;
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'Patito <br> feo'; //Puedes usar etiquetas html
h1.innerText = 'Patito <br> feo'; //Toma todo en texto

console.log(h1.getAttribute('class')); //Me indica el valor del atributo
h1.setAttribute('class', 'rojo');      //Se pueden cambiar los valores por nuevos

h1.classList.add('Rojo');
h1.classList.remove('Verde');

const img =document.createElement('img');
img.setAttribute('src', 'https://images.pexels.com/photos/12292899/pexels-photo-12292899.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load');
console.log('img');

pid.innerHTML = "";
pid.append(img);


