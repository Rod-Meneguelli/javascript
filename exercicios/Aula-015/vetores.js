let valor =[8, 1, 7, 4, 2, 9]

console.log(valor)
/*
console.log(valor[0])
console.log(valor[1])
console.log(valor[2])
console.log(valor[3])
console.log(valor[4])
console.log(valor[5])
*/
/*
//ler o for abaixo: enquanto posicao não chegar no final do meu vetor, que é o comprimento dele
//eu vou fazer posicao ++ 
for(let posicao = 0; posicao < valor.length; posicao++) {
    console.log(`A posição ${posicao} tem o valor ${valor[posicao]}`)
}
*/
for(let posicao in valor) {
    console.log(`A posição ${posicao} tem o valor ${valor[posicao]}`)
}