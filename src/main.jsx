import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreate from './Route/Router.jsx'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './Provider/AuthProvider.jsx'
import { QueryClient,QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

   <QueryClientProvider client={queryClient}>

   <AuthProvider>
   <HelmetProvider>
    <div className='max-w-screen-2xl mx-auto'>
    <RouterProvider router={myCreate} >
    </RouterProvider>
    </div>
    </HelmetProvider>
   </AuthProvider>
     
    </QueryClientProvider>


  </React.StrictMode>,
)


