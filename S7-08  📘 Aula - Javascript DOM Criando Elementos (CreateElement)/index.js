let article       = document.createElement('article')
let articleTitle  = document.createElement('h2')
let articleResume = document.createElement('p')
let articleButton = document.createElement('button')

articleTitle.innerText  = "Como criar elementos HTML de forma dinâmica, utilizando Javascript"
articleResume.innerHTML = "Nesse post vamos aprender como criar elementos utilizando o DOM"
articleButton.innerHTML = "Acessar conteúdo"

article.appendChild(articleTitle)
article.appendChild(articleResume)
article.appendChild(articleButton)

document.querySelector('body').appendChild(article)