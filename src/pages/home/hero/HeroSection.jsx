import React from 'react'
import style from './HeroSection.module.css'
const HeroSection = () => {
  return (
    <div className={style.container}>
        <div className={style.context}>
           <div className={style.text}>
            <p className={style.simple}>Simple - Unique - Friendly</p>
            <div className={style.textt}>
            <h1>Make Yourself At Home <br />
            In Our <span className={style.hotel}>Hotel.</span></h1>
            </div>
            </div> 
        </div>
    </div>
  )
}

export default HeroSection