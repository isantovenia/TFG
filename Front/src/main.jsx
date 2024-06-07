import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard.jsx'
import CreateUser from './components/CreateUser/CreateUser.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import HistoriaEspaña from './components/Asignaturas/HistoriaEspaña/HistoriaEspaña.jsx';
import HistoriaEspañaTema1 from './components/Asignaturas/HistoriaEspaña/Tema1/Tema1Historia.jsx'
import QuizTema1Historia from './components/Asignaturas/HistoriaEspaña/Tema1/QuizTema1Historia/QuizTema1Historia.jsx';
import Matematicas from './components/Asignaturas/Matematicas/Matematicas.jsx';
import MatematicasTema1 from './components/Asignaturas/Matematicas/Tema1/Tema1Matematicas.jsx'
import MatematicasTema2 from './components/Asignaturas/Matematicas/Tema2/Tema2Matematicas.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />
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
    path: "/historia-españa/tema1/quiz",
    element: <QuizTema1Historia />
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
    path: "/matematicas/tema2",
    element: <MatematicasTema2 />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
