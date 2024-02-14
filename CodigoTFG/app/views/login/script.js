
window.onload = function () {
  if (getCookie('accessToken')) {
    location.href = '../home'
  }  

  const savedUser = localStorage.getItem('username')
  const username = document.getElementById('formUsernameInput')
  const remember = document.getElementById('formRememberInput')
  if (savedUser) {
    username.value = savedUser
    remember.checked = true
  }
}

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

const submitData = () => {
  const username = document.getElementById('formUsernameInput').value
  const password = document.getElementById('formPasswordInput').value
  const rememberUser = document.getElementById('formRememberInput').checked

  if (rememberUser) {
    localStorage.setItem('username', username)
  }
  else {
    localStorage.setItem('username', '')
  }

  const payload = {
    "username":username,
    "password":password
  }

  axios.post('/api/auth/signin', payload)
  .then(async response => {
    document.cookie = `accessToken=${response.data.accessToken}; Max-Age=${1800}; path=/`
    document.cookie = `userId=${response.data.id}; Max-Age=${1800}; path=/`
    location.href="../home"
  })
  .catch(error => alert("Incorrect username or password!"))
}



