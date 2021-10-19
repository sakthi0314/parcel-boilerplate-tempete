import Shooter from "./Shooter"
import "./styles/main.scss"

// DOM elements
const startEL = document.getElementById("start")
const resetGameEl = document.getElementById("reset")
const characterOneELement = document.getElementById("playerOne")
const characterTwoELement = document.getElementById("playerTwo")

// initaiizing game shooting instance
const shooter = new Shooter(0, 0, 0, 0, 0, 0)

// player one object
const playerOneObject = {
  id: 1,
  fireElement: document.getElementById("playerOneBullet"),
  fireAnimation: "forplayerOne",
}

// player two object
const playerTwoObject = {
  id: 2,
  fireElement: document.getElementById("playerTwoBullet"),
  fireAnimation: "forplayerTwo",
}

// start game
startEL.addEventListener("click", () => {
  shooter.startGame()
})

// reset game
resetGameEl.addEventListener("click", () => {
  shooter.resetGame()
})

// gameplay
characterOneELement.addEventListener("click", () => {
  shooter.gamePlay(playerOneObject)
})

characterTwoELement.addEventListener("click", () => {
  shooter.gamePlay(playerTwoObject)
})
