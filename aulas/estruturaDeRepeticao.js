/* VAMOS FALAR SOBRE LOOPINGS. 
   
*/

const alunosTurma1 = [ 
    {nome: 'Cleiton', nota: 8},
    {nome:'Diego', nota:7.8},
    {nome:'Fulano', nota:5},
    {nome:'Cleiton', nota:0},
    {nome:'Pedro', nota: 3}
    
]

const alunosTurma2 = [
    {nome: 'Robson', nota: 10},
    {nome:'Lucy', nota:2},
    {nome:'Siclano', nota:10}
    
]



const mediaTurma1 = calcularMedia(alunosTurma1); 
const mediaTurma2 = calcularMedia(alunosTurma2); 

enviaMsg(mediaTurma1,'Turma A'); 
enviaMsg(mediaTurma2,'Turma B')

        
function calcularMedia(turma) {
    let soma = 0     
    for (let i = 0; i < turma.length; i++) {
        soma += turma[i].nota
        
    }
    let media = soma / turma.length
    return media;
}

function enviaMsg(media, nomeTurma) { 
    if (media > 5) {
        console.log(`A media da ${nomeTurma} foi de ${media.toFixed(1)} Parabens!.`)
    } else {
        console.log(`A media da turma ${nomeTurma} foi Menor que 5`)
    }
}
      
