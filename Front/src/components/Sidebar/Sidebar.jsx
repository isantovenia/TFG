import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ username, rol, handleLogout }) => {
    const [isSubjectsOpen, setIsSubjectsOpen] = useState(false);
    const [isTopicsOpen, setIsTopicsOpen] = useState(false);
    const [isQuestionsOpen, setIsQuestionsOpen] = useState(false);
    const [isUsuariosOpen, setIsUsuariosOpen] = useState(false);
    const [isNoticiasOpen, setIsNoticiasOpen] = useState(false);
    const [isAsignaturaOpen, setIsAsignaturaOpen] = useState(false);
    const [asignaturas, setAsignaturas] = useState([]);

    useEffect(() => {
        fetchAsignaturas();
    }, []);

    const toggleSubjects = () => setIsSubjectsOpen(!isSubjectsOpen);
    const toggleTopics = () => setIsTopicsOpen(!isTopicsOpen);
    const toggleQuestions = () => setIsQuestionsOpen(!isQuestionsOpen);
    const toggleUsuarios = () => setIsUsuariosOpen(!isUsuariosOpen);
    const toggleNoticias = () => setIsNoticiasOpen(!isNoticiasOpen);
    const toggleAsignatura = () => setIsAsignaturaOpen(!isAsignaturaOpen);

    const fetchAsignaturas = async () => {
        try {
            const response = await fetch(import.meta.env.VITE_URL + '/asignaturas');
            if (!response.ok) throw new Error('Error al obtener las asignaturas');
            const data = await response.json();
            setAsignaturas(data);
        } catch (error) {
            console.error('Error fetching asignaturas:', error);
        }
    };

    return (
        <div className="sidebar">
            <div className="logo">
                <Link to="/landing-page">
                    <img src="https://www.comunidadbaratz.com/wp-content/uploads/Instrucciones-a-tener-en-cuenta-sobre-como-se-abre-un-libro-nuevo.jpg" alt="Logo" className="logo-landing" />
                </Link>
                <span>BachInfo</span>
            </div>
            <nav className="nav">
                <ul>
                <li>
                        <Link to="/landing-page" className="sidebar-link" style={{ justifyContent: 'flex-start' }}>🏠 Página de Inicio</Link>
                    </li>
                    {(rol === 'ROLE_ADMIN' || rol === 'ROLE_MODERATOR') && (
                        <li>
                            <Link to="/correo" className="sidebar-link" style={{ justifyContent: 'flex-start' }}>📧 Contactanos</Link>
                        </li>
                    )}
                    <li className="submenu-toggle">
                        <a href="#" onClick={toggleSubjects}>
                            <i className="icon-book"></i>📖 Asignaturas
                            <span className="arrow">{isSubjectsOpen ? '▲' : '▼'}</span>
                        </a>
                    </li>
                    {isSubjectsOpen && (
                        <ul className="submenu">
                            {asignaturas.map(asignatura => (
                                <li key={asignatura.NumAsignatura}>
                                    <Link to={`/asignatura/${asignatura.NumAsignatura}`} style={{ color: asignatura.ColorFondo }}>
                                        {asignatura.NombreAsignatura}
                                    </Link>
                                </li>
                            ))}
                            {rol === 'ROLE_ADMIN' && (
                                <>
                                    <li className="submenu-toggle">
                                        <a href="#" onClick={toggleAsignatura}>
                                            <i className="icon-folder"></i>Asignaturas Operaciones
                                            <span className="arrow">{isAsignaturaOpen ? '▲' : '▼'}</span>
                                        </a>
                                    </li>
                                    {isAsignaturaOpen && (
                                        <ul className="submenu">
                                            <li><Link to="/crearAsignatura">Añadir Asignatura</Link></li>
                                            <li><Link to="/editarAsignatura">Editar Asignatura</Link></li>
                                            <li><Link to="/eliminarAsignatura">Eliminar Asignatura</Link></li>
                                        </ul>
                                    )}
                                </>
                            )}
                        </ul>
                    )}
                    {rol === 'ROLE_ADMIN' && (
                        <>
                            <li className="submenu-toggle">
                                <a href="#" onClick={toggleTopics}>
                                    <i className="icon-folder"></i>📂 Temas
                                    <span className="arrow">{isTopicsOpen ? '▲' : '▼'}</span>
                                </a>
                            </li>
                            {isTopicsOpen && (
                                <ul className="submenu">
                                    <li><Link to="/addTema">Añadir Tema</Link></li>
                                    <li><Link to="/editTema">Editar Tema</Link></li>
                                    <li><Link to="/removeTemas">Eliminar Tema</Link></li>
                                </ul>
                            )}
                        </>
                    )}
                    {rol === 'ROLE_ADMIN' && (
                        <>
                            <li className="submenu-toggle">
                                <a href="#" onClick={toggleQuestions}>
                                    <i className="icon-question"></i>❓ Preguntas
                                    <span className="arrow">{isQuestionsOpen ? '▲' : '▼'}</span>
                                </a>
                            </li>
                            {isQuestionsOpen && (
                                <ul className="submenu">
                                    <li><Link to="/addQuestion">Añadir Pregunta</Link></li>
                                    <li><Link to="/editQuestion">Editar Pregunta</Link></li>
                                    <li><Link to="/removeQuestion">Eliminar Pregunta</Link></li>
                                </ul>
                            )}
                        </>
                    )}
                    {(rol === 'ROLE_ADMIN' || rol === 'ROLE_MODERATOR') && (
                        <>
                            <li className="submenu-toggle">
                                <a href="#" onClick={toggleUsuarios}>
                                    <i className="icon-question"></i>👤 Usuarios
                                    <span className="arrow">{isUsuariosOpen ? '▲' : '▼'}</span>
                                </a>
                            </li>
                            {isUsuariosOpen && (
                                <ul className="submenu">
                                    <li><Link to="/editUsuario">Editar Usuarios</Link></li>
                                    {rol === 'ROLE_ADMIN' && (
                                        <>
                                            <li><Link to="/eliminarUsuario">Eliminar Usuarios</Link></li>
                                            <li><Link to="/dashboard">Ver Usuarios</Link></li>
                                        </>
                                    )}
                                </ul>
                            )}
                        </>
                    )}
                    {rol === 'ROLE_ADMIN' && (
                        <>
                            <li className="submenu-toggle">
                                <a href="#" onClick={toggleNoticias}>
                                    <i className="icon-question"></i>📰 Noticias
                                    <span className="arrow">{isNoticiasOpen ? '▲' : '▼'}</span>
                                </a>
                            </li>
                            {isNoticiasOpen && (
                                <ul className="submenu">
                                    <li><Link to="/crearNoticia">Crear Noticia</Link></li>
                                    <li><Link to="/editarNoticia">Editar Noticia</Link></li>
                                    <li><Link to="/eliminarNoticia">Eliminar Noticia</Link></li>
                                </ul>
                            )}
                        </>
                    )}
                </ul>
            </nav>
            <div className="footer">
                <p>{username}</p>
                {rol ? (
                    <p>{rol === 'ROLE_ADMIN' ? 'Administrador' : rol === 'ROLE_MODERATOR' ? 'Profesor' : 'Usuario'}</p>
                ) : (
                    <p>Hay un error</p>
                )}
                <Link to="/" className="logout" onClick={handleLogout}>
                    <i className="icon-logout"></i>Salirse
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
