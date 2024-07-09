'use strict';

// console.log(document.querySelector('.message').textContent);

// What is DOM manipulation

/*DOM - Document Object Model: Structured representation of HTML documents. allows Javascript to access html and styles to manipulate them.


Special object that is the entry point to the DOM. Ex. document.querySelectorA().

DOM is not part of JS. DOM is part of WEB APIs: APIs stand for Application Programming Interface. WEB APIs can interact with JS.
*/

// document.querySelector('.message').textContent = '🎉 Correct Number!'; // This is Dom manipulation

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);

// document.querySelector('.guess').value = '20';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;

// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess, typeof guess);

    if (!guess) {

        document.querySelector('.message').textContent = '🚫 No number!';

        //When you the player Win
    } else if (guess === secretNumber) {

        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }


    } else if (guess > secretNumber) {

        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high!!!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost';
            document.querySelector('body').style.backgroundColor = 'red';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = secretNumber;
        }

    } else if (guess < secretNumber) {

        if (score > 1) {
            document.querySelector('.message').textContent = ' Too low!!!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost';
            document.querySelector('body').style.backgroundColor = 'red';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = secretNumber;
        }

    }
});

document.querySelector('.again').addEventListener('click', function () {


    score = 20;

    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';

    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.guess').value = '';
});