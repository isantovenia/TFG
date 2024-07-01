import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ username, rol, handleLogout }) => {
    const [isSubjectsOpen, setIsSubjectsOpen] = useState(false);
    const [isTopicsOpen, setIsTopicsOpen] = useState(false);
    const [isQuestionsOpen, setIsQuestionsOpen] = useState(false);
    const [isUsuariosOpen, setIsUsuariosOpen] = useState(false);
    const [isNoticiasOpen, setIsNoticiasOpen] = useState(false);
    const [asignaturas, setAsignaturas] = useState([]);

    useEffect(() => {
        fetchAsignaturas();
    }, []);

    const fetchAsignaturas = async () => {
        try {
            const response = await fetch('http://localhost:8080/asignaturas');
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

    const toggleSubjects = () => {
        setIsSubjectsOpen(!isSubjectsOpen);
    };

    const toggleTopics = () => {
        setIsTopicsOpen(!isTopicsOpen);
    };

    const toggleQuestions = () => {
        setIsQuestionsOpen(!isQuestionsOpen);
    };

    const toggleUsuarios = () => {
        setIsUsuariosOpen(!isUsuariosOpen);
    };

    const toggleNoticias = () => {
        setIsNoticiasOpen(!isNoticiasOpen);
    };

    return (
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
                    <li>
                        <a href="/landing-page">
                            <i className="icon-home"></i>Página de Inicio
                        </a>
                    </li>
                    {(rol === 'ROLE_ADMIN' || rol === 'ROLE_MODERATOR') && (
                        <li><a href="/correo"><i className="icon-stats"></i>Contactanos</a></li>
                    )}
                    <li className="submenu-toggle">
                        <a href="#" onClick={toggleSubjects}>
                            <i className="icon-book"></i>Asignaturas
                            <span className="arrow">{isSubjectsOpen ? '▲' : '▼'}</span>
                        </a>
                    </li>
                    {isSubjectsOpen && (
                        <ul className="submenu">
                            {asignaturas.map(asignatura => (
                                <li key={asignatura.NumAsignatura}><a href={`/asignatura/${asignatura.NumAsignatura}`}>{asignatura.NombreAsignatura}</a></li>
                            ))}
                        </ul>
                    )}
                    {rol === 'ROLE_ADMIN' && (
                        <>
                            <li className="submenu-toggle">
                                <a href="#" onClick={toggleTopics}>
                                    <i className="icon-folder"></i>Temas
                                    <span className="arrow">{isTopicsOpen ? '▲' : '▼'}</span>
                                </a>
                            </li>
                            {isTopicsOpen && (
                                <ul className="submenu">
                                    <li><a href="/addTema">Añadir Tema</a></li>
                                    <li><a href="/editTema">Editar Tema</a></li>
                                    <li><a href="/removeTemas">Eliminar Tema</a></li>
                                </ul>
                            )}
                        </>
                    )}
                    {rol === 'ROLE_ADMIN' && (
                        <>
                            <li className="submenu-toggle">
                                <a href="#" onClick={toggleQuestions}>
                                    <i className="icon-question"></i>Preguntas
                                    <span className="arrow">{isQuestionsOpen ? '▲' : '▼'}</span>
                                </a>
                            </li>
                            {isQuestionsOpen && (
                                <ul className="submenu">
                                    <li><a href="/addQuestion">Añadir Pregunta</a></li>
                                    <li><a href="/editQuestion">Editar Pregunta</a></li>
                                    <li><a href="/removeQuestion">Eliminar Pregunta</a></li>
                                </ul>
                            )}
                        </>
                    )}
                    {rol === 'ROLE_ADMIN' && (
                        <>
                            <li className="submenu-toggle">
                                <a href="#" onClick={toggleUsuarios}>
                                    <i className="icon-question"></i>Usuarios
                                    <span className="arrow">{isUsuariosOpen ? '▲' : '▼'}</span>
                                </a>
                            </li>
                            {isUsuariosOpen && (
                                <ul className="submenu">
                                     <li><a href="/dashboard">Ver Usuarios</a></li>
                                     <li><a href="/editUsuario">Editar Usuarios</a></li>
                                     <li><a href="/eliminarUsuario">Eliminar Usuarios</a></li>
                                </ul>
                            )}
                        </>
                    )}
                    {rol === 'ROLE_ADMIN' && (
                        <>
                            <li className="submenu-toggle">
                                <a href="#" onClick={toggleNoticias}>
                                    <i className="icon-question"></i>Noticias
                                    <span className="arrow">{isNoticiasOpen ? '▲' : '▼'}</span>
                                </a>
                            </li>
                            {isNoticiasOpen && (
                                <ul className="submenu">
                                     <li><a href="/crearNoticia">Crear Noticia</a></li>
                                     <li><a href="/editarNoticia">Editar Noticia</a></li>
                                     <li><a href="/eliminarNoticia">Eliminar Noticia</a></li>
                                </ul>
                            )}
                        </>
                    )}
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
    );
};

export default Sidebar;
