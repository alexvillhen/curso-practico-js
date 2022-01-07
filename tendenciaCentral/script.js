function promedio(arr){
    const sumaArr = arr.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioArr = sumaArr/arr.length;
    return promedioArr;
}

console.log( promedio([1,2,3]) );


//==========================================
// MEDIANA

const lista1 = [300,3,2,200,1000,10,1];

function esPar(num) {
    if(num % 2 == 0){
        return true;
    } else{
        return false;
    }
}


function mediana(arr) {
    const lista = arr.sort((a, b) => a - b);

    const mitadArr = parseInt(lista.length/2);
    
    if (esPar(lista.length)){
        const elemento1 = lista1[mitadArr];
        const elemento2 = lista1[mitadArr - 1];
        const mediana = promedio([elemento1, elemento2]);
        return (mediana);
    
    } else {
        const mediana = arr[mitadArr];
        return mediana;
    }
}

console.log( mediana(lista1) );

