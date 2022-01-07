const texto = 'supermercado superação hiperMERCADO';
const regex = new RegExp('(?:super)[\\wÀ-ú]+','ig');
const regex2 = new RegExp('(?<=super)[\\wÀ-ú]+','ig');
const regex3 = new RegExp('(?<!super)mercado+','ig');
 
console.log(texto.match(regex));
console.log(texto.match(regex2));
console.log(texto.match(regex3));
 
// Utilizando em linha
console.log(texto.match(/(?:super)[\wÀ-ú]+/gi));
console.log(texto.match(/(?<=super)[\wÀ-ú]+/gi));
console.log(texto.match(/(?<!super)mercado+/gi));