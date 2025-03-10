import * as mockroblog from './mockroblog.js'

const registerForm = document.getElementById('register-form')
const registerButton = document.getElementById('register-form-submit')

registerButton.addEventListener('click', (e) => {
  e.preventDefault()
  const email = registerForm.email.value
  const username = registerForm.username.value
  const password = registerForm.password.value
  const result = mockroblog.createUser(username, email, password)

  // if (username === "user" && password === "web_dev") {
  if (result != null) {
    alert('Account Created Successfully')
    window.location.replace('/index.html')
    localStorage.setItem('user_name', username)
    // location.reload();
  } else {
    alert('User Already exists')
    location.reload()
  }
})
