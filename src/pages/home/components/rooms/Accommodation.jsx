import React from 'react'
import style from './Accommodation.module.css'
import Layout from '../../../../components/layout/Layout'
import { Link } from 'react-router-dom'
const Accommodation = () => {
  return (

        <div className={style.container}>
        <div className={style.context}>
            <div className={style.title}><h1>Accommodation</h1></div>
            <div className={style.firstroom}>
                <div className={style.image}>
                    <img src="https://lankaransprings.az/photos/products/1625212475.Standard%20Double%20Room%20Balcony%20View.jpg" alt="" />
                </div>

                

                <div className={style.text}>
                    <p>Standard room with balcony</p>
                    <hr />
                    <Link className={style.link} to={'/standard-nomer-s-balkonom'}><h1>Standard room with <br /> balcony</h1></Link>
                    <p>Standard Room with balcony (24 m²) offers ideal conditions for <br /> both complete rest and work.</p>
                    <Link className={style.link} to={'/standard-nomer-s-balkonom'}><p className={style.read}>READ MORE</p></Link>
                </div>
            </div>


            <div className={style.secondroom}>
                <div className={style.image}>
                    <img src="https://lankaransprings.az/photos/products/1646224423.STD%20terrace-4.jpg" alt="" />
                </div>

                <div className={style.text}>
                    <p>Standard with Terrace</p>
                    <hr />
                    <Link className={style.link} to={'/standard-nomer-c-terrasoy'}><h1>Standard room with Terrace</h1></Link>
                    <p>Standard Room with Terrace (24 m²) is the perfect place for <br /> complete comfort and relaxation. This category will allow you to <br /> enjoy the view of the nature around the hotel.</p>
                    <Link className={style.link} to={'/standard-nomer-c-terrasoy'}><p className={style.read}>READ MORE</p></Link>
                </div>
            </div>

            <div className={style.thirdroom}>
                <div className={style.image}>
                    <img src="https://lankaransprings.az/photos/products/1646140997.SUP-2.jpg" alt="" />
                </div>

                <div className={style.text}>
                    <p>Room for 4 persons category Superior Room</p>
                    <hr />
                    <Link className={style.link} to={'/superior-nomer-bez-balkona'}><h1>Superior room without balcony</h1></Link>
                    <p>Contemporary design elements are harmoniously combined to <br /> make our Superior Room (36 m²) a comfortable place for your <br /> rest and relaxation.</p>
                    <Link className={style.link} to={'/superior-nomer-bez-balkona'}><p className={style.read}>READ MORE</p></Link>
                </div>
            </div>

            <div className={style.fourthroom}>
                <div className={style.image}>
                    <img src="https://lankaransprings.az/photos/products/1646141161.LSWR.JPG" alt="" />
                </div>

                <div className={style.text}>
                    <p>Room for 4 persons category Superior Room</p>
                    <hr />
                    <Link className={style.link} to={'/superior-nomer-s-balkonom'}><h1>Superior room with balcony</h1></Link>
                    <p>Each Superior Room with Balcony makes the most of its compact <br /> and cosy 34m² interior.</p>
                    <Link className={style.link} to={'/superior-nomer-s-balkonom'}><p className={style.read}>READ MORE</p></Link>
                </div>
            </div>

            <div className={style.fifthroom}>
                <div className={style.image}>
                    <img src="https://lankaransprings.az/photos/products/1645794301.Family%20Suite%20with%20Balcony%20King%20Bed.jpg" alt="" />
                </div>

                <div className={style.text}>
                    <p>Family Room for 3 persons with balcony</p>
                    <hr />
                    <Link className={style.link} to={'/family-nomer-s-balkonom'}><h1>Family room with balcony</h1></Link>
                    <p>You will have everything you need in our Family Rooms (46 m²). <br /> Our rooms are decorated in a modern style and offer comfortable <br /> accommodation for all family members.</p>
                    <Link className={style.link} to={'/family-nomer-s-balkonom'}><p className={style.read}>READ MORE</p></Link>
                </div>
            </div>

            <div className={style.sixthroom}>
                <div className={style.image}>
                    <img src="https://lankaransprings.az/photos/products/1646229616.FMYT-4.jpg" alt="" />
                </div>

                <div className={style.text}>
                    <p>Family room with terrace</p>
                    <hr />
                    <Link className={style.link} to={'/family-nomer-s-terrasoy'}><h1>Family room with terrace</h1></Link>
                    <p>Our family rooms (39 m²) are ideal for a family or friends of up to <br /> four people. Enjoy panoramic views of nature from your private <br /> terrace.</p>
                    <Link className={style.link} to={'/family-nomer-s-terrasoy'}><p className={style.read}>READ MORE</p></Link>
                </div>
            </div>

            <div className={style.seventhroom}>
                <div className={style.image}>
                    <img src="https://lankaransprings.az/photos/products/1646229732.KST-3.jpg" alt="" />
                </div>

                <div className={style.text}>
                    <p>King Suite room for 4 persons</p>
                    <hr />
                    <Link className={style.link} to={'/king-suite'}><h1>King Suite</h1></Link>
                    <p>The King Suite (73 m²) has been carefully designed for our guests <br /> who prefer elegance, luxury and comfort. This room is <br /> thoughtfully furnished to ensure that you have the most <br /> comfortable and productive stay possible.</p>
                    <Link className={style.link} to={'/king-suite'}><p className={style.read}>READ MORE</p></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Accommodation