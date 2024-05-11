import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard.jsx'
import CreateUser from './components/CreateUser/CreateUser.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import HistoriaEspaña from './components/Asignaturas/HistoriaEspaña/HistoriaEspaña.jsx';

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
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
