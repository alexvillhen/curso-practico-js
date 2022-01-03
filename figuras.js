/* CUADRO */
//declaración de variables y funciones para el cuadro
console.group("cuadro");
const ladoCuadrado = 3;
const perimetroCuadro = lado => lado * 4;
const areaCuadro = lado => lado**2;

//Ejecución del programa del cuadro
console.log(`Los lados de tu cuadrado miden: ${ladoCuadrado}cm`);
console.log(`El perimetro es igual a: ${perimetroCuadro(ladoCuadrado)}cm`);
console.log(`Y el área es igual a: ${areaCuadro(ladoCuadrado)}cm²`);
console.groupEnd();


/* TRIANGULO */
//declaración de variables y funciones
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = (lado1, lado2, lado3) => {
    return console.log(`El perimetro es igual a ${lado1 + lado2 + lado3}`);
}

const areaTriangulo = (base, altura) => {
    console.log(`El área es igual a ${(base * altura)/2}`);
}

//Ejecución el programa Triangulo
console.log(`Los lados del triangulo son ${ladoTriangulo1}cm, ${ladoTriangulo2}cm y ${baseTriangulo}cm`);
console.log(`La altura es de ${alturaTriangulo}`);

perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo);
areaTriangulo(baseTriangulo, alturaTriangulo);

console.groupEnd();


/* CIRCULO */
//declaración de variables y funciones
console.group("circulo");
const radio = 3;

const circunferencia = radio => {
    console.log(`El perimetro es igual a ${Math.PI * radio * 2}`);
}

const areaCirculo = radio => {
    console.log(`El área es igual a ${radio**2 * Math.PI}`);
}

//ejecución de código
console.log(`El radio de tu circulo es igual a ${radio}cm`);
circunferencia(radio);
areaCirculo(radio);
console.groupEnd();
