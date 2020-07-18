// ============== ORGANIZAÇÃO, PADRONIZAÇÃO E ESCRITA =========
// barra azul é do controle de versao
const students= [
    {name: 'Jonas', grade: 9.8 },
    {name: 'Gustavo', grade: 8.0},
    {name: 'Maik', grade: 4 }
]

function marcarReprovado(students){
    students.reprovado = false // coloca um atributo a mas em cada objeto
    if(students.grade< 5){
            students.reprovado = true
    }
}

function sendMessage(students){
    // SE A MÉDIA FOR < 5
    if(students.reprovado){
        console.log(`The student ${students.name} está reprovado!.`)
    }
}

function markFlunked(students){
    for (let student of students) {
        marcarReprovado(student)
        sendMessage(student)
    }
}

markFlunked(students)

