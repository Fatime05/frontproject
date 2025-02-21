import React from 'react'
import style from './Menu.module.css'
const Menu = () => {
  return (
    <div className={style.container}>
        <div className={style.context}>
            <div className={style.title}>
                <h1>Room Service</h1>
            </div>

            <div className={style.imgDiv}>
                <img src="https://lankaransprings.az/uploads/products/1690810094Room%20Service-1.jpg" alt="" />
                <img src="https://lankaransprings.az/uploads/products/1690810094Room%20Service-2.jpg" alt="" />
                <img src="https://lankaransprings.az/uploads/products/1690810094Room%20Service-5.jpg" alt="" />
                <img src="https://lankaransprings.az/uploads/products/1690810094Room%20Service-6.jpg" alt="" />
                <img src="https://lankaransprings.az/uploads/products/1690810094Room%20Service-7.jpg" alt="" />
                <img src="https://lankaransprings.az/uploads/products/1690810094Room%20Service-8.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Menu