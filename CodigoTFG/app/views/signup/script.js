window.onload = function() {
  if (getCookie('accessToken')) {
    location.href = '../home'
  }
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

const submitData = () => {
  const username = document.getElementById('formUsernameInput').value
  const email = document.getElementById('formEmailInput').value
  const password = document.getElementById('formPasswordInput').value
  const role = document.getElementById('formRoleInput').value 

  const payload = {
    "username": username,
    "email": email,
    "password": password,
    "roles": [role]
  }

  console.log(payload)

  axios.post('/api/auth/signup', payload)
  .then(() => {
    location.href = "../login"
  })
  .catch(err => console.error (err))


}