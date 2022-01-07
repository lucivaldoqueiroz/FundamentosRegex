const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'There is a Big fog in NYC'

//? zero ou um (opicional)'
const regex = /fogo?/gi //pode ter zero ou uma ocorrencia do caractere que está a esquerda de ?
console.log(texto1.match(regex))
console.log(texto2.match(regex))