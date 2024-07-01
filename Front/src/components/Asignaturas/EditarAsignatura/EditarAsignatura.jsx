import React, { useState } from 'react';
import './EditarAsignatura.css'; // Archivo de estilos CSS para el formulario
import Sidebar from '../../Sidebar/Sidebar.jsx';

const EditarAsignatura = () => {
    const [numAsignatura, setNumAsignatura] = useState('');
    const [nombreAsignatura, setNombreAsignatura] = useState('');
    const [colorFondo, setColorFondo] = useState('#ffffff'); // Color de fondo por defecto en blanco

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            NumAsignatura: numAsignatura,
            NombreAsignatura: nombreAsignatura,
            ColorFondo: colorFondo
        };

        try {
            const response = await fetch('http://localhost:8080/editAsignatura', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Error al editar la asignatura');
            }

            alert('Asignatura editada correctamente');
            // Aquí podrías redirigir a otra página o realizar alguna otra acción después de editar la asignatura
        } catch (error) {
            console.error('Error al enviar la asignatura:', error);
            alert('Error al editar la asignatura');
        }
    };

    const handleColorChange = (e) => {
        setColorFondo(e.target.value);
    };

    const username = localStorage.getItem('user');
    const rol = localStorage.getItem('rol');

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
      };

    return (
        <div className="editar-asignatura-container">
            <Sidebar username={username} rol={rol} handleLogout={handleLogout} />
            <h2>Editar Asignatura</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="numAsignatura">Número de Asignatura:</label>
                <input
                    type="text"
                    id="numAsignatura"
                    value={numAsignatura}
                    onChange={(e) => setNumAsignatura(e.target.value)}
                    required
                />

                <label htmlFor="nombreAsignatura">Nombre de la Asignatura:</label>
                <input
                    type="text"
                    id="nombreAsignatura"
                    value={nombreAsignatura}
                    onChange={(e) => setNombreAsignatura(e.target.value)}
                    required
                />

                <label htmlFor="colorFondo">Color de Fondo:</label>
                <input
                    type="color"
                    id="colorFondo"
                    value={colorFondo}
                    onChange={handleColorChange}
                    style={{ marginLeft: '10px' }}
                    required
                />
                <button type="submit">Editar Asignatura</button>
            </form>
        </div>
    );
};

export default EditarAsignatura;
