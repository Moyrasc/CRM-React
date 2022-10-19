import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layaout from './components/Layout'
import NewClient from './pages/NewClient'
import Index, {loader as clientsLoader} from './pages/Index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layaout/>,
    children: [
      {
        index: true,
        element: <Index/> ,
        loader: clientsLoader
    },
      {
      path: '/clientes/nuevo',
      element: <NewClient/>

  }]
  }
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
