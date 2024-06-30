import React, { useState, useEffect } from 'react';
import './Matematicas.css';
import { Link } from 'react-router-dom';
import Sidebar from '../../Sidebar/Sidebar.jsx';

function Matematicas() {
  const [temas, setTemas] = useState([]);

  useEffect(() => {
    const fetchTemas = async () => {
      try {
        const response = await fetch('http://localhost:8080/temas/1'); // Cambia la URL según tu configuración
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        setTemas(data); // Asumiendo que `data` ya está ordenado por `NumTema` desde el backend
      } catch (error) {
        console.error('Error al obtener temas:', error);
      }
    };

    fetchTemas();
  }, []);

  const [isSubjectsOpen, setIsSubjectsOpen] = useState(false);

  const toggleSubjects = () => {
    setIsSubjectsOpen(!isSubjectsOpen);
  };

  const username = localStorage.getItem('user');
  const rol = localStorage.getItem('rol');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  const sortedTemas = temas.sort((a, b) => a.NumTema - b.NumTema);

  return (
    <div className="main-container-historia">
      <Sidebar username={username} rol={rol} handleLogout={handleLogout} />
      <div className="main-content-matematicas" style={{ marginLeft: "250px"}}>
        <h1>Bienvenido a BachInfo</h1>
        <p>Tu portal de recursos educativos para Bachillerato</p>
        <div className="news-section-matematicas">
          <h2>Matemáticas</h2>
          <div className="news-container-matematicas">
          {sortedTemas.map((tema, index) => (
            <Link to={`http://localhost:5173/matematicas/tema${tema.NumTema}`} className="news-item-matematicas" key={index}>
              <img src={`data:image/jpeg;base64,${tema.Imagen.toString('base64')}`} alt={`Imagen de ${tema.Titulo}`} className="news-image-matematicas"/>
              <div className="news-content-matematicas">
                <h3>{tema.Titulo}</h3>
                <p>{tema.Subtitulo}</p>
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
