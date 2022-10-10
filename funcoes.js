


function cumprimentar(mensagem, repetir = 1) {   /*poderia colocar mensagem= mensagem padrao e repetir = 3 */
    for (let i = 1; i<= repetir; i++){ /*7*/  
    alert(mensagem)
    }
    
}

function soma(num, num2){
    /*return num + num2 */
    let result = num + num2
    return result
}

function maiorValor(a, b) {
    if(a > b) {
        return a
    } else {
        return b
    }
}
/*
let resultado = soma(4, 7)
console.log(`O VALOR DA VARIÁVEL RESULTADO É: ${resultado}`)
/*console.log(maiorValor(5, 10))*/
/*const num1 = parseInt(prompt('Informe o primeiro numero'))//7
const num2 = parseInt(prompt('Digite o segundo numero'))//3
alert(`O maior numero entre esses é ${maiorValor(num1, num2)}`)

/*cumprimentar('Olá mundo', 7)*/
/*cumprimentar('Eu gosto muito do Javascript')
cumprimentar('Javascript sola o C#')*/

/**
 * criem um funcao que gere o resultado de uma equação do segundo grau
 */

function equacaoSegundoGrau(a, b, c) {
    let delta = Math.pow(b, 2) - (4*a*c)
    let raizDelta = Math.sqrt(delta)
    let x1 = (-1*b + raizDelta) / (2 * a)
    let x2 = (-1*b - raizDelta) / (2 * a)

    return [x1, x2]
}

console.log(equacaoSegundoGrau(1, -1, -12))

/*alert(`As raizes são: ${raizes(x1, x2)}`)*/

/* const a = parseInt(prompt('Digite o valor de a'))
const b = parseInt(prompt('Digite o valor de b'))
const c = parseInt(prompt('Digite o valor de c'))*/
