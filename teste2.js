var ar = {}
var pop = new Array;
process.stdin.on('data', (data) => {
  if (!ar.length) {
    ar.length = (data.toString().trim())
  }
  else {
    inicializa(data)
  }

  function inicializa(a) {
    if (pop.length < (ar.length) - 1) {
      let numero = parseInt(a.toString().trim())
      pop.push(numero)

    }
    else {
      let numero = parseInt(a.toString().trim())
      pop.push(numero)
      process.exit()
    }
  }
})

process.on('exit', function () {


  let menor;
  function menosMenosUm(arr) {
    let comparavel = Math.max(...pop)
    for (let min of arr) {

      if (min < comparavel) {
        comparavel = min
      }
    }
    return menor = comparavel - 1
  }
  menosMenosUm(pop)
  finalNaoConsecutivo = menor.toString()
  process.stdout.write(finalNaoConsecutivo)
  process.stdout.write('\n')
  process.exit()
})