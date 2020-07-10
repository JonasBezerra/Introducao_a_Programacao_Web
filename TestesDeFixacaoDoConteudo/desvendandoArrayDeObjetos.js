pessoas = [{nome:'Jonas',idade: 17}, {nome: 'Higor', idade:22}]


for (let interator of pessoas) { // FOR OF INTERA SOBRE O ATRIBUTO DO OBJETO

    console.log(interator) // AQUI ELE TRAS O VALOR DE TODOS OS OBJETOS DENTRO DO ARRAY
    console.log(interator.nome); // AQUI ELE TRAS APENAS O NOME DE TODOS OS OBJETOS
}