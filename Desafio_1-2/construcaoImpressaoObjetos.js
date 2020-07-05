const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereco: {                          // OBJETOS INTERCALADOS
        rua: 'Rua Guilherme Gembala',
        número: 260
    }
}

// EU PODERIA FAZER O OBJETO EMPRESA COMO SENDO UM OBJETO SÓ.
// MAIS PARA SIMPLIFICAR EU INTERCALO ELE

console.log(`A empresa ${empresa.nome} está localizada na rua ${empresa.endereco.rua}, ${empresa.endereco.número}`)
