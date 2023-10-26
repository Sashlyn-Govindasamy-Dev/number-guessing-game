//Introducing the necessary variables

let randomNumber = Math.floor(Math.random()*100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;
guessField.focus();


//Defining the necessary functions

//Function to check the user guess
function checkGuess(){
    const userGuess = Number(guessField.value);

    if(guessCount === 1){
        guesses.textContent = "Previous guesses: ";
    }

    guesses.textContent = `${guesses.textContent} ${userGuess}`;

    if(userGuess === randomNumber){
        lastResult.textContent = "Congratulations! you got it right!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        setGameOver();
    }else if (guessCount == 10){
        lastResult.textContent = "!!!GAME OVER!!!";
        lastResult.style.backgroundColor = "red";
        lowOrHi.textContent = "";
        setGameOver();
    }else{
        lastResult.textContent = "WRONG!";
        lastResult.style.backgroundColor = "orange";
        if(userGuess < randomNumber){
            lowOrHi.textContent = "Your guess was too low!";
        }else{
            lowOrHi.textContent = "Your guess was too high!";
        }
    }
    guessCount++;
    guessField.value = "";
    guessField.focus();
}

//Event Handling

guessSubmit.addEventListener("click",checkGuess);



//Function to handle the end of the game
function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.body.append(resetButton);
    resetButton.addEventListener("click", restartGame);
}

//Function to reset all the variables and restart the game
function restartGame(){
    guessCount = 1;

    const resultParas = document.querySelectorAll(".resultParameters");

    for(const para of resultParas){
        para.textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "white";

    randomNumber = Math.floor(Math.random() * 100) + 1;
}



