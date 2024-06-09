import React, { useState } from 'react';
import './Tema1Matematicas.css';
import { Link } from 'react-router-dom';

function Tema1Matematicas() {
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
      <div className="main-content-matematicas-tema1">
        <h1>Bienvenido a BachInfo</h1>
        <p>Tu portal de recursos educativos para Bachillerato</p>
        <h2>Tema 1</h2>
        <p>
          Funciones
        </p>
        <div className="dropdown-box">
          <h3 onClick={() => toggleExpand('caracteristicas')}>
            1. Características de una función <span className="arrow">&#9660;</span>
          </h3>
          {expanded['caracteristicas'] && (
            <div className="dropdown-content">
              <p>
              Las funciones tienen características clave que las definen y describen su comportamiento
              </p>
              <h4 onClick={() => toggleExpand('dominio')}>
                Dominio <span className="arrow">&#9660;</span>
              </h4>
              {expanded['dominio'] && (
                <ul>
                  <li>
                      <p>Es el conjunto de todos los valores de entrada para los cuales la función está definida. En otras palabras, son los valores que pueden ser ingresados en la función.</p>
                  </li>
                </ul>
              )}
              <h4 onClick={() => toggleExpand('recorrido')}>
              Recorrido (o rango) <span className="arrow">&#9660;</span>
              </h4>
              {expanded['recorrido'] && (
                <ul>
                  <li>
                      <p>Es el conjunto de todos los valores de salida que produce la función para los valores en su dominio.</p>
                      <p>Es importante notar que no todos los valores de la función pueden ser alcanzados, dependiendo del tipo de función.</p>
                  </li>
                </ul>
              )}
              <h4 onClick={() => toggleExpand('punto')}>
              Puntos de corte con los ejes <span className="arrow">&#9660;</span>
              </h4>
              {expanded['punto'] && (
                <ul>
                  <li>
                      <p>Son los puntos en los cuales la gráfica de la función intersecta los ejes x e y.</p>
                      <p>Estos puntos proporcionan información sobre la relación entre las variables independiente y dependiente.</p>
                  </li>
                </ul>
              )}
              <h4 onClick={() => toggleExpand('simetria')}>
              Simetría <span className="arrow">&#9660;</span>
              </h4>
              {expanded['simetria'] && (
                <ul>
                  <li>
                      <p>Algunas funciones exhiben ciertos tipos de simetría en su gráfica, como simetría par o impar, lo que puede revelar propiedades adicionales sobre la función.</p>
                  </li>
                </ul>
              )}
              
            </div>
          )}
        </div>

        <div className="expandable-section">
          <div className="dropdown-box">
            <h3 onClick={() => toggleExpand('tipos')}>
              2. Tipos de funciones <span className="arrow">&#9660;</span>
            </h3>
              <p>
              Hay varios tipos de funciones, cada una con sus propias características
              </p>
              <h4 onClick={() => toggleExpand('polinomicas')}>
              Polinómicas <span className="arrow">&#9660;</span>
              </h4>
              {expanded['polinomicas'] && (
                <ul>
                  <li>
                      <p>Son funciones que se expresan como una suma de términos de la forma 𝑎𝑥(𝑛), donde 𝑎 es un coeficiente constante, 𝑛 es un número entero no negativo y 𝑥 es la variable independiente. </p>
                      <p>Ejemplos comunes incluyen las funciones lineales, cuadráticas, cúbicas, etc.</p>
                  </li>
                </ul>
              )}
              <h4 onClick={() => toggleExpand('racionales')}>
                Racionales <span className="arrow">&#9660;</span>
              </h4>
              {expanded['racionales'] && (
                <ul>
                  <li>
                      <p>Estas funciones se representan como el cociente de dos polinomios.</p>
                      <p>La función puede tener valores no definidos (o discontinuidades) en los puntos donde el denominador es igual a cero.</p>
                  </li>
                </ul>
              )}
              <h4 onClick={() => toggleExpand('inversa')}>
              De proporcionalidad inversa <span className="arrow">&#9660;</span>
              </h4>
              {expanded['inversa'] && (
                <ul>
                  <li>
                      <p>Son funciones donde una variable es inversamente proporcional a otra.</p>
                      <p>Se pueden expresar como 𝑓(𝑥)=𝑘/𝑥, donde 𝑘 es una constante distinta de cero.</p>
                  </li>
                </ul>
              )}
              <h4 onClick={() => toggleExpand('trozos')}>
              Definidas a trozos <span className="arrow">&#9660;</span>
              </h4>
              {expanded['trozos'] && (
                <ul>
                  <li>
                    <p>Estas funciones están definidas por diferentes expresiones en diferentes intervalos del dominio. </p>
                    <p>Cada expresión define la función en un subconjunto específico del dominio.</p></li>
                </ul>
              )}
          </div>
        </div>
       <div className="quiz-button-container">
          <Link to="/matematicas/tema1/quiz" className="quiz-button">Ir al Quiz</Link>
        </div>
      <div className="about-section-matematicas-tema1">
        <h2>¿Qué es BachInfo?</h2>
        <p>BachInfo es un TFG (Trabajo de Fin de Grado) con el propósito de ayudar a estudiantes de 2º de Bachillerato, empleando una metodología que incluye la revisión del currículo educativo, entrevistas con docentes, y análisis de recursos educativos en línea para identificar contenidos relevantes.</p>
      </div>
    </div>
   </div>
  );
}

export default Tema1Matematicas;
