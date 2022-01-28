const gameBoard = {
  layout: ['', '', '', '', '', '', '', '', ''],
  currentPlayer: '',
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
  },
  render: function () {
    this.squares.forEach((square, i) => {
      square.innerText = this.layout[i]
    })
  },
  handleMove: function (square) {
    if (this.gameOver) {
      alert('the game is over!')
    } else {
      this.addMark(this.currentPlayer, square)
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X'
    }
  },
  addMark: function (player, index) {
    if (this.layout[index] === '') {
      this.layout[index] = player
      this.render()
      this.checkWinner()
    } else {
      alert('already picked')
    }
  },
  checkWinner: function () {
    winningCombinations.forEach((combo) => {
      if (
        this.layout[combo[0]] === this.layout[combo[1]] &&
        this.layout[combo[0]] === this.layout[combo[2]]
      ) {
        if (!this.layout[combo[0]] === '') {
          console.log(this.layout[combo[0]])
          return this.endGame(this.layout[combo[0]])
        }
      }
    })
  },
  endGame: function (player) {
    alert(`${player} wins!`)
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
