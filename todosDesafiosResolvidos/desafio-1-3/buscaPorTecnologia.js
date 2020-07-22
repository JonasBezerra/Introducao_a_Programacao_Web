const users = [
    {name: 'Jonas', tecnologyes:['html', ' CSS']},
    {name: 'Jasmine', tecnologyes:['JavaScript', ' CSS']},
    {name:'Tuanne', tecnologyes:['HTML',' NodeJS']}
]
// crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não.
// Essa função deve retornar um boolena true/false

function checaSeUsuarioUsaCSS(users) {
    // percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
    // SE encontrar, retorne true da função, caso contrário retorne false
    for (let tecnology  of users.tecnology) {
        if(tecnology == 'CSS'){
            return true
        }
        return false
    }
}

for (let poss in users) {
    let usaCSS = checaSeUsuarioUsaCSS(users[i])
    console.log(usaCSS);
}

// 5 coisas que vc PRECISA saber sobre funções (iniciante)

// 1 of 5 - Escrever uma função / criar - 20%
// 2 of 5 - Saber enviar dado pra dentro da função (parâmetro) - 20%
// 3 of 5 - Saber como enviar dados para fora da função ou retornar- 20%
// 4 of 5 - Saber como utilizar / executar ou chamar a função - 20%
// 5 of 5 - Saber como enviar os dados para dentro da função qndo eu chamar ela

// Curiosidade extra que vc DEVERIA estar sabendo sobre função / Método

// para que serve uma função?.
    // para reutilizar um bloco de código
// Qual o objetivo?.
    // para eu não repetir o mesmo código
