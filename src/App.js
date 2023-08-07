import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Menu from './component/Default/Menu'
import Home from './component/Default/Home'
import Contact from './component/Default/Contact'
import Register from './component/Auth/Register'
import Login from './component/Auth/Login'
import Services from './component/Default/Services'
import AdminDashboard from './component/Admin/AdminDashboard'
import DoctorDashboard from './component/Doctor/DoctorDashboard'
import UserDashboard from './component/User/UserDashboard'
import AdminLogin from './component/Admin/AdminLogin'
import Pnf from './component/Default/Pnf'
import About from './component/Default/About'

function App() {
  return (
    <div>
      <Router>
       <Menu/>
       <Routes>
              <Route path={`/`} element={<Home/>}/>
              <Route path={`/about`} element={<About/>}/>
              <Route path={`/services`} element={<Services/>}/>
              <Route path={`/contact`} element={<Contact/>}/>
              <Route path={`/register`} element={<Register/>}/>
              <Route path={`/login`} element={<Login/>}/>
              <Route path={`/admin/login`} element={<AdminLogin/>}/>
              <Route path={`/admin/dashboard`} element={<AdminDashboard/>}/>
              <Route path={`/doctor/dashboard`} element={<DoctorDashboard/>}/>
              <Route path={`/user/dashboard`} element={<UserDashboard/>}/>
              <Route path={`/*`} element={<Pnf/>}/>

       </Routes>
      </Router>
      
    </div>
  )
}

export default App
