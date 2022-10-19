import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layaout from './components/Layout'
import NewClient, {action as newClientAction} from './pages/NewClient'
import Index, {loader as clientsLoader} from './pages/Index'
import ErrorPage from './components/ErrorPage'
import EditClient from './pages/EditClient'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layaout/>,
    children: [
      {
        index: true,
        element: <Index/> ,
        loader: clientsLoader,
        errorElement: <ErrorPage/>
    },
      {
      path: '/clientes/nuevo',
      element: <NewClient/>,
      action: newClientAction

  },
  {
    path: '/clientes/:clienteId/editar',
    element: <EditClient/>
  }
]
  }
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
