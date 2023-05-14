const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);
//Create an array 'events' of the different game events that happened (no duplicates)
const events =[...new Set(gameEvents)]
console.log(events)
// After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game evente
gameEvents.forEach((value,key) => {
    if (value === '🔶 Yellow card' && key === 64) {
        gameEvents.delete(key)
    }
})
console.log(gameEvents)
// Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log(`An event happened,on average every ${90/gameEvents.size} minutes`)
// . Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game,
// like this:[FIRST HALF] 17: ⚽️ GOAL
gameEvents.forEach((value,key) => {
    if (key <= 45) {
        console.log(`[FIRST HALF]: ${value}`)
    } else {
        console.log(`[SECOND HALF]: ${value}`)
    }
})