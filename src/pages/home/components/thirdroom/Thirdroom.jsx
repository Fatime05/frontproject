import React from 'react'
import style from './Thirdroom.module.css'
import Carousels from '../../../../components/carousels/Carousels'
const Thirdroom = () => {
  return (
    <div className={style.container}>
    <div className={style.context}>
      <div className={style.bottom}>
        <h1>Standard room with Terrace</h1>
        <Carousels />
        <div className={style.imgDiv}>
          <img
            src="https://lankaransprings.az/photos/products/1646228991.SUP-7.jpg"
            alt=""
          />
          <img
            src="https://lankaransprings.az/photos/products/1646228992.SUP-20.JPG"
            alt=""
          />
          <img
            src="https://lankaransprings.az/photos/products/1646228993.SUP-26.JPG"
            alt=""
          />
        </div>
      </div>

      <h1 className={style.facili}>Facilities</h1>
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
          <p> 36 m²</p>
          <p> Air conditioning system</p>
          <p> Non-smoking room</p>
        </div>
      </div>

      <div className={style.service}>
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
          <p>Mountain View / Garden</p>
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
          <p>Armchair</p>
          <p>Work area</p>
          <p>Iron and ironing board (upon request)</p>
          <p>Electrical outlet</p>
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

export default Thirdroom