const promedioPondedaro = arr => {
    const notesWithCredit = arr.map(course => course.nota * course.credito);
    const numerador = notesWithCredit.reduce((a, b) => a + b);

    const creditSum = arr.map(course => course.credito);
    const denominador = creditSum.reduce((a, b) => a + b);

    const rta = numerador/denominador;
    return rta;
}


//FLUJO DEL PROGRAMA
let valoresPonderado = [];

const añadirValorPonderado = () => {
    const notaInput = document.getElementById("nota");
    let nota = parseInt(notaInput.value);

    const creditoInput = document.getElementById("credito");
    let credito = parseInt(creditoInput.value);

    valoresPonderado.push({'nota': nota, 'credito': credito});
    notaInput.value = '';
    creditoInput.value = '';
}

const calcularPonderado = () => {
    const parrafoRta = document.getElementById("rta-ponderado"); 
    parrafoRta.innerHTML = promedioPondedaro(valoresPonderado);
    valoresPonderado = [];
}








