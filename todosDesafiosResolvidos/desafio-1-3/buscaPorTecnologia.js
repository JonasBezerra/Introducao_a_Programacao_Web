const users = [
    {name: 'Jonas', tecnologyes:['html', 'CSS']},
    {name: 'Jasmine', tecnologyes:['JavaScript', 'CSS']},
    {name:'Tuanne', tecnologyes:['HTML',' NodeJS']}
]
// crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não.
// Essa função deve retornar um boolena true/false

function checaSeUsuarioUsaCSS(user) {
    // percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
    // SE encontrar, retorne true da função, caso contrário retorne false
    for (let tecnology  of user.tecnologyes) {
        const encontriTecnologiaCSS = tecnology == 'CSS'
        if(encontriTecnologiaCSS){
            return true; // se encontra o return ela para a função
        }
    }
    return false
}
for (let poss in users) {
    let encontradoCSS = checaSeUsuarioUsaCSS(users[poss])
     
    if(encontradoCSS){
        console.log(`O usuário ${users[poss].name} usa CSS`)
    }
}

// 5 coisas que vc PRECISA saber sobre funções (iniciante)

// 1 of 6 - Escrever uma função / criar - 20%
// 2 of 6 - Saber enviar dado pra dentro da função (parâmetro) - 20%
// 3 of 6 - Saber como enviar dados para fora da função ou retornar- 20%
// 4 of 6 - Saber como utilizar / executar ou chamar a função - 20%
// 5 of 6 - Saber como enviar os dados para dentro da função qndo eu chamar ela
// 6 of 6 - Saber como capturar o dado de dentro para fora

// Curiosidade extra que vc DEVERIA estar sabendo sobre função / Método

// para que serve uma função?.
    // para reutilizar um bloco de código
// Qual o objetivo?.
    // para eu não repetir o mesmo código

// A função não precisa Obrigatóriamente  retornar valores
