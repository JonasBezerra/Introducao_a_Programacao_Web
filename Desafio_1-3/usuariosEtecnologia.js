/*
Desafios para fortalecer alguns conceitos, entre eles:
    Funções e métodos;
    Estruturas de repetição;
    Escopos.
*/

// Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array), por exemplo:


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

// agora vamos chamar a função para ela ser executada

listUser(usuarios);