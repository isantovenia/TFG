import React, { useState } from 'react';
import './Tema2Matematicas.css';
import { Link } from 'react-router-dom';

function Tema2Matematicas() {
  const [isSubjectsOpen, setIsSubjectsOpen] = useState(false);

  const toggleSubjects = () => {
    setIsSubjectsOpen(!isSubjectsOpen);
  };

  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  const username = localStorage.getItem('user');
  const rol = localStorage.getItem('rol');

  const handleLogout = () => {
    // Eliminar el token de autenticación u otra información relacionada con la sesión
    localStorage.removeItem('token');
    // Redirigir a la página de inicio de sesión u otra página después de cerrar sesión
    window.location.href = '/login'; // Redirige a la página de inicio de sesión
  };

  return (
    <div className="main-container-matematicas">
      <div className="sidebar">
                <div className="logo">
                <Link to="/landing-page">
                    <img 
                        src="https://www.comunidadbaratz.com/wp-content/uploads/Instrucciones-a-tener-en-cuenta-sobre-como-se-abre-un-libro-nuevo.jpg" 
                        alt="Logo" 
                        className="logo-landing" 
                    />
                </Link>
                    <span>BachInfo</span>
                </div>
                <nav className="nav">
                    <ul>
                        <li><a href="/landing-page"><i className="icon-home"></i>Página de Inicio</a></li>
                        <li className="submenu-toggle">
                            <a href="#" onClick={toggleSubjects}>
                                <i className="icon-book"></i>Asignaturas
                                <span className="arrow">{isSubjectsOpen ? '▲' : '▼'}</span>
                            </a>
                        </li>
                        {isSubjectsOpen && (
                            <ul className="submenu">
                                <li><a href="/historia-españa">Historia de España</a></li>
                                <li><a href="/matematicas">Matemáticas</a></li>
                                <li><a href="#">Biología</a></li>
                            </ul>
                        )}
                        {rol === 'ROLE_ADMIN' || rol === 'ROLE_MODERATOR' && (
                          <li><a href="#"><i className="icon-stats"></i>Ver Estadísticas</a></li>
                        )}
                        {rol === 'ROLE_ADMIN' && (
                        <li><a href="#"><i className="icon-users"></i>Ver Usuarios</a></li>
                        )}
                        {rol === 'ROLE_ADMIN' && (
                        <li><a href="#"><i className="icon-data"></i>Ver Datos Tests</a></li>
                        )}
                        <li><a href="#"><i className="icon-profile"></i>Editar Perfil</a></li>
                    </ul>
                </nav>
                <div className="footer">
                    <p>{username}</p>
                    {rol ? (
                      <p>
                        {rol === 'ROLE_ADMIN' ? 'Administrador' : 
                        rol === 'ROLE_MODERATOR' ? 'Profesor' : 'Usuario'}
                      </p>
                    ) : (
                      <p>Hay un error</p>
                    )}
                    <a href="/" className="logout" onClick={handleLogout}>
                      <i className="icon-logout"></i>Salirse
                    </a>
                </div>
            </div>
      <div className="main-content-matematicas-tema2">
        <h1>Bienvenido a BachInfo</h1>
        <p>Tu portal de recursos educativos para Bachillerato</p>
        <h2>Tema 1</h2>
        <p>
          Limites
        </p>
        <div className="dropdown-box">
          <h3 onClick={() => toggleExpand('caracteristicas')}>
            1. Limites <span className="arrow">&#9660;</span>
          </h3>
          {expanded['caracteristicas'] && (
            <div className="dropdown-content">
              <p>
              Las funciones tienen características clave que las definen y describen su comportamiento
              </p>
              <h4 onClick={() => toggleExpand('calcular')}>
              Calcular límites y resolver indeterminaciones <span className="arrow">&#9660;</span>
              </h4>
              {expanded['calcular'] && (
                <ul>
                  <li>
                      <p>Los límites son conceptos centrales en el cálculo y se utilizan para describir el comportamiento de una función a medida que la variable independiente se acerca a cierto valor. Algunas formas de indeterminaciones comunes son 0/0, ∞/∞ y ∞-∞. Resolver estas indeterminaciones implica técnicas como factorización, racionalización, uso de regla de L'Hôpital, entre otras.</p>
                  </li>
                </ul>
              )}
              <h4 onClick={() => toggleExpand('estudiar')}>
              Estudiar la continuidad y clasificar las discontinuidades <span className="arrow">&#9660;</span>
              </h4>
              {expanded['estudiar'] && (
                <ul>
                  <p>Estudiar la continuidad y clasificar las discontinuidades:</p>
                  <ul>
                      <li>
                          <strong>Funciones elementales: </strong>
                          <p>Se refiere a funciones simples como polinomios, exponenciales, logaritmos, trigonométricas, etc. Se estudia la continuidad de estas funciones y se clasifican las discontinuidades, que pueden ser evitables (cuando existe un límite finito en el punto) o inevitables (cuando no existe un límite finito).</p>
                      </li>
                      <li>
                          <strong>Funciones a trozos: </strong>
                          <p>Son funciones definidas por diferentes expresiones en diferentes intervalos. También se analiza la continuidad y se clasifican las discontinuidades.</p>
                      </li>
                  </ul>
                </ul>
              )}
              <h4 onClick={() => toggleExpand('parametro')}>
              Calcular un parámetro a, o dos parámetros a y b, para que una función sea continua:<span className="arrow">&#9660;</span>
              </h4>
              {expanded['parametro'] && (
                <ul>
                  <li>
                      <p>Esto implica encontrar los valores de los parámetros que garantizan la continuidad de una función en un punto o en un intervalo dado.</p>
                  </li>
                </ul>
              )}
              <h4 onClick={() => toggleExpand('ramas')}>
              Calcular las ramas infinitas y las asíntotas de una función <span className="arrow">&#9660;</span>
              </h4>
              {expanded['ramas'] && (
                <ul>
                  <strong>Asíntotas horizontales (AH): </strong>
                  <li>Son líneas horizontales a las que se aproxima la función a medida que la variable independiente tiende a infinito.</li>
                  <strong>Asíntotas verticales (AV): </strong>
                  <li>Son líneas verticales en las que la función tiende a infinito o menos infinito.</li>
                  <strong>Asíntotas oblicuas (AO): </strong>
                  <li>Son líneas inclinadas a las que se aproxima la función a medida que la variable independiente tiende a infinito.</li>
                </ul>
              )}
            </div>
          )}
        </div>
       <div className="quiz-button-container">
          <Link to="/matematicas/tema2/quiz" className="quiz-button">Ir al Quiz</Link>
        </div>
      <div className="about-section-matematicas-tema2">
        <h2>¿Qué es BachInfo?</h2>
        <p>BachInfo es un TFG (Trabajo de Fin de Grado) con el propósito de ayudar a estudiantes de 2º de Bachillerato, empleando una metodología que incluye la revisión del currículo educativo, entrevistas con docentes, y análisis de recursos educativos en línea para identificar contenidos relevantes.</p>
      </div>
    </div>
   </div>
  );
}

export default Tema2Matematicas;
