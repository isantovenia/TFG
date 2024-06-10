import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';
import { Link } from 'react-router-dom';

function Dashboard() {

  const [data, setData] = useState([]);

  useEffect(() => {
    // Cambia la URL si es necesario
    axios.get('http://localhost:8080/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
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
        <div className="main-content-historia" style={{ marginLeft: "250px"}}>
        <div className="data-table-container">
            <h2>Data from MySQL</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  {/* Agrega más encabezados de columna según tu estructura de datos */}
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>{row.id}</td>
                    <td>{row.username}</td>
                    <td>{row.email}</td>
                    {/* Agrega más celdas según tu estructura de datos */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="about-section-historia">
            <h2>¿Qué es BachInfo?</h2>
            <p>BachInfo es un TFG (Trabajo de Fin de Grado) con el propósito de ayudar a estudiantes de 2º de Bachillerato, empleando una metodología que incluye la revisión del currículo educativo, entrevistas con docentes, y análisis de recursos educativos en línea para identificar contenidos relevantes.</p>
          </div>
        </div>
      </div>
    );
}

export default Dashboard;
