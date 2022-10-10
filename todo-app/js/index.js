/**
 * metodos de recuperacao de elementos HTML
 */

//recupera elementos HTML a partir do namo tag.
// const todoForm = document.getElementsByTagName('form')[0] - so pega o elemento Zero
const todoForm = document.getElementById('todo-form')
const todos =[]

/**
 * addEventListener serva para ouvir eventos de elementos HTML que foram emitidos
 */

todoForm.addEventListener('submit', function (evento) {
    
    /**
     * cancela o compartamento adrao de um formulario
     * que seia o recarremanto da agina tentando fazer o envio
    */
    evento.preventDefault()
    
    /**
     * cancela a propagacao de eventos que foi emitido para os elementos pai
     * evitando que outros eventos sejam emitidos
     */
    evento.stopPropagation()
    

    /**
     * querryselector recupera o primeiro elemento que 
     * atenda a um seletor css informado
     */
    
    const todoInput = document.querySelector('#todo')
    /**
     * a propriedade value é uma propriedade que representa o atributi value
     * dos elementos de formulario do HTML, para acessarmos o valor que esta dentro
     * deles
     */
    todos.push(todoInput.value)
    todoInput.value = ''  
    renderizarTodos()  
})

function renderizarTodos () {
    const todosListSection = document.querySelector('#todos-list')
    todosListSection.innerHTML = ''

    for (let tarefa of todos) {
        /**
         * createelement é o metodo responsavel ppor gerar novos elementos
         * html dentro do javascript a partir do nome das tags
         */
        const divCard = document.createElement('div')
        divCard.classList.add('card', 'bg-warning')

        const divCardBody = document.createElement('div')
        divCardBody.classList.add('card-body' , 'd-flex' , 'align-items-center')

        const pTodoText = document.createElement('p')
        pTodoText.classList.add('todo-text' , 'flex-grow-1' , 'text-truncate')
        /**
         * innertext é a propriedade de texto que informa qual o conteudo de texto
         * que esta dentro de um html
         */
        pTodoText.innerText = tarefa

        const btnDelete = document.createElement('button')
        btnDelete.classList.add('btn', 'delete-todo')
       
        /**
         * arrow functions sempre sao anonimas */            
        btnDelete.addEventListener('click', () => {
        /**
         * descobrir o indice do elemento dentro do array
         */
        /**
         * indexOf informa em qual indice se encontra um determinado valor dentro do seu array
         * 
         * se ele nao achar o valor dentro do array, ele retorna -1
         */
        const index = todos.indexOf(tarefa)
        /**
         * splice serve para excluir um determinado valor de seu array a partir do seu indice
         */
        todos.splice(index, 1)
        renderizarTodos()
        })

        const spanIcon = document.createElement('span')
        spanIcon.classList.add('material-symbols-outlined')
        spanIcon.innerHTML = 'delete'

        /**
         * appendChild serve para colocar um novo elemento html dentro de outro
         */
        btnDelete.appendChild(spanIcon)
        /**
         * append serve para colocar um ou mais elementos html dentro de outro
         */
        divCardBody.append(pTodoText, btnDelete)

        divCard.appendChild(divCardBody)
        
        console.log(divCard)
        todosListSection.appendChild(divCard)
    }
}

