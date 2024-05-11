import React from 'react';
import { Link } from 'react-router-dom';
import './HistoriaEspaña.css';

function HistoriaEspaña() {
  return (
    <div>
      {/* Imagen arriba a la izquierda */}
      <img src="/logo.png" alt="Logo" className="logo" />

      {/* Desplegable de temas */}
      <div className="dropdown">
        <button className="dropbtn">Temas</button>
        <div className="dropdown-content">
          <Link to="/historia-españa/tema1">Historia de España</Link>
          <a href="#">Tema 2</a>
          <a href="#">Tema 3</a>
        </div>
      </div>

      <h2>Historia de España</h2>
      <p>Contenido sobre la historia de España...</p>
    </div>
  );
}

export default HistoriaEspaña;
