//Array Objeto de Produtos
let products = [{
        nome: "banana",
        preco: 8.99
    },
    {
        nome: "pera",
        preco: 5.99
    },
    {
        nome: "Abacaxi",
        preco: 5.99
    }
];
//CriaÇão de items
const body = document.querySelector("body")

let produtos = document.createElement("ul")
let main = document.createElement("main")
let ul = document.createElement("ul")
let productsList = document.createElement("li")
let productsItem = document.createElement("li")
let productsSum = document.createElement("li")
let productsDetails = document.createElement("li")
let produto1 = document.createElement("li")
let produto1Nome = document.createElement("p")
let produto1Valor = document.createElement("p")
let produto2 = document.createElement("li")
let produto2Nome = document.createElement("p")
let produto2Valor = document.createElement("p")
let produto3 = document.createElement("li")
let produto3Nome = document.createElement("p")
let produto3Valor = document.createElement("p")
let buttonEnd = document.createElement("button");
let soma = 0
//Botão de Finalizar
buttonEnd.innerText = "Finalizar";
productsList.innerText = "Lista de produtos"
productsDetails.innerText = "Soma"
ul.innerText = "Items"
produto1Nome.innerText = products[0].nome
produto2Nome.innerText = products[1].nome
produto3Nome.innerText = products[2].nome
produto1Valor.innerText = products[0].preco
produto2Valor.innerText = products[1].preco
produto3Valor.innerText = products[2].preco
//Appends
produtos.append(produto1,produto2,produto3)
produto1.append(produto1Nome,produto1Valor)
produto2.append(produto2Nome,produto2Valor)
produto3.append(produto3Nome,produto3Valor)
productsDetails.appendChild(buttonEnd);
productsItem.appendChild(produtos)
ul.append(productsList,productsItem,productsDetails,productsSum);
main.appendChild(ul);
body.appendChild(main)
//Array que recebe a soma e o botao de finalizar
productsDetails = [productsSum, buttonEnd]
//Iteracao precos
for (const produto of products){
    soma += produto.preco
}
productsSum.innerText = `Total: ${soma}`