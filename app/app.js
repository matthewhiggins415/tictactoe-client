// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require("./auth/events")
const gameEvents = require("./gamelogic")

// use require without a reference to ensure a file is bundled
// require('./example')
const toggleToSignIn = () => {
  $("#signup-view").hide()
  $("#signin-view").show()
}

const toggleToSignUp = () => {
  $("#signin-view").hide()
  $("#signup-view").show()
}

$(() => {
  // configure page elements
  $("#board-view").hide()
  $("#signin-view").hide()

  // toggle between sigins.
  $("#toLoginBtn").on("click", toggleToSignIn)
  $("#toSigninBtn").on("click", toggleToSignUp)

  // sign up
  $("#signup-form").on("submit", authEvents.onSignUp)

  // login
  $("#signin-form").on('submit', authEvents.onSignIn)

  // chngePw

  // logout
  $("#logout-btn").on('click', authEvents.onLogout)

  //board interactions
  $('#one').on("click", gameEvents.oneClick)
  $('#two').on("click", gameEvents.twoClick)
  $('#three').on("click", gameEvents.threeClick)
  $('#four').on("click", gameEvents.fourClick)
  $('#five').on("click", gameEvents.fiveClick)
  $('#six').on("click", gameEvents.sixClick)
  $('#seven').on("click", gameEvents.sevenClick)
  $('#eight').on("click", gameEvents.eightClick)
  $('#nine').on("click", gameEvents.nineClick)
})
