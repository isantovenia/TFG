import React, { useState } from 'react';
import './Tema2Historia.css';
import { Link } from 'react-router-dom';
import Sidebar from '../../../Sidebar/Sidebar.jsx';

function Tema2Historia() {
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
    <div className="main-container-historia">
      <Sidebar username={username} rol={rol} handleLogout={handleLogout} /> {/* Usando el componente Sidebar */}
      <div className="main-content-historia-tema2">
        <h1>Bienvenido a BachInfo</h1>
        <p>Tu portal de recursos educativos para Bachillerato</p>
        <h2>Tema 2</h2>
        <p>
        La Península Ibérica en la Edad Media: Tres culturas y un mapa político en constante cambio (711-1474)
        </p>
        <div className="dropdown-box">
          <h3 onClick={() => toggleExpand('reinos')}>
            1. Los Reinos Cristianos: La Reconquista (hasta el siglo XIV) <span className="arrow">&#9660;</span>
          </h3>
          {expanded['reinos'] && (
            <div className="dropdown-content">
              <p>
                Durante este período, la Reconquista también implicó la repoblación de tierras conquistadas por cristianos del norte y de otras partes de Europa, lo que contribuyó a la diversidad cultural y al desarrollo de nuevas formas de organización política y social en la Península Ibérica.
              </p>
              <h4 onClick={() => toggleExpand('invasion')}>
              La invasión musulmana y los primeros reinos cristianos <span className="arrow">&#9660;</span>
              </h4>
              {expanded['invasion'] && (
                <ul>
                <li>
                <li>
                    <strong>Conquista Musulmana en la Península Ibérica (711):</strong>
                    <p>En el año 711, los musulmanes, liderados por Tariq ibn Ziyad, cruzaron el estrecho de Gibraltar y derrotaron al rey visigodo Rodrigo en la batalla de Guadalete. Esta conquista rápida y eficaz llevó a la dominación musulmana de gran parte de la Península, estableciendo el Emirato y posteriormente el Califato de Córdoba.</p>
                    <p>Sin embargo, en las montañas del norte, pequeños núcleos de resistencia cristiana lograron mantenerse y comenzaron a formar los primeros reinos cristianos, como el Reino de Asturias.</p>
                </li>

                </li>
            </ul>
            
              )}
              <h4 onClick={() => toggleExpand('reconquista')}>
                Reconquista<span className="arrow">&#9660;</span>
              </h4>
              {expanded['reconquista'] && (
                <ul>
                <li>
                    <strong>Avance de la Reconquista:</strong>
                    <p>La Reconquista fue un proceso complejo y prolongado, caracterizado por avances y retrocesos. Los reinos cristianos del norte comenzaron a expandirse lentamente hacia el sur, impulsados tanto por motivos religiosos como políticos y económicos. El Reino de León, el Condado de Castilla (posteriormente Reino de Castilla), el Reino de Navarra y el Reino de Aragón fueron algunos de los principales protagonistas.</p>
                    <p><strong>Siglo X-XI:</strong> Durante este período, se consolidaron los reinos de León y Castilla, mientras que Aragón comenzó a expandirse hacia el sur y el este.</p>
                    <p><strong>Siglo XII:</strong> La unión dinástica entre Castilla y León en 1230 bajo Fernando III fue un hito importante. Además, la conquista de Toledo en 1085 por Alfonso VI de León y Castilla marcó un avance significativo para los cristianos.</p>
                    <p><strong>Siglo XIII:</strong> Fue un siglo de grandes conquistas, destacándose la toma de Córdoba (1236) y Sevilla (1248) por Fernando III de Castilla y la expansión aragonesa hacia el Mediterráneo con la conquista de Valencia (1238) por Jaime I.</p>
                </li>
            </ul>
            
              )}
              <h4 onClick={() => toggleExpand('final')}>
                Final<span className="arrow">&#9660;</span>
              </h4>
              {expanded['final'] && (
                <ul>
                <li>
                    <strong>Final del período:</strong>
                    <p>Para finales del siglo XIII, la mayoría de la Península estaba bajo control cristiano, excepto el Reino Nazarí de Granada, que perduraría hasta 1492. La Reconquista tuvo profundas implicaciones demográficas, sociales y culturales, con la repoblación de tierras conquistadas por cristianos del norte y de otros lugares de Europa.</p>
                </li>
            </ul>
            
              )}
            </div>
          )}
        </div>

        <div className="expandable-section">
          <div className="dropdown-box">
            <h3 onClick={() => toggleExpand('preromano')}>
              2. La Crisis Política y Social de los Siglos XIV y XV: La Evolución de los Reinos Peninsulares <span className="arrow">&#9660;</span>
            </h3>
            {expanded['preromano'] && (
              <div className="dropdown-content">
                <p>
                La Edad Media en la Península Ibérica fue un período de transformación profunda, con una mezcla única de conflicto y convivencia que dejó una herencia duradera en la historia y cultura de la región. 
                </p>
                <h4 onClick={() => toggleExpand('crisis')}>
                Crisis del siglo XIV <span className="arrow">&#9660;</span>
                </h4>
                {expanded['crisis'] && (
                  <ul>
                  <li>
                    <strong>Crisis</strong>
                    <p>El siglo XIV fue una época de crisis en Europa, y la Península Ibérica no fue una excepción. Esta crisis tuvo varias dimensiones:</p>
                    <p><strong>Peste Negra (1348-1351):</strong> La pandemia devastó la población, causando una grave crisis demográfica y económica.</p>
                    <p><strong>Conflictos internos y guerras civiles:</strong> En Castilla, la guerra civil entre Pedro I y Enrique II (1366-1369) desestabilizó el reino. Aragón también sufrió conflictos internos y problemas sucesorios.</p>
                    <p><strong>Crisis agraria y hambrunas:</strong> Las malas cosechas y la reducción de la mano de obra debido a la peste llevaron a crisis alimentarias.</p>
                </li>
              </ul>
              
                )}
                <h4 onClick={() => toggleExpand('recuperacion')}>
                Siglo XV: Recuperación y consolidación<span className="arrow">&#9660;</span>
                </h4>
                {expanded['recuperacion'] && (
                  <ul>
                  <li>
                        <strong>Siglo XV</strong>
                        <p>A pesar de las crisis, los reinos peninsulares comenzaron a recuperarse y consolidarse:</p>
                        <p><strong>Castilla:</strong> Bajo los Reyes Católicos, Isabel I de Castilla y Fernando II de Aragón, se produjo la unificación de los dos reinos en 1469 mediante su matrimonio, sentando las bases para la creación del Reino de España. Las reformas administrativas y militares fortalecieron el poder real.</p>
                        <p><strong>Aragón:</strong> Enfrentó sus propios desafíos, incluyendo la Guerra Civil Catalana (1462-1472), pero también logró cierta estabilidad hacia finales del siglo XV.</p>
                        <p><strong>Portugal:</strong> Mantuvo una relativa estabilidad interna y comenzó su expansión marítima, marcando el inicio de la Era de los Descubrimientos.</p>
                    </li>

              </ul>
              )}

              <h4 onClick={() => toggleExpand('cambios')}>
              Cambios sociales y económicos<span className="arrow">&#9660;</span>
                </h4>
                {expanded['cambios'] && (
                  <ul>
                    <li>
                        <strong>Cambios</strong>
                        <p><strong>Desarrollo urbano:</strong> El crecimiento de las ciudades y el comercio revitalizó la economía.</p>
                        <p><strong>Nobleza y monarquía:</strong> La consolidación del poder de la monarquía frente a la nobleza fue un proceso clave en este período. Los Reyes Católicos implementaron políticas para reducir el poder de los nobles y fortalecer el estado centralizado.</p>
                        <p><strong>Religión y sociedad:</strong> La convivencia entre las tres culturas (cristianos, judíos y musulmanes) se vio afectada por políticas cada vez más intolerantes, culminando en la expulsión de los judíos en 1492 y la presión sobre los musulmanes para convertirse al cristianismo o abandonar la península.</p>
                    </li>
                  </ul>
              )}
              </div>
            )}
          </div>
        </div>
       <div className="quiz-button-container">
          <Link to="/historia-españa/tema2/quiz" className="quiz-button">Ir al Quiz</Link>
        </div>
      <div className="about-section-historia-tema2">
        <h2>¿Qué es BachInfo?</h2>
        <p>BachInfo es un TFG (Trabajo de Fin de Grado) con el propósito de ayudar a estudiantes de 2º de Bachillerato, empleando una metodología que incluye la revisión del currículo educativo, entrevistas con docentes, y análisis de recursos educativos en línea para identificar contenidos relevantes.</p>
      </div>
    </div>
   </div>
  );
}

export default Tema2Historia;
