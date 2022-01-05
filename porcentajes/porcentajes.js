const calcularPrecioFinal = (costo, descuento, cupon) =>{
    const porcentajeConDescuento = 100 - descuento;
    const precioSinCupon = (costo * porcentajeConDescuento)/100;
    const precioFinal = (precioSinCupon * (100 - cupon)/100)
    return("$"+precioFinal);
    
}

const onClickButtonPriceDiscount = () => {
    const inputPrice = document.getElementById("input-price");
    const precioOriginal = inputPrice.value;

    const inputDiscount = document.getElementById("input-discount");
    const porcentajeDescuento = inputDiscount.value;

    const inputCupon = document.getElementById("input-cupon");
    const valorCupon = inputCupon.value;

    const resultPrice = document.getElementById("result-price");
    
    resultPrice.style.display = "block";
    resultPrice.innerHTML = `${calcularPrecioFinal(precioOriginal,porcentajeDescuento, valorCupon)}`;
}