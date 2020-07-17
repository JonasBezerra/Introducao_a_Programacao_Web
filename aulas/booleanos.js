const alunos = [
    {nome: 'Jonas', nota: 9.8 },
    {nome: 'Gustavo', nota: 8.0},
    {nome: 'Maik', nota: 4 }
]

function marcarReprovado(alunos){
    alunos.reprovado = false // coloca um atributo a mas em cada objeto
    
        if(alunos.nota < 5){
            alunos.reprovado = true
    }
    console.table(alunos)
}

function enviarMsgReprovado(alunos){
    // SE A MÉDIA FOR < 5
    if(alunos.reprovado){
        console.log(`O aluno ${alunos.nome} está reprovado!.`)
    }
}

function alunoReprovado(alunos){
    for (let aluno of alunos) {
        marcarReprovado(aluno)
        enviarMsgReprovado(aluno)
    }
  
}

alunoReprovado(alunos)

// marcar aluno como aprovado ou reprovado
// se for > 6 aprovado
// e também enviar uma mensagem