// get the config file so we have our api url
const config = require("../config")

// require store file so we have access to the store object.
const store = require("../store")

// Sign up request
// Include formData object that includes email, pw, confirm_pw
const signUp = (data) => {
  return $.ajax({
    url: `${config.apiUrl}/sign-up`,
    method: "POST",
    data: data,
  })
}

const signout = () => {
  return $.ajax({
    url: `${config.apiUrl}/sign-out`,
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${store.user.token}`
    }
  })
}

const signIn = (data) => {
  return $.ajax({
    url: `${config.apiUrl}/sign-in`,
    method: "POST",
    data: data
  })
}

const createGame = (data) => {
  return $.ajax({
    url: `${config.apiUrl}/games`,
    method: "POST",
    headers: {
      authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signout,
  createGame
}
