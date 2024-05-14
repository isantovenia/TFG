import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

function LandingPage() {
  const changePage = (page) => {
    // Aquí puedes agregar la lógica para cambiar la página
    console.log(`Cambiando a la página de ${page}`);
  };

  return (
    <div className="main-container-landing">
      <div className="banner-landing">
        <a href="/landing-page" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://www.comunidadbaratz.com/wp-content/uploads/Instrucciones-a-tener-en-cuenta-sobre-como-se-abre-un-libro-nuevo.jpg" 
            alt="Logo" 
            className="logo-landing" 
          />
        </a>
        <div className="dropdown-landing">
          <button className="dropbtn-landing">Asignaturas</button>
          <div className="dropdown-content-landing">
            <Link to="/historia-españa">Historia de España</Link>
            <Link to="/matematicas">Matematicas</Link>
          </div>
        </div>
      </div>
      <div className="content-landing">
        {/* Aquí puedes agregar el contenido de tu página */}
        <h1>Bienvenido a mi página</h1>
        <p>Este es el contenido principal.</p>
      </div>
    </div>
  );
}

export default LandingPage;
