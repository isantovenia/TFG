import React from 'react';
import './Matematicas.css'; // Cambiado el nombre del archivo CSS
import { Link } from 'react-router-dom';

function Matematicas() { // Cambiado el nombre de la función
  const changePage = (page) => {
    // Aquí puedes agregar la lógica para cambiar la página
    console.log(`Cambiando a la página de ${page}`);
  };

  return (
    <div className="main-container-mate"> {/* Cambiado el nombre de la clase */}
      <div className="banner-mate"> {/* Cambiado el nombre de la clase */}
        <a href="/landing-page" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://www.comunidadbaratz.com/wp-content/uploads/Instrucciones-a-tener-en-cuenta-sobre-como-se-abre-un-libro-nuevo.jpg" 
            alt="Logo" 
            className="logo-mate" // Cambiado el nombre de la clase 
          />
        </a>
        <div className="dropdown-mate"> {/* Cambiado el nombre de la clase */}
          <button className="dropbtn-mate temas-btn-mate">Temas</button> {/* Cambiado el nombre de la clase */}
          <div className="dropdown-content-mate temas-content-mate"> {/* Cambiado el nombre de la clase */}
            <Link to="/matematicas/tema1">Tema 1 Mate</Link> {/* Cambiado el nombre del enlace */}
            <Link to="/matematicas/tema2">Tema 2 Mate</Link> {/* Cambiado el nombre del enlace */}
          </div>
        </div>
        <div className="dropdown-mate"> {/* Cambiado el nombre de la clase */}
          <button className="dropbtn-mate asignaturas-btn-mate">Asignaturas</button> {/* Cambiado el nombre de la clase */}
          <div className="dropdown-content-mate asignaturas-content-mate"> {/* Cambiado el nombre de la clase */}
            <Link to="/historia-españa">Historia de España Mate</Link> {/* Cambiado el nombre del enlace */}
            <Link to="/matematicas">Historia de España Mate</Link> {/* Cambiado el nombre del enlace */}
          </div>
        </div>
      </div>
      <div className="content-mate"> {/* Cambiado el nombre de la clase */}
        {/* Aquí puedes agregar el contenido de tu página */}
        <h1>Bienvenido a mi página</h1>
        <p>Este es el contenido principal.</p>
      </div>
    </div>
  );
}

export default Matematicas;
