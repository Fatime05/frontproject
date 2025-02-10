import React from 'react'
import style from './Footer.module.css'
const Footer = () => {
  return (
    <div className={style.container}>
        <div className={style.context}>
            <div className={style.top}>
                <div className={style.book}>
                    <h1>XF Park</h1>
                    <p>Discover a world of comfort, <br /> luxury, and adventure as you <br /> explore our curated selection of <br /> hotels, making every moment of <br /> your getaway truly extraordinary.</p>
                    <button>Book Now</button>
                </div>

                <div className={style.links}>
                    <div className={style.title}><h1>QUICK LINKS</h1></div>
                    <div className={style.link}>
                        <p>Browse Destinations</p>
                        <p>Special Offers & Packages</p>
                        <p>Room Types & Amenities</p>
                        <p>Customer Reviews & Ratings</p>
                        <p>Travel Tips & Guides</p>
                    </div>
                </div>

                <div className={style.services}>
                    <div className={style.title}>
                        <h1>OUR SERVICES</h1>
                    </div>
                    <div className={style.link}>
                        <p>Concierge Assistance</p>
                        <p>Flexible Booking Options</p>
                        <p>Airport Transfers</p>
                        <p>Wellness & Recreation</p>
                    </div>
                </div>

                <div className={style.contact}>
                    <h1>CONTACT US</h1>
                    <p>rayalpark@info.com</p>
                    <div className={style.icon}>
                        <img src="https://rayalparkhotel.netlify.app/assets/facebook.png" alt="" />
                        <img src="https://rayalparkhotel.netlify.app/assets/instagram.png" alt="" />
                        <img src="https://rayalparkhotel.netlify.app/assets/youtube.png" alt="" />
                        <img src="https://rayalparkhotel.netlify.app/assets/twitter.png" alt="" />
                    </div>
                </div>
            </div>
            <div className={style.buttom}>
                <p>Copyright © Mr.Coding All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer