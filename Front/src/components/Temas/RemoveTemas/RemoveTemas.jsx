import React, { useState } from 'react';
import './RemoveTemas.css';
import Sidebar from '../../Sidebar/Sidebar.jsx';

function RemoveTemas() {
  const [numAsignatura, setNumAsignatura] = useState('');
  const [numTema, setNumTema] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/removeTema', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          numAsignatura,
          numTema,
        }),
      });
      if (!response.ok) {
        throw new Error('Error al eliminar el tema');
      }
      alert('Tema eliminado correctamente');
      // Limpiar el formulario después de eliminar el tema
      setNumAsignatura('');
      setNumTema('');
    } catch (error) {
      console.error('Error al eliminar tema:', error);
      alert('Hubo un error al eliminar el tema');
    }
  };

  return (
    <div className="remove-tema-container">
      <Sidebar username={username} rol={rol} handleLogout={handleLogout} /> {/* Usando el componente Sidebar */}
      <h2>Eliminar Tema</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Número de Asignatura:
          <input
            type="text"
            value={numAsignatura}
            onChange={(e) => setNumAsignatura(e.target.value)}
            required
          />
        </label>
        <label>
          Número de Tema:
          <input
            type="text"
            value={numTema}
            onChange={(e) => setNumTema(e.target.value)}
            required
          />
        </label>
        <button type="submit">Eliminar Tema</button>
      </form>
    </div>
  );
}

export default RemoveTemas;
