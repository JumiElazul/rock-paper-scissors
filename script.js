function randomChoice () {
	computerChoice = choices[Math.floor(Math.random() * choices.length)]
}

function updateScore () {
	const pScoreDisplay = document.querySelector("#player-score-num")
	const cScoreDisplay = document.querySelector("#computer-score-num")
	pScoreDisplay.textContent = playerScore
	cScoreDisplay.textContent = computerScore
}

function gameOver () {
	const rockbutton = document.querySelector("#rock-select")
	const paperbutton = document.querySelector("#paper-select")
	const scissorsbutton = document.querySelector("#scissors-select")

	// rockbutton.classList.add("button-invis")
	// paperbutton.classList.add("button-invis")
	// scissorsbutton.classList.add("button-invis")

	rockbutton.remove()
	paperbutton.remove()
	scissorsbutton.remove()


	const playAgain = document.createElement('button')
	playAgain.textContent = `Play Again!`
	document.querySelector("#paper-select-div").appendChild(playAgain)

	playAgain.addEventListener('click', function () {
		document.querySelector('#rock-select-div').appendChild(rockbutton)
		document.querySelector('#paper-select-div').removeChild(playAgain)
		document.querySelector('#paper-select-div').appendChild(paperbutton)
		document.querySelector('#scissors-select-div').appendChild(scissorsbutton)
		playerScore = 0
		computerScore = 0
		updateScore()
		document.querySelector('#play-text').textContent = `Select Your Choice`

		})
	}

function checkWin () {
	if (playerScore >= 5 || computerScore >= 5) {
		const playText = document.querySelector("#play-text")
		if (playerScore > computerScore) {
			playText.textContent = `Player Wins!  Final Score is ${playerScore} to ${computerScore}`
			gameOver()

		} else {
			playText.textContent = `Computer Wins!  Final Score is ${playerScore} to ${computerScore}`
			gameOver()
		}
	}

}

function playGame (player, computer) {
	const playText = document.querySelector("#play-text")

	if (player === computer) {
		playText.textContent = `You both picked ${player}.  Tie!`

	} else if (playerChoice === 'rock') {
		if (computerChoice === 'scissors') {
			playerScore ++
			updateScore()
			playText.textContent = `Rock vs Scissors.  You win a point!`
		} else {
			computerScore ++
			updateScore()
			playText.textContent = `Rock vs Paper.  Computer wins a point.`
		}

	} else if (playerChoice === 'paper') {
		if (computerChoice === 'rock') {
			playerScore ++
			updateScore()
			playText.textContent = `Paper vs Rock.  You win a point!`
		} else {
			computerScore ++
			updateScore()
			playText.textContent = `Paper vs Scissors.  Computer wins a point.`
		}
	} else if (playerChoice === 'scissors') {
		if (computerChoice === 'paper') {
			playerScore ++
			updateScore()
			playText.textContent = `Scissors vs Paper.  You win a point!`
		} else {
			computerScore ++
			updateScore()
			playText.textContent = `Scissors vs Rock.  Computer wins a point.`
		}
	}

	checkWin()
}




// Set the scores for player and computer to 0

let playerScore = 0
let playerChoice = null

let computerScore = 0
let computerChoice = null

// Create an array of the acceptable choices.

const choices = ["rock", "paper", "scissors"]

const rock = document.querySelector("#rock-select")
rock.addEventListener('click', () => {
	playerChoice = "rock"
	randomChoice()
	playGame(playerChoice, computerChoice)
})

const paper = document.querySelector("#paper-select")
paper.addEventListener('click', () => {
	playerChoice = "paper"
	randomChoice()
	playGame(playerChoice, computerChoice)
})

const scissors = document.querySelector("#scissors-select")
scissors.addEventListener('click', () => {
	playerChoice = "scissors"
	randomChoice()
	playGame(playerChoice, computerChoice)
})












// Take an input from the user
// Ensure the input is either rock, paper, or scissors, case insensitive

// while (playerScore < 3 && computerScore < 3) {

// 	choiceMade = false
// 	let playerChoice = null

// 	while (choiceMade === false) {
// 		playerChoice = prompt("What is your selection? (Rock, paper, scissors)")
// 		if (choices.includes(playerChoice.toLowerCase())) {
// 			choiceMade = true
// 		} else {
// 			alert("Invalid input.  Please type rock, paper, or scissors.")
// 		}
// 	}

// 	// Convert the choice to lowercase to compare and tell the user what they picked.

// 	playerChoice = playerChoice.toLowerCase()

// 	// Make the computer pick a choice between rock, paper and scissors at random.

// 	let computerChoice = choices[Math.floor(Math.random() * choices.length)]
	
// 	// Compare the choices, and decide if the user or computer wins, and add one to the score of the winner

// 	compareResults(playerChoice, computerChoice)

// }


// alert(`Final score is User: ${playerScore} - Computer: ${computerScore}`)

// if (playerScore > computerScore) {
// 	alert(`You won!  Congratulations!`)
// } else {
// 	alert(`You lost!  Better luck next time.`)
// }