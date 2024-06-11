import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ username, rol, handleLogout }) => {
    const [isSubjectsOpen, setIsSubjectsOpen] = useState(false);

    const toggleSubjects = () => {
        setIsSubjectsOpen(!isSubjectsOpen);
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
                        {rol === 'ROLE_ADMIN' && (
                            <li><a href="/dashboard"><i className="icon-users"></i>Ver Usuarios</a></li>
                        )}
                        {rol === 'ROLE_ADMIN' && (
                            <li><a href="#"><i className="icon-data"></i>Ver Datos Tests</a></li>
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
