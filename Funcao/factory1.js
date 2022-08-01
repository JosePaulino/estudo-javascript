//Factory é funcao que no final retorna um objto

// Factory Simples
function criarPessoa() {
  return {
    nome: 'Ana',
    sobreNome: 'Silva'
  }
}

console.log(criarPessoa())
