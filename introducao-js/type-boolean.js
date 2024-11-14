const value1 = true;
const value2 = false;

console.log(value1 == value2);

//thrusty / falsy > variaveis vazias ou com valor zero, se submeter a um teste logico se tornaram um tipo boolean (thrusty / falsy)

//Teste logico
if(value1) {
    console.log('verdadeiro');
} else {
    console.log('falso');
}

//Teste logico
if (value1) console.log('verdadeiro');

//Operador ternario
const resultado = value ? `verdadeiro` : `falso`;