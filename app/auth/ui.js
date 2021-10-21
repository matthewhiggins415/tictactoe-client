// require the store object
const store = require("../store.js")

const messageElement = $("#message")

const showAMessage = (message) => {
  messageElement.text(`${message}`)
  setTimeout(function () {
    messageElement.remove()
  }, 3000)
}

const signUpSuccess = (responseData) => {
  console.log(responseData)
  $("#signup-view").fadeOut()
  $("#signin-view").fadeIn()
  showAMessage("Sign up successful!")
}

const signUpFailure = (error) => {
  console.log(error)
  showAMessage("Sign up failure!")
}

const signOutSuccess = () => {
  $("#board-view").fadeOut()
  $("#signin-view").fadeOut()
  $("#signup-view").fadeIn()
  showAMessage("Log out successful!")
}

const signOutFailure = (error) => {
  showAMessage("Sign out failure!")
}

const signInSuccess = (responseData) => {
  let token = responseData.user.token
  store.user.token = token
  $("#signin-view").fadeOut()
  $("#board-view").fadeIn()
  showAMessage("Sign in successful!")
}

const signInFailure = (error) => {
  showAMessage("Sign in failure!")
}

const newGameSuccess = () => {
  showAMessage("New game created")
}

const newGameFailure = () => {
  showAMessage("New game failure")
}

module.exports = {
  showAMessage,
  signUpSuccess,
  signUpFailure,
  signOutSuccess,
  signOutFailure,
  signInSuccess,
  signInFailure,
  newGameSuccess,
  newGameFailure
}
