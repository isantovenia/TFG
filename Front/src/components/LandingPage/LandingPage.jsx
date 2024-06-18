import React, { useState } from 'react';
import './LandingPage.css';
import Sidebar from '../Sidebar/Sidebar.jsx';
import { Link } from 'react-router-dom';

function LandingPage() {
  const [isSubjectsOpen, setIsSubjectsOpen] = useState(false);

    const toggleSubjects = () => {
        setIsSubjectsOpen(!isSubjectsOpen);
    };

    const handleLogout = () => {
      // Eliminar el token de autenticación u otra información relacionada con la sesión
      localStorage.removeItem('token');
      // Redirigir a la página de inicio de sesión u otra página después de cerrar sesión
      window.location.href = '/login'; // Redirige a la página de inicio de sesión
    };

    const username = localStorage.getItem('user');
    const rol = localStorage.getItem('rol');
  
    const noticias = [
        {
          titulo: "Fechas EBAU",
          descripcion: "¡Ya estan aqui las fechas oficiales de la EBAU de este curso academico 2023-2024! Desde el Lunes 5 de Junio  al Miercoles 7 la convocatoria ordinaria y del Miercoles 3 de Julio al Viernes 5",
          imagen: "https://yaq.es/sites/default/files/imagecache/slideshow_promo_big/images/fechas-selectividad-2024.jpg",
          tipo: "imagen"
        },
        {
          titulo: "Aprende más y mejor en Historia de España con estos videos.",
          descripcion: "Esta es la descripción de la noticia 2.",
          video: "https://www.youtube.com/embed/0x5A4Jji8k4?list=PLXU5k6pAbxGrlLbcyEyAQ_DQnJwg4dDUb",
          tipo: "video"
        },
        {
          titulo: "Noticia 3",
          descripcion: "¿Quieres saber cuando salen las notas? Descubrelo y esta atento a ello.",
          imagen: "https://fotografias.larazon.es/clipping/cmsimages02/2023/05/31/02569868-F8BB-4552-A9C7-028D943A701F/fechas-comunidades-autonomas-ebau-2023_58.jpg?crop=1905,1080,x0,y0&width=1000&height=567&optimize=high&format=webply",
          tipo: "imagen"
        }
      ];

    return (
        <div className="container">
        <Sidebar username={username} rol={rol} handleLogout={handleLogout} /> {/* Usando el componente Sidebar */}
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
