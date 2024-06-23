import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Home} from './components/Services/index.js'
import Layout from './Layout.jsx'
import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import NewForm from './components/ScholarshipForms/NewForm.jsx'
import RegisteredStudent from './components/ScholarshipForms/RegisteredStudent.jsx'
import Choice from './components/Choice/Choice.jsx'
import Login from './components/login/Login.jsx'
import LoginType from './components/Logintype/LoginType.jsx'
import Donate from './components/Donate/Donate.jsx'
import About from './components/About/About.jsx'
import Alumni from './components/Alumni/Alumni.jsx'
import UserTable from './components/UserTable.jsx'
import Error from './components/Error/Error.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="" element={<Home/>}/>
      <Route path="/logintype" element={<LoginType/>}/>
      <Route path="/login/:userType" element={<Login/>}/>
      <Route path="/registration" element={<NewForm/>}/>
      <Route path="/registeredStudent" element={<RegisteredStudent/>}/>
      <Route path="/donate" element={<Donate/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/choice" element={<Choice/>}/>
      <Route path="/alumni" element={<Alumni/>}/>
<<<<<<< HEAD
      <Route path="/st" element={<UserTable/>}/>
      <Route path="/error" element={<Error/>}/>
=======
      <Route path="/students" element={<UserTable/>}/>
>>>>>>> origin/main
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
