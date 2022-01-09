//==========================================
// MEDIA

function promedio(arr){
    const sumaArr = arr.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioArr = sumaArr/arr.length;
    return promedioArr;
}

//==========================================
// MEDIANA

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


//=================================================================
//MODA

function moda(arr) {
    const arrCount = {};
    arr.map(
        function(elemento) {
            if (arrCount[elemento]) {
                arrCount[elemento] += 1;
            } else{
                arrCount[elemento] = 1;
            }
        }
    )
    const listaArr = Object.entries(arrCount);
    listaArr.sort((a,b) => a[1] - b[1]);
    const moda = listaArr[listaArr.length - 1];
    return moda;
}


//FLUJO DE CODIGO

let valoresPromedio = [];

function añadirValores() {
    const valorInput = document.getElementById("promedio-number");
    const valor = valorInput.value;
    valoresPromedio.push(valor);
}

const buttonPromedio = document.getElementById("calcular-promedio");
buttonPromedio.addEventListener("click", promedio(valoresPromedio));