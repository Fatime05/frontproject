import React from 'react'
import style from './Header.module.css'
const Header = () => {
  return (
    <div className={style.container}>
        <div className={style.context}>
            <div className={style.logo}>
                <h1>XF Park</h1>
            </div>

            <div className={style.navbar}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Explore</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

            <div className={style.logreg}>
                <button className={style.login}>Login</button>
                <button className={style.register}>Register</button>
            </div>
        </div>
    </div>
  )
}

export default Header