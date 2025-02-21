import React from 'react'
import Header from '../../components/header/Header'
import HeroSection from './components/hero/HeroSection'
import BookingForm from './components/booking/BookingForm'
import Footer from '../../components/footer/Footer'
import FeaturedHotels from './components/featured/FeaturedHotel'
import Holidays from './components/holidays/Holidays'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <BookingForm/>
        <Holidays/>
        <FeaturedHotels/>
    </div>
  )
}

export default Home