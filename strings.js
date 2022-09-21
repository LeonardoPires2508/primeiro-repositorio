//Delimitação de Strings

const aspasSimples = 'Olá Mundo!'
console.log(aspasSimples)

// caracteres de escape

const aspasDuplas = "Olá eu sou o \nJavascript. Eu sou melhor que Python."
console.log(aspasDuplas)

const textoComCrase = `Eu sou o Javascript, 
não tenho nada haver com Java`
console.log(textoComCrase)

// metodos das strings

const texto = 'O Javascript foi criado anos apos o Python. No entanto, o javascript é bem mais legal'
console.log(texto)
console.log(texto.toUpperCase())
console.log(texto.toLowerCase())
console.log(texto.concat(' . Quer ver?'))
console.log(texto[2])
console.log(texto.substring(2))
console.log(texto.substring(2, 12))
console.log(texto.replace('Javascript', 'Rust')) // substitui a primeira ocorrencia da pesquisa
console.log(texto.replaceAll('Javascript', 'Kotlin'))
console.log(texto.replace(/Javascript/g, 'PHP')) // substituir de forma global
console.log(texto.replace(/Javascript/gi, 'PHP')) // substituir de forma global ignorando o key sensitive

const html = '<!DOCTYPE html>\n<html><html>'
console.log(html.startsWith('<!DOCTYPE html>'))
console.log(html.endsWith('<body>'))

const mensagem = '                Olá Mundo               '
console.log(mensagem)
console.log(mensagem.trim())

let senha = 'sayure'
console.log(senha.length)
console.log(senha.length >= 8)
