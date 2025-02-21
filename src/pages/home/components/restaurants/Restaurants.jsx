import React from 'react'
import style from './Restaurants.module.css'
import { Link } from 'react-router-dom'
const Restaurants = () => {
  return (
    <div className={style.container}>
        <div className={style.context}>
            <div className={style.title}><h1>RESTAURANTS</h1></div>
            <div className={style.firstroom}>
                <div className={style.image}>
                    <img src="https://lankaransprings.az/photos/products/1699877131.lenkeran.jpg" alt="" />
                </div>

                

                <div className={style.text}>
                    <h1>Room service</h1>
                    <Link to={'/menu'}><button>Menu</button></Link>
                </div>
            </div>

            <div className={style.firstroom}>
                <div className={style.image}>
                    <img src="https://lankaransprings.az/photos/restaurants/1627545446.Lankaran%20Springs%20Hotel%20Bowling.jpg" alt="" />
                </div>

                

                <div className={style.text}>
                    <h1>Bowling Bar</h1>
                    <Link to={'/menubow'}><button>Menu</button></Link>
                </div>
            </div>

            <div className={style.firstroom}>
                <div className={style.image}>
                    <img src="https://lankaransprings.az/photos/restaurants/1627544972.Seher%20yemeyi%20(35).jpg" alt="" />
                </div>

                

                <div className={style.text}>
                    <h1>Vitamin Bar</h1>
                    <Link to={'/menuvitamin'}><button>Menu</button></Link>
                </div>
            </div>  

            <div className={style.firstroom}>
                <div className={style.image}>
                    <img src="https://lankaransprings.az/photos/restaurants/1625556123.Roof%20Dining%20space_.jpg" alt="" />
                </div>

                

                <div className={style.text}>
                    <h1>Kyukyu</h1>
                    <Link to={'/kyukyu'}><button>Menu</button></Link>
                </div>
            </div>

            <div className={style.firstroom}>
                <div className={style.image}>
                    <img src="https://lankaransprings.az/photos/products/1625555215.Main%20Restaurant.jpg" alt="" />
                </div>

                

                <div className={style.text}>
                    <h1>Sumac</h1>
                    <Link to={'/sumac'}><button>Menu</button></Link>
                </div>
            </div>
            </div>
            </div>
  )
}

export default Restaurants