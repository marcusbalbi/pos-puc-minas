const calc = require('./funcoes');


const n1 = calc.add(5 , 3);
const n2 = calc.sub(15 , 5);

console.log("subtração:", n2);
console.log("adição:", n1);


// test

const a = calc.add(1, 1);
const b = calc.sub(-123, 123123);
const c = calc.mult(8, 0);
const d = calc.mult(1239123, 12313);
const e = calc.div(123 / -12);
const f = calc.div(313123, 0);


console.log('Resultado de a é:', a);
console.log('Resultado de b é:', b);
console.log('Resultado de c é:', c);
console.log('Resultado de d é:', d);
console.log('Resultado de e é:', e);
console.log('Resultado de f é:', f);