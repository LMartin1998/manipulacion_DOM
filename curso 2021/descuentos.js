// const precio_original = 120;
// const precio_descuento = 18;




// console.log({
//     precio_original,
//     precio_descuento,
//     price_descuento,
//     price_final
// })

// let cupones = ['MEX', 'COL', '1998'];

const cupones = [
    {
        name: 'MEX',
        discount: 25,
    },
    {
        name: 'COL',
        discount: 35,
    },
];



function precio_con_descuento(precio_original, porcentaje_descuento){
    const price_descuento = precio_original*porcentaje_descuento/100;
    const price_final = precio_original-price_descuento;

    return price_final;
}

// function cuppon_validate(cupon){
//     switch (cupones) {
//         case 'MEX':
//             const cupon1 = 25;
//             return cupon1;
//         case 'MEX':
//             const cupon1 = 40;
//             return cupon1;

//         default:
//     }
// }

// function button_price(){

//     const input_Price = document.getElementById('inputPrice');
//     const price_value = input_Price.value;

//     const inputDiscount = document.getElementById('input_discount');
//     const price_discout = inputDiscount.value;

//     const preciodescuento = precio_con_descuento(price_value, price_discout);

//     const resultP = document.getElementById('ResultP');
//     resultP.innerText = 'El precio con descuento es: $'+ preciodescuento;
// }

function button_price(){
    const input_Price = document.getElementById('inputPrice');
    const price_value = input_Price.value;

    const input_cupon = document.getElementById('input_cuppon');
    const cupon_Value = input_cupon.value;

    

    const validate = cuppon_validate(cupon_Value)

    const preciodescuento = precio_con_descuento(price_value, validate);

    const resultP = document.getElementById('ResultP');
    resultP.innerText = 'El precio con descuento es: $'+ preciodescuento;

}