//#region -  Manipulação básica

const frutas = ["Maçã", "Banana", "Laranja", "Pera", "Limão", "Mexirica"];


//Adicione "Morango" no final.
console.log("------------- Morango no final -------------");
frutas.push("Morango");
console.log(frutas);
//Adicione "Abacaxi" no início.
console.log("------------- Abacaxi no inicio -------------");
frutas[0] = "Abacaxi";
console.log(frutas);
//Remova o último elemento.
console.log("------------- Retirar o ultimo -------------");
frutas.pop();
console.log(frutas);
//Remova o primeiro elemento.
console.log("------------- Retirar o primeiro -------------");
frutas.shift();
console.log(frutas);
//Mostre a quantidade de frutas.
console.log("------------- Quantidade de frutas -------------");
console.log(frutas.length);

//#endregion

//#region - forEach

const nomes = [
    "Ana",
    "Carlos",
    "João",
    "Maria", 
    "Claudia", 
    "Adriana",
    "Cesar",
    "Asafe"
];
//Utilize forEach para mostrar: Olá, Ana! .... .assim por diante 
console.log("------------- Mostrar olá para cada nome -------------");
const nome = [ "Ana", "Carlos", "João", "Maria", "Claudia", "Adriana", "Cesar", "Asafe" ];

nome.forEach(nome => {
    console.log(`Olá, ${nome}!`);
});
//#endregion

//#region map

const precos = [10, 20, 30, 40, 50, 60, 70, 80];

//Crie um novo array com os preços acrescidos de 10%.
console.log("------------- Preços com acrescimo de 10% -------------");
const precosCom10 = precos.map((preco) => {
  return preco * 1.10;
});

console.log(precosCom10); 
//#endregion

//#region filter
const numeros = [5, 12, 18, 25, 30, 7, 40];

//Crie um novo array somente com números maiores que 20.
console.log("------------- Apenas números maiores que 20 -------------");
const maioresQue20 = numeros.filter((numero) => {
    return numero > 20;
});
console.log(maioresQue20);
//#endregion

//#region find
const listaNumeros = [5, 12, 18, 25, 30];

//Encontre o primeiro número maior que 20.
console.log("------------- Primeiro número acima de 20 -------------");
const numerof = numeros.find((n) => n > 20);
console.log(numerof);

//#endregion

//#region some
const idades = [12, 15, 17, 20, 14];

//Existe alguém maior de idade? Utilize o some para encontrar! 
console.log("------------- Some -------------");
const existeMaiordIdade = numeros.some(n => n => 18);
console.log(existeMaiordIdade)
//every
//Usando o array acima codifique respondendo: Todos são maiores de idade?
console.log("------------- Every -------------");
const todosMaioresdIdade = numeros.every(n => n => 18);
console.log(todosMaioresdIdade);

//#endregion

//#region reduce
//Calcule o valor total.
console.log("------------- Reduce -------------");
const valores = [100, 200, 50, 150];

const soma = valores.reduce((total, valor) => {
  return total + valor;
}, 0);

console.log(soma);
//#endregion