import React, { useState } from 'react';
import './HistoriaEspaña.css';
import { Link } from 'react-router-dom';
import Sidebar from '../../Sidebar/Sidebar.jsx';

function HistoriaEspaña() {
  const [isSubjectsOpen, setIsSubjectsOpen] = useState(false);

  const toggleSubjects = () => {
      setIsSubjectsOpen(!isSubjectsOpen);
  };

  const username = localStorage.getItem('user');
  const rol = localStorage.getItem('rol');

  const handleLogout = () => {
    // Eliminar el token de autenticación u otra información relacionada con la sesión
    localStorage.removeItem('token');
    // Redirigir a la página de inicio de sesión u otra página después de cerrar sesión
    window.location.href = '/login'; // Redirige a la página de inicio de sesión
  };

  const temas = [
    {
      titulo: "Tema 1",
      descripcion: "La Península Ibérica en la Edad Antigua",
      imagen: "https://brevehistoriahispanica.com/wp-content/uploads/2012/09/tema-1-celtas-e-iberos.png",
      tipo: "imagen",
      link: "/historia-españa/tema1"
    },
    {
      titulo: "Tema 2",
      descripcion: "La Península Ibérica en la Edad Media.",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Pen%C3%ADnsula_ib%C3%A9rica_1150.svg/300px-Pen%C3%ADnsula_ib%C3%A9rica_1150.svg.png",
      tipo: "imagen",
      link: "/historia-españa/tema2"
    },
    {
      titulo: "Tema 3",
      descripcion: "España en la Edad Moderna.",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Reinos_Antiguo_R%C3%A9gimen.svg/400px-Reinos_Antiguo_R%C3%A9gimen.svg.png",
      tipo: "imagen",
      link: "/historia-españa"
    },
    {
      titulo: "Tema 4",
      descripcion: "El siglo XVIII.",
      imagen: "https://estudiamossociales.weebly.com/uploads/2/6/6/3/26630656/726897496.jpg",
      tipo: "imagen",
      link: "/historia-españa"
    },
    {
      titulo: "Tema 5",
      descripcion: "La Crisis de Antiguo Régimen: (1788-1833)",
      imagen: "https://cdn.goconqr.com/uploads/node/image/105307103/desktop_fdc37d79-e66a-4cdc-9b6d-f56b037cca92.jpg",
      tipo: "imagen",
      link: "/historia-españa"
    },
    {
      titulo: "Tema 6",
      descripcion: "España en la Edad Moderna.",
      imagen: "https://curiosidadesdelahistoriablog.com/wp-content/uploads/2015/12/hviii_focog.jpg?w=772&h=628&crop=1",
      tipo: "imagen",
      link: "/historia-españa"
    }
  ];


  return (
    <div className="main-container-historia">
      <Sidebar username={username} rol={rol} handleLogout={handleLogout} /> {/* Usando el componente Sidebar */}
      <div className="main-content-historia" style={{ marginLeft: "250px"}}>
        <h1>Bienvenido a BachInfo</h1>
        <p>Tu portal de recursos educativos para Bachillerato</p>
        <div className="news-section-historia">
          <h2>Historia de España</h2>
          <div className="news-container-historia">
          {temas.map((tema, index) => (
              <Link to={tema.link} className="news-item-historia" key={index}>
                {tema.tipo === "imagen" ? (
                  <img src={tema.imagen} alt={`Imagen de ${tema.titulo}`} className="news-image-historia"/>
                ) : (
                  <iframe
                    className="news-video-historia"
                    src={tema.video}
                    title={`Video de ${tema.titulo}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
                <div className="news-content-historia">
                  <h3>{tema.titulo}</h3>
                  <p>{tema.descripcion}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="about-section-historia">
          <h2>¿Qué es BachInfo?</h2>
          <p>BachInfo es un TFG (Trabajo de Fin de Grado) con el propósito de ayudar a estudiantes de 2º de Bachillerato, empleando una metodología que incluye la revisión del currículo educativo, entrevistas con docentes, y análisis de recursos educativos en línea para identificar contenidos relevantes.</p>
        </div>
      </div>
    </div>
  );
}

export default HistoriaEspaña;
