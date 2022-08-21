import React from 'react'
import { Route, Routes} from 'react-router-dom'
import  Registration from './components/reg/Registration' 
import Navbar from './components/Navbar'
import Login from './components/Login/Login'
import Menu from './components/menu/Menu'

export default function Main() {
  return (
    <div>
        <Navbar />
        <Menu />
        
        <Routes>
            <Route path="/" element={<Registration />} />
            <Route path="/login" element={<Login />} />
        </Routes> 
    </div>
  )
}
