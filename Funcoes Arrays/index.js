positions = (firstPlace, secondPlace, lastPlace) => {
    
    const danielPosition = "Daniel";

    if(lastPlace == "Daniel"){
        let newLastPlace = secondPlace;
        let athletes = [firstPlace, danielPosition, newLastPlace]; 

        console.log(`1ª - Colocado ${firstPlace}`)
        console.log(`2ª - Colocado ${danielPosition}`)
        console.log(`3ª - Colocado ${newLastPlace}`)
    } else if (secondPlace == "Daniel"){
        let newSecondPlace = firstPlace;
        let athletes2 = [danielPosition, newSecondPlace, lastPlace];

        console.log(`1ª - Colocado ${danielPosition}`)
        console.log(`2ª - Colocado ${newSecondPlace}`)
        console.log(`3ª - Colocado ${lastPlace}`)
    } else {
        athletes3 = [firstPlace, secondPlace, lastPlace]

        console.log(`1ª - Colocado ${firstPlace}`)
        console.log(`2ª - Colocado ${secondPlace}`)
        console.log(`3ª - Colocado ${lastPlace}`)
    }

};

// positions = (firstPlace, secondPlace, lastPlace) => {

//     let nomeDoCompetidor = ['Rafael', 'Manoel', 'Daniel'];

//     athletes.unshift("Daniel");
//     athletes.splice(1, 0, 'Rafael');
//     athletes.splice(2, 0, 'Manoel');

//     console.log(`1ª - Colocado ${nomeDoCompetidor[0]}`)
//     console.log(`2ª - Colocado ${nomeDoCompetidor[1]}`)
//     console.log(`3ª - Colocado ${nomeDoCompetidor[2]}`)
// };
