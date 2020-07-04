/*Vetores e objetos
    Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.
    Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.
    As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:

{ nome: 'C++', especialidade: 'Desktop' }
{ nome: 'Python', especialidade: 'Data Science' }
{ nome: 'JavaScript', especialidade: 'Web/Mobile' }
Por exemplo:

const objeto = {
  propriedade: [
    { nome: "C++", especialidade: "Desktop" },
    { nome: "JavaScript", especialidade: "Web/Mobile" }
  ]
}; */
const programador = {nome:'Jonas',
                     idade: 18,
                     tecnologias:[{nome:'PHP', especialidade:'Deaktop'},
                                  {nome:'Python', especialidade:'Data Science'},
                                  {nome:'Java', especialidade:'Mobile/Desktop'}]
                     }

const tecnologias = [{nome:'C++'}, {especialidade:'Deaktop'},
                     {nome:'Python',especialidade:'Data science'},
                     {nome:'Java',especialidade:'Mobile/Desktop'}]                    