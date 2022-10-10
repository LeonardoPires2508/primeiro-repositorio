/**
 * Objeto é uma estrutura que permite organizar dados na forma e chave-valor
 */

let end = {
    rua: 'Cel Joao de Carvalho',
    numero: '355',
    complemento: 'Ap 225 Torre C',
    estado: 'CE',
    cep: '60841-400'
}

let pessoa = {
    nome: 'Joana',
    idade: 23,
    cpf:'123.123.123-00',
    altura: 1.73,
    endereço: end,
    solteiro: true,
    habilidades: ['React', 'Java', 'Javascript', 'Golang', 'Rust'],
    cumprimentar() {
        console.log(`Olá, tudo bem? Meu nome é ${this.nome}`)
    }
}
/**
console.log(end)
console.log(pessoa.habilidades)
 */
pessoa.cumprimentar()