const nombre   = "Luizandro";
const apellido = "Martin";
const userName = "LMartin";
const edad     = 24;
const email   = "jlmh_aguila@hotmail.com";
let   mayor_edad = true;
let   dinero_ahorrado = 600;
let   deudas = 200;

function datos(complete_name, nick_name){
    console.log("Mi nombre es" + [complete_name] + "pero me puedes decir" + [nick_name])
}

datos(nombre, userName)

console.log([nombre] + " " + [apellido]);
console.log(dinero_ahorrado-deudas)


const tipoDeSuscripcion = "Basic";

if(tipoDeSuscripcion == "Free"){
    console.log("Toma los cursos gratis");
} else if (tipoDeSuscripcion == "Basic"){
    console.log("Casi todos los cursos durante un mes");
} else if (tipoDeSuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos por un año")
} else if (tipoDeSuscripcion == "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar todos los cursos de platzi durante un año");
}


let i = 0;
let k = 10;

while(k >= 2){
    console.log("El valor de k es: " + k);
    k --;
}

while(i < 5){
    console.log("El valor de i es: " + i);
    i ++;
}

const frutas = ['Manzana', 'Pera', 'Platano', 'Ciruela', 'Guanabana'];

function printFirst(array){
    console.log(frutas[0]);
}

printFirst(frutas);

const frutas2 = ['Manzana', 'Pera', 'Platano', 'Ciruela', 'Guanabana'];
function allelements(arr){
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

allelements(frutas2);

const object ={
    name: "Juan",
    age : 24,
    last_name: "Martin",
    email: "jlmh",
}

function allelementsObject(obj){
    const arry = Object.values(obj);
    for(let i = 0; i<arry.length; i++){
        console.log(arry[i]);
    }
}

allelementsObject(object);

const tipoDeSuscripciones = {
    free: "gratis",
    basic: "un mes",
    expert: "un año",
    expert_duo: "tu y alguien mas",
};

function conseguirSuscrip(suscripcion){
    if(tipoDeSuscripciones[suscripcion]){
        console.log(tipoDeSuscripciones[suscripcion]);
        return;
    }
    console.warn('Este tipo de suscripcion no existe');
}

conseguirSuscrip('basic');