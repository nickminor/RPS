function play(playerChoice) {
    let choices = ["rock", "paper", "scissors"]
    let index = Math.floor(Math.random() * choices.length)
    let computerChoice = choices[index]

    console.log("player choice", playerChoice, "computer choice:", computerChoice)
    if (playerChoice == "rock") {
        if (computerChoice == "scissors") {
            alert("Winner!")
            console.log("Winner!")
        }
        else if (computerChoice == "rock") {
            alert("It's a tie.")
            console.log("It's a tie.")
        }
        else {
            alert("Loser!")
            console.log("Loser!")
        }
    }
    else if (playerChoice == "paper") {
        if (computerChoice == "scissors") {
            alert("Loser!")
            console.log("Loser!")
        }
        else if (computerChoice == "rock") {
            alert("Winner!")
            console.log("Winner!")
        }
        else {
            alert("It's a tie.")
            console.log("It's a tie.")
        }
    }
    else if (playerChoice == "scissors") {
        if (computerChoice == "scissors") {
            alert("It's a tie.")
            console.log("It's a tie.")
        }
        else if (computerChoice == "rock") {
            alert("Loser!")
            console.log("Loser!")
        }
        else {
            alert("Winner!")
            console.log("Winner!")
        }
    }
}