'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Hello';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = '69';
// console.log((document.querySelector('.number').textContent = '69'));

// // console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 30;
// console.log(document.querySelector('.guess').value);

// document.querySelector('.number');
// const result = right.querySelector('.message').textContent;
// console.log(result);

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = Number(document.querySelector('.score').textContent);
let highscore = 0;
// document.querySelector('.number').textContent = secretNumber;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
const currentScore = score => {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);
  if (!guess) {
    displayMessage('⛔No Input!!');
  } else if (guess > 20) displayMessage('⛔Number not in range');
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too High..' : '📉Too Low..');
      score--;
      currentScore(score);
    } else {
      displayMessage('💥You lost !!');
      currentScore(0);
    }
  }
  //  else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low..';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost :(';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High..';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost :(';
  //     document.querySelector('.score').value = 0;
  //   }
  // }
  else if (guess === secretNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
    displayMessage('🏆You Win!!');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  // document.querySelector('.number').textContent = secretNumber;
  currentScore(20);
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
