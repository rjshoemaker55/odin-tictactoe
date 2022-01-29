const gameBoard = {
  layout: ['', '', '', '', '', '', '', '', ''],
  currentPlayer: '',
  gameStarted: false,
  gameOver: false,
  init: function () {
    this.cacheDom()
    this.render()
    this.currentPlayer = 'X'
  },
  cacheDom: function () {
    this.squares = document.querySelectorAll('.tictactoe-board__square')
    this.squares.forEach((square, i) =>
      square.addEventListener('click', () => this.handleMove(i))
    )
    this.winnerDisplay = document.getElementById('winner-display')
    this.startBtn = document.getElementById('start-btn')
    this.startBtn.addEventListener('click', this.startGame.bind(this))
  },
  render: function () {
    this.squares.forEach((square, i) => {
      square.innerText = this.layout[i]
    })
  },
  startGame: function () {
    this.resetGame()
    this.startBtn.style = 'display: none'
  },
  handleMove: function (square) {
    if (this.gameStarted) {
      if (this.gameOver) {
        alert('the game is over!')
      } else {
        if (this.addMark(this.currentPlayer, square)) {
          this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X'
        }
      }
    }
  },
  addMark: function (player, index) {
    if (this.layout[index] === '') {
      this.layout[index] = player
      this.render()
      this.checkWinner()
      return 1
    } else {
      alert('already picked')
      return 0
    }
  },
  checkWinner: function () {
    winningCombinations.forEach((combo) => {
      if (
        this.layout[combo[0]] === this.layout[combo[1]] &&
        this.layout[combo[0]] === this.layout[combo[2]]
      ) {
        if (this.layout[combo[0]] !== '') {
          this.endGame(this.layout[combo[0]])
        }
      }
    })
  },
  endGame: function (player) {
    this.gameOver = true
    this.winnerDisplay.innerText = `Player ${player} wins!`
    this.startBtn.style = 'display: block'
  },
  resetGame: function () {
    this.layout.forEach((square, i) => (this.layout[i] = ''))
    this.gameOver = false
    this.gameStarted = true
    this.winnerDisplay.innerText = ''
    currentPlayer = 'X'
    this.render()
  }
}

gameBoard.init()

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
