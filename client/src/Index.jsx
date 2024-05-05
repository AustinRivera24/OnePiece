//React Imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

//Component Imports
import Home from './pages/Home.jsx'
import './index.css'

//React Routes

const router = createBrowserRouter([

  {
    path:"/",
    element: <Home/>,
    children: [
      {
        path:"",
        element:""
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
