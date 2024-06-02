import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Tema2Matematicas.css'; // Asegúrate de importar el archivo CSS

function Tema2Matematicas() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <div className="main-container-historia">
      <div className="banner-historia">
        <Link to="/landing-page">
          <img 
            src="https://www.comunidadbaratz.com/wp-content/uploads/Instrucciones-a-tener-en-cuenta-sobre-como-se-abre-un-libro-nuevo.jpg" 
            alt="Logo" 
            className="logo-historia" 
          />
        </Link>
        <div className="banner-right-historia">
          <a href="mailto:info@tudominio.com" className="contact-btn-historia">
            Contacto
          </a>
          <div className="dropdown-historia">
            <button className="dropbtn-historia">Asignaturas</button>
            <div className="dropdown-content-historia">
              <Link to="/historia-españa">Historia de España</Link>
              <Link to="/matematicas">Matemáticas</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="content-historia">
      <h2>Tema 2</h2>
        <p>
          La Península Ibérica en la Edad Antigua: los tiempos prerromanos y la Hispania romana.
        </p>
        <h3 onClick={() => toggleExpand('homini')}>
          1. El proceso de hominización en la Península Ibérica (del Paleolítico a la Edad del Bronce) <span className="arrow">&#9660;</span>
        </h3>
        {expanded['homini'] && (
          <div>
            <p>
              La historia de la Península Ibérica se remonta a tiempos muy antiguos, cuando los primeros grupos de humanos llegaron a la región durante el Paleolítico temprano. A lo largo de milenios, estas sociedades cazadoras y recolectoras evolucionaron, adaptándose a los desafíos del entorno y desarrollando nuevas técnicas y herramientas para sobrevivir.
            </p>
            <h4 onClick={() => toggleExpand('paleolitico')}>
              Paleolítico <span className="arrow">&#9660;</span>
            </h4>
            {expanded['paleolitico'] && (
              <ul>
                <li>Primeros asentamientos: Los primeros humanos llegaron a la Península Ibérica hace aproximadamente 1.2 millones de años, como lo demuestran los restos arqueológicos encontrados en yacimientos como Atapuerca.</li>
                <li>Cultura material: Durante el Paleolítico, los grupos humanos fabricaban herramientas de piedra, como hachas y raspadores, para cazar animales y procesar alimentos.</li>
                <li>Arte rupestre: Una de las manifestaciones más fascinantes del Paleolítico en la Península Ibérica es el arte rupestre, como las pinturas y grabados encontrados en cuevas como Altamira y Lascaux.</li>
              </ul>
            )}
            <h4 onClick={() => toggleExpand('neolitico')}>
              Neolítico y Edad del Bronce <span className="arrow">&#9660;</span>
            </h4>
            {expanded['neolitico'] && (
              <ul>
                <li>Transición a la agricultura: Durante el Neolítico, las sociedades ibéricas comenzaron a practicar la agricultura y la ganadería, lo que les permitió establecer asentamientos permanentes y desarrollar formas más complejas de organización social.</li>
                <li>Cultura megalítica: Se construyeron monumentos megalíticos, como los dólmenes y los menhires, que aún se pueden ver en la Península Ibérica, como los de Antequera y Évora.</li>
                <li>Metalurgia: En la Edad del Bronce, se introdujo el uso del bronce en la fabricación de herramientas y armas, lo que marcó un importante avance tecnológico en la región.</li>
              </ul>
            )}
          </div>
        )}
        <h3 onClick={() => toggleExpand('prerromanos')}>
          2. Los tiempos prerromanos: invasiones indoeuropeas, colonizaciones históricas, Tartessos y el mundo de los iberos (siglos IX a III a.C.) <span className="arrow">&#9660;</span>
        </h3>
        {expanded['prerromanos'] && (
          <div>
            <p>
              Durante los primeros milenios del primer milenio a.C., la Península Ibérica fue testigo de una serie de movimientos migratorios y desarrollos culturales que configuraron su paisaje humano y político.
            </p>
            <h4 onClick={() => toggleExpand('pueblosIndoeuropeos')}>Pueblos indoeuropeos <span className="arrow">&#9660;</span></h4>
            {expanded['pueblosIndoeuropeos'] && (
              <ul>
                <li>Celtas: Los celtas fueron uno de los grupos indoeuropeos que migraron hacia la Península Ibérica durante la Edad del Hierro, estableciendo asentamientos en el norte y oeste de la región.</li>
                <li>Íberos: Los íberos eran otro grupo indoeuropeo que habitaba la Península Ibérica, conocido por su habilidad en la metalurgia y su cultura distintiva, como lo evidencian los restos arqueológicos encontrados en lugares como el yacimiento de Puig de la Nau.</li>
              </ul>
            )}
            <h4 onClick={() => toggleExpand('colonizaciones')}>Colonizaciones históricas <span className="arrow">&#9660;</span></h4>
            {expanded['colonizaciones'] && (
              <ul>
                <li>Fenicios: Los fenicios establecieron colonias comerciales a lo largo de la costa mediterránea, como Gadir (actual Cádiz), donde comerciaban con las poblaciones locales y difundían su influencia cultural.</li>
                <li>Griegos: Los griegos fundaron colonias en la costa oriental de la Península Ibérica, como Emporion (actual Ampurias), que se convirtió en un importante centro comercial y cultural en la región.</li>
              </ul>
            )}
          </div>
        )}
        <h3 onClick={() => toggleExpand('reconquista')}>
        3. La conquista romana de la península Ibérica y el proceso de romanización. La Hispania romana
        (siglos 111 a.C. -IV d.C.). <span className="arrow">&#9660;</span>
        </h3>
        {expanded['reconquista'] && (
          <div>
            <p>
              Durante los primeros milenios del primer milenio a.C., la Península Ibérica fue testigo de una serie de movimientos migratorios y desarrollos culturales que configuraron su paisaje humano y político.
            </p>
            <h4 onClick={() => toggleExpand('pueblosIndoeuropeos')}>Pueblos indoeuropeos <span className="arrow">&#9660;</span></h4>
            {expanded['pueblosIndoeuropeos'] && (
              <ul>
                <li>Celtas: Los celtas fueron uno de los grupos indoeuropeos que migraron hacia la Península Ibérica durante la Edad del Hierro, estableciendo asentamientos en el norte y oeste de la región.</li>
                <li>Íberos: Los íberos eran otro grupo indoeuropeo que habitaba la Península Ibérica, conocido por su habilidad en la metalurgia y su cultura distintiva, como lo evidencian los restos arqueológicos encontrados en lugares como el yacimiento de Puig de la Nau.</li>
              </ul>
            )}
            <h4 onClick={() => toggleExpand('colonizaciones')}>Colonizaciones históricas <span className="arrow">&#9660;</span></h4>
            {expanded['colonizaciones'] && (
              <ul>
                <li>Fenicios: Los fenicios establecieron colonias comerciales a lo largo de la costa mediterránea, como Gadir (actual Cádiz), donde comerciaban con las poblaciones locales y difundían su influencia cultural.</li>
                <li>Griegos: Los griegos fundaron colonias en la costa oriental de la Península Ibérica, como Emporion (actual Ampurias), que se convirtió en un importante centro comercial y cultural en la región.</li>
              </ul>
            )}
          </div>
        )}
      </div>
      <div className="about-section-historia">
        <h2>Sobre esta página</h2>
        <p>Esta página está dedicada a proporcionar recursos educativos sobre la historia de España para estudiantes y entusiastas de la historia.</p>
      </div>
    </div>
  );
}

export default Tema2Matematicas;
