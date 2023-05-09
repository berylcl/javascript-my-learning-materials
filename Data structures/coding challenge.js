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
players1 = game.players[0]
players2 = game.players[1]
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
let substitutePlayers = ['Thiago','Coutinho','Perisic']
const players1Final = [...players2,...substitutePlayers]
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
function printGoals(...playerNames){
    const numGoals = playerNames.length
    console.log(`Total goals is :${numGoals}`)
    playerNames.forEach(name => console.log(name))
}
const goals = printGoals(players1Final)
console.log(goals)
//The team with the lower odd is more likely to win.
// Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
const [favTeam, underDog] = team1 < team2 ? [team1,team2]: [team2,team1]
console.log(`${favTeam} is more likely to win than ${underDog}`)
hrghrfhrt