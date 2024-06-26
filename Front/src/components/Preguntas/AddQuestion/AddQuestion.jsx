import React, { useState } from 'react';
import './AddQuestion.css';
import Sidebar from '../../../components/Sidebar/Sidebar.jsx';

function AddQuestionForm() {
  const [questionText, setQuestionText] = useState('');
  const [answerOptions, setAnswerOptions] = useState([
    { answerText: '', isCorrect: false },
    { answerText: '', isCorrect: false },
    { answerText: '', isCorrect: false },
    { answerText: '', isCorrect: false },
  ]);
  const [testNumber, setTestNumber] = useState('');
  const [NumAsignatura, setNumAsignatura] = useState('');

  const handleAnswerTextChange = (index, newText) => {
    const updatedAnswerOptions = [...answerOptions];
    updatedAnswerOptions[index].answerText = newText;
    setAnswerOptions(updatedAnswerOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Marcar la primera opción como correcta sin cambiar explícitamente el estado isCorrect
    const updatedAnswerOptions = [...answerOptions];
    updatedAnswerOptions[0].isCorrect = true;

    try {
      const response = await fetch('http://localhost:8080/addQuestion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          NumAsignatura,
          testNumber,
          questionText,
          answerOptions: updatedAnswerOptions,
        }),
      });
      if (!response.ok) {
        throw new Error('Error al agregar pregunta');
      }
      alert('Pregunta agregada correctamente');
      // Limpiar el formulario después de agregar la pregunta
      setTestNumber('');
      setQuestionText('');
      setAnswerOptions([
        { answerText: '', isCorrect: false },
        { answerText: '', isCorrect: false },
        { answerText: '', isCorrect: false },
        { answerText: '', isCorrect: false },
      ]);
      setNumAsignatura(''); // Limpiar también NumAsignatura después de enviar
    } catch (error) {
      console.error('Error al agregar pregunta:', error);
      alert('Hubo un error al agregar la pregunta');
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
    <div className="add-question-form-container">
      <Sidebar username={username} rol={rol} handleLogout={handleLogout} /> {/* Usando el componente Sidebar */}
      <h2>Añadir Nueva Pregunta</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Número de Asignatura:
          <input
            type="text"
            value={NumAsignatura}
            onChange={(e) => setNumAsignatura(e.target.value)}
            required
          />
        </label>
        <label>
          Número de Test:
          <input
            type="text"
            value={testNumber}
            onChange={(e) => setTestNumber(e.target.value)}
            required
          />
        </label>
        <label>
          Pregunta:
          <input
            type="text"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            required
          />
        </label>
        {answerOptions.map((option, index) => (
          <div key={index} className="answer-option">
            <label>
              Opción {index + 1}:
              <input
                type="text"
                value={option.answerText}
                onChange={(e) => handleAnswerTextChange(index, e.target.value)}
                required
              />
            </label>
          </div>
        ))}
        <button type="submit">Agregar Pregunta</button>
      </form>
    </div>
  );
}

export default AddQuestionForm;
