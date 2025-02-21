import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { useLocation } from 'react-router-dom';

const Layout = ({children}) => {
  const location = useLocation();

  const isHomePage = location.pathname === "/" || location.pathname === "/home"; 
  return (
    <div>
        <Header  isHomePage={isHomePage}/>
        <main>{children}</main>
        <Footer/>
    </div>
  )
}

export default Layout