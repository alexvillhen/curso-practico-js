function promedio(arr){
    /* let sumaArr = 0;
    for (let i = 0; i < arr.length; i++) {
        sumaArr = sumaArr + arr[i];
    } */

    const sumaArr = arr.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioArr = sumaArr/arr.length;
    return promedioArr;
}

console.log( promedio([1,2,3]) );
