const tag       = document.createElement('p')
const article   = document.createElement('article')
const h1        = document.createElement('h1')
const p         = document.createElement('p')
const a         = document.createElement('a')

tag.innerText   = "Olá, eu sou uma tag criada pelo JS"
h1.innerText    = "Olá sou o título"
p.innerText     = "Olá sou o parágrafo"
a.href          = "http://www.example.com"
a.innerText     = "Olá sou a ancora"

document.querySelector('body').appendChild(tag)
document.querySelector('body').appendChild(article)
document.querySelector('article').appendChild(h1)
document.querySelector('article').appendChild(p)
document.querySelector('article').appendChild(a)

const tagInput       = document.createElement('input')
tagInput.placeholder = "Digite seu texto aqui"
const form           = document.querySelector('form').appendChild(tagInput)
