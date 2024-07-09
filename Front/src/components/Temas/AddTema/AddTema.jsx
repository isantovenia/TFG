import React, { useState, useEffect } from 'react';
import './AddTema.css';
import Sidebar from '../../Sidebar/Sidebar.jsx';

function AddTema() {
  const [numAsignatura, setNumAsignatura] = useState('');
  const [numTema, setNumTema] = useState('');
  const [imagen, setImagen] = useState('');
  const [titulo, setTitulo] = useState('');
  const [subtitulo, setSubtitulo] = useState('');

  const [asignaturas, setAsignaturas] = useState([]);

  useEffect(() => {
    const fetchAsignaturas = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_URL + '/asignaturas');
        if (!response.ok) {
          throw new Error('Error al obtener las asignaturas');
        }
        const data = await response.json();
        setAsignaturas(data);
      } catch (error) {
        console.error('Error fetching asignaturas:', error);
        // Handle error as needed
      }
    };

    fetchAsignaturas();
  }, []);

  const handleLogout = () => {
    // Eliminar el token de autenticación u otra información relacionada con la sesión
    localStorage.removeItem('token');
    // Redirigir a la página de inicio de sesión u otra página después de cerrar sesión
    window.location.href = '/login'; // Redirige a la página de inicio de sesión
  };

  const username = localStorage.getItem('user');
  const rol = localStorage.getItem('rol');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagen(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(import.meta.env.VITE_URL + '/addTema', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          numAsignatura,
          numTema,
          imagen,
          titulo,
          subtitulo,
        }),
      });
      if (!response.ok) {
        throw new Error('Error al agregar el tema');
      }
      alert('Tema agregado correctamente');
      // Limpiar el formulario después de agregar el tema
      setNumAsignatura('');
      setNumTema('');
      setImagen('');
      setTitulo('');
      setSubtitulo('');
    } catch (error) {
      console.error('Error al agregar tema:', error);
      alert('Hubo un error al agregar el tema');
    }
  };

  return (
    <div className="add-tema-container">
      <Sidebar username={username} rol={rol} handleLogout={handleLogout} /> {/* Usando el componente Sidebar */}
      <h2>Añadir Nuevo Tema</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Número de Asignatura:
          <select
            value={numAsignatura}
            onChange={(e) => setNumAsignatura(e.target.value)}
            required
          >
            <option value="">Selecciona una asignatura</option>
            {asignaturas.map(asignatura => (
              <option key={asignatura.NumAsignatura} value={asignatura.NumAsignatura}>
                {asignatura.NombreAsignatura}
              </option>
            ))}
          </select>
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
        <label>
          Imagen:
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
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
          Subtítulo:
          <textarea
            value={subtitulo}
            onChange={(e) => setSubtitulo(e.target.value)}
            required
          />
        </label>
        <button type="submit">Agregar Tema</button>
      </form>
    </div>
  );
}

export default AddTema;
