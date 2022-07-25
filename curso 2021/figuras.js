//Código del cuadrado
console.group('Cuadrados')
//const ladocuadrado = 5;
//console.log('Lados del cuadrado medida:' + ladocuadrado + 'cm');

function perimetroCuadrado(lado) {
    return lado * 4;
}
//console.log('Perimetro del cuadrado es:' + perimetroCuadrado + 'cm');

function areaCuadrado(lado){
    return lado * lado;
} 
//console.log('Area del cuadrado es:' + areaCuadrado + 'cm2');
console.groupEnd();

//código del triángulo
console.group('Triángulos')


// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 6;
// const alturaTriangulo = 6;
// console.log(
//     'Lados del triangulo medida: ' 
//     + ladoTriangulo1 
//     + 'cm,' 
//     + ladoTriangulo2 
//     + 'cm,'
//     + baseTriangulo 
//     + 'cm'
//     );
// console.log('La altura del triángulo es: ' + alturaTriangulo);

function perimetroTriangulo(lado1, lado2, lado3){
    return lado1 + lado2 + lado3;
} 
// console.log('El perimetro del triángulo es: ' + perimetroTriangulo + 'cm');

function areaTriangulo(base, altura) {
    return (base*altura)/2;
}
// console.log('El área del triángulo es: ' + areaTriangulo + 'cm2');

console.groupEnd();


function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}