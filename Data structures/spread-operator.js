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
// NEW OBJ
const newRestaurant = {...restaurant, foundedIn: 2032, founder: 'Gakii'}
console.log(newRestaurant)
const restaurantCopy = {...restaurant}
restaurantCopy.name = 'Ristoranta roma'
console.log(restaurant.name)

//REST PATTERN AND PARAMETERS  REST PACKS ELEMENT INTO AN ARRAY
const arr1 = [1,2, ...[3,4]]
const[a,b,...others] = [1,2,3,4,5]
console.log(a,b,others)
//examples
//SPREAD AN ARRAY OVER ANOTHER ARRAY
const array1 = [1,2,3]
const array2 = [4,5,6]
const spreadArr = [...array1,...array2]
console.log(spreadArr)

//MERGE TWO OBJECTS TO ONE
const obj1 = { name: "Beryl", age: 2037 - 1999, interests: "movies" };;
const obj2 = {name: 'ivy', age: 2037-1996, interests: 'having fun'}
const mergedObjects = {...obj1,...obj2}
console.log(mergedObjects)
const object1 = { a: 1, b: 2 };
const object2 = { c: 3, d: 4 };
const mergedObject = { ...object1, ...object2 };
console.log(mergedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }
//Pass an array as individual arguments to a function
const add = [1,3,5,9,4]
const sum = (a,b,c,d,e) => a+b+c+d+e
const addition =sum(...add)
console.log(addition)