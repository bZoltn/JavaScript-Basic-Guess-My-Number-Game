'use strict';

let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 100;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //No input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';

    //Player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#238652';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //Too high
  } else if (guess > secretNumber) {
    if (score > 10) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score = score - 10;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    //Too low
  } else if (guess < secretNumber) {
    if (score > 10) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score = score - 10;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//High score
document.querySelector('.again').addEventListener('click', function () {
  score = 100;
  secretNumber = Math.trunc(Math.random() * 10) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
