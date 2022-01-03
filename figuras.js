/* CUADRO */
const perimetroCuadro = lado => lado * 4;
const areaCuadro = lado => lado**2;


/* TRIANGULO */
const perimetroTriangulo = (lado1, lado2, lado3) => {
    return alert(`El perimetro es igual a ${lado1 + lado2 + lado3}`);
}
const areaTriangulo = (base, altura) => {
    alert(`El área es igual a ${(base * altura)/2}`);
}

const alturaIsoseles = (base, lados) =>{
    const altura = Math.sqrt((lados**2) - ((base/2)**2));
    alert(`La altura es igual a ${altura}cm`);
}

/* CIRCULO */
const circunferencia = radio => {
    alert(`El perimetro es igual a ${Math.PI * radio * 2}`);
}

const areaCirculo = radio => {
    alert(`El área es igual a ${radio**2 * Math.PI}`);
}


//interacción HTML
const calcularPerimetroCuadro = () => {
    const input = document.getElementById("cuadrado");
    const valor = input.value;

    const perimetro = perimetroCuadro(valor);

    return alert(`El perímetro es igual a ${perimetro}`);
}


const calcularAreaCuadro = () => {
    const input = document.getElementById("cuadrado");
    const valor = input.value;

    const area = areaCuadro(valor);

    return alert(`El área de tu cuadro el igual a: ${area}`);
}

const calcularPerimetroTriangulo = () => {
    const input1 = document.getElementById("lado1");
    const input2 = document.getElementById("lado2");
    const input3 = document.getElementById("base");
    const valorLado1 = parseInt(input1.value);
    const valorLado2 = parseInt(input2.value);
    const valorBase = parseInt(input3.value);

    perimetroTriangulo(valorLado1, valorLado2, valorBase);
}

const calcularAreaTriangulo = () => {
    const base = document.getElementById("base");
    const altura = document.getElementById("altura");
    const valorBase = parseInt(base.value);
    const valorAltura = parseInt(altura.value);

    areaTriangulo(valorBase, valorAltura);
}


const calcularAlturaIsoseles = () => {
    const lados = document.getElementById("lados");
    const base = document.getElementById("base-isoseles");
    const valorLados = lados.value;
    const valorBase = base.value;

    alturaIsoseles(valorBase, valorLados);
}


const calcularPerimetroCirculo = () => {
    const radio = document.getElementById("radio");
    const valorRadio = radio.value;

    circunferencia(valorRadio);
}

const calcularAreaCirculo = () => {
    const radio = document.getElementById("radio");
    const valorRadio = radio.value;

    areaCirculo(valorRadio);
}
