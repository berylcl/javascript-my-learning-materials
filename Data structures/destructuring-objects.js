const restaurant = {
    name: 'Iya amala',
    location: 'owode ijagbo offa',
    categories: ['traditional food','yoruba','nigerian'],
    starterMenu: ['ice cream','salad','maltina'],
    mainMenu: ['amala','ewedu','gbegiri','pounded yam','egusi'],
    openingHours : {
        thu: {
            open: 12,
            close: 22,
        },
        fr: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        }
    }
}
const {name, openingHours, categories} = restaurant
console.log(name,openingHours,categories)