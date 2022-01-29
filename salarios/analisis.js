const salariosMex = mexico.map(person => person.salary);
salariosMex.sort((a, b) => a - b);

const esPar = arr => arr.length % 2 === 0;

const mediana = arr => {
    const mediana = Math.floor(arr.length/2);

    if(esPar(arr) == false){
        return arr[mediana]
    } 
    else{
        const index = mediana - 1;
        const valor1 = arr[index];
        const valor2 = arr[mediana];
        const rta = (valor1 + valor2) / 2;
        return rta;
    }
}

const mediaAritmetica = arr => {
    const sumaValores = arr.reduce((item1, item2) => item1 + item2, 0);
    return sumaValores/arr.length;
}


console.log(
    mediana(salariosMex)
)