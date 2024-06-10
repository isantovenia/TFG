const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const config = require("./app/config/auth.config");
const db = require("./app/models");

const app = express();

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public', {
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

db.sequelize.sync();

const User = db.user; // Asegúrate de que 'user' es el nombre correcto de tu modelo de usuario

// Ruta para obtener los datos del dashboard
app.get("/api/data", (req, res) => {
    // Consulta para obtener los datos de la base de datos
    User.findAll({
      attributes: ['id', 'username', 'email'] // Ajusta los atributos según tu modelo
    })
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json({ mensaje: 'Error al obtener datos', error });
    });

});

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server corriendo en el puerto: ${PORT}.`);
});
