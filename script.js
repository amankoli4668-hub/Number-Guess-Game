// Selecting all the necessary buttons and IDes.
const gameIcon = document.querySelector(".game-icon");
const guessInput = document.querySelector("#guessInput");
const submitBtn = document.querySelector("#submitBtn");
const replayBtn = document.querySelector("#replay");
const message = document.querySelector("#message");
const attempts = document.querySelector("#attempts");

// To get a random number.
const secretNumber = Math.floor(Math.random()*100)+1;
let attempt = 0;

// Function that make game work.
function game(){
    if(guessInput.value != "" && guessInput.value < 101){
        if(guessInput.value == secretNumber){
        message.textContent = "Congratulation! You Got It.";
        gameIcon.textContent = secretNumber;

        replayBtn.style.display = "inline-block";
        guessInput.style.display = "none";
        submitBtn.style.display = "none";
        } 
        else if(guessInput.value < secretNumber){
            message.textContent = `Greater than ${guessInput.value}`;
        } 
        else if(guessInput.value > secretNumber){
            message.textContent = `Smaller than ${guessInput.value}`;
        }

        guessInput.value = "";
        attemptIncrease();
    }
}

// To Increase attempt Number function.
function attemptIncrease(){
    attempt++;
    attempts.textContent = attempt;
}

// To make Submit Button and Enter work.
submitBtn.addEventListener('click', game);
guessInput.addEventListener('keydown', e => {
    if(e.key === "Enter"){
        game();
    }
});

// To make Replay button work, it just reload the website.
replayBtn.addEventListener('click', ()=>location.reload());