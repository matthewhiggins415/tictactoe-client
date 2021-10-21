 // use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require("./auth/events")

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

  // newgame board
  $("#new-game-btn").on('click',authEvents.onNewGame)

  // logout
  $("#logout-btn").on('click', authEvents.onLogout)

})
