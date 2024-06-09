import React, { useState } from 'react';
import './QuizTema2Historia.css';
import { Link } from 'react-router-dom';

function QuizTema2Historia() {
  const questions = [
    {
      questionText: '¿Cuál fue uno de los principales conflictos en la Península Ibérica durante la Edad Media?',
      answerOptions: [
        { answerText: 'Guerra de los Cien Años', isCorrect: false },
        { answerText: 'Guerra de los Treinta Años', isCorrect: false },
        { answerText: 'La Reconquista', isCorrect: true },
        { answerText: 'Guerra de los Siete Años', isCorrect: false },
      ],
    },
    {
      questionText: '¿Qué reino cristiano fue fundamental en la unificación de Castilla y León?',
      answerOptions: [
        { answerText: 'Reino de Navarra', isCorrect: false },
        { answerText: 'Reino de León', isCorrect: true },
        { answerText: 'Reino de Aragón', isCorrect: false },
        { answerText: 'Reino de Castilla', isCorrect: false },
      ],
    },
    {
      questionText: '¿Cuál fue uno de los logros significativos de los reinos cristianos en el siglo XII?',
      answerOptions: [
        { answerText: 'Conquista de Córdoba', isCorrect: false },
        { answerText: 'Unión dinástica entre Castilla y León', isCorrect: true },
        { answerText: 'Conquista de Toledo', isCorrect: false },
        { answerText: 'Conquista de Valencia', isCorrect: false },
      ],
    },
    {
      questionText: '¿Qué evento marcó el final de la Reconquista en la Península Ibérica?',
      answerOptions: [
        { answerText: 'La toma de Granada por los Reyes Católicos', isCorrect: true },
        { answerText: 'La unión de Castilla y Aragón', isCorrect: false },
        { answerText: 'La batalla de Las Navas de Tolosa', isCorrect: false },
        { answerText: 'La coronación de Fernando III como emperador', isCorrect: false },
      ],
    },
    {
      questionText: '¿Qué crisis afectó a la Península Ibérica en el siglo XIV?',
      answerOptions: [
        { answerText: 'La Guerra de los Cien Años', isCorrect: false },
        { answerText: 'La Guerra Civil Catalana', isCorrect: false },
        { answerText: 'La Peste Negra', isCorrect: true },
        { answerText: 'La invasión musulmana', isCorrect: false },
      ],
    },
    {
      questionText: '¿Quiénes fueron los Reyes Católicos?',
      answerOptions: [
        { answerText: 'Isabel I de Castilla y Fernando II de Aragón', isCorrect: true },
        { answerText: 'Fernando III de Castilla y Alfonso X de León', isCorrect: false },
        { answerText: 'Felipe II de Castilla y Juana I de Aragón', isCorrect: false },
        { answerText: 'Juan I de Castilla y Juana I de Aragón', isCorrect: false },
      ],
    },
    {
      questionText: '¿Qué reino ibérico marcó el inicio de la Era de los Descubrimientos?',
      answerOptions: [
        { answerText: 'Reino de Navarra', isCorrect: false },
        { answerText: 'Reino de León', isCorrect: false },
        { answerText: 'Reino de Aragón', isCorrect: false },
        { answerText: 'Reino de Portugal', isCorrect: true },
      ],
    },
    {
      questionText: '¿Cuál fue una de las principales consecuencias de la consolidación del poder real durante la Crisis Política y Social del siglo XIV y XV?',
      answerOptions: [
        { answerText: 'Aumento del poder de la nobleza', isCorrect: false },
        { answerText: 'Fragmentación de los reinos peninsulares', isCorrect: false },
        { answerText: 'Fortalecimiento del estado centralizado', isCorrect: true },
        { answerText: 'Disminución del poder monárquico', isCorrect: false },
      ],
    },
    {
      questionText: '¿Qué implicaciones tuvo la expulsión de los judíos en 1492?',
      answerOptions: [
        { answerText: 'Mayor tolerancia religiosa', isCorrect: false },
        { answerText: 'Disminución de la influencia cultural en la península', isCorrect: true },
        { answerText: 'Consolidación del poder musulmán', isCorrect: false },
        { answerText: 'Fortalecimiento del comercio', isCorrect: false },
      ],
    },
    {
      questionText: '¿Cuál fue uno de los cambios sociales y económicos durante la Edad Media en la Península Ibérica?',
      answerOptions: [
        { answerText: 'Desarrollo de las ciudades y el comercio', isCorrect: true },
        { answerText: 'Reducción del desarrollo urbano', isCorrect: false },
        { answerText: 'Disminución del comercio', isCorrect: false },
        { answerText: 'Aumento del poder de la nobleza', isCorrect: false },
      ],
    }
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
    <div className='main-container-quiz-historia-tema2'>
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
            <a href="/historia-españa/tema2" className='finish-button'>Finalizar</a>
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

export default QuizTema2Historia;
