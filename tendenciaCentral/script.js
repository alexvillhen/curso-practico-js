//==========================================
// MEDIA

function promedio(arr){
    const sumaArr = arr.reduce((item1, item2) => item1 + item2, 0);

    const promedioArr = sumaArr/arr.length;
    return promedioArr;
}

//==========================================
// MEDIANA

function esPar(num) {
   return num % 2 === 0;
}

function mediana(arr) {
    const lista = arr.sort((a, b) => a - b);

    const mitadArr = parseInt(lista.length/2);
    
    if (esPar(lista.length)){
        const elemento1 = lista[mitadArr];
        const elemento2 = lista[mitadArr - 1];
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
    const moda = listaArr[listaArr.length - 1][0];
    return moda;
}


//FLUJO DE CODIGO

//--promedio
let valoresPromedio = [];

function añadirValoresPromedio() {
    const valorInput = document.getElementById("promedio-number");
    const valor = parseInt(valorInput.value);
    valoresPromedio.push(valor);
    valorInput.value = '';
}


function calcularPromedio() {
    let parrafoRta = document.getElementById("promedio-valores-p");
    parrafoRta.innerHTML = promedio(valoresPromedio);
    valoresPromedio = [];
}

//--mediana
let valoresMediana = [];

function añadirValoresMediana() {
    const valorInput = document.getElementById("mediana-number");
    const valor = parseInt(valorInput.value);
    valoresMediana.push(valor);
    valorInput.value = '';
}


function calcularMediana() {
    let parrafoRta = document.getElementById("mediana-valores-p");
    parrafoRta.innerHTML = mediana(valoresMediana);
    valoresMediana = [];
}

//--moda
let valoresModa = [];

function añadirValoresModa() {
    const valorInput = document.getElementById("moda-number");
    const valor = parseInt(valorInput.value);
    valoresModa.push(valor);
    valorInput.value = '';
}


function calcularModa() {
    let parrafoRta = document.getElementById("moda-valores-p");
    parrafoRta.innerHTML = moda(valoresModa);
    valoresModa = [];
}