console.log(3||'beryl')
console.log(null ||undefined)
console.log(undefined || 'hello' ||0 ||'' ||null)
const restaurant = {
    name: 'Iya amala',
    location: 'owode ijagbo offa',
    categories: ['traditional food', 'yoruba', 'nigerian'],
    starterMenu: ['ice cream', 'salad', 'maltina'],
    mainMenu: ['amala', 'ewedu', 'gbegiri', 'pounded yam', 'egusi'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        }
    },
    order: function (starterIndex, mainIndex,time,address) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    orderDelivery: function (obj) {
        console.log(`order received ${this.starterMenu[starterIndex]} and ${ this.mainMenu[mainIndex]}`)
    },
    orderPasta: function(ing1,ing2,ing3) {
        console.log`Here is your order ${ing1}, ${ing2} and ${ing3}`
    }
}
const guests1 = restaurant.numGuests ? restaurant.numGuests:10
console.log(guests1)
//In JavaScript, short-circuiting is a logical operation where an expression is
// evaluated only until the necessary result is achieved, without evaluating the entire expression.
//two logical operators that support short-circuiting: the && operator and the || operator.
console.log(0 || "Beryl")
console.log(0 && 'beryl')
//&& IS TRUE WHEN ALL ELEMENTS ARE TRUE
console.log('Hello' && 23 && null && 'beryl')
if (restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms','spinach')
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms','spinach')
//or can be used to set default values
const guessCorrect = restaurant.numGuests ?? 10
console.log(guessCorrect)
