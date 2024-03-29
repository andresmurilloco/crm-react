import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import { action as nuevoClienteAction } from './pages/NuevoCliente'
import ErrorPage from './components/ErrorPage'
import EditarCliente, {loader as editarLoader, action as actionEditar} from './pages/EditarCliente'
import { action, action as eliminarCLienteAction } from './components/Cliente'

//Components
import Layout from './components/Layout'
import NuevoCliente from './pages/NuevoCliente'
import Index, {loader as clientesLoader} from './pages/Index'

const router = createBrowserRouter([{
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Index/>,
        loader: clientesLoader,
        errorElement:<ErrorPage/>
      },{
      path: '/clientes/nuevo',
      element: <NuevoCliente></NuevoCliente>,
      action: nuevoClienteAction,
      errorElement:<ErrorPage/>
      },{
        path: '/clientes/:clienteId/editar',
        element: <EditarCliente/>,
        loader: editarLoader,
        action: actionEditar,
        errorElement:<ErrorPage/>
      },{
        path: 'clientes/:clienteId/eliminar',
        action: eliminarCLienteAction,        
      }
    ] 
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
