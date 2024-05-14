import React from 'react';
import './Tema2Historia.css';
import { Link } from 'react-router-dom';

function Tema2Historia() {
  const changePage = (page) => {
    // Aquí puedes agregar la lógica para cambiar la página
    console.log(`Cambiando a la página de ${page}`);
  };

  return (
    <div className="container">
      <div className="blue-banner">
        <a href="/landing-page" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://www.comunidadbaratz.com/wp-content/uploads/Instrucciones-a-tener-en-cuenta-sobre-como-se-abre-un-libro-nuevo.jpg" 
            alt="Logo" 
            className="logo" 
          />
        </a>
        <div className="dropdown">
          <button className="dropbtn">Asignaturas</button>
          <div className="dropdown-content">
            <Link to="/historia-españa">Historia de España</Link>
            <Link to="/matematicas">Matematicas</Link>
          </div>
        </div>
      </div>
      <div className="content">
        {/* Aquí puedes agregar el contenido de tu página */}
        <h1>Bienvenido a mi página</h1>
        <p>Este es el contenido principal.</p>
      </div>
    </div>
  );
}

export default Tema2Historia;
