import React from 'react';
import './Matematicas.css'; // Cambiado el nombre del archivo CSS
import { Link } from 'react-router-dom';

function Matematicas() { // Cambiado el nombre de la función
  const temas = [
    {
      titulo: "Tema 1",
      descripcion: "La Península Ibérica en la Edad Antigua: Los tiempos prerromanos y la Hispania romana.",
      imagen: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzeFSXi0X8k5cfOKnLmK3VVGWltergRKawTwmU6JR-DYNHVHomCsEb3g0DUo587sd7UaAcguToQq8QC8io0Zg35F89IGiRXVVCpr-04VGR7KWvINdFIJzEl_NulcUB4zOReKOTMFhIFMg/s1600/provinciashispania.jpg",
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
      imagen: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh7404tnUyfgxxEXCY-SPLhhF4e06XZN0I1WpJBi6siSbL7FIMIbJqcWMCMlsYHF1vavV-fnwE76-CXjYpOzc9y3exQMR65NtJ1ye9WluLmaMRxyAHLSE4kPbL2wqbJCl_zWE4DJlHod8A/s1600/reyescatolicosmapa.jpg",
      tipo: "imagen",
      link: "/historia-españa/tema3"
    },
    {
      titulo: "Tema 4",
      descripcion: "El siglo XVIII.",
      imagen: "https://humanidades.com/wp-content/uploads/2023/08/Espana-en-el-siglo-XVIII-felipe-V.jpg",
      tipo: "imagen",
      link: "/historia-españa/tema3"
    },
    {
      titulo: "Tema 5",
      descripcion: "La Crisis de Antiguo Régimen: (1788-1833): liberalismo frente a absolutismo.",
      imagen: "https://i.ytimg.com/vi/qZDBt8tSYDg/maxresdefault.jpg",
      tipo: "imagen",
      link: "/historia-españa/tema3"
    },
    {
      titulo: "Tema 6",
      descripcion: "España en la Edad Moderna.",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7pY1NhQfhr1c3M4085ZollYtQqcGmpVztCzVdd4lXhQ&s",
      tipo: "imagen",
      link: "/historia-españa/tema3"
    }
  ];

  return (
    <div className="main-container-historia">
      <div className="banner-historia">
        <Link to="/landing-page">
          <img 
            src="https://www.comunidadbaratz.com/wp-content/uploads/Instrucciones-a-tener-en-cuenta-sobre-como-se-abre-un-libro-nuevo.jpg" 
            alt="Logo" 
            className="logo-landing" 
          />
        </Link>
        <div className="banner-right-historia">
          <a href="mailto:info@tudominio.com" className="contact-btn-historia">
            Contacto
          </a>
          <div className="dropdown-historia">
            <button className="dropbtn-historia">Asignaturas</button>
            <div className="dropdown-content-historia">
              <Link to="/historia-españa">Historia de España</Link>
              <Link to="/matematicas">Matemáticas</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="content-historia">
        <h1>Matematicas</h1>
        <p>Todos los temas y contenidos sobre los diversos temas de Historia de España</p>
        <div className="news-section-historia">
          <h2>Últimas Noticias</h2>
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
          <h2>Sobre esta página</h2>
          <p>Esta página está dedicada a proporcionar recursos educativos sobre la historia de España para estudiantes y entusiastas de la historia.</p>
        </div>
      </div>
    </div>
  );
}

export default Matematicas;
