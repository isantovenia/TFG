document.getElementById("iniciar-sesion-boton").addEventListener("click", e => {
    e.preventDefault()
    var usuario = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    const res = fetch("http://localhost:8080/api/auth/signin", {
        method: 'POST',
        body: JSON.stringify({username: usuario, password: password}),
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(res => {
        if(!res.ok){
            window.alert('Usuario no valido');
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
            throw new Error('No valido');
        }else{
            return res.json()
        }
    })
    .then(function(res) {
        sessionStorage.setItem(res.username, res.accessToken)
        if(res.roles == "ROLE_USER"){
            window.location.href = "http://localhost:8080/entradoUser"
        }else if(res.roles == "ROLE_MODERATOR"){
            window.location.href = "http://localhost:8080/entradoModerator"
        }else if(res.roles == "ROLE_ADMIN"){
            window.location.href = "http://localhost:8080/entradoAdmin"
        }
    })
})


