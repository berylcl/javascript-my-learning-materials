'use strict'
const restaurant = {
    name: 'Iya amala',
    location: 'owode ijagbo offa',
    categories: ['traditional food','yoruba','nigerian'],
    starterMenu: ['ice cream','salad','maltina'],
    mainMenu: ['amala','ewedu','gbegiri','pounded yam','egusi']
}
const arr = [2,3,4]
const [a,b,c] = arr;
console.log(a,b,c)
const [first,second] = restaurant.categories
console.log(first,second)