import React, { useState } from 'react';
import './Matematicas.css';
import { Link } from 'react-router-dom';
import Sidebar from '../../Sidebar/Sidebar.jsx';

function Matematicas() {
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
      descripcion: "Funciones",
      imagen: "https://concepto.de/wp-content/uploads/2019/12/funcion-matematica-e1577482849653.jpg",
      tipo: "imagen",
      link: "/matematicas/tema1"
    },
    {
      titulo: "Tema 2",
      descripcion: "Limites",
      imagen: "https://i.ytimg.com/vi/o2UTk8bsLS0/maxresdefault.jpg",
      tipo: "imagen",
      link: "/matematicas/tema2"
    },
    {
      titulo: "Tema 3",
      descripcion: "Derivadas",
      imagen: "https://i.ytimg.com/vi/uK4-s0ojHFg/maxresdefault.jpg",
      tipo: "imagen",
      link: "/matematicas/tema3"
    },
    {
      titulo: "Tema 4",
      descripcion: "Aplicaciones de las derivadas",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSVwzBSE6wxpfCb3SdePR0VA8tK7HokyMKWg&s",
      tipo: "imagen",
      link: "/matematicas/tema3"
    },
    {
      titulo: "Tema 5",
      descripcion: "Integrales",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmiQ4hLZ6vGQWPt3tKGZRMStPVNTNbE5JiUA&s",
      tipo: "imagen",
      link: "/matematicas/tema3"
    },
    {
      titulo: "Tema 6",
      descripcion: "Matrices",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2uE_vmb6-A35XfltEbnAQyrvBcCbxBP3Y4A&s",
      tipo: "imagen",
      link: "/matematicas/tema3"
    }
  ];


  return (
    <div className="main-container-historia">
        <Sidebar username={username} rol={rol} handleLogout={handleLogout} /> {/* Usando el componente Sidebar */}
        <div className="main-content-matematicas" style={{ marginLeft: "250px"}}>
        <h1>Bienvenido a BachInfo</h1>
        <p>Tu portal de recursos educativos para Bachillerato</p>
        <div className="news-section-matematicas">
          <h2>Matemáticas</h2>
          <div className="news-container-matematicas">
          {temas.map((tema, index) => (
              <Link to={tema.link} className="news-item-matematicas" key={index}>
                {tema.tipo === "imagen" ? (
                  <img src={tema.imagen} alt={`Imagen de ${tema.titulo}`} className="news-image-matematicas"/>
                ) : (
                  <iframe
                    className="news-video-matematicas"
                    src={tema.video}
                    title={`Video de ${tema.titulo}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
                <div className="news-content-matematicas">
                  <h3>{tema.titulo}</h3>
                  <p>{tema.descripcion}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="about-section-matematicas">
          <h2>¿Qué es BachInfo?</h2>
          <p>BachInfo es un TFG (Trabajo de Fin de Grado) con el propósito de ayudar a estudiantes de 2º de Bachillerato, empleando una metodología que incluye la revisión del currículo educativo, entrevistas con docentes, y análisis de recursos educativos en línea para identificar contenidos relevantes.</p>
        </div>
      </div>
    </div>
  );
}

export default Matematicas;
