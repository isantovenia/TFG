import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DashboardUsuarios.css';
import Sidebar from '../Sidebar/Sidebar.jsx';
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
        <Sidebar username={username} rol={rol} handleLogout={handleLogout} /> {/* Usando el componente Sidebar */}
        <div className="main-content-historia" style={{ marginLeft: "250px"}}>
        <div className="data-table-container">
            <h2>Data from MySQL</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Creado</th>
                  <th>Actualizado</th>
                  
                  {/* Agrega más encabezados de columna según tu estructura de datos */}
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>{row.id}</td>
                    <td>{row.username}</td>
                    <td>{row.email}</td>
                    <td>{row.createdAt}</td>
                    <td>{row.updatedAt}</td>
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
