class Shooter {
  constructor(
    playerOneScore,
    playertwoScore,
    round,
    turn,
    playerOneWinningRounds,
    playerTwoWinningRounds
  ) {
    this.playerOneScore = playerOneScore
    this.playertwoScore = playertwoScore
    this.round = round
    this.turn = turn
    this.playerOneWinningRounds = playerOneWinningRounds
    this.playerTwoWinningRounds = playerTwoWinningRounds
  }

  startGame = () => {
    // dom element
    const playerOneScoreEL = document.getElementById("playerOneScore")
    const playerTwoScoreEL = document.getElementById("playerTwoScore")
    const characterOneELement = document.getElementById("playerOne")
    const characterTwoELement = document.getElementById("playerTwo")
    const roundElement = document.getElementById("round")
    const scoreBoard = document.getElementById("scoreBoard")

    // set initial state
    this.playerOneScore = 100
    this.playertwoScore = 100
    this.round = 1
    playerOneScoreEL.innerText = this.playerOneScore
    playerTwoScoreEL.innerText = this.playertwoScore

    // display character's
    characterOneELement.style.opacity = 1
    characterTwoELement.style.opacity = 1
    roundElement.style.opacity = 1
    scoreBoard.style.opacity = 1
  }

  gamePlay = (player) => {
    // winner of the match
    if (this.round >= 5) {
      if (this.playerOneWinningRounds > this.playerTwoWinningRounds) {
        alert("Player one win the game ")
      } else {
        alert("Player two win the game")
      }
    }

    const playerOneScoreEL = document.getElementById("playerOneScore")
    const playerTwoScoreEL = document.getElementById("playerTwoScore")
    const playerOneScoreBoard = document.getElementById("playerOneScoreBoard")
    const playerTwoScoreBoard = document.getElementById("playerTwoScoreBoard")
    const roundElement = document.getElementById("round")
    const winningPlayerOne = document.getElementById("winningPlayerOne")
    const winningPlayerTwo = document.getElementById("winningPlayerTwo")

    // random Score
    const rondomScore = Math.floor(Math.random() * 5) + 1

    // add fire effect
    const character = player.fireElement
    character.classList.toggle(player.fireAnimation)

    // update score
    player.id === 1
      ? (this.playertwoScore -= rondomScore)
      : (this.playerOneScore -= rondomScore)

    // updating dom elements
    player.id === 1
      ? (playerTwoScoreEL.innerText = this.playertwoScore)
      : (playerOneScoreEL.innerText = this.playerOneScore)

    // Set each player turn
    player.id === 1
      ? (playerTwoScoreBoard.style.backgroundColor = "rgba(0,0,0,.25)")
      : (playerOneScoreBoard.style.backgroundColor = "rgba(0,0,0,.25")

    // clear hightlights
    player.id !== 1
      ? (playerTwoScoreBoard.style.backgroundColor = "transparent")
      : (playerOneScoreBoard.style.backgroundColor = "transparent")

    // traking round
    if (this.playerOneScore <= 0 || this.playertwoScore <= 0) {
      // next round
      this.round += 1
      roundElement.innerText = `Round ${this.round}`

      // set winner of the round
      if (this.playerOneScore > this.playertwoScore) {
        // set winner of the round
        this.playerOneWinningRounds += 1
        winningPlayerOne.innerText = `Total winning round ${this.playerOneWinningRounds}`
      } else {
        // set winner of the round
        this.playerTwoWinningRounds += 1
        winningPlayerTwo.innerText = `Total winning round ${this.playerTwoWinningRounds}`
      }

      // set new Score
      this.playerOneScore = 100
      this.playertwoScore = 100
      playerOneScoreEL.innerText = this.playerOneScore
      playerTwoScoreEL.innerText = this.playertwoScore
    }
  }

  resetGame = () => {
    // dom element
    const playerOneScoreEL = document.getElementById("playerOneScore")
    const playerTwoScoreEL = document.getElementById("playerTwoScore")
    const roundElement = document.getElementById("round")
    const winningPlayerOne = document.getElementById("winningPlayerOne")
    const winningPlayerTwo = document.getElementById("winningPlayerTwo")

    // set initial state
    this.playerOneScore = 100
    this.playertwoScore = 100
    this.playerOneWinningRounds = 0
    this.playerTwoWinningRounds = 0
    this.round = 1
    playerOneScoreEL.innerText = this.playerOneScore
    playerTwoScoreEL.innerText = this.playertwoScore
    roundElement.innerText = `Round ${this.round}`
    winningPlayerOne.innerText = `Total winning round ${this.playerOneWinningRounds}`
    winningPlayerTwo.innerText = `Total winning round ${this.playerTwoWinningRounds}`
  }
}

export default Shooter
