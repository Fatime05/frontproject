import React from 'react'
import style from './Spa.module.css'
const Spa = () => {
  return (
    <div className={style.container}>
    <div className={style.context}>
        <div className={style.title}><h1>SPA</h1></div>
        <div className={style.firstroom}>
            <div className={style.image}>
                <img src="https://lankaransprings.az/photos/products/1636098508.SPA%20Restroom-2.jpg" alt="" />
            </div>

            

            <div className={style.text}>
                <h1>Acacia SPA</h1>
                <p>The modern spa center is available to both hotel guests and local <br /> residents. The spa center offers not only a one-time visit, but also <br /> monthly and annual subscriptions.</p>
            </div>
        </div>
        </div>
        </div>
  )
}

export default Spa