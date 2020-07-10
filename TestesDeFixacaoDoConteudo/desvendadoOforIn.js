const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"


/*O (para... em) declaração itera sobre todas as propriedades enumeráveis de um objeto que são chaveados por strings (ignorando as chaveadas por Symbols), incluindo propriedades herdadas enumeráveis. */

/*RESUMINDO O QUE A MDN FALA. ELE ITERA DIRETAMENTE COM O PROPRIEDADE OU ATRIBUTO DO OBJETO */