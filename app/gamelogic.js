const ui = require('./auth/ui.js')

const xClass = 'x';
const oClass = 'circle';

let cellOne = $("#spaceOne")
let cellTwo = $("#spaceTwo")
let cellThree = $("#spaceThree")
let cellFour = $("#spaceFour")
let cellFive = $("#spaceFive")
let cellSix = $("#spaceSix")
let cellSeven = $("#spaceSeven")
let cellEight = $("#spaceEight")
let cellNine = $("#spaceNine")

let circleTurn = false

const board = $('#board')

const startGame = () => {
  showOutline()
  addFunc()
  gameCount = 0
}

let gameCount

const showOutline = () => {
  board.removeClass(`${xClass}`)
  board.removeClass(`${oClass}`)
  circleTurn ? board.addClass(`${oClass}`) : board.addClass(`${xClass}`)
}

const checkTie = () => {
  if (gameCount === 9 && checkWin() === false) {
    return true
  }
}

const changeTurn = () => {
  circleTurn = !circleTurn
  showOutline()
}

const addMark = (cell, activeClass) => {
  cell.classList.add(activeClass)
}

const endGame = () => {
  cellOne.off('click')
  cellTwo.off('click')
  cellThree.off('click')
  cellFour.off('click')
  cellFive.off('click')
  cellSix.off('click')
  cellSeven.off('click')
  cellEight.off('click')
  cellNine.off('click')
}

const clearBoard = () => {
  cellOne.removeClass("circle x")
  cellTwo.removeClass('circle x')
  cellThree.removeClass('circle x')
  cellFour.removeClass('circle x')
  cellFive.removeClass('circle x')
  cellSix.removeClass('circle x')
  cellSeven.removeClass('circle x')
  cellEight.removeClass('circle x')
  cellNine.removeClass('circle x')
  startGame()
}

const handleClick = (e) => {
  const cell = e.target
  let activeClass = circleTurn ? oClass : xClass
  addMark(cell, activeClass)
  changeTurn()
  //determine WIN
  if (checkWin()){
    endGame()
  }

  gameCount++

  if (checkTie()) {
    endGame()
    ui.showAMessage('Tie Game!')
  }
}

const addFunc = () => {
cellOne.one('click', handleClick)
cellTwo.one('click', handleClick)
cellThree.one('click', handleClick)
cellFour.one('click', handleClick)
cellFive.one('click', handleClick)
cellSix.one('click', handleClick)
cellSeven.one('click', handleClick)
cellEight.one('click', handleClick)
cellNine.one('click', handleClick)
}


const checkWin = () => {
  if (cellOne.hasClass('x') && cellTwo.hasClass('x') && cellThree.hasClass('x')){
    ui.showAMessage("X wins")
    // alert('x wins!')
    console.log('winner!!')
    return true
  } else if (cellOne.hasClass('circle') && cellTwo.hasClass('circle') && cellThree.hasClass('circle')) {
    ui.showAMessage('o wins!')
    console.log('winner!!')
    return true
  } else if (cellFour.hasClass('x') && cellFive.hasClass('x') && cellSix.hasClass('x')) {
    ui.showAMessage('x wins!')
    console.log('winner!!')
    return true
  } else if (cellFour.hasClass('circle') && cellFive.hasClass('circle') && cellSix.hasClass('circle')) {
    ui.showAMessage('o wins!')
    console.log('winner!!')
    return true
  } else if (cellSeven.hasClass('x') && cellEight.hasClass('x') && cellNine.hasClass('x')) {
    ui.showAMessage('x wins!')
    console.log('winner!!')
    return true
  } else if (cellSeven.hasClass('circle') && cellEight.hasClass('circle') && cellNine.hasClass('circle')) {
    ui.showAMessage('o wins!')
    console.log('winner!!')
    return true
  } else if (cellOne.hasClass('x') && cellFive.hasClass('x') && cellNine.hasClass('x')) {
    ui.showAMessage('x wins!')
    console.log('winner!!')
    return true
  } else if (cellOne.hasClass('circle') && cellFive.hasClass('circle') && cellNine.hasClass('circle')) {
    ui.showAMessage('o wins!')
    console.log('winner!!')
    return true
  } else if (cellOne.hasClass('x') && cellFour.hasClass('x') && cellSeven.hasClass('x')) {
    ui.showAMessage('x wins!')
    console.log('winner!!')
    return true
  } else if (cellOne.hasClass('circle') && cellFour.hasClass('circle') && cellSeven.hasClass('circle')) {
    ui.showAMessage('o wins!')
    console.log('winner!!')
    return true
  } else if (cellTwo.hasClass('x') && cellFive.hasClass('x') && cellEight.hasClass('x')) {
    ui.showAMessage('x wins!')
    console.log('winner!!')
    return true
  } else if (cellTwo.hasClass('circle') && cellFive.hasClass('circle') && cellEight.hasClass('circle')) {
    ui.showAMessage('o wins!')
    console.log('winner!!')
    return true
  } else if (cellThree.hasClass('x') && cellSix.hasClass('x') && cellNine.hasClass('x')) {
    ui.showAMessage('x wins!')
    console.log('winner!!')
    return true
  } else if (cellThree.hasClass('circle') && cellSix.hasClass('circle') && cellNine.hasClass('circle')) {
    ui.showAMessage('o wins!')
    console.log('winner!!')
    return true
  } else {
    console.log('no winner')
    return false
  }
}

startGame()

module.exports = {
  handleClick,
  startGame,
  clearBoard
}
