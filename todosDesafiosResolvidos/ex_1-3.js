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


// ================================ ESSA FOI A FORMA MAIS FÁCIL ENCONTRADA ======================

/*for (let i = 0; i < users.length; i++) {
    console.log(`${users[i].name} Trabalha com ${users[i].tecnology}`)
     o atributo name não é um atributo do array users e sim de um objeto dentro do array
}*/

// ===========================================================================================================
 
/* 
for(let i = 0; i < users.length ; i++){ // PERCORRE O PRIMEIRO ARRAY
    let tecnologyes = ''
    for(let a = 0; a < users[i].tecnology.length; a++){  // PERCORRES O SEGUNDO ARRAY. a SO PODE SER ACESSADO DENTRO DO LOOPING
        if(a==0){
            tecnologyes += ""+users[i].tecnology[a]
        }else{
            tecnologyes += ","+users[i].tecnology[a]
        }
    }
    console.log(`${users[i].name} trabalha com ${tecnologyes}`)
}
*/


// =====================================================================================

for (let user of users) {// pega a 1 pos, depois a seg até acabar o looping
    console.log(`${user.name} trabalha com ${user.tecnology}`)
}

// =====================================================================================


// ATENÇÃO: SE O ERRO FOR DIZENDO QUE UMA VARIAVEL NÃO ESTA DEFINIDA ISSO QUE DIZER QUE ELA NÃO EXISTE
// SintaxError: QUER DIZER QUE EU ESCREVÍ ALGUMA COISA ERRADA

// PALAVRAS COM MESMO SIGNIFICADO: ITERAR SOBRE UM ARRAY MESMO QUE VARRER O ARRAY, PERCORRER O ARRAY, ANDAR SOBRE O ARRAY OU COLEÇÃO 