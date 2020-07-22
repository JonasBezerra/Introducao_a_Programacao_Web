let pessoas = [
    {nome: 'Jonas', idade:18},
    {nome: 'Jhoney', idade: 21},
    {nome: 'Fulano', idade: 12}
]
    /*O método join() cria e devolve uma string ao concatenar todos os elementos numa array (ou objeto como um vetor / matriz) numa cadeia separada por vírgulas ou outro separador especificado. Se a array tem um só item, esse item é devolvido sem o uso do separador.*/

let rJ = pessoas.join(', ');
console.log(typeof rJ) // Retorna uma string

// ========== EXEMPLO TWO =======
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

// =================== O parametro ======================

/*Especifica uma string (cadeia de caracteres) para separar cada elemento do vetor. O separador é convertido em cadeia se for necessário. Se for omitido, os elementos serão separados por virgulas (","). Se separador é uma cadeia vazia, todos os elementos são unidos sem qualquer caráter entre eles.*/

// ================= EXEMPLO TREE ========

var a = ['Vento', 'Chuva', 'Fogo'];
a.join();      // 'Vento,Chuva,Fogo'
a.join(', ');  // 'Vento, Chuva, Fogo'
a.join(' + '); // 'Vento + Chuva + Fogo'
a.join('');    // 'VentoChuvaFogo'