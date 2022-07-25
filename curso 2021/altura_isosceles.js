console.group('Isosceles')

function altuaIsosceles(lado1,lado2,base){
    if(lado1 == lado2 && base != lado1){
        alert('Es un triángulo isósceles');
            const altura=Math.sqrt((lado1*lado1)-(base*base)/4);
            alert(altura);
    }
        else{
            alert('No es un triángulo isósceles');
        }
}      

console.groupEnd();

altuaIsosceles(6,5,4)