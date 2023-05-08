'use strict'
const arr = [7,8,9]
const bandNewArr = [1,2,arr[0],arr[1],arr[2]]
console.log(bandNewArr)

//USING SPREAD OPERATOR
const newArr = [1,2, ...arr]
console.log(newArr)

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

const newMenu = [...restaurant.mainMenu, 'Pizza', 'Gnocci']
//console.log(newMenu)

//uses of spread operators
//1.CREATE SHALLOW COPIES OF ARRAYS
//2.MERGE TWO ARRAYS TOGETHER

//COPY ARRAY
const mainMenuCopy = [...restaurant.mainMenu]
//MERGE TWO ARRAYS
const mergeMenu = [...restaurant.mainMenu,...restaurant.starterMenu]
console.log(mergeMenu)

//ITERABLES: ARRAYS, STRINGS, MAPS, SETS NOT OBJECTS
const str = 'Gakii'
const letters = [...str, '', 'b.']
console.log(letters)
