import React, { useState } from 'react';
import './RemoveQuestion.css';
import Sidebar from '../../../components/Sidebar/Sidebar.jsx';

function RemoveQuestion() {
  const [numTest, setNumTest] = useState('');
  const [pregunta, setPregunta] = useState('');

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
      const response = await fetch('http://localhost:8080/removePregunta', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          numTest,
          pregunta,
        }),
      });
      if (!response.ok) {
        throw new Error('Error al eliminar la pregunta');
      }
      alert('Pregunta eliminada correctamente');
      // Limpiar el formulario después de eliminar la pregunta
      setNumTest('');
      setPregunta('');
    } catch (error) {
      console.error('Error al eliminar pregunta:', error);
      alert('Hubo un error al eliminar la pregunta');
    }
  };

  return (
    <div className="remove-pregunta-container">
      <Sidebar username={username} rol={rol} handleLogout={handleLogout} /> {/* Usando el componente Sidebar */}
      <h2>Eliminar Pregunta</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Número de Test:
          <input
            type="text"
            value={numTest}
            onChange={(e) => setNumTest(e.target.value)}
            required
          />
        </label>
        <label>
          Pregunta:
          <input
            type="text"
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
            required
          />
        </label>
        <button type="submit">Eliminar Pregunta</button>
      </form>
    </div>
  );
}

export default RemoveQuestion;
