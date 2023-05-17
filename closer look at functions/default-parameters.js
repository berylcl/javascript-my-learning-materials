'use strict'
const bookings = []
const createBooking = (flightNum,numPassengers=1, price = 199) => {
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking)
    bookings.push(booking)
}
createBooking("KQ123")
createBooking("KQ134")
createBooking('KQ145',2,500)
createBooking("KQ123",5)
const flight = "KQ233"
const beryl = {
    name: "Gakii Beryl",
    passport: 24534456456
}
const checkIn = (flightNum, passenger) => {
    flightNum = 'KG213';
    passenger.name = 'Miss.' + passenger.name
    if (passenger.passport === 24534456456 ) {
        console.log("checked in")
    } else {
        console.log("Wrong passport")
    }
}
checkIn(flight,beryl)
console.log(flight)
console.log(beryl)
const newPassport = (person) => {
    person.passport = Math.trunc(Math.random() *100000)
}
newPassport(beryl)
checkIn(flight,beryl)
//FIRST CLASS FUNCTIONS THESE ARE JUST ANOTHER TYPE OF OBJECT
const oneWord = (str) => {
    return str.replace(/ /g,''.toLowerCase())
}
const upperFirstWord = (str) => {
    if (!str) {
        return ''; // or throw an error, or handle the case differently
    }
    const [first, ...others] = str.split(' ')
    return [first.toUpperCase(), ...others].join(' ')
}

//HIGHER-ORDER FUNCTION
const transformer = (str,fn) => {
    console.log(`Original string ${str}`)
    //console.log(`Transformed string ${fn(str)}`);
    console.log(`Transformed by ${fn.name}`)
}
transformer('JS is the best',upperFirstWord())
const high5 = () => {
    console.log('✋')
}
high5()
high5()
//FUNCTIONS THAT RETURN OTHER FUNCTIONS
const greet = (greeting) => {
    return (name) => {
        console.log(`${greeting} ${name}`)
    }
}
const hello = greet("Hello")
hello("Gakii")
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum,name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`)
    }
}
const book = lufthansa.book;
lufthansa.book(239,"Gakii")
lufthansa.book(245,"Ivy")
const swiss = {
    airline: "Swiss Airlines",
    iataCode: "LX",
    bookings: []
}
book.call(swiss,567,'Bushra')

//BIND METHOD
//the bind() method creates a new function
//that, when called, has its this keyword set to a specified value.
const bookEW = book.bind(swiss)
bookEW(23,'Steve williams')
const bookLH = book.bind(lufthansa)
bookLH(32,"Beryl")

//WITH EVENT LISTENERS
lufthansa.planes = 300
lufthansa.buyPlane = () => {
    this.planes++
    console.log(this)
    console.log(this.planes)
}
lufthansa.buyPlane()
document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa))
const addTax = (rate, value) => {
    return value + value * rate
}
console.log(addTax(10,200))
//CODING CHALLENGE
//A METHOD IS A FUNCTION THAT IS ASSOCIATED WITH AN OBJECT
//1.2. Based on the input number, update the answers array.
// For example, if the option is 3, increase the value AT POSITION 3 of the array by 1.
// Make sure to check if the input is a number and if the number makes sense
// (e.g answer 52 wouldn't make sense, right?)
// Create a method 'displayResults' which displays the poll results.
// The method takes a string as an input (called 'type'), which can be either 'string' or 'array'.
// If type is 'array', simply display the results array as it is, using console.log().
// This should be the default option. If type is 'string', display a string like
// "Poll results are 13, 2, 4, 1".

const poll = {
    question: 'What is your favorite programming language?',
    options: ['0: Javascript', '1: Python', '2:Rust', '3:C', '4:Ruby'],
    answers: [0,0,0,0],
    registerNewAnswer: function () {
        const answer = Number(prompt(`${this.question}\n ${this.options.join(' ')}`))
        if (answer >= 0 && answer <= 4) {
            this.answers[answer]++
            this.displayResults()
        } else {
            console.warn('Invalid input')
        }
    },
    displayResults: function (type='array') {
        if( type === 'string') {
            console.log(`Poll results are ${this.answers}`)
        } else if (type === 'array') {
            console.log(this.answers)
        }
    }
}
//Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
//Call this method whenever the user clicks the "Answer poll" button.
const pollAnswers = document.querySelector('.poll')
pollAnswers.addEventListener('click', poll.registerNewAnswer.bind(poll));
//BIND THE THIS KEYWORD AND SET IT TO POLL OBJECT
//THIS KEYWORD IS NOW BOUND TO POLL OBJECT
/*The issue was caused by using an arrow function for registerNewAnswer,
 which doesn't bind its own this value to the poll object.
Using bind() can help solve the issue by explicitly binding this to the poll object.
 */

//ONLY EXECUTED ONCE AND NEVER EXECUTED AGAIN
//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS

(() => console.log("This will never run again")) ();
const boardPassengers = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
};
const headline = document.querySelector('h1')
const body = document.querySelector('body')
headline.addEventListener('click', ()=> {
    headline.style.color = 'red'
    body.style.background = 'blue'
})