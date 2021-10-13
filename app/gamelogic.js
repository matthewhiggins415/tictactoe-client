//Every turn we need to:
//Mark a spot
//Toggle player
//Highlight current player name
//Track "score" and compare to winning/tie condition
//Stretch goal: every play is tracked and sent to backend to be recorded.
//Shit happens when winning condition hit.
 //Shit A: winning player celebrated
 //Shit B: Board is inactive.
 //Shit C: We ping backend with POST of game result.


//Also New game button clears board.

let count = 0

const addX = (num) => {
  $('.space').text('X')
}

const addO = (num) => {
  $('.space').text('O')
}

const choosePlayer = () => {
  if (count%2 === 0) {
    addX(boxNum)
    count++
  } else {
    add0(boxNum)
    count++
  }
}

$('.space').on('click', choosePlayer)
