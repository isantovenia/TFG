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
  const { NumAsignatura, testNumber, questionText, answerOptions } = req.body;

  // Crear conexión a la base de datos
  const connection = mysql.createConnection(credentials);

  // Insertar la nueva pregunta y opciones de respuesta en la base de datos
  const insertQuestionQuery = 'INSERT INTO test (NumTest, NumAsignatura, Pregunta, RespuestaBuena, RespuestaMala1, RespuestaMala2, RespuestaMala3) VALUES (?, ?, ?, ?, ?, ?, ?)';
  const params = [
    testNumber,
    NumAsignatura,
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

app.put('/editTema', (req, res) => {
  const { numAsignatura, numTema, imagen, titulo, subtitulo } = req.body;
  var connection = mysql.createConnection(credentials);
  
  // Actualizar el tema en la base de datos
  const updateTemaQuery = 'UPDATE temas SET Imagen = ?, Titulo = ?, Subtitulo = ? WHERE NumAsignatura = ? AND NumTema = ?';
  const params = [imagen, titulo, subtitulo, numAsignatura, numTema];

  connection.query(updateTemaQuery, params, (error, results, fields) => {
    if (error) {
      console.error('Error al editar el tema:', error);
      res.status(500).send('Error al editar el tema');
    } else {
      console.log('Tema editado correctamente');
      res.status(200).send('Tema editado correctamente');
    }
  });
});

app.delete('/removePregunta', (req, res) => {
  const { numTest, pregunta, NumAsignatura } = req.body;
  const connection = mysql.createConnection(credentials);
  
  // Eliminar la pregunta de la base de datos
  const deletePreguntaQuery = 'DELETE FROM test WHERE NumAsignatura = ? AND NumTest = ? AND Pregunta = ?';
  const params = [NumAsignatura, numTest, pregunta];

  connection.query(deletePreguntaQuery, params, (error, results, fields) => {
    if (error) {
      console.error('Error al eliminar la pregunta:', error);
      res.status(500).send('Error al eliminar la pregunta');
    } else {
      console.log('Pregunta eliminada correctamente');
      res.status(200).send('Pregunta eliminada correctamente');
    }
    connection.end(); // Cerrar la conexión después de la consulta
  });
});

app.put('/editarPregunta', (req, res) => {
  const { NumTest, Pregunta, RespuestaBuena, RespuestaMala1, RespuestaMala2, RespuestaMala3, NumAsignatura } = req.body;

  const connection = mysql.createConnection(credentials);
  
  // Actualizar la pregunta en la base de datos
  const updatePreguntaQuery = 'UPDATE test SET Pregunta = ?, RespuestaBuena = ?, RespuestaMala1 = ?, RespuestaMala2 = ?, RespuestaMala3 = ? WHERE NumAsignatura = ? AND NumTest = ?';
  const params = [Pregunta, RespuestaBuena, RespuestaMala1, RespuestaMala2, RespuestaMala3, NumAsignatura, NumTest];

  connection.query(updatePreguntaQuery, params, (error, results, fields) => {
    if (error) {
      console.error('Error al actualizar la pregunta:', error);
      res.status(500).send('Error al actualizar la pregunta');
    } else {
      console.log('Pregunta actualizada correctamente');
      res.status(200).send('Pregunta actualizada correctamente');
    }
    connection.end(); // Cerrar la conexión después de la consulta
  });
});

app.put('/editarUsuario', (req, res) => {
  const { idUsuario, username, email, rol } = req.body;

  let rolId;
  switch(rol) {
    case 'usuario':
      rolId = 1;
      break;
    case 'profesor':
      rolId = 2;
      break;
    case 'administrador':
      rolId = 3;
      break;
    default:
      return res.status(400).send('Rol no válido');
  }

  const connection = mysql.createConnection(credentials);

  connection.beginTransaction(err => {
    if (err) {
      console.error('Error al iniciar la transacción:', err);
      return res.status(500).send('Error al iniciar la transacción');
    }

    // Actualizar la información del usuario en la tabla users
    const updateUsuarioQuery = 'UPDATE users SET username = ?, email = ? WHERE id = ?';
    const usuarioParams = [username, email, idUsuario];

    connection.query(updateUsuarioQuery, usuarioParams, (error, results) => {
      if (error) {
        return connection.rollback(() => {
          console.error('Error al actualizar el usuario:', error);
          res.status(500).send('Error al actualizar el usuario');
        });
      }

      // Actualizar el rol en la tabla user_roles
      const updateUserRoleQuery = 'UPDATE user_roles SET roleId = ? WHERE userId = ?';
      const userRoleParams = [rolId, idUsuario];

      connection.query(updateUserRoleQuery, userRoleParams, (error, results) => {
        if (error) {
          return connection.rollback(() => {
            console.error('Error al actualizar el rol del usuario:', error);
            res.status(500).send('Error al actualizar el rol del usuario');
          });
        }

        connection.commit(err => {
          if (err) {
            return connection.rollback(() => {
              console.error('Error al hacer commit:', err);
              res.status(500).send('Error al hacer commit');
            });
          }

          console.log('Usuario y rol actualizados correctamente');
          res.status(200).send('Usuario y rol actualizados correctamente');
          connection.end(); // Cerrar la conexión después de la transacción
        });
      });
    });
  });
});

app.delete('/eliminarUsuario', (req, res) => {
  const { idUsuario, username } = req.body;

  const connection = mysql.createConnection(credentials);

  connection.beginTransaction(err => {
    if (err) {
      console.error('Error al iniciar la transacción:', err);
      return res.status(500).send('Error al iniciar la transacción');
    }
    // Eliminar el usuario de la tabla users
    const deleteUserQuery = 'DELETE FROM users WHERE id = ? AND username = ?';
    connection.query(deleteUserQuery, [idUsuario, username], (error, results) => {
      if (error) {
        return connection.rollback(() => {
          console.error('Error al eliminar el usuario:', error);
          res.status(500).send('Error al eliminar el usuario');
        });
      }

      connection.commit(err => {
        if (err) {
          return connection.rollback(() => {
            console.error('Error al hacer commit:', err);
            res.status(500).send('Error al hacer commit');
          });
        }

        console.log('Usuario eliminado correctamente');
        res.status(200).send('Usuario eliminado correctamente');
        connection.end(); // Cerrar la conexión después de la transacción
        });
      });
  });
});


require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server corriendo en el puerto: ${PORT}.`);
});
