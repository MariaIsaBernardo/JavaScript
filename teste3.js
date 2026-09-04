const numeros = [1, 2, 3, 4, 5, 6];
const numerosDobrados = numeros.map((numero) => {
    return numero / 2;
});
console.log(numerosDobrados)

const maioresQ3 = numeros.filter ((numero) => {
    return numero > 3;
});

console.log(maioresQ3);

//ForEach = oq quero fazer com cada elemento?
//map = como quero transformar cada elemento?
//filter = quais elementos quero manter?

const numerof = numeros.find ((n) => n > 4);
console.log(numerof);
/*
  filter X find

  filter = retorna vários elementos
  find = retorna o primeiro elemento
*/


//#region - não é mt usado mais existe
//some - verifica se pelo menos 1 elemento atende a condição
//retorna true ou false (Boolean)
const existeMaiorQ5 = numeros.some(n => n > 5);
console.log(existeMaiorQ5)

//every - verifica se tds os elemento atendem a condição
//retorna true ou false (Boolean)
const todosMaioresQ0 = numeros.every(n => n > 0);
console.log(todosMaioresQ0);
//#endregion

const soma = numeros.reduce((total, numero) => {
    return total + numero;
}, 0);

console.log(soma);

const produtos = [
    {nome: "Produto 1 ", disponivel: true},
    {nome: "Produto 2 ", disponivel: false},
    {nome: "Produto 3 ", disponivel: true},
    {nome: "Produto 4 ", disponivel: true}
];

//for of
console.log("------------- Com for of -------------")


const produtosDisponiveisForOf = []; 
for (const produto of produtos) {
    if (produto.disponivel) {
        produtosDisponiveisForOf.push(produto.nome);
    }}

console.log(produtosDisponiveisForOf);



//-----------------------------------------
//map e filter
console.log("------------- Com map e filter -------------");

const prodDisponivelMap = produtos
  .filter((produto) => produto.disponível === true)
  .map((produto) => produto.nome);

console.log(prodDisponivelMap);