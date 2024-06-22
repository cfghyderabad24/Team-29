import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Home,Donate,LoginType,Login} from './components/Services/index.js'
import Layout from './Layout.jsx'
import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import NewForm from './components/ScholarshipForms/NewForm.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="" element={<Home/>}/>
      <Route path="/logintype" element={<LoginType/>}/>
      <Route path="/login/:userType" element={<Login/>}/>
      <Route path="/registration" element={<NewForm/>}/>
        <Route path="/donate" element={<Donate/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
