// Set the scores for player and computer to 0

function showScore () {
	alert(`Current score - User: ${playerScore}.  Computer: ${computerScore}`)
}

let playerScore = 0
let computerScore = 0
let choices = ["rock", "paper", "scissors"]

// Take an input from the user
// Ensure the input is either rock, paper or scissors, case insensitive


while (playerScore < 3 && computerScore < 3) {

	choiceMade = false
	let playerChoice = null

	while (choiceMade === false) {
		playerChoice = prompt("What is your selection? (Rock, paper, scissors)")
		if (choices.includes(playerChoice.toLowerCase())) {
			choiceMade = true
		} else {
			alert("Invalid input.  Please type rock, paper, or scissors.")
		}
	}

	playerChoice = playerChoice.toLowerCase()
	alert(`You chose ${playerChoice}.`)

	// Make the computer pick a choice between rock, paper and scissors at random.

	let computerChoice = choices[Math.floor(Math.random() * choices.length)]

	// Compare the choices, and decide if the user or computer wins, and add one to the score of the winner

	if (playerChoice === computerChoice) {
		alert(`You threw ${playerChoice} and the computer threw ${computerChoice}.  Tie!`)
		showScore()

	} else if (playerChoice === 'rock' && computerChoice === 'scissors') {

		alert(`You threw ${playerChoice} and the computer threw ${computerChoice}.  You win!`)
		playerScore += 1
		showScore()

	} else if (playerChoice === 'rock' && computerChoice === 'paper') {
		
		alert(`You threw ${playerChoice} and the computer threw ${computerChoice}.  You lost!`)
		computerScore += 1
		showScore()

	} else if (playerChoice === 'paper' && computerChoice === 'rock') {

		alert(`You threw ${playerChoice} and the computer threw ${computerChoice}.  You win!`)
		playerScore += 1
		showScore()

	} else if (playerChoice === 'paper' && computerChoice === 'scissors') {

		alert(`You threw ${playerChoice} and the computer threw ${computerChoice}.  You lost!`)
		computerScore += 1
		showScore()

	} else if (playerChoice === 'scissors' && computerChoice === 'paper') {

		alert(`You threw ${playerChoice} and the computer threw ${computerChoice}.  You win!`)
		playerScore += 1
		showScore()

	} else if (playerChoice === 'scissors' && computerChoice === 'rock') {

		alert(`You threw ${playerChoice} and the computer threw ${computerChoice}.  You lost!`)
		computerScore += 1
		showScore()

	}

}

alert(`Final score is User: ${playerScore} - Computer: ${computerScore}`)

if (playerScore > computerScore) {
	alert(`You won!  Congratulations!`)
} else {
	alert(`You lost!  Better luck next time.`)
}