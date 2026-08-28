//#region Atividade 1 - Sistema de aluno 
//1 - Mostrar: Nome, Idade, Curso, Cidade, Estado 
//2 - Alterar a cidade 
//3 - Adicionar email 
//4 - Use o destructuring de alguma forma 
//5 - Criar uma cópia utilizando spread para alunoAtualizado 
//6 - Transformar o objeto em JSON 
//7 - Voltar de JSON para objeto 

const aluno = { 
    nome: "Carlos", 
    idade: 22, 
    curso: "Análise e Desenvolvimento de Sistemas", 
    endereco: { 
        cidade: "São José dos Campos", 
        estado: "SP" 
    }, 
    ativo: true, 
    apresentar() { 
        console.log(`Aluno: ${this.nome}`); 
    } 
}; 

console.log(`Nome: ${aluno.nome}`); 
console.log(`Idade: ${aluno.idade}`); 
console.log(`Curso: ${aluno.curso}`); 
console.log(`Cidade: ${aluno.endereco.cidade}`); 
console.log(`Estado: ${aluno.endereco.estado}`); 

aluno.endereco.cidade = "Campinas"; 
aluno.email = "carlos@email.com"; 

const { curso, endereco: { estado } } = aluno; 
console.log(`Curso extraído: ${curso}, Estado extraído: ${estado}`); 

const alunoAtualizado = { ...aluno, endereco: { ...aluno.endereco } }; 

const alunoJSON = JSON.stringify(aluno); 
console.log("JSON:", alunoJSON); 

const alunoObjeto = JSON.parse(alunoJSON); 
console.log("Objeto restaurado:", alunoObjeto); 
//#endregion 

//#region Atividade 2 - Usuario 
/* 
1 - Como acessar o nome? 
2 - Como acessar a cidade? 
3 - Como alterar a idade? 
4 - Como adicionar telefone? 
5 - Como remover o email? 
6 - Como criar uma cópia do usuário? 
7 - Como extrair somente nome e cidade? 
8 - Como transformar o objeto em JSON? 
9 - Como transformar o JSON novamente em objeto 
*/ 

const usuario = { 
    id: 19, 
    nome: "Claudia Raia", 
    email: "claudia@email.com", 
    idade: 25, 
    endereco: { 
        cidade: "São Paulo", 
        estado: "SP", 
        numero: 145 
    } 
}; 

const nomeUsuario = usuario.nome; 
const cidadeUsuario = usuario.endereco.cidade; 
usuario.idade = 26; 
usuario.telefone = "(11) 98888-9999"; 

const copiaUsuario = { ...usuario, endereco: { ...usuario.endereco } }; 
const { nome, endereco: { cidade } } = usuario; 

const usuarioJSON = JSON.stringify(usuario); 
console.log("JSON Usuário:", usuarioJSON); 

const usuarioObjeto = JSON.parse(usuarioJSON); 
console.log("Objeto Usuário restaurado:", usuarioObjeto); 

delete usuario.email; 
//#endregion