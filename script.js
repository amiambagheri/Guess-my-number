'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayTextContent = function (selector, textContent) {
  document.querySelector(selector).textContent = textContent;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess) {
    displayTextContent('.message', '⛔ No Number!');
    // When player wins
  } else if (guess === secretNumber) {
    displayTextContent('.message', '🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displayTextContent('.number', secretNumber);
    if (score > highScore) {
      highScore = score;
      displayTextContent('.highscore', highScore);
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayTextContent(
        '.message',
        guess > secretNumber ? '📈 Too High!' : '📉 Too Low!'
      );
      score--;
      displayTextContent('.score', score);
    } else {
      displayTextContent('message', '💥 You lost the game!');
      displayTextContent('.score', 0);
    }
  }
});

// Reset game with aain button

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayTextContent('.score', score);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  Number((document.querySelector('.guess').value = ''));
  displayTextContent('.message', 'Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayTextContent('.number', '?');
});
