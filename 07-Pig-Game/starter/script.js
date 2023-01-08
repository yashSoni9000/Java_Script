'use strict';
// console.log('Hello world');
// const newRollDice = () => Math.trunc(Math.random() * 6 + 1);

// // let rollDice = newRollDice();
// let score = Number(document.querySelector('#score--0').textContent);
// score = 0;

// let rollDice = 0;

// // console.log(score);
// const showScore = () => {
//   score += rollDice;
//   document.querySelector('#score--0').textContent = score;
// };

// // document.querySelector('.btn--roll').addEventListener('click', function () {
// //   rollDice = newRollDice();
// //   console.log(rollDice);
// // });

// document.querySelector('.btn--roll').addEventListener('click', function () {
//   rollDice = newRollDice();
//   showDiceImage();
// });
// const showDiceImage = () => {
//   console.log(rollDice);
//   if (rollDice === 1) {
//     score = 0;
//     document.querySelector('#score--0').textContent = score;
//     document.querySelector('body').style.backgroundColor = 'blue';
//   }
//   //    else {
//   //     switch (rollDice) {
//   //       case 2:
//   //         document.querySelector('.dice').innerHTML = <img src="dice-2.png" />;
//   //         showScore();
//   //         break;
//   //       case 3:
//   //         document.querySelector('.dice').innerHTML = <img src="dice-3.png" />;
//   //         showScore();
//   //         break;
//   //       case 4:
//   //         document.querySelector('.dice').innerHTML = <img src="dice-4.png" />;
//   //         showScore();
//   //         break;
//   //       case 5:
//   //         document.querySelector('.dice').innerHTML = <img src="dice-5.png" />;
//   //         showScore();
//   //         break;
//   //       case 6:
//   //         document.querySelector('.dice').innerHTML = <img src="dice-6.png" />;
//   //         showScore();
//   //         break;
//   //     }
//   //   }
// };

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    document.getElementById(`score--${activePlayer}`).textContent = 0;
    activePlayer = Number(!activePlayer);
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    // document.getElementById(
    //   `current--${Number(!activePlayer)}`
    // ).textContent = 0;
  }
});

const activeScore = document.getElementById(
  `score--${activePlayer}`
).textContent;

btnHold.addEventListener('click', function () {
  document.getElementById(`score--${activePlayer}`).textContent =
    Number(document.getElementById(`score--${activePlayer}`).textContent) +
    currentScore;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = Number(!activePlayer);
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  // if(Number(activeScore)>=100)
});
