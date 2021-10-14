// get the config file so we have our api url
const config = require("../config")

// require store file so we have access to the store object.
const store = require("../store")

// Sign up request
// Include formData object that includes email, pw, confirm_pw
const signUp = (data) => {
  return $.ajax({
    url: `https://tic-tac-toe-api-development.herokuapp.com/sign-up`,
    method: "POST",
    data: data,
  })
}

const signout = () => {
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-out',
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${store.user.token}`
    }
  })
}

const signIn = (data) => {
  return $.ajax({
    url: "https://tic-tac-toe-api-development.herokuapp.com/sign-in",
    method: "POST",
    data: data
  })
}

const getToken = (data) => {
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-in',
    method: "POST",
    data: data
  })
}

module.exports = {
  signUp,
  signIn,
  signout,
  getToken
}
