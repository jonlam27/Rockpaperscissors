let playerScore = 0;
let computerScore = 0;

/*trying to do some DOM manipulation*/

const footer = document.querySelector("footer")
const final = document.createElement("div")
const remark = document.createElement("p")
const replayBtn = document.createElement("button")

final.classList.add("final")
remark.classList.add("remark")
replayBtn.classList.add("replay-btn")

final.appendChild(remark);
final.appendChild(replayBtn);
footer.appendChild(final);

replayBtn.textContent = "Click here to play again"
replayBtn.addEventListener("click", replay);

replayBtn.style.display = "none"

function replay() {
    location.reload();
}

const result = document.querySelector(".result")
const playerMessage = document.querySelector(".player-message")
const computerMessage = document.querySelector(".computer-message")

function showReplay() {
    replayBtn.style.display = "block"
    result.style.display = "none"
    playerMessage.style.display = "none"
    computerMessage.style.display = "none"
}

function computerPlay() {
    const randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
        return "Rock"
    } else if (randomChoice === 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.textContent)
    }) 
})

function disableBtn() {
    buttons.forEach((button) => {
        if (button != replayBtn) {
            button.style.pointerEvents = "none"
        }
    })
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    
    if ((playerSelection === "Rock" && computerSelection === "Scissors") || 
        (playerSelection === "Paper" && computerSelection === "Rock") || 
        (playerSelection === "Scissors" && computerSelection === "Paper")) {
    
    playerScore += 1;
    result.textContent = `${playerSelection} beats ${computerSelection}, nice one!`
    playerMessage.textContent = `Player Score: ${playerScore}` 
    computerMessage.textContent = `Computer Score: ${computerScore}`

    if (playerScore === 5) {
        remark.textContent = 'Congrats, you won the game!'
        showReplay();
        disableBtn();
    }

} else if (playerSelection === computerSelection) {
    result.textContent = `You both picked ${computerSelection} so it's a tie!`
    playerMessage.textContent = `Player Score: ${playerScore}` 
    computerMessage.textContent = `Computer Score: ${computerScore}`

} else {
    computerScore += 1;
    result.textContent = `${computerSelection} beats ${playerSelection}, try again!`
    playerMessage.textContent = `Player Score: ${playerScore}` 
    computerMessage.textContent = `Computer Score: ${computerScore}`

    if (computerScore === 5) {
        remark.textContent = 'You lost. Better luck next time!'
        showReplay();
        disableBtn();
        }
    }
};