'use strict'
const beryl = {
    name: "Beryl",
    year: 1998,
    calcAge: function () {
        return 2037-this.year
    },
}
console.log(beryl.calcAge())

//DESTRUCTURING NESTED ARRAYS
const nested = [2,4,[5,6]]
const [i, j,k] = nested
const [a,b] = k
console.log(a,b)
console.log(i,j,k)
