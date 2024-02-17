let personOne = {
	"name": "André",
	"age": 27,
	"role": "Full Stack",
	"technologies": ["javascript", "react", "node"]
}

let personTwo = {
	"name": "Romário",
	"age": 22,
	"role": "Front End",
	"technologies": []
}

let personThree = {
	"name": "Diana",
	"age": 19,
	"role": "Back End",
	"technologies": ["python", "django"]
}

const developersList = [personOne, personTwo, personThree]

developersList[1].technologies.push(personOne.technologies[0])
developersList[1].technologies.push(personOne.technologies[1])

function keyShow(devs) {

devs.forEach(dev => {
    for(let values in dev){
        console.log(`${values}: ${dev[values]}`)
    }
})}

//     for(let dev of devs) {
//         for(let values in dev){
//             console.log(`${values}: ${dev[values]}`);
//         }
//     }
// }

