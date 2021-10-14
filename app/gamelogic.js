let count = 0

let player1 = 'X'
let player2 = 'O'

const one = $("#one")
const two = $("#two")
const three = $("#three")
const four = $("#four")
const five = $("#five")
const six = $("#six")
const seven = $("#seven")
const eight = $("#eight")
const nine = $("#nine")

const board = [one, two, three, four, five, six, seven, eight, nine]

let activeBoard = ["", "", "","", "", "","", "", ""]

let XwinningConditions = [
  ["X", "X", "X","", "", "","", "", ""],
  ["", "", "","X", "X", "X","", "", ""],
  ["", "", "","", "", "","X", "X", "X"],
  ["X", "", "","", "X", "","", "", "X"],
  ["", "", "X","", "X", "","X", "", ""],
  ["X", "", "","X", "", "","X", "", ""],
  ["", "X", "","", "X", "","", "X", ""],
  ["", "", "X","", "", "X","", "", "X"]
]

let OwinningConditions = [
  ["O", "O", "O","", "", "","", "", ""],
  ["", "", "","O", "O", "O","", "", ""],
  ["", "", "","", "", "","O", "O", "O"],
  ["O", "", "","", "O", "","", "", "O"],
  ["", "", "O","", "O", "","O", "", ""],
  ["O", "", "","O", "", "","O", "", ""],
  ["", "O", "","", "O", "","", "O", ""],
  ["", "", "O","", "", "O","", "", "O"]
]

//add to the counter
const addCount = () => {
  count++
}



//onClick to div makes corresponding symbol appear
const oneClick = () => {
  if(count%2 === 0) {
    $(`#one`).text('x').
    addCount()
  } else {
    $(`#one`).text('o')
    addCount()
  }
}

const twoClick = () => {
  if(count%2 === 0) {
    $(`#two`).text('x')
    addCount()
  } else {
    $(`#two`).text('o')
    addCount()
  }
}

const threeClick = () => {
  if(count%2 === 0) {
    $(`#three`).text('x')
    addCount()
  } else {
    $(`#three`).text('o')
    addCount()
  }
}

const fourClick = () => {
  if(count%2 === 0) {
    $(`#four`).text('x')
    addCount()
  } else {
    $(`#four`).text('o')
    addCount()
  }
}

const fiveClick = () => {
  if(count%2 === 0) {
    $(`#five`).text('x')
    addCount()
  } else {
    $(`#five`).text('o')
    addCount()
  }
}

const sixClick = () => {
  if(count%2 === 0) {
    $(`#six`).text('x').
    addCount()
  } else {
    $(`#six`).text('o')
    addCount()
    console.log(board.values)
  }
}

const sevenClick = () => {
  if(count%2 === 0) {
    $(`#seven`).text('x')
    addCount()
  } else {
    $(`#seven`).text('o')
    addCount()
  }
}

const eightClick = () => {
  if(count%2 === 0) {
    $(`#eight`).text('x')
    addCount()
  } else {
    $(`#eight`).text('o')
    addCount()
  }
}

const nineClick = () => {
  if(count%2 === 0) {
    $(`#nine`).text('x')
    addCount()
  } else {
    $(`#nine`).text('o')
    addCount()
  }
}

//add position to activeBoard then compare activeBoard to winning conditions
module.exports = {
  oneClick,
  twoClick,
  threeClick,
  fourClick,
  fiveClick,
  sixClick,
  sevenClick,
  eightClick,
  nineClick
}
