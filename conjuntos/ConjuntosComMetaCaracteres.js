const texto = '.$+*?-'

console.log(texto.match(/[+.?+$]/g)) //dentro de um conjunto o ponto se comporta como um literal.
console.log(texto.match(/[+.?+$]./g)) //não precisa de escape dentro do conjunto (não sao todos)
console.log(texto.match(/[$-?]/g)) //isso é um intervalo (range)

//Não é um intervalo (range)...
console.log(texto.match(/[$\-?]/g))
console.log(texto.match(/[-?]/g))
