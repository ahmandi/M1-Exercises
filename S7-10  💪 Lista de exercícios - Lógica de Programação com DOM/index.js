const main = document.createElement('main')
main.id = 'main'

const p     = document.createElement('p')
const image = document.createElement('img')
const a     = document.createElement('a')
const ul    = document.createElement('ul')
const li    = document.createElement('li')
const lis   = document.createElement('li')
const list  = document.createElement('li')

p.innerText = "lorem upside"
a.href = "http://google.com"
a.innerText = "random website"
ul.className = "list"
li.innerText = "test"
lis.innerText = "test1"
list.innerText = "test2"

document.querySelector("body").appendChild(main)
document.querySelector("main").appendChild(p)
document.querySelector("main").appendChild(image)
document.querySelector("main").appendChild(a)
document.querySelector("main").appendChild(ul)
document.querySelector("ul").appendChild(li)
document.querySelector("ul").appendChild(lis)
document.querySelector("ul").appendChild(list)


