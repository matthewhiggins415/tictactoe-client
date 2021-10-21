const getFormFields = require("../../lib/get-form-fields")
const api = require("./api.js")
const ui = require("./ui.js")
const gameLogic = require('../gamelogic')

// Prevent page refresh upon submit
// Get the form in a variable by accessing event object
// get the formdata in the form using getformfields function.
// make the post request with logic in api and attach .then/.catch with logic from ui.

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData).then(ui.signUpSuccess).catch(ui.signUpFailure)
  form.reset()
}

const onSignIn = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData).then(ui.signInSuccess).catch(ui.signInFailure)
  form.reset()
}

const onNewGame = () => {
  gameLogic.clearBoard()
  api.createGame().then(ui.newGameSuccess).catch(ui.newGameFailure)
}

const onLogout = () => {
  api.signout().then(ui.signOutSuccess).catch(ui.signOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onLogout,
  onNewGame
}
