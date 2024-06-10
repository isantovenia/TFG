import React, { useState } from 'react';
import './QuizTema1Matematicas.css';
import { Link } from 'react-router-dom';
import Sidebar from '../../../../Sidebar/Sidebar.jsx';

function QuizTema1Matematicas() {
  const questions = [
    {
      questionText: '¿Cuál es el conjunto de valores de entrada para los cuales una función está definida?',
      answerOptions: [
        { answerText: 'Conjunto de salida', isCorrect: false },
        { answerText: 'Dominio', isCorrect: true },
        { answerText: 'Recorrido', isCorrect: false },
        { answerText: 'Coeficiente constante', isCorrect: false },
      ],
    },
    {
      questionText: '¿Qué conjunto de valores representa todas las salidas posibles de una función?',
      answerOptions: [
        { answerText: 'Conjunto de entrada', isCorrect: false },
        { answerText: 'Conjunto de valores definidos', isCorrect: false },
        { answerText: 'Recorrido', isCorrect: true },
        { answerText: 'Simetría', isCorrect: false },
      ],
    },
    {
      questionText: '¿Qué proporciona información sobre la relación entre las variables independiente y dependiente de una función?',
      answerOptions: [
        { answerText: 'Coeficiente constante', isCorrect: false },
        { answerText: 'Puntos de corte con los ejes', isCorrect: false },
        { answerText: 'Recorrido', isCorrect: false },
        { answerText: 'Puntos de corte con los ejes', isCorrect: true },
      ],
    },
    {
      questionText: '¿Qué tipo de función se expresa como una suma de términos de la forma ax^n?',
      answerOptions: [
        { answerText: 'Polinómicas', isCorrect: true },
        { answerText: 'Racionales', isCorrect: false },
        { answerText: 'De proporcionalidad inversa', isCorrect: false },
        { answerText: 'Definidas a trozos', isCorrect: false },
      ],
    },
    {
      questionText: '¿Cuál de las siguientes funciones se representa como el cociente de dos polinomios?',
      answerOptions: [
        { answerText: 'Polinómicas', isCorrect: false },
        { answerText: 'Racionales', isCorrect: true },
        { answerText: 'De proporcionalidad inversa', isCorrect: false },
        { answerText: 'Definidas a trozos', isCorrect: false },
      ],
    },
    {
      questionText: '¿Cuál es el nombre de las funciones donde una variable es inversamente proporcional a otra?',
      answerOptions: [
        { answerText: 'Polinómicas', isCorrect: false },
        { answerText: 'Racionales', isCorrect: false },
        { answerText: 'De proporcionalidad inversa', isCorrect: true },
        { answerText: 'Definidas a trozos', isCorrect: false },
      ],
    },
    {
      questionText: '¿Qué tipo de funciones están definidas por diferentes expresiones en diferentes intervalos del dominio?',
      answerOptions: [
        { answerText: 'Polinómicas', isCorrect: false },
        { answerText: 'Racionales', isCorrect: false },
        { answerText: 'De proporcionalidad inversa', isCorrect: false },
        { answerText: 'Definidas a trozos', isCorrect: true },
      ],
    },
    {
      questionText: '¿Qué expresión describe una función polinómica?',
      answerOptions: [
        { answerText: 'f(x) = k/x', isCorrect: false },
        { answerText: 'f(x) = ax^n', isCorrect: true },
        { answerText: 'f(x) = 1/x', isCorrect: false },
        { answerText: 'f(x) = √x', isCorrect: false },
      ],
    },
    {
      questionText: '¿Qué tipo de funciones pueden tener valores no definidos en los puntos donde el denominador es cero?',
      answerOptions: [
        { answerText: 'Polinómicas', isCorrect: false },
        { answerText: 'Racionales', isCorrect: true },
        { answerText: 'De proporcionalidad inversa', isCorrect: false },
        { answerText: 'Definidas a trozos', isCorrect: false },
      ],
    },
    {
      questionText: '¿Cuál es una característica clave de las funciones definidas a trozos?',
      answerOptions: [
        { answerText: 'Se expresan como una suma de términos de la forma ax^n', isCorrect: false },
        { answerText: 'Representan el cociente de dos polinomios', isCorrect: false },
        { answerText: 'Están definidas por diferentes expresiones en diferentes intervalos del dominio', isCorrect: true },
        { answerText: 'Son inversamente proporcionales a otra variable', isCorrect: false },
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
    <div className='main-container-quiz-matematicas-tema1'>
      <Sidebar username={username} rol={rol} handleLogout={handleLogout} /> {/* Usando el componente Sidebar */}
      {showScore ? (
        <div className='score-section'>
          Lograste {score} de {questions.length}
          <div className="finish-button-container">
            <a href="/matematicas/tema1" className='finish-button'>Finalizar</a>
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

export default QuizTema1Matematicas;
