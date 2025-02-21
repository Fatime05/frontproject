import React from 'react'
import style from './Menuvitamin.module.css'
const Menuvitamin = () => {
  return (
    <div className={style.container}>
        <div className={style.context}>
            <div className={style.title}>
                <h1>
                Vitamin Bar</h1>
            </div>

            <div className={style.imgDiv}>
                <img src="https://lankaransprings.az/uploads/products/1690810018Vitamin%20bar-1.jpg" alt="" />
                <img src="https://lankaransprings.az/uploads/products/1690810018Vitamin%20bar-2.jpg" alt="" />
                <img src="https://lankaransprings.az/uploads/products/1690810018Vitamin%20bar-3.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Menuvitamin