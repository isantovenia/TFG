import React, { useState } from 'react';
import './QuizTema2Matematicas.css';
import { Link } from 'react-router-dom';
import Sidebar from '../../../../Sidebar/Sidebar.jsx';

function QuizTema2Matematicas() {
    const questions = [
        {
            questionText: '¿Qué concepto central en el cálculo se utiliza para describir el comportamiento de una función a medida que la variable independiente se acerca a cierto valor?',
            answerOptions: [
                { answerText: 'Integral', isCorrect: false },
                { answerText: 'Derivada', isCorrect: false },
                { answerText: 'Límite', isCorrect: true },
                { answerText: 'Función', isCorrect: false },
            ],
        },
        {
            questionText: '¿Cuáles son algunas formas comunes de indeterminaciones al calcular límites?',
            answerOptions: [
                { answerText: '1/0 y 0/1', isCorrect: false },
                { answerText: '2/0 y 0/2', isCorrect: false },
                { answerText: '0/0, ∞/∞ y ∞-∞', isCorrect: true },
                { answerText: '∞/1 y 1/∞', isCorrect: false },
            ],
        },
        {
            questionText: '¿Qué técnica se utiliza para resolver indeterminaciones de límites que involucran 0/0?',
            answerOptions: [
                { answerText: 'Diferenciación', isCorrect: false },
                { answerText: 'Integración', isCorrect: false },
                { answerText: 'Regla de L\'Hôpital', isCorrect: true },
                { answerText: 'Factorización', isCorrect: false },
            ],
        },
        {
            questionText: '¿A qué se refiere el término "discontinuidades evitables" en el estudio de la continuidad de funciones elementales?',
            answerOptions: [
                { answerText: 'Cuando no se puede encontrar el límite de la función', isCorrect: false },
                { answerText: 'Cuando existe un límite finito en el punto', isCorrect: true },
                { answerText: 'Cuando la función es constante', isCorrect: false },
                { answerText: 'Cuando la función es lineal', isCorrect: false },
            ],
        },
        {
            questionText: '¿Qué tipo de funciones son las funciones a trozos?',
            answerOptions: [
                { answerText: 'Funciones exponenciales', isCorrect: false },
                { answerText: 'Funciones definidas por diferentes expresiones en diferentes intervalos', isCorrect: true },
                { answerText: 'Funciones trigonométricas', isCorrect: false },
                { answerText: 'Funciones lineales', isCorrect: false },
            ],
        },
        {
            questionText: '¿Qué implica calcular un parámetro para que una función sea continua?',
            answerOptions: [
                { answerText: 'Que la función tenga infinitas discontinuidades', isCorrect: false },
                { answerText: 'Encontrar los valores del parámetro que garantizan la continuidad', isCorrect: true },
                { answerText: 'Que la función sea una función a trozos', isCorrect: false },
                { answerText: 'Que la función tenga derivada continua', isCorrect: false },
            ],
        },
        {
            questionText: '¿Qué representan las asíntotas horizontales en una función?',
            answerOptions: [
                { answerText: 'Líneas verticales', isCorrect: false },
                { answerText: 'Puntos de discontinuidad', isCorrect: false },
                { answerText: 'Líneas horizontales a las que se aproxima la función a medida que la variable independiente tiende a infinito', isCorrect: true },
                { answerText: 'Raíces de la función', isCorrect: false },
            ],
        },
        {
            questionText: '¿Cuál es la característica de las asíntotas verticales en una función?',
            answerOptions: [
                { answerText: 'Son líneas horizontales', isCorrect: false },
                { answerText: 'Son líneas verticales en las que la función tiende a infinito o menos infinito', isCorrect: true },
                { answerText: 'Son líneas oblicuas', isCorrect: false },
                { answerText: 'Son líneas paralelas al eje x', isCorrect: false },
            ],
        },
        {
            questionText: '¿En qué consisten las asíntotas oblicuas en una función?',
            answerOptions: [
                { answerText: 'Son líneas horizontales', isCorrect: false },
                { answerText: 'Son líneas verticales', isCorrect: false },
                { answerText: 'Son líneas inclinadas a las que se aproxima la función a medida que la variable independiente tiende a infinito', isCorrect: true },
                { answerText: 'Son líneas rectas', isCorrect: false },
            ],
        },
        {
            questionText: '¿Qué método se utiliza para resolver límites que involucran ∞-∞?',
            answerOptions: [
                { answerText: 'Factorización', isCorrect: false },
                { answerText: 'Regla de L\'Hôpital', isCorrect: false },
                { answerText: 'Identificación de términos dominantes', isCorrect: true },
                { answerText: 'Racionalización', isCorrect: false },
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
    <div className='main-container-quiz-matematicas-tema2'>
      <Sidebar username={username} rol={rol} handleLogout={handleLogout} /> {/* Usando el componente Sidebar */}
      {showScore ? (
        <div className='score-section'>
          Lograste {score} de {questions.length}
          <div className="finish-button-container">
            <a href="/matematicas/tema2" className='finish-button'>Finalizar</a>
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

export default QuizTema2Matematicas;
