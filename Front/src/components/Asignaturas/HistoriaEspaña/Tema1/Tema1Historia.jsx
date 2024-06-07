import React, { useState } from 'react';
import './Tema1Historia.css';
import { Link } from 'react-router-dom';

function Tema1Historia() {
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
    <div className="main-container-historia">
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
      <div className="main-content-historia-tema1">
        <h1>Bienvenido a BachInfo</h1>
        <p>Tu portal de recursos educativos para Bachillerato</p>
        <h2>Tema 1</h2>
        <p>
          La Península Ibérica en la Edad Antigua: los tiempos prerromanos y la Hispania romana.
        </p>
        <h3 onClick={() => toggleExpand('homini')}>
          1. El proceso de hominización en la Península Ibérica (del Paleolítico a la Edad del Bronce) <span className="arrow">&#9660;</span>
        </h3>
        {expanded['homini'] && (
          <div>
            <p>
              La historia de la Península Ibérica se remonta a tiempos muy antiguos, cuando los primeros grupos de humanos llegaron a la región durante el Paleolítico temprano. A lo largo de milenios, estas sociedades cazadoras y recolectoras evolucionaron, adaptándose a los desafíos del entorno y desarrollando nuevas técnicas y herramientas para sobrevivir.
            </p>
            <h4 onClick={() => toggleExpand('paleolitico')}>
              Paleolítico <span className="arrow">&#9660;</span>
            </h4>
            {expanded['paleolitico'] && (
              <ul>
                <li>Primeros asentamientos: Los primeros humanos llegaron a la Península Ibérica hace aproximadamente 1.2 millones de años, como lo demuestran los restos arqueológicos encontrados en yacimientos como Atapuerca.</li>
                <li>Cultura material: Durante el Paleolítico, los grupos humanos fabricaban herramientas de piedra, como hachas y raspadores, para cazar animales y procesar alimentos.</li>
                <li>Arte rupestre: Una de las manifestaciones más fascinantes del Paleolítico en la Península Ibérica es el arte rupestre, como las pinturas y grabados encontrados en cuevas como Altamira y Lascaux.</li>
              </ul>
            )}
            <h4 onClick={() => toggleExpand('neolitico')}>
              Neolítico y Edad del Bronce <span className="arrow">&#9660;</span>
            </h4>
            {expanded['neolitico'] && (
              <ul>
                <li>Transición a la agricultura: Durante el Neolítico, las sociedades ibéricas comenzaron a practicar la agricultura y la ganadería, lo que les permitió establecer asentamientos permanentes y desarrollar formas más complejas de organización social.</li>
                <li>Cultura megalítica: Se construyeron monumentos megalíticos, como los dólmenes y los menhires, que aún se pueden ver en la Península Ibérica, como los de Antequera y Évora.</li>
                <li>Metalurgia: En la Edad del Bronce, se introdujo el uso del bronce en la fabricación de herramientas y armas, lo que marcó un importante avance tecnológico en la región.</li>
              </ul>
            )}
          </div>
        )}
        <h3 onClick={() => toggleExpand('preromano')}>
          2. Los tiempos prerromanos: invasiones indoeuropeas, colonizaciones históricas, Tartessos y el mundo de los iberos (siglos IX a 111 a.C.) <span className="arrow">&#9660;</span>
        </h3>
        {expanded['preromano'] && (
          <div>
            <p>
              La historia de la Península Ibérica se remonta a tiempos muy antiguos, cuando los primeros grupos de humanos llegaron a la región durante el Paleolítico temprano. A lo largo de milenios, estas sociedades cazadoras y recolectoras evolucionaron, adaptándose a los desafíos del entorno y desarrollando nuevas técnicas y herramientas para sobrevivir.
            </p>
            <h4 onClick={() => toggleExpand('paleolitico')}>
              Paleolítico <span className="arrow">&#9660;</span>
            </h4>
            {expanded['paleolitico'] && (
              <ul>
                <li>Primeros asentamientos: Los primeros humanos llegaron a la Península Ibérica hace aproximadamente 1.2 millones de años, como lo demuestran los restos arqueológicos encontrados en yacimientos como Atapuerca.</li>
                <li>Cultura material: Durante el Paleolítico, los grupos humanos fabricaban herramientas de piedra, como hachas y raspadores, para cazar animales y procesar alimentos.</li>
                <li>Arte rupestre: Una de las manifestaciones más fascinantes del Paleolítico en la Península Ibérica es el arte rupestre, como las pinturas y grabados encontrados en cuevas como Altamira y Lascaux.</li>
              </ul>
            )}
            <h4 onClick={() => toggleExpand('neolitico')}>
              Neolítico y Edad del Bronce <span className="arrow">&#9660;</span>
            </h4>
            {expanded['neolitico'] && (
              <ul>
                <li>Transición a la agricultura: Durante el Neolítico, las sociedades ibéricas comenzaron a practicar la agricultura y la ganadería, lo que les permitió establecer asentamientos permanentes y desarrollar formas más complejas de organización social.</li>
                <li>Cultura megalítica: Se construyeron monumentos megalíticos, como los dólmenes y los menhires, que aún se pueden ver en la Península Ibérica, como los de Antequera y Évora.</li>
                <li>Metalurgia: En la Edad del Bronce, se introdujo el uso del bronce en la fabricación de herramientas y armas, lo que marcó un importante avance tecnológico en la región.</li>
              </ul>
            )}
          </div>
        )}
        <h3 onClick={() => toggleExpand('preromano')}>
          3. La conquista romana de la península Ibérica y el proceso de romanización. La Hispania romana (siglos 111 a.C. -IV d.C.).<span className="arrow">&#9660;</span>
        </h3>
        {expanded['preromano'] && (
          <div>
            <p>
              La historia de la Península Ibérica se remonta a tiempos muy antiguos, cuando los primeros grupos de humanos llegaron a la región durante el Paleolítico temprano. A lo largo de milenios, estas sociedades cazadoras y recolectoras evolucionaron, adaptándose a los desafíos del entorno y desarrollando nuevas técnicas y herramientas para sobrevivir.
            </p>
            <h4 onClick={() => toggleExpand('paleolitico')}>
              Paleolítico <span className="arrow">&#9660;</span>
            </h4>
            {expanded['paleolitico'] && (
              <ul>
                <li>Primeros asentamientos: Los primeros humanos llegaron a la Península Ibérica hace aproximadamente 1.2 millones de años, como lo demuestran los restos arqueológicos encontrados en yacimientos como Atapuerca.</li>
                <li>Cultura material: Durante el Paleolítico, los grupos humanos fabricaban herramientas de piedra, como hachas y raspadores, para cazar animales y procesar alimentos.</li>
                <li>Arte rupestre: Una de las manifestaciones más fascinantes del Paleolítico en la Península Ibérica es el arte rupestre, como las pinturas y grabados encontrados en cuevas como Altamira y Lascaux.</li>
              </ul>
            )}
            <h4 onClick={() => toggleExpand('neolitico')}>
              Neolítico y Edad del Bronce <span className="arrow">&#9660;</span>
            </h4>
            {expanded['neolitico'] && (
              <ul>
                <li>Transición a la agricultura: Durante el Neolítico, las sociedades ibéricas comenzaron a practicar la agricultura y la ganadería, lo que les permitió establecer asentamientos permanentes y desarrollar formas más complejas de organización social.</li>
                <li>Cultura megalítica: Se construyeron monumentos megalíticos, como los dólmenes y los menhires, que aún se pueden ver en la Península Ibérica, como los de Antequera y Évora.</li>
                <li>Metalurgia: En la Edad del Bronce, se introdujo el uso del bronce en la fabricación de herramientas y armas, lo que marcó un importante avance tecnológico en la región.</li>
              </ul>
            )}
          </div>
        )}
       <div className="quiz-button-container">
          <Link to="/historia-españa/tema1/quiz" className="quiz-button">Ir al Quiz</Link>
        </div>
      <div className="about-section-historia-tema1">
        <h2>¿Qué es BachInfo?</h2>
        <p>BachInfo es un TFG (Trabajo de Fin de Grado) con el propósito de ayudar a estudiantes de 2º de Bachillerato, empleando una metodología que incluye la revisión del currículo educativo, entrevistas con docentes, y análisis de recursos educativos en línea para identificar contenidos relevantes.</p>
      </div>
    </div>
   </div>
  );
}

export default Tema1Historia;
