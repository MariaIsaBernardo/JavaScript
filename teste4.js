//callback

/**
 * se vc pedir uma operaçao que demora muito o node nao precisa espera parado
 */

console.log("1");
console.log("2");
console.log("3");

//sincrono

//==============================================

console.log("inicio");

setTimeout(() => {
    console.log("Processamento terminal");
}, 2000);

console.log("fim")

//callBack é uma funçao passada para outra funçao para ser executada posteriormente 

numeros = [1, 2, 3, 4, 6, 7, 90];

numeros.forEach((n) => {
    console.log(n);
});

//isso é callback 
/*
(n) => {
    console,log(n);
}
*/

function processarUsuario(nome, callBack) {
    console.log("processando" + nome);
    callBack();
}

processarUsuario("Rihanna", () => {
    console.log("Usuario processado");
});

//=========================================

function buscarUsuario(callBack) {
    //simulaçao de tempo
    setTimeout(() => {
        //construindo objeto
        const Usuario = {
            id: 1,
            nome: "Rihanna"
        };
        callBack(Usuario);
    }, 2000)
}

console.log("inicio da chamada");

buscarUsuario((Usuario) => {
    console.log(Usuario);
});

//3 
console.log("fim do processo");

//Promeses - é uma promessa de q teremos um resultado futuro

//criando uma promise
//((parametros ...) => {logica});

const promessa = new Promise ((resolve, reject) => {
    if(sucesso === true){
        resolve ("Tudo certo!!")
    }
    else{
        reject("Deu errado!!")
    }
});

//consumir a promisse

promessa
  .then((resolve) => {
    console.log(resultado);
})
  .catch((erro) => {
    console.log(erro)
});

// No promisse temos

buscarUsuario().then(usuario =>{
    console.log(usuario)
});

//async await - Essa função vai funcionar de forma assincrona e vai
//ter um pedaço q vamos precisar esperar

//No sync-await
async function buscarUsuarioAsync() {
  try{
    const usuario = await buscarUsuario();
    console.log(usuario);
  }
  catch(erro) {
    //erro de rolou
    console.log(erro);
  }
}