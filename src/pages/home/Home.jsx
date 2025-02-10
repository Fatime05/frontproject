import React from 'react'
import Header from '../../components/header/Header'
import HeroSection from './components/hero/HeroSection'
import BookingForm from './components/booking/BookingForm'
import Footer from '../../components/footer/Footer'
import FeaturedHotels from './components/featured/FeaturedHotel'

const Home = () => {
  return (
    <div>
        <Header/>
        <HeroSection/>
        <BookingForm/>
        <FeaturedHotels/>
        <Footer/>
    </div>
  )
}

export default Home