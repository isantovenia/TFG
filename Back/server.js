const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const config = require("./app/config/auth.config");
const db = require("./app/models");
const mysql = require('mysql2')

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

const credentials = {
  host: "localhost",
  user: "root",
  password: "",
  database: "testdb",
}

db.sequelize.sync();

const User = db.user; // Asegúrate de que 'user' es el nombre correcto de tu modelo de usuario

// Ruta para obtener los datos del dashboard
app.get("/api/data", (req, res) => {
    // Consulta para obtener los datos de la base de datos
    User.findAll({
      attributes: ['id', 'username', 'email', 'createdAt', 'updatedAt'] // Ajusta los atributos según tu modelo
    })
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json({ mensaje: 'Error al obtener datos', error });
    });

});

app.get('/test/:numTest', (req, res) => {
  const numTest = req.params.numTest; // Obtener el número de test desde los parámetros de la URL
  var connection = mysql.createConnection(credentials);
  
  // Consulta SQL para obtener las preguntas del número de test especificado
  const query = 'SELECT * FROM test WHERE NumTest = ?';
  connection.query(query, [numTest], (error, result) => {
    if (error) {
      console.error('Error en la consulta:', error);
      res.status(500).send('Error en la consulta');
    } else {
      res.status(200).json(result);
    }
  });

  connection.end();
});

app.post('/addQuestion', (req, res) => {
  const { testNumber, questionText, answerOptions } = req.body;

  // Crear conexión a la base de datos
  const connection = mysql.createConnection(credentials);

  // Insertar la nueva pregunta y opciones de respuesta en la base de datos
  const insertQuestionQuery = 'INSERT INTO test (NumTest, Pregunta, RespuestaBuena, RespuestaMala1, RespuestaMala2, RespuestaMala3) VALUES (?, ?, ?, ?, ?, ?)';
  const params = [
    testNumber,
    questionText,
    answerOptions[0].answerText,
    answerOptions[1].answerText,
    answerOptions[2].answerText,
    answerOptions[3].answerText,
  ];

  connection.query(insertQuestionQuery, params, (error, results, fields) => {
    if (error) {
      console.error('Error al agregar la pregunta:', error);
      res.status(500).send('Error al agregar la pregunta');
    } else {
      console.log('Pregunta agregada correctamente');
      res.status(200).send('Pregunta agregada correctamente');
    }
  });

  connection.end();
});

app.get('/temas/:numAsignatura', (req, res) => {
  const numAsignatura = req.params.numAsignatura; // Obtener el número de test desde los parámetros de la URL
  var connection = mysql.createConnection(credentials);
  
  // Consulta SQL para obtener las preguntas del número de test especificado
  const query = 'SELECT * FROM temas WHERE NumAsignatura = ?';
  connection.query(query, [numAsignatura], (error, result) => {
    if (error) {
      console.error('Error en la consulta:', error);
      res.status(500).send('Error en la consulta');
    } else {
      res.status(200).json(result);
    }
  });

  connection.end();
});

app.post('/addTema', (req, res) => {
  const { numAsignatura, numTema, imagen, titulo, subtitulo } = req.body;
  var connection = mysql.createConnection(credentials);
  
  // Insertar el nuevo tema en la base de datos
  const insertTemaQuery = 'INSERT INTO temas (NumAsignatura, NumTema, Imagen, Titulo, Subtitulo) VALUES (?, ?, ?, ?, ?)';
  const params = [numAsignatura, numTema, imagen, titulo, subtitulo];

  connection.query(insertTemaQuery, params, (error, results, fields) => {
    if (error) {
      console.error('Error al agregar el tema:', error);
      res.status(500).send('Error al agregar el tema');
    } else {
      console.log('Tema agregado correctamente');
      res.status(200).send('Tema agregado correctamente');
    }
  });
});

app.delete('/removeTema', (req, res) => {
  const { numAsignatura, numTema } = req.body;
  var connection = mysql.createConnection(credentials);
  
  // Eliminar el tema de la base de datos
  const deleteTemaQuery = 'DELETE FROM temas WHERE NumAsignatura = ? AND NumTema = ?';
  const params = [numAsignatura, numTema];

  connection.query(deleteTemaQuery, params, (error, results, fields) => {
    if (error) {
      console.error('Error al eliminar el tema:', error);
      res.status(500).send('Error al eliminar el tema');
    } else {
      console.log('Tema eliminado correctamente');
      res.status(200).send('Tema eliminado correctamente');
    }
  });
});




require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server corriendo en el puerto: ${PORT}.`);
});
