// npx tailwindcss -i ./src/index.css -o ./output.css --watch

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, Routes,createRoutesFromElements } from 'react-router-dom';
import Base from './components/Base.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx'
import User from './components/User.jsx';
import Dashboard from './pages/Dashboard.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<Base />}>
      <Route index element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />

      <Route path='user' element={<User />}>
        <Route path='dashboard' element={<Dashboard />}>
      </Route>
      </Route>
    </Route>
        
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)