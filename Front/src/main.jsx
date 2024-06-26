import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import CreateUser from './components/CreateUser/CreateUser.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import HistoriaEspañaTema1 from './components/Asignaturas/HistoriaEspaña/Tema1/Tema1Historia.jsx'
import HistoriaEspañaTema2 from './components/Asignaturas/HistoriaEspaña/Tema2/Tema2Historia.jsx'
import QuizTema1Historia from './components/Asignaturas/HistoriaEspaña/Tema1/QuizTema1Historia/QuizTema1Historia.jsx';
import QuizTema2Historia from './components/Asignaturas/HistoriaEspaña/Tema2/QuizTema2Historia/QuizTema2Historia.jsx';
import MatematicasTema1 from './components/Asignaturas/Matematicas/Tema1/Tema1Matematicas.jsx'
import QuizTema1Matematicas from './components/Asignaturas/Matematicas/Tema1/QuizTema1Matematicas/QuizTema1Matematicas.jsx'
import QuizTema2Matematicas from './components/Asignaturas/Matematicas/Tema2/QuizTema2Matematicas/QuizTema2Matematicas2.jsx'
import MatematicasTema2 from './components/Asignaturas/Matematicas/Tema2/Tema2Matematicas.jsx'
import DashboardUsuarios from './components/DashboardUsuarios/DashboardUsuarios.jsx'
import Correo from './components/Correo/Correo.jsx';
import AddQuestionForm from './components/Preguntas/AddQuestion/AddQuestion.jsx';
import RemoveQuestion from './components/Preguntas/RemoveQuestion/RemoveQuestion.jsx';
import AddTema from './components/Temas/AddTema/AddTema.jsx';
import RemoveTemas from './components/Temas/RemoveTemas/RemoveTemas.jsx';
import EditTema from './components/Temas/EditarTemas/EditarTemas.jsx';
import EditarQuestion from './components/Preguntas/EditQuestion/EditQuestion.jsx';
import EditarUsuario from './components/Usuarios/EditarUsuario/EditarUsuario.jsx';
import EliminarUsuario from './components/Usuarios/EliminarUsuario/EliminarUsuario.jsx';
import CrearNoticia from './components/Noticias/CrearNoticia/CrearNoticia.jsx';
import EditarNoticia from './components/Noticias/EditarNoticia/EditarNoticia.jsx';
import EliminarNoticia from './components/Noticias/EliminarNoticia/EliminarNoticia.jsx';
import Asignatura from './components/pruebaAsignatura/pruebAsignatura.jsx';
import CrearAsignatura from './components/Asignaturas/CrearAsignatura/CrearAsignatura.jsx';
import EditarAsignatura from './components/Asignaturas/EditarAsignatura/EditarAsignatura.jsx';
import EliminarAsignatura from './components/Asignaturas/EliminarAsignatura/EliminarAsignatura.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <DashboardUsuarios />
  },
  {
    path: "/create-user",
    element: <CreateUser />
  }  ,
  {
    path: "/landing-page",
    element: <LandingPage />
  },
  { 
    path: "/historia-españa/tema1",
    element: <HistoriaEspañaTema1 />
  },
  { 
    path: "/historia-españa/tema2",
    element: <HistoriaEspañaTema2 />
  },
  { 
    path: "/historia-españa/tema1/quiz",
    element: <QuizTema1Historia />
  },
  { 
    path: "/historia-españa/tema2/quiz",
    element: <QuizTema2Historia />
  },
  {
    path: "/matematicas/tema1",
    element: <MatematicasTema1 />
  },
  {
    path: "/matematicas/tema1/quiz",
    element: <QuizTema1Matematicas />
  },
  {
    path: "/matematicas/tema2",
    element: <MatematicasTema2 />
  },
  {
    path: "/matematicas/tema2/quiz",
    element: <QuizTema2Matematicas />
  },
  {
    path: "/correo",
    element: <Correo />
  },
  {
    path: "/addQuestion",
    element: <AddQuestionForm />
  },
  {
    path: "/addTema",
    element: <AddTema />
  },
  {
    path: "/removeTemas",
    element: <RemoveTemas />
  },
  {
    path: "/editTema",
    element: <EditTema />
  },
  {
    path: "/removequestion",
    element: <RemoveQuestion />
  },
  {
    path: "/editQuestion",
    element: <EditarQuestion />
  },
  {
    path: "/editUsuario",
    element: <EditarUsuario />
  },
  {
    path: "/eliminarUsuario",
    element: <EliminarUsuario />
  },
  {
    path: "/crearNoticia",
    element: <CrearNoticia />
  },
  {
    path: "/editarNoticia",
    element: <EditarNoticia />
  },
  {
    path: "/eliminarNoticia",
    element: <EliminarNoticia />
  },
  {
    path: "/asignatura/:NumAsignatura",
    element: <Asignatura />,
  },
  {
    path: "/crearAsignatura",
    element: <CrearAsignatura />,
  },  
  {
    path: "/editarAsignatura",
    element: <EditarAsignatura />,
  },
  {
    path: "/eliminarAsignatura",
    element: <EliminarAsignatura />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
