// Usuários e tecnologias

/* O for in --> Itera sobre o nome das propriedades do Objeto. Ex: let usuarios = [nome:'Jonas'];
        No exemplo Acima ele vai pegar o nome do atributo.
   O for of --> Itera sobre os valores dessas propriedades.
        No exemplo acima ele pega o valor dentro da propriedade no caso jonas
*/

const usuarios = [
    { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
    { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
    { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
  ]

for (let usuario of usuarios) { // usuario. começa pegando todo objeto da 1° posição
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
}

// Busca por tecnologia
function checaSeUsuarioUsaCSS(usuario) { // A posição será passado aqui em cima!. No parametro, quando eu chamar
    for (let tecnologia of usuario.tecnologias) { // for in ou for of. Não precisa indicar posição ex: for (let tecnologia of usuario)
        // ATENÇÃO no usuario.tecnologia
        if (tecnologia == 'CSS'){
             return true
        }
    }

    return false
}

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])

    if(usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}
