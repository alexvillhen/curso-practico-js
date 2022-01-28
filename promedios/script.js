const datos = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 9.5,
        credit: 2,
    }
];


const promedioPondedaro = arr => {
    const notesWithCredit = arr.map(course => course.note * course.credit);
    const numerador = notesWithCredit.reduce((a, b) => a + b);

    const creditSum = arr.map(course => course.credit);
    const denominador = creditSum.reduce((a, b) => a + b);

    const rta = numerador/denominador;
    return rta;
}

console.log(promedioPondedaro(datos));






