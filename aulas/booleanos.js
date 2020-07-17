const alunos = [
    {nome: 'Jonas', nota: 9.8 },
    {nome: 'Gustavo', nota: 8.0},
    {nome: 'Maik', nota: 4 }
]

function marcarReprovado(alunos){
    for (const aluno of alunos) {
        aluno.reprovado = false // coloca um atributo a mas em cada objeto
        if(aluno.nota < 5){
            aluno.reprovado = true
        }
    }
    //console.table(alunos)
}

function enviarMsgReprovado(alunos){
    // SE A MÉDIA FOR < 5
    if(aluno.reprovado){
        console.log(`O aluno ${alunos.nome} está reprovado!.`)
    }
}

function alunoReprovado(alunos){
    for (let aluno of alunos) {
        marcarReprovado(aluno)
        enviarMsgReprovado(aluno)
    }
}



// marcar aluno como aprovado ou reprovado
// se for > 6 aprovado
// e também enviar uma mensagem