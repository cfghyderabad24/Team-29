import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Home} from './components/Services/index.js'
import Layout from './Layout.jsx'
import LoginType from './components/Logintype/LoginType.jsx'
import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import Login from './components/login/Login.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="" element={<Home/>}/>
      <Route path="/logintype" element={<LoginType/>}/>
      <Route path="/login/:userType" element={<Login/>}/>
      {/*<Route path="footer-contact" element={<FooterContact/>}/>
      <Route path="footer-KnowTheTeam" element={<FooterKnowTheTeam/>}/>
      <Route path="footer-reference" element={<FooterReference/>}/> */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
