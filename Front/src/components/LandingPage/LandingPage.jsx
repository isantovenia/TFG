import React, { useState } from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom'; // Importa el componente de enlace

function LandingPage() {
  const [currentPage, setCurrentPage] = useState('Inicio');
  const [news] = useState([
    { id: 1, title: 'Noticia 1', content: 'Contenido de la noticia 1' },
    { id: 2, title: 'Noticia 2', content: 'Contenido de la noticia 2' },
    { id: 3, title: 'Noticia 3', content: 'Contenido de la noticia 3' }
  ]);

  // Función para cambiar la página actual
  const changePage = (page) => {
    setCurrentPage(page);
  }

  return (
    <div>
      {/* Banner superior con logo y desplegable */}
      <div className="banner">
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
          <span>Nombre de la página</span>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Asignaturas</button>
          <div className="dropdown-content">
            {/* Utiliza el componente de enlace Link */}
            <Link to="/historia-españa">Historia de España</Link>
            <a onClick={() => changePage('Matematicas')}>Matemáticas</a>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="main-content">
        {currentPage === 'Inicio' && (
          <div>
            <h2>Últimas Noticias</h2>
            <ul>
              {news.map(item => (
                <li key={item.id}>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        
      </div>
    </div>
  );
}

export default LandingPage;
