'use strict'
const score0El = document.querySelector('#score--0')
const score1El = document.getElementById('score--1')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
import generateJoke from "./generate-joke";
score0El.textContent = 0;
score1El.textContent = 0
diceEl.classList.add('hidden')

let currentScore = 0;
//hold the active player
let activePlayer = 0;
const scores = [0,0]

//ROLLING DICE FUNCTIONALITY
btnRoll.addEventListener('click',function () {
    //1GENERATE A RANDOM DICE ROLL
    const dice = Math.trunc(Math.random() * 6)
    //2 DISPLAY DICE
    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${dice}.png`
    //3 CHECK ROLLED
    if (dice !== 1) {
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
    } else {
        //SWITCH TO NEXT PLAYER
        activePlayer = activePlayer === 0 ? 1 :0;
        currentScore = 0
    }
})

console.log(generateJoke())