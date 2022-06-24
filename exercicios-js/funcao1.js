//Funcao sem retorno
function imprimirSoma(a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 1, 4, 10, 3)
imprimirSoma()

// Funcao com retorno
function soma(a, b = 1) {
  return a + b
}

console.log(soma(2, 3))
console.log(soma(2)) // não da erro pois esta atribuindo b = 1
