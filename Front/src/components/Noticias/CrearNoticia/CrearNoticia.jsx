import React, { useState } from 'react';
import './CrearNoticia.css';
import Sidebar from '../../Sidebar/Sidebar.jsx';

function CrearNoticia() {
  const [numNoticia, setNumNoticia] = useState('');
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Verificar si ya existe una noticia con el mismo NumNoticia
    const existeNoticia = await verificarExistenciaNoticia(numNoticia);
    
    if (existeNoticia) {
      alert(`Ya existe una noticia con el número ${numNoticia}. Por favor, elige otro número.`);
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/addNoticia', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          numNoticia,
          titulo,
          descripcion,
          imagen,
        }),
      });
      if (!response.ok) {
        throw new Error('Error al agregar la noticia');
      }
      alert('Noticia agregada correctamente');
      // Limpiar el formulario después de agregar la noticia
      setNumNoticia('');
      setTitulo('');
      setDescripcion('');
      setImagen('');
    } catch (error) {
      console.error('Error al agregar noticia:', error);
      alert('Hubo un error al agregar la noticia');
    }
  };

  const verificarExistenciaNoticia = async (numNoticia) => {
    try {
      const response = await fetch(`http://localhost:8080/noticias/${numNoticia}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.length > 0; // Devuelve true si hay alguna noticia con ese NumNoticia
    } catch (error) {
      console.error('Error al verificar existencia de noticia:', error);
      return false; // En caso de error, se asume que la noticia no existe
    }
  };

  // Obtención de username y rol desde el localStorage
  const username = localStorage.getItem('user');
  const rol = localStorage.getItem('rol');

  return (
    <div className="crear-noticia-container">
      <Sidebar username={username} rol={rol} handleLogout={handleLogout} />
      <h2>Crear Nueva Noticia</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Número de Noticia:
          <input
            type="text"
            value={numNoticia}
            onChange={(e) => setNumNoticia(e.target.value)}
            required
          />
        </label>
        <label>
          Título:
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </label>
        <label>
          Descripción:
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </label>
        <label>
          Imagen (URL o base64):
          <input
            type="text"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            required
          />
        </label>
        <button type="submit">Agregar Noticia</button>
      </form>
    </div>
  );
}

export default CrearNoticia;
