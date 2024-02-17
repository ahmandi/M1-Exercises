//Kata 1 - Retornar os números de 1 a 25: (1, 2, 3, …, 24, 25)
function kata(){
    let array = [];

    for (let i = 1; i <= 25; i++) {
        array.push(i);
    }
    return array
}

//Kata 2- Retornar os números de 25 a 1: (25, 24, 23, …, 2, 1)
function kata2(){
    let array = [];

    for (let i = 25; i >= 1; i--) {
        array.push(i);
    }
    return array
}

//Kata 3- Retornar os números de -1 a -25: (-1, -2, -3, …, -24, -25)
function kata3(){
    let arr = [];

    for(let i = -1; i >= -25; i--){
        arr.push(i);
    }
    return arr
}

//Kata 4- Retornar os números de -25 a -1: (-25, -24, -23, …, -2, -1)
function kata4(){
    let arr = [];

    for(let i = -25; i <= -1; i++){
        arr.push(i);
    }
    return arr
}

//Kata 5- Retornar os números ímpares de 25 a -25: (25, 23, 21, …, -23, -25)
function kata5(){
    let arr = [];

    for(let i = 25; i >= -25; i--){
        if(i % 2 !== 0){
            arr.push(i);
        }
    }
    return arr
}

//Kata 6- Retornar os números divisíveis por 3 até o 100: (3, 6, 9, …, 96, 99)
function kata6(){
    let arr = [];

    for(let i = 3; i < 100; i++){
        if(i % 3 == 0){
            arr.push(i)
        }
    }
    return arr
}

//Kata 7- Retornar os números divisíveis por 7 até o 100: (7, 14, 21, …, 91, 98)
function kata7(){
    let arr = [];

    for(let i = 7; i < 100; i++) {
        if(i % 7 == 0){
            arr.push(i);
        }
    }
    return arr
}

//Kata 8- Retornar os números divisíveis por 3 e os números divisíveis por 7 regressivamente a partir do 100: (99, 98, 96, 93, 91, …, 14, 12, 9, 7, 6, 3)
function kata8(){
    let arr = [];

    for(let i = 100; i >= 3; i--){
        if(i % 3 == 0 || i % 7 == 0){
            arr.push(i);
        }
    }
    return arr
}

//Kata 9- Retornar os números ímpares divisíveis por 5 até o 100: (5, 15, 25, …, 85, 95)
function kata9(){
    let arr = [];

    for(let i = 5; i <= 100; i++){
        if(i % 2 == 1 && i % 5 == 0){
            arr.push(i);
        }
    }
    return arr
}

//Kata 10 - Retornar os 20 elementos de sampleArray. (469, 755, 244, …, 940, 472)
function kata10(sampleArray){

    return sampleArray
}

//Kata 11 - Retornar todos os números pares contidos em sampleArray. (244, 758, 450, …, 940, 472)
function kata11(sampleArray){
    let arr = [];

    for(let i = 0; i <= sampleArray.length; i++){
        if(sampleArray[i] % 2 == 0){
            arr.push(sampleArray[i])
        }
    }
    return arr
}

//Kata 12 - Retornar todos os números ímpares contidos em sampleArray. (469, 755, 245, …, 179, 535)
function kata12(sampleArray){
    let arr = [];

    for(let i = 0; i <= sampleArray.length; i++){
        if(sampleArray[i] % 2 == 1){
            arr.push(sampleArray[i])
        }
    }
    return arr
}

//Kata 13 - Retornar os números divisíveis por 8 em sampleArray: (712, 456, …, 472)
function kata13(sampleArray){
    let arr = [];

    for(let i = 0; i <= sampleArray.length; i++){
        if(sampleArray[i] % 8 == 0){
            arr.push(sampleArray[i])
        }
    }
    return arr
}

//Kata 14 - Retornar o quadrado de cada elemento de sampleArray. (219961, 570025, …, 222784)
function kata14(sampleArray){
    let arr = [];

    for(let i = 0; i < sampleArray.length; i++){
        arr.push(sampleArray[i] * sampleArray[i])
    }
    return arr
}

//Kata 15 - Retornar a soma de todos os números de 1 a 20.
function kata15(){
    let sum = 0;

    for(let i = 0; i <= 20; i++){
        sum += i
    }
    return sum
}

//Kata 16 - Retornar a soma de todos os elementos de sampleArray.
function kata16(sampleArray){
    let sum = 0

    for(let i = 0; i < sampleArray.length; i++){
        sum += sampleArray[i]
    }
    return sum
}

//Kata 17 - Retornar o menor elemento de sampleArray.
function kata17(sampleArray){
    let lowest = sampleArray[0]

    for(let i = 0; i < sampleArray.length; i++)
    if(sampleArray[i] < lowest){
        lowest = sampleArray[i]
    }
    return lowest
}

//Kata 18 - Retornar o maior elemento de sampleArray.
function kata18(sampleArray){
    let highest = sampleArray[0]

    for(let i = 0; i < sampleArray.length; i++)
    if(sampleArray[i] > highest){
        highest = sampleArray[i]
    }
    return highest
}
