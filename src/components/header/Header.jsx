import React from 'react'
import style from './Header.module.css'
import { Link, useNavigate } from 'react-router-dom'
const Header = () => {
    const navigation = useNavigate()
    const goLogin = () => {
        navigation('/login')
        
    }
    const goregister = () => {
        navigation('/signup')
    }
    const gohome = () => {
        navigation('/home')
    }
  return (
    <div className={style.container}>
        <div className={style.context}>
            <div className={style.logo}>
                <Link to={'/home'}><h1>XF Park</h1></Link>
            </div>

            <div className={style.navbar}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="/admin">Admin Panel</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

            <div className={style.logreg}>
                <button onClick={goLogin} className={style.login}>Login</button>
                <button onClick={goregister} className={style.register}>Register</button>
            </div>
        </div>
    </div>
  )
}

export default Header