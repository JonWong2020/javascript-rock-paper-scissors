// User Choice
var ties = 0
var wins = 0
var loss = 0
var userInput = prompt("Please enter R, P, or S.").toUpperCase();
console.log(userInput + " is the users choice.")

// Computer Choice
var rbs = ["R", "P", "S"]
function randomNumber(max) {
    return Math.floor(Math.random() * rbs.length)
}
let computer = randomNumber(0,2);
console.log(rbs[computer] + " is the computer's choice")
var computerChoice = rbs[computer]

// Computer vs user input
if (computerChoice === userInput) {
    ties++
    alert("Tie");
} else if (
    (computerChoice === "R" && userInput === "P")||
    (computerChoice === "P" && userInput === "S")||
    (computerChoice === "S" && userInput === "R")
) {
    wins++
    alert("You Won")
} else {
    loss++
    alert("You Lost")
}

// Count
alert("Wins: " + wins);
alert("Losses: " + loss); 
alert("Ties: " +  ties);

// Loop
confirm("Play Again?")

