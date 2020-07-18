const users = [
    {name: 'Jonas', tecnology:['html', ' CSS']},
    {name: 'Jasmine', tecnology:['JavaScript', ' CSS']},
    {name:'Tuanne', tecnology:['HTML',' NodeJS']}
]

// Percorra a lista de usuários em estrutura de repetição imprimindo em tela as informações.

// Jonas Trabalha com HTML,CSS
// Jasmine trabalha com JavaScript, css
// Tuanne trabalha com HTML, NodeJS

// todo array [] recebe métodos e atributos nativos.
// length para saber qntos elementos tem no meu array

for (let i = 0; i < users.length; i++) {
    console.log(`${users[i].name} Trabalha com ${users[i].tecnology}`)
}

// ATENÇÃO: SE O ERRO FOR DIZENDO QUE UMA VARIAVEL NÃO ESTA DEFINIDA ISSO QUE DIZER QUE ELA NÃO EXISTE

// PALAVRAS COM MESMO SIGNIFICADO: ITERAR SOBRE UM ARRAY MESMO QUE VARRER O ARRAY, PERCORRER O ARRAY, ANDAR SOBRE O ARRAY OU COLEÇÃO 