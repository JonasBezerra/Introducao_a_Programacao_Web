pessoas = [{nome:'Jonas',idade: 17}, {nome: 'Higor', idade:22}]


for (let interator of pessoas) { // FOR OF ITERA SOBRE O VALOR DO ATRIBUTO DO OBJETO

    console.log(interator) // AQUI ELE TRAS O VALOR DE TODOS OS OBJETOS DENTRO DO ARRAY
    console.log(interator.nome); // AQUI ELE TRAS APENAS O NOME DE TODOS OS OBJETOS

    if(interator.idade >=18){
        console.log(`\n ====== O aluno ${interator.nome} é maior de idade ====== `)
    }
}

// VAMOS PEGAR TUDO ISSO E TRABALHAR COM FUNÇÕES
console.log('\n\t======================\n')
verificarPessoas(pessoas)

function verificarPessoas(pessoa){
    let idade = ''
    for (let i = 0; i < pessoa.length; i++) {
        idade = pessoa[i].idade;
        if(idade < 18 ){
            console.log(`O aluno ${pessoa[i].nome} é Menor de idade`)
        }
    }
}