const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};
//Create one player array for each team (variables 'players1' and 'players2')
//players1 = game.players[0]
//players2 = game.players[1]
const [players1,players2] = game.players
console.log(players1)
console.log(players2)
//. The first player in any player array is the goalkeeper and the others are field players.
// For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers')
// with all the remaining 10 field players
const [gk1, ...fieldPlayers1] = players1
const [gk2, ...fieldPlayers2] = players2
//Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1,...players2]
console.log(allPlayers)
//During the game, Bayern Munich (team 1) used 3 substitute players.
// So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
let substitutePlayers = ['Thiago','Coutinho','Periscic']
const players1Final = [...players1,...substitutePlayers]
console.log(players1Final)
// Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const team1 = game.odds.team1
console.log(team1)
const draw = game.odds.x
console.log(draw)
const team2 = game.odds.team2
console.log(team2)
// Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array)
// and prints each of them to the console,
// along with the number of goals that were scored in total (number of player names passed in)
function printGoals(...players){
    console.log(`${players.length} goals were scored`)
    console.log(players)
}
printGoals(...game.scored)
//The team with the lower odd is more likely to win.
// Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
const [favTeam, underDog] = team1 < team2 ? [team1,team2]: [team2,team1]
console.log(`${favTeam} is more likely to win than ${underDog}`)
//CODING CHALLENGE
//Let's continue with our football betting app!

//1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
for (const [i,player] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${player}`)
}
//2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages,
// you can go check if you don't remember)
const odds = Object.values(game.odds)
let average = 0;
for (const odd of Object.values(game.odds)){
    average /= odds.length;
    console.log(average)
}
//3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
/*Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
{
    Gnarby: 1,
        Hummels: 1,
    Lewandowski: 2
}

GOOD LUCK 😀*/
for (const [team, odd] of Object.entries(game.odds)){
    const teamStr = team === 'x' ?'draw' : `'victory' ${game[team]}`
    console.log(`Odd of ${teamStr} ${odd}`)
}


