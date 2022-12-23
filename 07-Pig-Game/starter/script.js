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

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
