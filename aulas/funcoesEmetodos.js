// Criar um programa que Calcula a média 
// da Turma de alunos e envia 
// Mensagem de calculo da média

/* VAMOS FALAR SOBRE MÉTODOS. 
    1) Método é uma função.
    2) Pode ou não atrelar Parâmetros.
    3) O parâmetro de forma Geral é uma forma acessar meus atributos. 
    4) Vantagem de evitar códigos desnecessários
*/

const alunosTurma1 = [ // Um Array Recebendo vários Objetos.
    {nome: 'Cleiton', nota: 10},
    {nome:'Diego', nota:9.8},
    {nome:'Fulano', nota:5}
    
]

const alunosTurma2 = [ // Um Array Recebendo vários Objetos.
    {nome: 'Robson', nota: 10},
    {nome:'Lucy', nota:4},
    {nome:'Siclano', nota:0}
    
]



const mediaTurma1 = calcularMedia(alunosTurma1); // Aqui! estou chamando a função. Então ela será executada.
const mediaTurma2 = calcularMedia(alunosTurma2); // Depois passo o parÂmentro que é um objeto no método

enviaMsg(mediaTurma1,'Turma A'); // Chamando a Função e passando os parâmetros
enviaMsg(mediaTurma2,'Turma B')

        
function calcularMedia(turma) { // essa Função só vai ser executada se eu chamar ela
    return (turma[0].nota + turma[1].nota +turma[2].nota)/3 // Aqui é a ação que eu vou executar quando eu chamar esse método
}

function enviaMsg(media, nomeTurma) { // Essa Função so vai ser executada quando eu executar ela
    // Abaixo é a ação que eu vou executar quando eu chamar esse método
    if (media > 5) {
        console.log(`A media da ${nomeTurma} foi de ${media.toFixed(1)} Parabens!.`)
    } else {
        console.log(`A media da turma ${nomeTurma} foi Menor que 5`)
    }
}
      
