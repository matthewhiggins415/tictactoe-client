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
  $("#board-view").fadeIn()
  showAMessage("Sign up successful!")
}

const signUpFailure = (error) => {
  console.log(error)
  // print error to message on signup view.
}

const signOutSuccess = () => {
  $("#board-view").fadeOut()
  $("#signup-view").fadeOut()
  $("#signin-view").fadeIn()
}

const signOutFailure = (error) => {
  console.log(error.message)
}

const signInSuccess = (responseData) => {
  let token = responseData.user.token
  console.log(responseData)
  console.log(token)
  console.log(store)
  store.user.token = token
  console.log(store)
  $("#signin-view").fadeOut()
  $("#board-view").fadeIn()
  showAMessage("Sign in successful!")
}

const signInFailure = (error) => {
  console.log(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signOutSuccess,
  signOutFailure,
  signInSuccess,
  signInFailure
}
