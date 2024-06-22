import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'

import {Home} from "./components/Services/index.js"
import AdminDashboard from './components/Admin-Dashboard/AdminDashboard.jsx'
import AppProvider from './contexts/AppProvider.jsx'
import StudentInfo from './components/Admin-Dashboard/StudentInfo/StudentInfo.jsx'
import SingleStudent from './components/Admin-Dashboard/SingleStudent/SingleStudent.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="" element={<Home/>}/>
      <Route path='/admin' element={<AdminDashboard/>}></Route>
      <Route path='/userVerify' element={<StudentInfo/>}></Route>
      <Route path='/userVerfication/:name' element={<SingleStudent/>}/>
     
      {/* <Route path="about" element={<About/>}/>
      <Route path="services" element={<Services/>}/>
      <Route path="footer-contact" element={<FooterContact/>}/>
      <Route path="footer-KnowTheTeam" element={<FooterKnowTheTeam/>}/>
      <Route path="footer-reference" element={<FooterReference/>}/> */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
    <RouterProvider router={router}/>
    </AppProvider>
  </React.StrictMode>,
)
