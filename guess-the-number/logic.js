const randomNumber = Math.floor((Math.random() * 100)+1);

const guessInput = document.querySelector('.guessInput');
const guessSubmit = document.querySelector('.guessSubmit');
const guessPrev = document.querySelector('.guessPrev');
const guessRemain = document.querySelector('.guessRemain');
const hint = document.querySelector('.hint');

let guessCount = 1;
let resetGame = false;

function submitHandler(e){
    e.preventDefault();

    const userInput = Number(guessInput.value);

    if(resetGame){
        restForm();
        return;
    }

    if(!userInput || userInput < 0 || userInput >100){
        hint.textContent = 'please enter a value between 1-100 ';
        return;
    }
    if(userInput === randomNumber){
        hint.textContent = 'Congratulations ! You got it right . ';
        hint.style.color = 'green';
        gameOver();
    }else if(guessCount === 10){
        hint.textContent = `Game Over! the number was ${randomNumber} . `;
        hint.style.color = 'red';
        gameOver();
    }else{
        hint.textContent = userInput < randomNumber ? 'TOO Low !' : 'Too high';
        hint.style.color = 'white';
    }

    if(guessCount === 1){
        guessPrev.textContent = '';
    }

    guessPrev.textContent += userInput + ' ';

    guessRemain.textContent = 10 - guessCount;
    guessCount++;
    guessInput.value = '';
    guessInput.focus();

}
guessSubmit.addEventListener('click', submitHandler);

function gameOver(){
    resetGame = true;
    guessInput.disabled = true;
    guessSubmit.textContent = 'play again';
}

function restForm(){
    guessInput.disabled = false;
    guessInput.value = '';
    guessPrev.textContent = '';
    resetGame = false;
    guessCount = 1;
    guessRemain.textContent = '10';
    hint.textContent = '';
    guessSubmit.textContent = 'Submit';
    guessInput.focus();
    randomNumber = Math.floor((Math.random() * 100)+1);
}