Lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    1,
    2,
    1,
    3,
    4,
    5,
];

const lista1Count = {};

Lista1.map(
    function(elemento){
        if (lista1Count[elemento]){
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    function (elemento1, elemento2){
        return elemento1[1] - elemento2[1];
    }
)

const moda = lista1Array[lista1Array.length - 1];