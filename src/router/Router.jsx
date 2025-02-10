import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import UserDashboard from '../pages/home/components/user/UserDashboard'
import HotelDetails from '../pages/home/components/details/HotelDetails'
import Contact from '../pages/home/components/contact/Contact'
import AdminPanel from '../pages/home/components/admin/AdminPanel'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/hotels/:id" element={<HotelDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminPanel />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router