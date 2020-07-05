/* Baseado no desafio anterior, utilize a mesma lista de usuários construída.

    Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.*/

    
var usuarios = [
    {nome:'Jonas', tecnologias: ['Html',' Css']},
    {nome:'Luiz', tecnologias: ['Js',' Node']},
    {nome:'Pedro', tecnologias: ['Android', ' Java']}
]

// Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:

function listUser(user) {
    for (const pos in user) { // para cada posição ou chave ou key em 'nome do Objeto ou array'

       console.log(`${user[pos].nome} Trabalha com ${user[pos].tecnologias}`)
    }
}

function checaSeUsuarioUsaCSS(user) {
    for(let key in user){
        if(user[key].tecnologias[key] == 'Css'){
            return true;
        }else{
            return false;
        }
    }
}
// agora vamos chamar a função para ela ser executada

listUser(usuarios);

for(let key in usuarios){
    let checado = console.log(checaSeUsuarioUsaCSS(usuarios));
    if (checado) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
}
