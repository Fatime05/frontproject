import React from 'react'
import style from './Fourthroom.module.css'
import Carouselt from '../../../../components/carouselt/Carouselt'
const Fourthroom = () => {
  return (
    <div className={style.container}>
      <div className={style.context}>
        <div className={style.bottom}>
          <h1 className={style.standard}>Family room with balcony</h1>
          <Carouselt />
          <div className={style.imgDiv}>
            <img
              src="https://lankaransprings.az/photos/products/1646229282.LSWR-3.JPG"
              alt=""
            />
            <img
              src="https://lankaransprings.az/photos/products/1646229284.LSWR-5.JPG"
              alt=""
            />
            <img
              src="https://lankaransprings.az/photos/products/1646229285.LSWR-7.JPG"
              alt=""
            />
          </div>
        </div>

        <div className={style.facili}><h1 >Facilities</h1></div>
        <hr />
        <div>
          <div className={style.icon}>
            <img
              src="https://lankaransprings.az/uploads/products/1625146477Hotelicons.png"
              alt=""
            />
          </div>
          <hr />
        </div>

        <div className={style.description}>
          <h1>Room description:</h1>
          <div className={style.roomdescription}>
            <p> Number: 34 m²</p>
            <p> Balcony: 8 m²</p>
            <p> Air conditioning system</p>
            <p> Non-smoking room</p>
          </div>
        </div>

        <div className={style.fac}>
        <h1>Facilities and Services</h1>
        </div>

        <div className={style.beds}>
          <h1>Beds and accommodation:</h1>
          <div className={style.roomdescription}>
            <p> Maximum number of guests: 2</p>
            <p> Bed type: 1 King or 2 Twin</p>
            <p> Cradles allowed:1</p>
            <p> Extra bed allowed:0</p>
          </div>
        </div>


        <div className={style.beds}>
          <h1>View from the room:</h1>
          <div className={style.roomdescription}>
            <p> Mountain View / Garden</p>
          </div>
        </div>

        <div className={style.beds}>
          <h1>Bathroom:</h1>
          <div className={style.roomdescription}>
            <p> Shower</p>
            <p> Hair dryer</p>
            <p>Slippers and Robe</p>
            <p> Towels</p>
          </div>
        </div>


        <div className={style.beds}>
          <h1>Furniture and furnishings:</h1>
          <div className={style.roomdescription}>
            <p> Beds size 1 King or 2 Twin</p>
            <p>Safe</p>
            <p>Iron and ironing board (upon request)</p>
            <p>Mini fridge</p>
          </div>
        </div>

        <div className={style.beds}>
          <h1>Food and drinks:</h1>
          <div className={style.roomdescription}>
            <p> 24/7 room service</p>
            <p>Bottled water</p>
            <p>Kettle</p>
          </div>
        </div>

        <div className={style.beds}>
          <h1>Media:</h1>
          <div className={style.roomdescription}>
            <p>Telephone</p>
            <p>Wireless internet</p>
          </div>
        </div>

        <div className={style.beds}>
          <h1>Entertainment:</h1>
          <div className={style.roomdescription}>
            <p>LCD screen</p>
            <p>Cable, satellite TV</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fourthroom