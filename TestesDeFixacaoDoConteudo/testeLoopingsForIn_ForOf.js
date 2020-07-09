const alunos = [
    {nome: 'Jonas', tecnologias:['Html','CSS']},
    {nome: 'GG', tecnologias:['PHP', 'JAVA']}]

    console.log('\n==================================\n')
    

    console.log(alunos[0].tecnologias)
    // primeiro fazer um for para o Objeto alunos

    function buscarCSS(alunos){ 
        for (const i of alunos.tecnologias) { // FOR OF ITERA SOBRE O VALOR DE CADA PROPRIEDADE.
            console.log(i);
        }
    }

    // Agora fazer um outro looping dentro do Ojeto tecnologias Interno do Objeto alunos
    
    for (const i of alunos) {
        buscarCSS(i);
    }