const alunos = [
    {nome: 'Jonas', nota: 9.8 },
    {nome: 'Gustavo', nota: 8.0},
    {nome: 'Maik', nota: 4 }
]

function verificaReprovado(alunos){
    for (const aluno of alunos) {
        aluno.reprovado = true
        if(aluno.nota > 6){
            aluno.reprovado = false
        }
    }
    //console.table(alunos)
}

function envarMsg(alunos){
    if(aluno.reprovado){
        console.log(`O aluno ${alunos.nome} está reprovado`)
    }
}

aprovacao(alunos)

// marcar aluno como aprovado ou reprovado
// se for > 6 aprovado
// e também enviar uma mensagem