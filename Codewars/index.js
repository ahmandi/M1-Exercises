function negative(arr){
    let count = 0;

    for(let i = 0; i <= arr.length; i++){
        if(arr[i] < 0){
            count++
        }
    }
    return count
}

function negativeSum(arr){
    let sum = 0

    for(let i = 0; i <= arr.length; i++){
        if(arr[i] < 0){
            sum += arr[i]
        }
    }
    return sum
}