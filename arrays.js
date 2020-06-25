let ar = []
var pop = []
process.stdout.write('insira a qtde de itens: ')

function inicializa(a) {
    if (pop.length <= ((ar.length) - 1)) {
        console.log('o que entrou em inicializa: ' + parseInt(a.toString().trim()))
        let numero = parseInt(a.toString().trim())
        pop.push(numero)
    }
    else {
        process.stdout.write('deu erro')
        process.exit()
        return (console.error());
    }
}
process.stdin.on('data', (data) => {
    if (!ar.length) {
        ar.length = (data.toString().trim())
        console.log("confirmando o ar.len = " + ar.length)
    }
    else{
        console.log('vai pra inicializa')
        inicializa(data)

        //process.stdout.write('deu erro')
        //process.exit()
    }
    let menor = [];
    if (pop.length < ar.length) {
        console.log('entrou nesse if' + pop.length + ' ' + ar.length)
        inicializa(data)

    } else {
        menor = pop.sort(function (a, b) {
            return a - b;

        })
        var num = 0;
        var i = 0
        
        while (i <= menor.length) {
            console.log("esse cara é o "+ i + menor.length)
            if ((menor[i] - menor[i + 1]) < -1) {
                console.log('esse está assim' + menor[i+1])
                num = menor[i] + 1
                console.log('esse é o num: ' + num + ' esse é o menor nesse i : ' + menor[i])
                let finalUm = num.toString();
                process.stdout.write(finalUm)
                process.exit()
            }
            else if (i == (menor.length) ){//&& (menor[i-1]- menor[i-2]) === -1) {
                console.log(`case 2 esse é o valor de i:  ${i} e esse é o valor de length ${menor.length}`)
                console.log("estou aqui" + (menor.lenght)-1)
                num = menor[i-1]+1
                var finalDois = num.toString()
                process.stdout.write("\n")
                process.stdout.write(finalDois)
                process.exit()
            }
            // else if ((menor[i-1] - menor[i-2])  !== -1) {
            //     console.log(menor)
            //     console.log((menor[i-1] - menor[i-2]))
            //     console.log(`case 1 esse é o valor de i:  ${i} e esse é o valor de length ${menor.length} peroque ${menor[i-1]}`)
            //     num = menor[i-2]
            //    // var finalDois = num.toString()
            //     process.stdout.write("\n")
            //    // process.stdout.write(finalDois)
            //     process.exit()
                
            //}
            else{
                process.stdout.write('esquisito')
                process.exit()
            }
        }
        //process.exit()
    }
})

