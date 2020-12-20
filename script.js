function showScore () {
	alert(`Current score - User: ${playerScore}.  Computer: ${computerScore}`)
}

function compareResults (user, computer) {
	
	if (user === computer) {
		alert(`You threw ${user} and the computer threw ${computer}.  Tie!`)
		showScore()

	} else if (user === 'rock' && computer === 'scissors') {

		alert(`You threw ${user} and the computer threw ${computer}.  You win!`)
		playerScore += 1
		showScore()

	} else if (user === 'rock' && computer === 'paper') {
		
		alert(`You threw ${user} and the computer threw ${computer}.  You lost!`)
		computerScore += 1
		showScore()

	} else if (user === 'paper' && computer === 'rock') {

		alert(`You threw ${user} and the computer threw ${computer}.  You win!`)
		playerScore += 1
		showScore()

	} else if (user === 'paper' && computer === 'scissors') {

		alert(`You threw ${user} and the computer threw ${computer}.  You lost!`)
		computerScore += 1
		showScore()

	} else if (user === 'scissors' && computer === 'paper') {

		alert(`You threw ${user} and the computer threw ${computer}.  You win!`)
		playerScore += 1
		showScore()

	} else if (user === 'scissors' && computer === 'rock') {

		alert(`You threw ${user} and the computer threw ${computer}.  You lost!`)
		computerScore += 1
		showScore()

	}

}

// Set the scores for player and computer to 0

let playerScore = 0
let computerScore = 0

// Create an array of the acceptable choices.

const choices = ["rock", "paper", "scissors"]

// Take an input from the user
// Ensure the input is either rock, paper, or scissors, case insensitive

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

	// Convert the choice to lowercase to compare and tell the user what they picked.

	playerChoice = playerChoice.toLowerCase()

	// Make the computer pick a choice between rock, paper and scissors at random.

	let computerChoice = choices[Math.floor(Math.random() * choices.length)]
	
	// Compare the choices, and decide if the user or computer wins, and add one to the score of the winner

	compareResults(playerChoice, computerChoice)

}


alert(`Final score is User: ${playerScore} - Computer: ${computerScore}`)

if (playerScore > computerScore) {
	alert(`You won!  Congratulations!`)
} else {
	alert(`You lost!  Better luck next time.`)
}