import React, { useState } from 'react';
import './EliminarAsignatura.css'; // Archivo de estilos CSS para el formulario
import Sidebar from '../../Sidebar/Sidebar.jsx';

const EliminarAsignatura = () => {
    const [numAsignatura, setNumAsignatura] = useState('');
    const [nombreAsignatura, setNombreAsignatura] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/eliminarAsignatura', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ NumAsignatura: numAsignatura, NombreAsignatura: nombreAsignatura }),
            });

            if (!response.ok) {
                throw new Error('Error al eliminar la asignatura');
            }

            alert('Asignatura eliminada correctamente');
            setNumAsignatura('');
            setNombreAsignatura('');
            // Aquí podrías redirigir a otra página o realizar alguna otra acción después de eliminar la asignatura
        } catch (error) {
            console.error('Error al eliminar la asignatura:', error);
            alert('Error al eliminar la asignatura');
        }
    };

    const handleNumAsignaturaChange = (e) => {
        setNumAsignatura(e.target.value);
        // Al cambiar el número de asignatura, se puede llamar a fetchNombreAsignatura() para actualizar el nombre
    };

    const username = localStorage.getItem('user');
    const rol = localStorage.getItem('rol');

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    return (
        <div className="eliminar-asignatura-container">
            <Sidebar username={username} rol={rol} handleLogout={handleLogout} />
            <h2>Eliminar Asignatura</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="numAsignatura">Número de Asignatura:</label>
                <input
                    type="text"
                    id="numAsignatura"
                    value={numAsignatura}
                    onChange={handleNumAsignaturaChange}
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

                <button type="submit">Eliminar Asignatura</button>
            </form>
        </div>
    );
};

export default EliminarAsignatura;
