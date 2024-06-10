import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import CreateUser from './components/CreateUser/CreateUser.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import HistoriaEspaña from './components/Asignaturas/HistoriaEspaña/HistoriaEspaña.jsx';
import HistoriaEspañaTema1 from './components/Asignaturas/HistoriaEspaña/Tema1/Tema1Historia.jsx'
import HistoriaEspañaTema2 from './components/Asignaturas/HistoriaEspaña/Tema2/Tema2Historia.jsx'
import QuizTema1Historia from './components/Asignaturas/HistoriaEspaña/Tema1/QuizTema1Historia/QuizTema1Historia.jsx';
import QuizTema2Historia from './components/Asignaturas/HistoriaEspaña/Tema2/QuizTema2Historia/QuizTema2Historia.jsx';
import Matematicas from './components/Asignaturas/Matematicas/Matematicas.jsx';
import MatematicasTema1 from './components/Asignaturas/Matematicas/Tema1/Tema1Matematicas.jsx'
import QuizTema1Matematicas from './components/Asignaturas/Matematicas/Tema1/QuizTema1Matematicas/QuizTema1Matematicas.jsx'
import QuizTema2Matematicas from './components/Asignaturas/Matematicas/Tema2/QuizTema2Matematicas/QuizTema2Matematicas2.jsx'
import MatematicasTema2 from './components/Asignaturas/Matematicas/Tema2/Tema2Matematicas.jsx'
import DashboardUsuarios from './components/DashboardUsuarios/DashboardUsuarios.jsx'

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
    path: "/historia-españa",
    element: <HistoriaEspaña />
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
    path: "/matematicas",
    element: <Matematicas />
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
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
