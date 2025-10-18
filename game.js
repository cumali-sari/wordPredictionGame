const userInput = document.getElementById("userInput");
const scoreElement = document.getElementById("score");
const lettersElement = document.querySelectorAll(".card-container img");
const cardsElement = document.querySelectorAll(".card-container div")
const heartsElement = document.querySelectorAll("p img")
const submitBtn = document.getElementById("submit-btn");
const resetBtn = document.getElementById("reset-btn");

let guess = userInput.value.toUpperCase();
let score = 0;
let lives = 3;
let guessC = 0;
let guessL = 0;
let guessO = 0;
let guessU = 0;
let guessD = 0;

function livesChecker() {
    if (lives === 3 ) {
        
    } else if (lives === 2 ) {
        heartsElement[2].style.visibility = "hidden";
    } else if (lives === 1  ) {
        heartsElement[1].style.visibility = "hidden";
    } else {
        heartsElement[0].style.visibility = "hidden";
        setTimeout(endGame, 100);
    }

}

function endGame() {
    submitBtn.disabled = true;
    if (score === 100) {
        alert("Congratulations! You won the game!");
    }
    else {
        alert("You lost the game.");
    }
}


function resetGame() {
    lives = 3;
    score = 0;
    guessC = 0;
    guessL = 0;
    guessO = 0;
    guessU = 0;
    guessD = 0;

    for(let i = 0; i < 5; i++) {
        cardsElement[i].style.display = "inline-block";
        lettersElement[i].style.display = "none";
    }

    for(let i = 0; i < 3; i++) {
        heartsElement[i].style.visibility = "visible";
    }

    userInput.value = ""
    scoreElement.textContent = score;
    submitBtn.disabled = false;
    resetBtn.style.visibility = "hidden";
}


submitBtn.addEventListener("click", () => {


    let guess = userInput.value.toUpperCase();
    userInput.value = ""

    resetBtn.style.visibility = "visible";

    if (guess === "C"){
        guessC += 1;
        if( guessC === 1) {
            cardsElement[0].style.display = "none";
            lettersElement[0].style.display = "inline-block";
            score += 20;
        }else {
            lives -= 1;
        }
    }else if (guess  === "L"){
        guessL += 1;
        if( guessL === 1) {
            cardsElement[1].style.display = "none";
            lettersElement[1].style.display = "inline-block";
            score += 20;
        }else {
            lives -= 1;
        }
    }else if (guess  === "O"){
        guessO += 1;
        if( guessO === 1) {
            cardsElement[2].style.display = "none";
            lettersElement[2].style.display = "inline-block";
            score += 20;
        }else {
            lives -= 1;
        }
    }else if (guess  === "U"){
        guessU += 1;
        if( guessU === 1) {
            cardsElement[3].style.display = "none";
            lettersElement[3].style.display = "inline-block";
            score += 20;
        }else {
            lives -= 1;
        }
    }else if (guess  === "D"){
        guessD += 1;
        if( guessD === 1) {
            cardsElement[4].style.display = "none";
            lettersElement[4].style.display = "inline-block";
            score += 20;
        }else {
            lives -= 1;
        }
    }else if (guess  === "CLOUD"){
        for(let i = 0; i < 5; i++) {
            cardsElement[i].style.display = "none";
            lettersElement[i].style.display = "inline-block";
            score = 100;
        }
    }else if (guess.length > 1){
        for(let i = 0; i < 3; i++) {
            heartsElement[i].style.visibility = "hidden";
        }
        setTimeout(endGame, 100);
    }else {
        lives -= 1;
    }

    scoreElement.textContent = score;
    livesChecker();  

    if (score === 100) {
        setTimeout(endGame, 100);  
    }
});


resetBtn.addEventListener("click", resetGame);