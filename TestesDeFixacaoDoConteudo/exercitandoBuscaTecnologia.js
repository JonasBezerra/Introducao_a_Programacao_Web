let usuarios = [
    {nome: 'JONAS', tecnologias: ['HTML','CSS']},
    {nome: 'BARBARA', tecnologias: ['JAVA', 'ANDROID']},
    {nome: 'BARBARA', tecnologias: ['JAVA', 'ANDROID']}]

function listarUser(user) {
    for (let i = 0; i < user.length; i++) {
        console.log(`O USUARIO ${user[i].nome},USA A TECNOLOGIA ${listarTecnogias(user[i].tecnologias)} `);
    }
}

function listarTecnogias(tecnologia) {
    let nameTec = '';
    for(let i = 0; i < tecnologia.length; i++){
        nameTec = nameTec +" " + tecnologia[i]
    }
    return nameTec
}

listarUser(usuarios)