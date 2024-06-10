import React, { useState } from 'react';
import './Tema1Historia.css';
import { Link } from 'react-router-dom';
import Sidebar from '../../../Sidebar/Sidebar.jsx';

function Tema1Historia() {
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
      <div className="main-content-historia-tema1">
        <h1>Bienvenido a BachInfo</h1>
        <p>Tu portal de recursos educativos para Bachillerato</p>
        <h2>Tema 1</h2>
        <p>
          La Península Ibérica en la Edad Antigua: los tiempos prerromanos y la Hispania romana.
        </p>
        <div className="dropdown-box">
          <h3 onClick={() => toggleExpand('homini')}>
            1. El proceso de hominización en la Península Ibérica (del Paleolítico a la Edad del Bronce) <span className="arrow">&#9660;</span>
          </h3>
          {expanded['homini'] && (
            <div className="dropdown-content">
              <p>
                La historia de la Península Ibérica se remonta a tiempos muy antiguos, cuando los primeros grupos de humanos llegaron a la región durante el Paleolítico temprano. A lo largo de milenios, estas sociedades cazadoras y recolectoras evolucionaron, adaptándose a los desafíos del entorno y desarrollando nuevas técnicas y herramientas para sobrevivir.
              </p>
              <h4 onClick={() => toggleExpand('paleolitico')}>
                Paleolítico <span className="arrow">&#9660;</span>
              </h4>
              {expanded['paleolitico'] && (
                <ul>
                <li>
                    <strong>Paleolítico Inferior:</strong>
                    <p>Durante el Paleolítico Inferior en la Península Ibérica, que abarca desde hace aproximadamente 2.5 millones de años hasta hace unos 200,000 años, se desarrollaron las primeras herramientas de piedra simples utilizadas por los primeros homínidos, como el Homo habilis y el Homo erectus. Estos primeros habitantes fabricaban herramientas de piedra tallada, como bifaces y cantos tallados, que utilizaban para la caza, el procesamiento de alimentos y otras actividades.</p>
                    <p>Los sitios arqueológicos más antiguos de esta época en la Península Ibérica se encuentran en la región de Atapuerca, en el norte de España, donde se han descubierto restos fósiles y herramientas de piedra que arrojan luz sobre la vida de los primeros homínidos en la región.</p>
                </li>
                <li>
                    <strong>Paleolítico Medio:</strong>
                    <p>El Paleolítico Medio en la Península Ibérica, que abarca desde hace aproximadamente 200,000 años hasta hace unos 40,000 años, estuvo marcado por importantes avances tecnológicos y culturales. Durante esta época, los neandertales fueron los principales habitantes de la región, y se han encontrado numerosos sitios arqueológicos que muestran evidencia de su presencia, como cuevas y abrigos rocosos donde dejaron herramientas de piedra más refinadas, así como restos de animales que cazaban.</p>
                    <p>La adaptación al medio ambiente fue clave durante el Paleolítico Medio, con los neandertales desarrollando técnicas avanzadas de caza, como el uso de lanzas y herramientas de piedra bifaciales. Además, se cree que practicaban rituales funerarios, como evidencian los enterramientos encontrados en algunos sitios.</p>
                </li>
                <li>
                    <strong>Paleolítico Superior:</strong>
                    <p>El Paleolítico Superior en la Península Ibérica, que abarca desde hace aproximadamente 40,000 años hasta el final de la era glacial, marcó el surgimiento de los humanos modernos, Homo sapiens, en la región. Durante esta época, se produjo una explosión cultural con avances significativos en tecnología, arte y comportamiento social.</p>
                    <p>Los humanos modernos introdujeron herramientas más especializadas, como hojas de sílex y arpones, así como nuevas técnicas de caza y recolección. Además, durante el Paleolítico Superior, se produjo una notable expansión del arte rupestre, con pinturas y grabados encontrados en numerosas cuevas de toda la Península Ibérica, como Altamira, Lascaux y Tito Bustillo, que representan escenas de caza, animales y figuras antropomorfas.</p>
                </li>
            </ul>
            
              )}
              <h4 onClick={() => toggleExpand('mesoloico')}>
                Mesoloico<span className="arrow">&#9660;</span>
              </h4>
              {expanded['mesoloico'] && (
                <ul>
                <li>
                    <strong>Desarrollo del Mesolítico:</strong>
                    <p>El Mesolítico, también conocido como la Edad Media de la Piedra, es un período de transición entre el Paleolítico y el Neolítico. En la Península Ibérica, abarca aproximadamente desde hace 10,000 años hasta hace 5,000 años, marcando el final de la última glaciación y el inicio de un clima más cálido y estable.</p>
                </li>
                <li>
                    <strong>Estilo de vida:</strong>
                    <p>Durante el Mesolítico, las comunidades humanas en la Península Ibérica continuaron siendo cazadoras-recolectoras, pero con algunas adaptaciones significativas. Se observa una mayor diversificación en las estrategias de subsistencia, con una dependencia menos exclusiva de la caza mayor y una mayor incorporación de la recolección de plantas y mariscos.</p>
                </li>
                <li>
                    <strong>Tecnología:</strong>
                    <p>En términos de tecnología, el Mesolítico se caracterizó por el desarrollo de herramientas de piedra más especializadas y refinadas, como microlitos, utilizadas para actividades como la caza, la pesca y el procesamiento de alimentos. Estas herramientas eran más pequeñas y ligeras que las del Paleolítico, lo que sugiere una mayor movilidad y flexibilidad en el estilo de vida de las comunidades mesolíticas.</p>
                </li>
                <li>
                    <strong>Cambios culturales:</strong>
                    <p>El Mesolítico también presenció cambios culturales significativos en la Península Ibérica. Se desarrollaron nuevas formas de organización social y económica, con una mayor cooperación entre grupos humanos y una mayor especialización en la explotación de recursos naturales. Además, se observa una mayor complejidad en las prácticas funerarias y en la expresión artística, como se evidencia en el arte rupestre mesolítico.</p>
                </li>
                <li>
                    <strong>Impacto ambiental:</strong>
                    <p>El Mesolítico fue un período de transición en términos ambientales, marcado por cambios en la vegetación y la fauna debido al cambio climático postglacial. Las comunidades mesolíticas tuvieron que adaptarse a estos cambios, lo que probablemente influyó en sus estrategias de subsistencia y movilidad.</p>
                </li>
            </ul>
            
              )}
              <h4 onClick={() => toggleExpand('neolitico')}>
                Neolítico<span className="arrow">&#9660;</span>
              </h4>
              {expanded['neolitico'] && (
                <ul>
                <li>
                    <strong>Inicio del Neolítico:</strong>
                    <p>El Neolítico en la Península Ibérica comenzó alrededor de hace 7,000 años y marcó un período de importantes cambios en la forma de vida de las comunidades humanas. Este período se caracterizó por la transición de una economía de cazadores-recolectores a una economía agrícola y ganadera, así como por el desarrollo de asentamientos permanentes y la aparición de la cerámica.</p>
                </li>
                <li>
                    <strong>Revolución agrícola:</strong>
                    <p>Una de las características más destacadas del Neolítico fue el desarrollo de la agricultura y la domesticación de plantas y animales. En la Península Ibérica, las comunidades humanas comenzaron a cultivar cereales como el trigo y la cebada, así como legumbres y hortalizas. La domesticación de animales como el ganado, ovejas, cabras y cerdos también desempeñó un papel importante en la subsistencia de las comunidades neolíticas.</p>
                </li>
                <li>
                    <strong>Establecimiento de asentamientos:</strong>
                    <p>Con la introducción de la agricultura, las comunidades neolíticas comenzaron a establecer asentamientos permanentes, abandonando el estilo de vida nómada de sus antepasados paleolíticos y mesolíticos. Estos asentamientos, que consistían en viviendas construidas con materiales como barro y madera, proporcionaban seguridad y estabilidad a las comunidades, así como un mayor control sobre los recursos naturales.</p>
                </li>
                <li>
                    <strong>Desarrollo de la cerámica:</strong>
                    <p>Otro avance importante durante el Neolítico fue el desarrollo de la cerámica. Las comunidades neolíticas comenzaron a fabricar recipientes de cerámica para almacenar alimentos y agua, así como para usos rituales y decorativos. La cerámica no solo facilitó la vida diaria de estas comunidades, sino que también reflejó su capacidad para trabajar y manipular materiales.</p>
                </li>
                <li>
                    <strong>Organización social y cultural:</strong>
                    <p>El Neolítico también vio el desarrollo de nuevas formas de organización social y cultural en la Península Ibérica. Se observa una mayor diferenciación en las funciones sociales y una mayor complejidad en la estructura de las comunidades neolíticas, con líderes y especialistas emergentes en actividades como la agricultura, la alfarería y la construcción.</p>
                </li>
            </ul>
            
              )}
              <h4 onClick={() => toggleExpand('edadBronce')}>
                Edad de Bronce<span className="arrow">&#9660;</span>
              </h4>
              {expanded['edadBronce'] && (
                <ul>
                <li>
                    <strong>Inicio de la Edad de Bronce:</strong>
                    <p>La Edad de Bronce en la Península Ibérica comenzó alrededor de hace 4,000 años y se caracterizó por el uso generalizado del bronce en la fabricación de herramientas, armas y objetos de lujo. Este período marcó un avance significativo en la tecnología metalúrgica y un cambio en la estructura social y económica de las comunidades humanas.</p>
                </li>
                <li>
                    <strong>Desarrollo de la metalurgia del bronce:</strong>
                    <p>Una de las características más destacadas de la Edad de Bronce fue el desarrollo de la metalurgia del bronce, una aleación de cobre y estaño, que permitió la producción de herramientas y armas más duraderas y efectivas que las de piedra. Los herreros y metalurgistas de la época dominaban técnicas avanzadas de fundición, forja y aleación para crear una amplia variedad de objetos de bronce.</p>
                </li>
                <li>
                    <strong>Expansión del comercio y la interacción cultural:</strong>
                    <p>Con el surgimiento de la metalurgia del bronce, se produjo una mayor interacción entre las comunidades de la Península Ibérica y otras regiones del Mediterráneo. El comercio de materias primas, productos manufacturados y objetos de prestigio como cerámica y joyas se intensificó, lo que contribuyó al desarrollo de redes comerciales y culturales.</p>
                </li>
                <li>
                    <strong>Desarrollo de asentamientos fortificados:</strong>
                    <p>Durante la Edad de Bronce, se observa un aumento en la fortificación de los asentamientos, con la construcción de murallas y bastiones defensivos para protegerse de posibles amenazas externas. Estos asentamientos fortificados, algunos de los cuales evolucionaron hacia ciudades, reflejan la necesidad de seguridad y la competencia por recursos en un contexto de creciente complejidad social.</p>
                </li>
                <li>
                    <strong>Arte y expresión cultural:</strong>
                    <p>La Edad de Bronce también fue un período de florecimiento cultural en la Península Ibérica, como se evidencia en la producción de objetos artísticos y decorativos de bronce, cerámica y piedra. Se desarrollaron estilos artísticos distintivos, que reflejan las creencias religiosas, los valores sociales y las tradiciones de las comunidades de la época.</p>
                </li>
            </ul>
            
              )}
            </div>
          )}
        </div>

        <div className="expandable-section">
          <div className="dropdown-box">
            <h3 onClick={() => toggleExpand('preromano')}>
              2. Los tiempos prerromanos: invasiones indoeuropeas, colonizaciones históricas, Tartessos y el mundo de los iberos (siglos IX a 111 a.C.) <span className="arrow">&#9660;</span>
            </h3>
            {expanded['preromano'] && (
              <div className="dropdown-content">
                <p>
                  Durante los tiempos prerromanos, la Península Ibérica experimentó las invasiones indoeuropeas, seguidas por colonizaciones históricas de fenicios, griegos y cartagineses. Tartessos, en el sur, emergió como un próspero centro comercial, mientras que los iberos, en diversas tribus y ciudades-estado, forjaron una cultura distintiva que fusionaba influencias locales y externas.
                </p>
                <h4 onClick={() => toggleExpand('invasiones')}>
                  Invasiones Indoeuropeas <span className="arrow">&#9660;</span>
                </h4>
                {expanded['invasiones'] && (
                  <ul>
                  <li>
                      <strong>Llegada de los pueblos indoeuropeos:</strong>
                      <p>Las Invasiones indoeuropeas en la Península Ibérica se remontan al segundo milenio antes de Cristo, cuando grupos de habla indoeuropea, como los celtas, comenzaron a migrar desde Europa Central hacia el sur y el oeste de Europa. Estos pueblos trajeron consigo una nueva lengua, tecnología y formas de organización social que influirían profundamente en la región ibérica.</p>
                  </li>
                  <li>
                      <strong>Impacto cultural y lingüístico:</strong>
                      <p>La llegada de los pueblos indoeuropeos tuvo un impacto significativo en la cultura y la sociedad de la Península Ibérica. Introdujeron nuevas prácticas agrícolas, técnicas metalúrgicas y sistemas de creencias que se fusionaron con las tradiciones locales, dando lugar a una cultura híbrida y diversa.</p>
                      <p>Además, la influencia lingüística de los indoeuropeos es evidente en las lenguas habladas en la Península Ibérica, con la aparición de palabras y estructuras lingüísticas de origen indoeuropeo en las lenguas ibéricas.</p>
                  </li>
                  <li>
                      <strong>Expansión territorial y conflictos:</strong>
                      <p>Con la llegada de los pueblos indoeuropeos, se produjo una expansión territorial y la formación de diversos grupos étnicos y tribales en la Península Ibérica. Esta expansión no estuvo exenta de conflictos y enfrentamientos con las poblaciones locales, lo que llevó a la creación de alianzas y rivalidades entre diferentes grupos.</p>
                  </li>
                  <li>
                      <strong>Legado cultural:</strong>
                      <p>Aunque las invasiones indoeuropeas marcaron el comienzo de una nueva era en la Península Ibérica, su legado cultural perduró a lo largo de los siglos. Muchos aspectos de la cultura, la lengua y la sociedad ibérica posterior reflejan la influencia de los pueblos indoeuropeos y su interacción con las poblaciones locales.</p>
                  </li>
              </ul>
              
                )}
                <h4 onClick={() => toggleExpand('colonizaciones')}>
                  Colonizaciones Historicas<span className="arrow">&#9660;</span>
                </h4>
                {expanded['colonizaciones'] && (
                  <ul>
                  <li>
                      <strong>Fenicios:</strong>
                      <p>Los fenicios fueron uno de los primeros pueblos en establecer colonias en la Península Ibérica, especialmente en la región sur y este, a partir del primer milenio antes de Cristo. Establecieron asentamientos comerciales y fundaron ciudades como Gadir (actual Cádiz), donde comerciaban con metales, productos agrícolas y bienes de lujo con las poblaciones locales.</p>
                  </li>
                  <li>
                      <strong>Griegos:</strong>
                      <p>Los griegos también participaron en las colonizaciones históricas en la Península Ibérica, aunque en menor medida que los fenicios. Fundaron colonias en la costa mediterránea, como Emporion (actual Ampurias), donde establecieron relaciones comerciales y culturales con las comunidades ibéricas y contribuyeron al intercambio de mercancías y conocimientos.</p>
                  </li>
                  <li>
                      <strong>Cartagineses:</strong>
                      <p>Los cartagineses, descendientes de los fenicios, establecieron colonias en la Península Ibérica durante el primer milenio antes de Cristo, especialmente en la costa este y sur. Fundaron ciudades como Carthago Nova (actual Cartagena) y mantuvieron relaciones comerciales y políticas con las poblaciones locales, aunque también se enfrentaron a ellas en conflictos territoriales y guerras.</p>
                  </li>
              </ul>
              )}

              <h4 onClick={() => toggleExpand('tartessos')}>
              Tartessos y el mundo de los iberos (siglos IX a 111 a.C.)<span className="arrow">&#9660;</span>
                </h4>
                {expanded['tartessos'] && (
                  <ul>
                    <li>
                        <strong>Tartessos:</strong>
                        <p>Tartessos fue una antigua civilización en el sur de la Península Ibérica, que floreció durante los siglos IX al VI a.C. Se cree que su capital estaba situada en la zona de la desembocadura del río Guadalquivir. Tartessos era conocida por su riqueza en minerales, especialmente en plata, que comerciaba con otras civilizaciones mediterráneas como los fenicios.</p>
                    </li>
                    <li>
                        <strong>Influencia fenicia:</strong>
                        <p>Los fenicios establecieron relaciones comerciales con Tartessos, lo que contribuyó a su prosperidad y desarrollo económico. La influencia fenicia se reflejó en la cultura material y en las prácticas comerciales de Tartessos, así como en la adopción de la escritura y otros aspectos de la civilización fenicia.</p>
                    </li>
                    <li>
                        <strong>Mundo de los iberos:</strong>
                        <p>Los iberos eran un pueblo indígena que habitaba la Península Ibérica durante la Antigüedad. Se organizaron en diversas tribus y ciudades-estado, cada una con su propio sistema político y social. Los iberos eran conocidos por su habilidad en la metalurgia, la cerámica y la alfarería, así como por su arte distintivo, que incluía esculturas, cerámica pintada y arte rupestre.</p>
                    </li>
                    <li>
                        <strong>Interacción cultural:</strong>
                        <p>Hubo una intensa interacción cultural entre Tartessos, los fenicios y los iberos, que contribuyó al intercambio de conocimientos, tecnologías y bienes materiales. Esta interacción se reflejó en la arquitectura, el arte, la religión y otras áreas de la vida cotidiana de estas civilizaciones.</p>
                    </li>
                  </ul>
              )}
              </div>
            )}
          </div>
        </div>

        <div className="expandable-section">
          <div className="dropdown-box">
            <h3 onClick={() => toggleExpand('romas')}>
              3. La conquista romana de la península Ibérica y el proceso de romanización. La Hispania romana (siglos 111 a.C. -IV d.C.).<span className="arrow">&#9660;</span>
            </h3>
            {expanded['romas'] && (
              <div className="dropdown-content">
                <p>
                  La historia de la Península Ibérica se remonta a tiempos muy antiguos, cuando los primeros grupos de humanos llegaron a la región durante el Paleolítico temprano. A lo largo de milenios, estas sociedades cazadoras y recolectoras evolucionaron, adaptándose a los desafíos del entorno y desarrollando nuevas técnicas y herramientas para sobrevivir.
                </p>
                <h4 onClick={() => toggleExpand('conquista')}>
                  La conquista romana de la Peninsula Ibérica <span className="arrow">&#9660;</span>
                </h4>
                {expanded['conquista'] && (
                  <ul>
                  <li>
                      <strong>Inicio de la conquista:</strong>
                      <p>La conquista romana de la Península Ibérica se inició en el año 218 a.C., durante la Segunda Guerra Púnica, cuando las legiones romanas dirigidas por Aníbal Barca llegaron a la región. Tras la derrota de Aníbal en el año 202 a.C., Roma se volcó en la expansión hacia el sur y el oeste de la península.</p>
                  </li>
                  <li>
                      <strong>Sometimiento de los pueblos indígenas:</strong>
                      <p>Durante los siglos II y I a.C., Roma sometió a los diversos pueblos que habitaban la península, como los íberos en el este y los celtíberos en el centro y norte. A través de campañas militares y alianzas con tribus locales, Roma extendió su control sobre la región, estableciendo una red de ciudades y fortificaciones para consolidar su dominio.</p>
                  </li>
                  <li>
                      <strong>Resistencia y rebeliones:</strong>
                      <p>A pesar de la conquista romana, hubo varias rebeliones y resistencias por parte de los pueblos indígenas contra el dominio romano. Destaca la resistencia de Viriato, líder lusitano, quien desafió a Roma durante la segunda mitad del siglo II a.C., aunque finalmente fue asesinado por traidores.</p>
                  </li>
              </ul>
    
                )}
                <h4 onClick={() => toggleExpand('romanizacion')}>
                  El proceso de romanización <span className="arrow">&#9660;</span>
                </h4>
                {expanded['romanizacion'] && (
                  <ul>
                  <li>
                      <strong>Introducción de la cultura romana:</strong>
                      <p>Con la conquista romana, se inició un proceso de romanización en la Península Ibérica. Se introdujo la lengua latina, las leyes romanas, la religión y las costumbres romanas. Las élites locales adoptaron el modo de vida romano y se convirtieron en ciudadanos romanos, mientras que las ciudades se organizaron según el modelo romano, con foros, templos y acueductos.</p>
                  </li>
                  <li>
                      <strong>Economía y urbanización:</strong>
                      <p>La romanización trajo consigo un desarrollo económico y urbano significativo. Se construyeron nuevas infraestructuras como calzadas, puentes y puertos, facilitando el comercio y la comunicación dentro de la provincia. Las actividades económicas como la agricultura, la minería y la producción artesanal se expandieron, contribuyendo a la prosperidad de la región.</p>
                  </li>
                  <li>
                      <strong>Impacto social y cultural:</strong>
                      <p>El contacto con la cultura romana tuvo un impacto profundo en la sociedad y la cultura de la Península Ibérica. Se produjo una mezcla de tradiciones locales e influencias romanas, dando lugar a una cultura híbrida y diversa. La literatura, el arte y la arquitectura romanos se difundieron por toda la región, dejando un legado duradero en la historia ibérica.</p>
                  </li>
              </ul>
              
                )}
                <h4 onClick={() => toggleExpand('historia')}>
                  La historia romana <span className="arrow">&#9660;</span>
                </h4>
                {expanded['historia'] && (
                  <ul>
                  <li>
                      <strong>Organización política:</strong>
                      <p>Durante la época romana, la Península Ibérica se dividió en varias provincias, como Hispania Citerior, Hispania Ulterior y Lusitania, cada una con su propio gobernador y administración. Las ciudades principales, como Tarraco (Tarragona), Corduba (Córdoba) y Emerita Augusta (Mérida), se convirtieron en centros administrativos y culturales de la región.</p>
                  </li>
                  <li>
                      <strong>Declive del Imperio Romano y el fin de la Hispania romana:</strong>
                      <p>A medida que el Imperio Romano entraba en crisis en el siglo III d.C., la Península Ibérica sufrió incursiones de pueblos bárbaros como los suevos, vándalos y alanos. En el año 409 d.C., los suevos establecieron un reino en el noroeste de la península, marcando el inicio del fin de la Hispania romana y el comienzo de la Edad Media en la región.</p>
                  </li>
                </ul>
                )}
              </div>
            )}
          </div>
       </div>
       <div className="quiz-button-container">
          <Link to="/historia-españa/tema1/quiz" className="quiz-button">Ir al Quiz</Link>
        </div>
      <div className="about-section-historia-tema1">
        <h2>¿Qué es BachInfo?</h2>
        <p>BachInfo es un TFG (Trabajo de Fin de Grado) con el propósito de ayudar a estudiantes de 2º de Bachillerato, empleando una metodología que incluye la revisión del currículo educativo, entrevistas con docentes, y análisis de recursos educativos en línea para identificar contenidos relevantes.</p>
      </div>
    </div>
   </div>
  );
}

export default Tema1Historia;
