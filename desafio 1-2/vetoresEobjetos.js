
// OBJETOS INTERCALADOS. PODERIA FAZER UM OBJETO APENAS MAIS INTERCALO ELE PARA SIMPLIFICAR.
const programador = {nome:'Jonas',
                     idade: 18,
                     tecnologias:[{nome:'PHP', especialidade:'Deaktop'}, 
                                  {nome:'Python', especialidade:'Data Science'},
                                  {nome:'Java', especialidade:'Mobile/Desktop'}]
                     }

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} Especializado em ${programador.tecnologias[0].especialidade}`)                     

                     
/*const tecnologias = [{nome:'C++'}, {especialidade:'Deaktop'},
                     {nome:'Python',especialidade:'Data science'},
                     {nome:'Java',especialidade:'Mobile/Desktop'}] 
                     
                     */                 