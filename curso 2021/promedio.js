const Lista1 = [
    100,
    200,
    300,
    500,
];

let sumaLista1 = 0;
for(let i = 0; i < Lista1.length; i++){
    sumaLista1 = sumaLista1 + Lista1[i];
}

const promedioLista1 = sumaLista1 / Lista1.length;

function Promedio(Lista){

    //De esta manera se logra con el ciclo for
    // let sumaLista = 0;
    // for(let i = 0; i < Lista.length; i++){
    //     sumaLista = sumaLista + Lista[i];
    // }

    const sumaLista = Lista.reduce(
        function (valorAcum = 0, new_element){
            return valorAcum + new_element;
        }
    );

    const promedioLista = sumaLista / Lista.length;

    return promedioLista;
}