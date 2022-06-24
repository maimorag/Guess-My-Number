'use strict';
/*console.log(document.querySelector('.message').textContent);


document.querySelector('.number').textContent = 13;


console.log(document.querySelector('.guess').value);
*/
// let's define the secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
const checkFunc = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    // there was no input
    document.querySelector('.message').textContent =
      'No secretNumber was entered 💀 ';
  } else if (guess === secretNumber) {
    // player wins
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.message').textContent = 'Correct answer! 🎉🥇🎉';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  if (score > 0) {
    if (guess > secretNumber) {
      // guess too high
      document.querySelector('.message').textContent = 'too high📈';
      score--;
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = 'too low📉';
      score--;
    }
    document.querySelector('.score').textContent = score;
  }
  if (score <= 0) {
    document.querySelector('.message').textContent = 'You lost ☠☠';
  }
};

document.querySelector('.check').addEventListener('click', checkFunc);

///

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});

document.addEventListener('keydown', function (event) {
  if (event.key == 'Enter' && document.querySelector('.guess').value != '') {
    checkFunc();
  }
});
