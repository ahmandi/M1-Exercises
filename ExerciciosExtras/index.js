//1 - - Crie uma função que recebe um array e conta quantos numeros negativos tem nesse array. 
function minus(arr){
    let subs = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            subs += 1
        }
    }
    return subs
}

// 2 - crie uma função que recebe um array e soma todos os numeros negativos desse array
function pairs(arr){
    let sum = 0

    for(let i = 0; i <= arr.length; i++){
        if(arr[i] < 0){
            sum += arr[i]
        }
    }
    return sum
}

//3- crie uma função que recebe um numero e conta quantos numeros pares existem entre 0 e esse numero.
function third(num){
    let count = 0
    for(let i = 0; i <= num; i++){
        if(i % 2 == 0){
            count += 1
        }
    }
    return count
}

//4- crie uma função que recebe um array e retorna todos os numeros negativos.
function fourth(num){
    let arr = [];

    for(let i = 0; i < num.length; i++){
        if(num[i] < 0){
            arr.push(num[i])
        }
    }
    return arr
}

//5- crie uma funçao que recebe um array e retorna true se a soma dos valores do array for 
//maior que o numero de elementos do array.(o array pode receber numeros negativos).
function fifth(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {{
            sum += arr[i]
        }
    }
    if(sum > arr.length){
    return true
    } else {
        return false
    }
}

//6-crie uma funçao que recebe um array e soma 5 a todos os elementos, após isso retorna o array.
function sixth(arr){
    let acc = [];
    for(let i = 0; i < arr.length; i++){       
    let stacker = 0
        stacker = arr[i] + 5
        acc.push(stacker)
    }
    return acc
}

function seventh(arr){
    let acc = [];
    let avgSum = 0

    //Loop para somar os valores e depois tirar a média
    for (let i = 0; i < arr.length; i++) {
        avgSum += arr[i]
    }

    //Loop para verificar se o index do array é maior do que a média do próprio array
    for (let j = 0; j < arr.length; j++) {
        let arrAvg = avgSum / 2
        if(arr[j] > arrAvg) {
            acc.push(arr[j])
        }
    }
    return acc
}


//ARRAYS DE STRINGS E STRINGS
//1- Crie uma função que recebe uma string e conta quantas letras 'a' existem.
function firstStr(str){
    let charSum = 0

    for(let i = 0; i <= str.length; i++){
        if(str.charAt(i) == "a"){
            charSum += 1
        }
    }
    return charSum
}

//2- crie uma função que recebe um array de strings e soma todos comprimentos das palavras.
function secondStr(arr){
    let lenSum = 0

    for(let i = 0; i < arr.length; i++){
            lenSum += arr[i].length
    }
    return lenSum
}

//3- crie uma função que recebe uma frase e retorna um array com as palavras que possuem comprimento impar.
function thirdStr(str){
    let strArr = str.split(" ");
    let arr = [];

    for(let i = 0; i < strArr.length; i++){
        if(strArr[i].length % 2 == 1){
            arr.push(strArr[i]);
        }
    }
    return arr
}

//4- crie uma função que recebe uma string e substitui todas as letras 'o' por 0.
function fourthStr(str){
    // let strSplit = str.split(" ");
    // let strReplace = strSplit.replace("o", "0")
    // let strJoin = strSplit.join(" ");
    // return strJoin

    let strRegex = str.replace(/o/g, "0")
}

function fifthStr(str){
    let strRegex = str.replace(/p/g, "P")
}