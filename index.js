let variableSinValor = undefined

let booleano1 = true
let booleano2 = false
const PI = 3.14
const TAU = 2 * PI
let booleanoAnd = booleano1 && booleano2
booleano1 = true
booleanoNot =  !booleano1
let booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2))
let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;
let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;

let contarHasta10_2

for (contarHasta10_2 = 0; contarHasta10_2 <= 10; contarHasta10_2 ++) {
  console.log(contarHasta10_2 === 10)
}

let postI = 0;
let postJ = 0;

for (let i = 0; i < 11; i++) {
  postI += postJ++;
}

let sumaPares = 0;

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    sumaPares += i;
  }
}

let variableValorNumerico = 7

const miNombre = "Endika"

const miNumeroFav = 7

let booleanoOr = booleano1 || booleano2;

let booleanoMix1 = (booleano1 && (TAU/2 === PI)) || (variableValorNumerico >= MiNumeroFav);

let seisNoEsNueve = 6 !== 9

let booleanoMix2 = (variableValorNumerico > 0) || (variableValorNumerico < -(MiNumeroFav * TAU));

let valorSuma = miNumeroFav + variableValorNumerico

let valorResta = miNumeroFav - variableValorNumerico

let valorMultiplicacion = miNumeroFav * variableValorNumerico

let valorDivision = miNumeroFav / variableValorNumerico

let contarHasta10 = 0;

while (contarHasta10 !== 10) {
  contarHasta10++;
}

let preI = 0;
let preJ = 0;

for (let i = 0; i < 11; i++) {
  preI += ++preJ;
}

let sumaImpares = 0;

for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    sumaImpares += i;
  }
}

