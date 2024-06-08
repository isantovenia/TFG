import React, { useState } from 'react';
import './QuizTema1Historia.css';
import { Link } from 'react-router-dom';

function QuizTema1Historia() {
  const questions = [
    {
      questionText: '¿En qué año comenzó la conquista romana de la Península Ibérica?',
      answerOptions: [
        { answerText: '300 a.C.', isCorrect: false },
        { answerText: '218 a.C.', isCorrect: true },
        { answerText: '150 a.C.', isCorrect: false },
        { answerText: '202 a.C.', isCorrect: false },
      ],
    },
    {
      questionText: '¿Quién lideraba las legiones romanas al inicio de la conquista de la Península Ibérica?',
      answerOptions: [
        { answerText: 'Julio César', isCorrect: false },
        { answerText: 'Escipión el Africano', isCorrect: false },
        { answerText: 'Aníbal Barca', isCorrect: true },
        { answerText: 'Viriato', isCorrect: false },
      ],
    },
    {
      questionText: '¿Qué pueblos indígenas fueron sometidos por los romanos durante los siglos II y I a.C.?',
      answerOptions: [
        { answerText: 'Fenicios y griegos', isCorrect: false },
        { answerText: 'Íberos y celtíberos', isCorrect: true },
        { answerText: 'Cartagineses y lusitanos', isCorrect: false },
        { answerText: 'Suevos y vándalos', isCorrect: false },
      ],
    },
    {
      questionText: '¿Qué líder lusitano destacó por su resistencia contra Roma en el siglo II a.C.?',
      answerOptions: [
        { answerText: 'Aníbal', isCorrect: false },
        { answerText: 'Viriato', isCorrect: true },
        { answerText: 'Julio César', isCorrect: false },
        { answerText: 'Escipión', isCorrect: false },
      ],
    },
    {
      questionText: '¿Cuál fue uno de los principales efectos de la romanización en la Península Ibérica?',
      answerOptions: [
        { answerText: 'La desaparición de todas las lenguas locales', isCorrect: false },
        { answerText: 'La introducción de la cultura y costumbres romanas', isCorrect: true },
        { answerText: 'La colonización por fenicios', isCorrect: false },
        { answerText: 'La independencia de las tribus indígenas', isCorrect: false },
      ],
    },
    {
      questionText: '¿Qué infraestructuras construyeron los romanos para facilitar el comercio y la comunicación?',
      answerOptions: [
        { answerText: 'Pirámides y templos', isCorrect: false },
        { answerText: 'Calzadas, puentes y puertos', isCorrect: true },
        { answerText: 'Castillos y murallas', isCorrect: false },
        { answerText: 'Universidades y escuelas', isCorrect: false },
      ],
    },
    {
      questionText: '¿Cómo se dividió la Península Ibérica durante la época romana?',
      answerOptions: [
        { answerText: 'En reinos independientes', isCorrect: false },
        { answerText: 'En provincias como Hispania Citerior y Ulterior', isCorrect: true },
        { answerText: 'En estados aliados', isCorrect: false },
        { answerText: 'En territorios feudales', isCorrect: false },
      ],
    },
    {
      questionText: '¿Qué evento marcó el inicio del fin de la Hispania romana?',
      answerOptions: [
        { answerText: 'La llegada de Aníbal', isCorrect: false },
        { answerText: 'La derrota de los cartagineses', isCorrect: false },
        { answerText: 'Las incursiones de pueblos bárbaros en el siglo III d.C.', isCorrect: true },
        { answerText: 'La resistencia de Viriato', isCorrect: false },
      ],
    },
    {
      questionText: '¿Cuál fue uno de los principales centros comerciales y culturales en el sur de la Península Ibérica durante los siglos IX a II a.C.?',
      answerOptions: [
        { answerText: 'Cartago', isCorrect: false },
        { answerText: 'Roma', isCorrect: false },
        { answerText: 'Tartessos', isCorrect: true },
        { answerText: 'Atenas', isCorrect: false },
      ],
    },
    {
      questionText: '¿Qué cambio importante ocurrió durante el Neolítico en la Península Ibérica?',
      answerOptions: [
        { answerText: 'El desarrollo de la metalurgia del hierro', isCorrect: false },
        { answerText: 'La introducción de la agricultura y la domesticación de animales', isCorrect: true },
        { answerText: 'La aparición de las primeras universidades', isCorrect: false },
        { answerText: 'La conquista romana', isCorrect: false },
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
