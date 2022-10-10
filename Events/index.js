/**
 * Criar uma função responsável por mostrar o alerta na tela
*/

function mostrarAlerta() {
    /**
     * o objeto document é um objeto que faz uma representção do html dentro do javascript
     */
    /**
     * getElementById serve para recuperar um elemento pelo seu ID
     */
    /**
     * a propriedade classList retorna um array com todas as classes CSS que um elemnto possui
     */
    /**
     * classList.add serve para adicionar novas classes dinamicamente dentro do html
     */
    const divAlerta = document.getElementById('alerta')
    divAlerta.classList.add('mostrar')
}

function fecharAlerta() {
    const divAlerta = document.getElementById('alerta')
    divAlerta.classList.remove('mostrar')
}


const btnMostrar = document.getElementById('mostrar')
const btnFechar =  document.getElementById('fechar')

/**
 * addEventListener é um método que permite ouvir eventos do HTML pelo Javascript
*/
/** 
 * se eu precisar passar uma funcao como parametro para outra
 * eu passo a referencia dela, ou seja a funcao sem os parenteses na frente
 * */ 


btnMostrar.addEventListener('click', mostrarAlerta)
btnFechar.addEventListener('click', fecharAlerta)