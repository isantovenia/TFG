import React, { useState, useEffect } from 'react';
import './QuizTema2Matematicas.css';
import Sidebar from '../../../../Sidebar/Sidebar.jsx';

function QuizTema2Matematicas() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    // Función para cargar las preguntas desde la API
    const fetchQuestions = async () => {
      try {
        const numTest = 1; // Aquí define el número de test que deseas cargar dinámicamente
        const response = await fetch(`http://localhost:8080/test/${numTest}`); // Cambia la URL para incluir el número de test
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Formatear las preguntas según el formato necesario
        const formattedQuestions = data.map(pregunta => ({
          questionText: pregunta.Pregunta,
          answerOptions: [
            { answerText: pregunta.RespuestaBuena, isCorrect: true },
            { answerText: pregunta.RespuestaMala1, isCorrect: false },
            { answerText: pregunta.RespuestaMala2, isCorrect: false },
            { answerText: pregunta.RespuestaMala3, isCorrect: false }
          ]
        }));
        setQuestions(formattedQuestions);
      } catch (error) {
        console.error('Error al obtener las preguntas:', error);
        // Manejo de errores: podrías mostrar un mensaje de error en tu interfaz
      }
    };
  
    fetchQuestions(); // Llamar a la función para cargar las preguntas cuando el componente se monte
  }, []); // [] significa que se ejecuta solo una vez al montarse el componente
   // [] como segundo parámetro para que se ejecute solo una vez al montarse el componente

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
            <div className='question-text'>{questions[currentQuestion]?.questionText}</div>
            <div className='answer-section'>
              {questions[currentQuestion]?.answerOptions.map((answerOption, index) => (
                <button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </div>
          {showNext && (
            <div className='next-button-container'>
              <button className='next-button' onClick={handleNextQuestion}>
                Siguiente
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default QuizTema2Matematicas;
