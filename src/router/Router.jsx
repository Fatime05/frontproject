import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import UserDashboard from '../pages/home/components/user/UserDashboard'
import HotelDetails from '../pages/home/components/details/HotelDetails'
import Contact from '../pages/home/components/contact/Contact'
import AdminPanel from '../pages/home/components/admin/AdminPanel'
import Login from '../pages/home/components/login/Login'
import SignUp from '../pages/home/components/signup/SignUp'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/hotels/:id" element={<HotelDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router