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
    }
}
restaurant.orderDelivery({
    time: '22.30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2
})
const {name, openingHours, categories} = restaurant
console.log(name,openingHours,categories)
const obj = {a:23, b:14, c: 14}
//NESTED OBJECTS
const {fri: {open, close}} = openingHours;
console.log(open,close)
