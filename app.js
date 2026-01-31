
let humanScore = 0
let computerScore = 0

function getComputerChoice(){
  
  let game = ["rock", "paper", "scissors"]
  let random =  Math.floor(Math.random() * game.length)
  return game[random]

}

function getHumanChoice(){
  let input = prompt("Enter rock,paper or scissors").toLowerCase()
  return input
}

function playRound(humanChoice, computerChoice){
  
  if(humanChoice === computerChoice){
    console.log('its tie')
  }else if(
    humanChoice === "rock" && computerChoice === "scissors" ||
    humanChoice === "paper" && computerChoice === "rock" ||
    humanChoice === "scissors" && computerChoice === "paper"
  ){
    console.log("you win")
    humanScore++
    console.log(humanScore)
  } else {
    console.log("you lose")
    computerScore++
    console.log(computerScore)
  }

}

function playGame(){
  while(humanScore < 3 && computerScore < 3){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)
  }

  if(humanScore === 3){
    console.log('You win')
  } else {
    console.log('Computer win')
  }

}

playGame()
