const xClass = 'x';
const oClass = 'circle';

const cells = $('[data-cell]')

let circleTurn = false

const board = $('#board')

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
]

startGame = () => {
  showOutline()
}

const showOutline = () => {
  board.removeClass(`${xClass}`)
  board.removeClass(`${oClass}`)
  circleTurn ? board.addClass(`${oClass}`) : board.addClass(`${xClass}`)
}

const changeTurn = () => {
  circleTurn = !circleTurn
  showOutline()
}

const addMark = (cell, activeClass) => {
  cell.classList.add(activeClass)
}

const checkWin = (currentClass) => {
  return winConditions.some(element => {
      return element.every(index => {
        return cells[index].classList.contains(currentClass)
      })
  })
}

const checkTie = () => {
  cells.every(element => {
    cells.classList.contains()
  })
}

const handleClick = (e) => {
  const cell = e.target
  const activeClass = circleTurn ? oClass : xClass
  //Make mark
  addMark(cell, activeClass)
  //determine win
  //determine tie
  //Change turn
  changeTurn()
  if (checkWin(activeClass)) {
    console.log('winner')
    console.log(activeClass)
  }
}

cells.one('click', handleClick)

startGame()
