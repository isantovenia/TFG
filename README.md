# Requisitos para que funcione
1. Tener instalado un mysql, con una base de datos testdb creada
CREATE DATABASE testdb;

2. Si se quieren dejar los datos de login de la base de datos tal y como está (usuario pruebas, contraseña pruebas) habrá que crear un usuario y darle permisos sobre la base de datos
CREATE USER 'pruebas'@'localhost' IDENTIFIED BY 'pruebas';
GRANT ALL PRIVILEGES ON testdb.* TO 'pruebas'@'localhost';

3. En la primera ejecución será necesario crear los roles y hacer las foreigns key, así que el sync del sequalize de server.js debe ser el 
db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync Database with { force: true }');
    initial();
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}
```

4. Descargar los modulos de node
npm install
npm install axios
npm install @emailjs/browser --save
npm i emailjs-com
npm install nodemailer
npm install react-router-dom

5. Ejecutar el server para el back
cd .\Back\
node server.js


6. (En otra terminal) Ejecutar el front

cd .\Front\
npm run dev

