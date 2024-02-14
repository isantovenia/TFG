const logout = () => {
  deleteAllCookies()
  location.href = '../login'
}

const loadUsersTable = async (accessToken) => {
  const users = await axios.get('/api/getUsers', {
    headers: {
      'x-access-token': accessToken
    }
  })
  .then((res) => res.data.users)
  .catch(error => {
    const h3 = document.querySelector('h3')
    const table = document.querySelector('table')
    table.remove()
    h3.innerText = `You don't have permission to access this data`
  })
  users.forEach(user => {
    const tr = document.createElement('tr')
    Object.keys(user).forEach(key => {
      const td = document.createElement('td')
      td.innerHTML = user[key]
      tr.appendChild(td)
    })
    document.querySelector("tbody").appendChild(tr)

  })
}

const loadCurrentUser = async (userId) => {
  const currUser = await axios.get('/api/user', {
    params: {
      id: userId
    }
  })
  .then(response => response.data.user)
  const h2 = document.querySelector('h2')
  h2.innerText = `Welcome! ${_.startCase(currUser.username)}`
}


function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function deleteAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
  }
}


window.onload = async () => {
  const accessToken = getCookie('accessToken')
  const userId = getCookie('userId')

  if (!accessToken ) {
    location.href = '../'
  }

  if (userId)
    await loadCurrentUser(userId)
  if (accessToken)
    await loadUsersTable(accessToken)
}