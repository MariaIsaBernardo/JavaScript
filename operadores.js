//#region start operadores

const idade = 20;
console.log(idade >= 18);

//#endregion

//#region - Operadores matemáticos
const a = 8;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b); //resto da divisão
//#endregion

//#region - Operadores de comparação
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b); //Comparação de valor
console.log(a === b); //Comparação de valor e tipo
console.log(a !== b);

//#endregion

//#region - Exercício
/*
    Exercício:aplicando operadores de comparação com
    variáveis.
    Faça as comparações a partir da variável informada.
*/
const idade1 = 20;
const idade2 = 25;

console.log(idade1 > idade2);
console.log(idade1 < idade2);
console.log(idade1 >= idade2);
console.log(idade1 <= idade2);
console.log(idade1 == idade2); //Comparação de valor
console.log(idade1 === idade2); //Comparação de valor e tipo
console.log(idade1 !== idade2);

//#endregion

//#region - Operadores lógicos

const idade3 = 17;
const idade4 = 15;

//Operador lógico AND
console.log(idade3 > 18 && idade4 > 18); //Todos precisam

//Operador lógico OR
console.log(idade3 > 18 || idade4 > 18); //Uma precisa ser

//Operador lógico NOT
console.log(!(idade3 > 18)); //False

const matriculaAtivo = true;

const podeComprar = idade2 >= 18 && matriculaAtivo;

console.log(podeComprar);

//#endregion

//#region - Operadores de incremento e decremento
let numero = 10;
console.log(numero++); //10
console.log(numero); // 11
console.log(++numero); //12

console.log(numero--); //12
console.log(numero); //11
console.log(--numero); //10
//#endregion

//#region - Comparação exercício
//faça a partir da variável informada
const x = 10;
const y = 10;
const resultado = x < y;
console.log(x > y); //false
console.log(x < y); //false
console.log(x >= y); //true
console.log(x <= y); //true
console.log(x == y); //Comparação de valor //true
console.log(x === y); //Comparação de valor e tipo //true
console.log(x !== y); //false
//#endregion

//#region - == vs == exercício
//Verifique o resultado das comparações a seguir
console.log(10 == "10"); //true

console.log(10 === "10"); //false

console.log(true == 1); //true

console.log(true === 1); //false

console.log(null == undefined);

console.log(null === undefined);

//#endregion

//#region - Sistema de acesso exercício
const dataNascimento = new Date ("2010-01-05");
const ativo = true;

//Transformando 18 anos em milissegundos
const dezoitoAnosEmMilissegundos = 18 * 365.25 * 24 * 60 * 60 * 1000; 

//Comparando milissegundos com milissegundos!
const podeAcessar = (new Date () - dataNascimento) >= dezoitoAnosEmMilissegundos && ativo;

console.log(podeAcessar);

/*
Crie uma expressão que indique se o usuário pode
acessar o sistema.

Regra: O usuário precisa ter pelo menos 18 anos
E estar ativo.
*/
//#endregion

//#region 2 - Usando funções extras

//#endregion