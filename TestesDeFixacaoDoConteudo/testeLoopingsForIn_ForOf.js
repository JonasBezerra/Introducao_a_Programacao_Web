const alunos = [
    {nome: 'Jonas', tecnologias:['Html','CSS']},
    {nome: 'GG', tecnologias:['PHP', 'JAVA']}]

    console.log('\n==================================\n')
    

    // primeiro fazer um for para o Objeto alunos

    function buscarCSS(alunos){ 
        for (const i of alunos.tecnologias) { // FOR OF ITERA SOBRE O VALOR DE CADA PROPRIEDADE.
            if(i ==='CSS'){
                return true;
            }
        
        }
        return false
    }

    // Agora fazer um outro looping dentro do Ojeto tecnologias Interno do Objeto alunos
    
    for (let i = 0; i < alunos.length ; i++) {
        if(buscarCSS(alunos[i]) == true){
            console.log(`O aluno ${alunos[i].nome} usa CSS`)
        }
    }