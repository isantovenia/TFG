import React, { useState } from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

function LandingPage() {
  const [isSubjectsOpen, setIsSubjectsOpen] = useState(false);

    const toggleSubjects = () => {
        setIsSubjectsOpen(!isSubjectsOpen);
    };

    const noticias = [
        {
          titulo: "Fechas EBAU",
          descripcion: "¡Ya estan aqui las fechas oficiales de la EBAU de este curso academico 2023-2024! Desde el Lunes 5 de Junio  al Miercoles 7 la convocatoria ordinaria y del Miercoles 3 de Julio al Viernes 5",
          imagen: "https://yaq.es/sites/default/files/imagecache/slideshow_promo_big/images/fechas-selectividad-2024.jpg",
          tipo: "imagen"
        },
        {
          titulo: "Aprende más y mejor en Historia de España con estos videos",
          descripcion: "Esta es la descripción de la noticia 2.",
          video: "https://www.youtube.com/embed/0x5A4Jji8k4?list=PLXU5k6pAbxGrlLbcyEyAQ_DQnJwg4dDUb",
          tipo: "video"
        },
        {
          titulo: "Noticia 3",
          descripcion: "Esta es la descripción de la noticia 3.",
          imagen: "https://via.placeholder.com/150",
          tipo: "imagen"
        }
      ];

    return (
        <div className="container">
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
                        <li><a href="#"><i className="icon-stats"></i>Ver Estadísticas</a></li>
                        <li><a href="#"><i className="icon-users"></i>Ver Usuarios</a></li>
                        <li><a href="#"><i className="icon-data"></i>Ver Datos Tests</a></li>
                        <li><a href="#"><i className="icon-profile"></i>Editar Perfil</a></li>
                    </ul>
                </nav>
                <div className="footer">
                    <p>nombre</p>
                    <p>rol</p>
                    <a href="#" className="logout"><i className="icon-logout"></i>salirse</a>
                </div>
            </div>
      <div className="main-content" style={{ marginLeft: "250px" }}>
        <h1>Bienvenido a BachInfo</h1>
        <p>Tu portal de recursos educativos para Bachillerato</p>
        <div className="news-section">
          <h2>Últimas Noticias</h2>
          <div className="news-container">
            {noticias.map((noticia, index) => (
              <div className="news-item" key={index}>
                {noticia.tipo === "imagen" ? (
                  <img src={noticia.imagen} alt={`Imagen de ${noticia.titulo}`} className="news-image"/>
                ) : (
                  <iframe
                    className="news-video"
                    src={noticia.video}
                    title={`Video de ${noticia.titulo}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
                <div className="news-content">
                  <h3>{noticia.titulo}</h3>
                  <p>{noticia.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="about-section">
          <h2>¿Qué es BachInfo?</h2>
          <p>BachInfo es un TFG (Trabajo de Fin de Grado) con el propósito de ayudar a estudiantes de 2º de Bachillerato, empleando una metodología que incluye la revisión del currículo educativo, entrevistas con docentes, y análisis de recursos educativos en línea para identificar contenidos relevantes.</p>
        </div>
      </div>
    </div>
    );
}

export default LandingPage;
