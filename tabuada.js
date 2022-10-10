var numero = parseInt(document.getElementById('numero'))

var botao = document.getElementById("btn")

botao.addEventListener("click", function() {
    let resultado
    for(let i=1; i <=10; i++){
        resultado = numero * i
        console.log(resultado)
    }
})
console.log()