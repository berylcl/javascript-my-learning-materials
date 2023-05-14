//SETS CAN NEVER HAVE DUPLICATES
const orderSet = new Set ([
    'pasta',
    'pizza',
    'pizza',
    'risotto',
    'pasta',
    'pizza'
])
console.log(orderSet)
orderSet.add('Garlic Bread')
orderSet.delete('pizza')
console.log(orderSet)
//orderset.clear() clear everything in the set
//remove duplicate values fromarrays
const staff = ['Waiter','Chef','Waiter', 'Manager', 'Chef']
console.log(new Set(staff).size)

//MAPS ARE MORE USEFUL THAN SETS
const question = new Map([
    ['question', 'What is the best programming language'],
    [1,'C'],
    [2,'Java'],
    [3,'Javascript'],
    ['correct', 1],
    [true, 'correct'],
    [false, 'try again']
])
console.log(question)
//convert object to map
for (const [key,value] of question) {
    if (typeof key === 'number') {
        console.log(`Answer ${key}: ${value}`)
    }
}

//SETS For unique valuees  high perfomance reduce duplicate values
tasks = new Set(['Code', 'Eat','Code'])

//Maps better perfomace
task = new Map ([
    ['task', 'code'],
    ['date', 'todo'],
    [false, 'Start coding']
])
const str = 'hello';
const paddedStr = str.padStart(10, '-');
console.log(paddedStr); // "hello-----"
const str2 = 'hello';
const paddedStr2 = str.padEnd(10, '-');
console.log(paddedStr2); // "hello-----"
