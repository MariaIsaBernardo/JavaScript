/*
um objeto representa uma "coisa" do mundo real atraves de 
propriedades e comportamentos.

const nome = [] array
const nome = {} objeto
const arrayDeObjeto [{},{},{}] < -- mais comum
const objetoDeObjeto { {}, {}, {} } <-- pode rolar tbm
*/

//construindo um 1 objeto

const aluno = {
    id: 1,
    nome: "Davi",
    idade:17,
    curso: "ensino medio Integrado",
    RM: 87654,
    cadastroAtivo: true,
    email: null,
    hobbie: ["ler", "bola", "xadrez"],
    endereço: {
        rua: "Rua 35,405",
        bairro: "Jardim Italia",
        cidade: " Santa Rita do Passa-Quatro",
        estado: "São Paulo",
        pais: "Brasil",
        cep: 13000560
    }
};

//objeto x JSON

//objeto passando para JSON
const json = JSON.stringify(aluno);
console.log(json);

//json passando para objeto
const objeto = JSON.parse(json)
console.log(objeto);