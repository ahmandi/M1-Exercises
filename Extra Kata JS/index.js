//oneThroughTwenty - Retornar os números de 1 a 20. (1, 2, 3,…, 19, 20)
function oneThroughTwenty(num){
    let counter = [];

    for(let i = 1; i <= 20; i++){
      counter.push(i)
    }
    return counter;
}

//evensToTwenty - Retornar os números pares de 1 a 20. (2, 4, 6,…, 18, 20)
function evensToTwenty(num){
    let counter = [];

    for(let i = 1; i <= 20; i++){
        if(i % 2 == 0){
            counter.push(i)
        }
    }
    return counter;
}

//oddsToTwenty - Retornar os números ímpares de 1 a 20. (1, 3, 5,…, 17, 19)
function oddsToTwenty(num){
    let counter = [];

    for(let i = 1; i <= 20; i++){
        if(i % 2 == 1){
            counter.push(i)
        }
    }
    return counter;
}

//multiplesOfFive - Retornar os múltiplos de 5 até 100. (5, 10, 15,…, 95, 100)
function multiplesOfFive(num){
    let counter = [];

    for(let i = 1; i <= 100; i++){
        if(i % 5 == 0){
            counter.push(i)
        }
    }
    return counter;
}

//squareNumbers - Retornar todos os números até 100 que forem quadrados perfeitos. (1, 4, 9, …, 81, 100)
function squareNumbers(num){
    let counter = [];

    for(let i = 1; i <= 10; i++){
        if(i*i % 1 == 0){
            counter.push(i*i)
        }
    }
    return counter;
}

//countingBackwards - Retornar os números contando de trás para frente de 20 até 1. (20, 19, 18, …, 2, 1)
function countingBackwards(num){
    let counter = [];

    for(let i = 20; i >= 1; i--){
        counter.push(i)
    }
    return counter;
}

//evenNumbersBackwards - Retornar os números pares de 20 até 1. (20, 18, 16, …, 4, 2)
function evenNumbersBackwards(num){
    let counter = [];

    for(let i = 20; i >= 1; i--){
        if(i % 2 == 0){
        counter.push(i)
        }
    }
    return counter;
}

//oddNumbersBackwards - Retornar os números ímpares de 20 até 1. (19, 17, 15, …, 3, 1)
function oddNumbersBackwards(num){
    let counter = [];

    for(let i = 20; i >= 1; i--){
        if(i % 2 == 1){
        counter.push(i)
        }
    }
    return counter;
}

//multiplesOfFiveBackwards - Retornar os múltiplos de 5 contando de trás para frente a partir de 100. (100, 95, 90, …, 10, 5)
function multiplesOfFiveBackwards(num){
    let counter = [];

    for(let i = 100; i >= 1; i--){
        if(i % 5 == 0){
            counter.push(i)
        }
    }
    return counter;
}

//squareNumbersBackwards - Retornar os quadrados perfeitos contando de trás para frente a partir de 100. (100, 81, 64, …, 4, 1)
function squareNumbersBackwards(num){
    let counter = [];

    for(let i = 10; i >= 1; i--){
        if(i*i % 1 == 0){
            counter.push(i*i)
        }
    }
    return counter;
}