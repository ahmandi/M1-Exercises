function snapCracklePrime(maxValue){
    let string = ''
    for(let i = 1; i <= maxValue; i++){
        let x = 0
        for(let z = 1; z <= i; z++){
            if(i % z == 0){
                x++
            }
        }
        if(i % 2 != 1 && i % 5 !== 0 && x == 2){
            if(i == maxValue){
                string += "Prime"
            } else {
                string += "Prime" + ", "
            }
        } else if (i % 5 == 0 && x == 2){
            if(i == maxValue){
                string += 'SnapCracklePrime'
            } else {
                string += 'SnapCracklePrime' + ', '
            }
        } else if(i % 2 == 1 && x == 2){
            if(i == maxValue){
                string += 'SnapPrime'
            } else {
                string += 'SnapPrime' + ', '
            }
        } else if (i % 2 == 0 && x == 2){
            if(i == maxValue){
                string += 'CracklePrime'
            } else {
                string += 'CracklePrime' + ', '
            }
        } else if (i % 2 != 1 && i % 5 !== 0){
            if(i == maxValue){
                string += [i]
            } else {
                string += [i] + ", "
            }
        } else if (i % 2 == 1 && i % 5 == 0){
            if(i == maxValue){
                string += 'SnapCrackle'
            } else {
                string += 'SnapCrackle' + ", "
            }
        } else if(i % 2 == 1){
            if(i == maxValue){
                string += 'Snap'
            } else {
                string += 'Snap' + ", "
            }
        } else if (i % 5 == 0){
            if(i == maxValue){
                string += "Crackle"
            } else {
                string += "Crackle" + ", "
            }
        }
    }
    return string
}

//i % 2 == 1
//i % 2 == 0
// i % 5 == 0
// i % 2 == 1 && i % 5 == 0 
// let x = 0
// for(let i = 1; i <= value; i++){
//     if(value % i == 0){
//         x++
//     }
// }