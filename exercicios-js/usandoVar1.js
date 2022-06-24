// Var ou é global ou é escopo de funcao

{
  {
    {
      {
        var sera = 'Será???'
      }
    }
  }
}

console.log(sera)

function teste() {
  var local = 123
  console.log(local)
}

teste()
