const airline = "Kenya Airways"
const plane = "B737"
console.log('B737'[1])
console.log(plane.length)
console.log(airline.lastIndexOf('a'))
console.log(airline.slice(5))
console.log(airline.slice(0,5))

const checkMiddleSeat = (seat) => {
    const s = seat.slice(-1)
    if (s === 'B' || s === 'E') {
        console.log("You got the middle seat😑")
    } else {
        console.log("You got lucky😍")
    }
}
checkMiddleSeat('11B')
checkMiddleSeat('23C')
checkMiddleSeat('3E')

console.log(airline.toUpperCase())
console.log(airline.toLowerCase())
const passenger = 'bErYL'
const passengerLower = passenger.toLowerCase()
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1)
console.log(passengerCorrect)
const announcement = "All passengers come to door 23, Boarding door 23"
console.log(announcement.replaceAll("door", "gate"))

//BOOLEAN METHODS includes starts with and ends with
const newPlane = 'Airbus A320neo'
console.log(newPlane.includes('Boeing'))
console.log(newPlane.startsWith('A'))
console.log(newPlane.endsWith("neo"))
if (newPlane.startsWith('Airbus') && newPlane.endsWith("neo")) {
    console.log("Part of the new airbus family")
}
console.log('Gakii Beryl'.split(' '))
const [firstName, lastName] = 'Gakii Beryl'.split(" ")
const newName = ['Miss.', firstName, lastName.toUpperCase()].join(' ')
console.log(newName)

//CODING CHALLENGE
// Coding Challenge #4

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');

    for (const [i, row] of rows.entries()) {
        const [first, second] = row.toLowerCase().trim().split('_');

        const output = `${first}${second.replace(
            second[0],
            second[0].toUpperCase()
        )}`;
        console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    }
});