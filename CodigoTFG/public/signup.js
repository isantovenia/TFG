document.getElementById("crear-usuario-boton").addEventListener("click", e => {
    e.preventDefault()
    var usuario = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var seleccion = document.getElementById("opciones");
    var opcionSeleccionada = seleccion.value;
    

    fetch("http://localhost:8080/api/auth/signup", {
        method: 'POST',
        body: JSON.stringify({username: usuario, email: email ,password: password, roles: [opcionSeleccionada]}),
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(res => res.json())
    .then(function(res){
        window.alert('Usuario creado');
        document.getElementById("username").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    })
})