// Criar um programa que Calcula a média 
// da Turma de alunos e envia 
// Mensagem de calculo da média

const alunosTurma1 = [
    {nome: 'Cleiton', nota: 10},
    {nome:'Diego', nota:9.8},
    {nome:'Fulano', nota:5}
    
]

const alunosTurma2 = [
    {nome: 'Robson', nota: 10},
    {nome:'Lucy', nota:9.8},
    {nome:'Siclano', nota:2}
    
]



const mediaTurma1 = calcularMedia(alunosTurma1);
const mediaTurma2 = calcularMedia(alunosTurma2);

enviaMsg(mediaTurma1,'Turma A');
enviaMsg(mediaTurma2,'Turma B')

function calcularMedia(turma) {
    return (turma[0].nota + turma[1].nota +turma[2].nota)/3
}

function enviaMsg(media, nomeTurma) {
    if (media > 5) {
        console.log(`A media da ${nomeTurma} foi de ${media.toFixed(1)} Parabens!.`)
    } else {
        console.log(`A media da turma ${nomeTurma} foi Menor que 5`)
    }
}
      
