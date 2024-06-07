import React, { useState } from 'react';
import './QuizTema1Historia.css';
import { Link } from 'react-router-dom';

function QuizTema1Historia() {
  const questions = [
    {
      questionText: '¿Cuál es el lenguaje más utilizado para el desarrollo web?',
      answerOptions: [
        { answerText: 'Python', isCorrect: false },
        { answerText: 'JavaScript', isCorrect: true },
        { answerText: 'Java', isCorrect: false },
        { answerText: 'C#', isCorrect: false },
      ],
    },
    {
      questionText: '¿Quién inventó el lenguaje de programación Python?',
      answerOptions: [
        { answerText: 'Brendan Eich', isCorrect: false },
        { answerText: 'James Gosling', isCorrect: false },
        { answerText: 'Guido van Rossum', isCorrect: true },
        { answerText: 'Dennis Ritchie', isCorrect: false },
      ],
    },
    {
      questionText: '¿Qué significa CSS?',
      answerOptions: [
        { answerText: 'Cascading Style Sheets', isCorrect: true },
        { answerText: 'Computer Style Sheets', isCorrect: false },
        { answerText: 'Creative Style Sheets', isCorrect: false },
        { answerText: 'Colorful Style Sheets', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showNext, setShowNext] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setShowNext(true);
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setShowNext(false);
    } else {
      setShowScore(true);
    }
  };

  const [isSubjectsOpen, setIsSubjectsOpen] = useState(false);

  const toggleSubjects = () => {
    setIsSubjectsOpen(!isSubjectsOpen);
  };

  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  const username = localStorage.getItem('user');
  const rol = localStorage.getItem('rol');

  const handleLogout = () => {
    // Eliminar el token de autenticación u otra información relacionada con la sesión
    localStorage.removeItem('token');
    // Redirigir a la página de inicio de sesión u otra página después de cerrar sesión
    window.location.href = '/login'; // Redirige a la página de inicio de sesión
  };

  return (
    <div className='main-container-quiz-historia-tema1'>
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
                        <li><a href="/landing-page"><i className="icon-home"></i>Página de Inicio</a></li>
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
                        {rol === 'ROLE_ADMIN' || rol === 'ROLE_MODERATOR' && (
                          <li><a href="#"><i className="icon-stats"></i>Ver Estadísticas</a></li>
                        )}
                        {rol === 'ROLE_ADMIN' && (
                        <li><a href="#"><i className="icon-users"></i>Ver Usuarios</a></li>
                        )}
                        {rol === 'ROLE_ADMIN' && (
                        <li><a href="#"><i className="icon-data"></i>Ver Datos Tests</a></li>
                        )}
                        <li><a href="#"><i className="icon-profile"></i>Editar Perfil</a></li>
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
      {showScore ? (
        <div className='score-section'>
          Lograste {score} de {questions.length}
          <div className="finish-button-container">
            <a href="/historia-españa/tema1" className='finish-button'>Finalizar</a>
          </div>
        </div>
      ) : (
        <div className='quiz-container'>
          <div className='question-section'>
            <div className='question-count'>
              <span>Pregunta {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
            <div className='answer-section'>
              {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                <button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </div>
          {showNext && (
            <div className='next-button-container'>
              <button className='next-button' onClick={handleNextQuestion}>
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default QuizTema1Historia;
