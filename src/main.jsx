import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import NuevoEmpleado from './components/NuevoEmpleado'
import Index, {loader as empleadoLoader} from './components/Index'
import {loader as puestosLoader} from './components/Formulario'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>, 
    children: [
      {
        index: true,
        element: <Index/>,
        loader: empleadoLoader,
      },
      {
        path: '/empleado/nuevo',
        element: <NuevoEmpleado/>, 
        loader: puestosLoader,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
