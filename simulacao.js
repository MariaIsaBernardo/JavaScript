//simulação

const esperar = (ms) => new Promise(
    resolve => setTimeout(
        resolve, ms
    ));

//função uscarUsuario
async function buscarUsuario(Id) {
    await esperar(2000);
    return {
        id: Id, // o id que a gente manda na executar
        nome: "Ado",
        email: "ado@gmail.com"
    }
}

//função buscarPedidos

async function buscarPedidos(usuarioId) {
    await esperar(3000)

    const todosPedidos = [
        { id: 1, produto: "X-cheddar" },
        { id: 2, produto: "Coca-Cola" },
        { id: 3, produto: "Batata-frita" }
    ];
    return todosPedidos.filter(pedidos => pedidos.id === usuarioId);
}

//função executar

async function executar() {
    try {
        console.log("Iniciando simulação")
        console.log("Buscando usuário...")
        const usuario = await buscarUsuario(1);
        console.log("Usuario encontrado ", usuario.id)
        console.log("------------")
        console.log("Buscando pedido...")
        const pedido = await buscarPedidos(usuario.id);
        console.log("Pedido feito ", pedido)
    }
    catch (erro) {
        console.log("Deu errado")
    }
}

executar();