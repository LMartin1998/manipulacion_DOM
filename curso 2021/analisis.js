//Helpers
function esPar(number) {
    return (number % 2 === 0);
}

function Promedio(Lista){
    const sumaLista = Lista.reduce(
          function (valorAcum = 0, new_element){
              return valorAcum + new_element;
          }
      );
      const promedioLista = sumaLista / Lista.length;
      return promedioLista;
  }


const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

//calculadora de medianas
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = Promedio([personaMitad1, personaMitad2]);
        return mediana;

    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

// mediana general

/*
|
|
Este método se usa para ordenar de mayor a menor
|
|
*/
const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);


const medianaGeneralCol = medianaSalarios(salariosColSorted);

//mediana del top 10%

const spliceStart = (salariosColSorted.length * 90) / 100; //Foma de sacar el 90%
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});






