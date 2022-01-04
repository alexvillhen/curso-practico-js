const calcularPrecioFinal = (costo, descuento) =>{
    const porcentajeConDescuento = 100 - descuento;
    const precioFinal = (costo * porcentajeConDescuento)/100;
    return("$"+precioFinal);
}

const onClickButtonPriceDiscount = () => {
    const inputPrice = document.getElementById("input-price");
    const precioOriginal = inputPrice.value;

    const inputDiscount = document.getElementById("input-discount");
    const porcentajeDescuento = inputDiscount.value;

    const resultPrice = document.getElementById("result-price");

    resultPrice.innerHTML = `El precio con descuento es igual a ${calcularPrecioFinal(precioOriginal,porcentajeDescuento)}`;
}