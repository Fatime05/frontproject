import React from 'react'
import style from './Notfound.module.css'
import { useNavigate } from 'react-router-dom'
const Notfound = () => {

    const navigator = useNavigate()
    const goback = () => {
        navigator(-1)
    }
  return (
    <div className={style.container}>
        <h1>Not Found</h1>
        <button className={style.btn} onClick={(goback)}>go back</button>
    </div>
  )
}

export default Notfound