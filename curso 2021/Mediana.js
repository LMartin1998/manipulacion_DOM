function Promedio(Lista){
  const sumaLista = Lista.reduce(
        function (valorAcum = 0, new_element){
            return valorAcum + new_element;
        }
    );
    const promedioLista = sumaLista / Lista.length;
    return promedioLista;
}

Lista1 = [
    100,
    50,
    200,
    500,
    800,
];

Lista1.sort((a,b)=>a-b);

const mitadLista1 = parseInt(Lista1.length / 2);

function Par(number){
    if (number % 2 == 0){
        return true;
    } else {
        return false;
    }
}

let mediana;

if (Par(Lista1.length)){
    const elemento1 = Lista1[mitadLista1 - 1];
    const elemento2 = Lista1[mitadLista1];

    const prom_elements = Promedio([
        elemento1,
        elemento2,
    ]);

    mediana = prom_elements;

}else{
    mediana = Lista1[mitadLista1]
}