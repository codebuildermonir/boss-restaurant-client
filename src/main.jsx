import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreate from './Route/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

   
    <div className='max-w-screen-2xl mx-auto'>
    <RouterProvider router={myCreate} >
    </RouterProvider>
    </div>


    
  </React.StrictMode>,
)
