import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import style from "./FeaturedHotel.module.css";
import { Link } from "react-router-dom";

const hotels = [
  {
    id: '67a947aac611d51ba3eb8900',
    title: "Standard room with Terrace",
    image: "https://lankaransprings.az/photos/products/1646224423.STD%20terrace-4.jpg",
    link: "/standard-nomer-c-terrasoy"
  },
  {
    id:'67a94bf5c611d51ba3eb8908',
    title: "Superior room without balcony",
    image: "https://lankaransprings.az/photos/products/1646140997.SUP-2.jpg",
    link: "/superior-nomer-bez-balkona"
  },
  {
    id: '67a9f23dc611d51ba3eb8926',
    title: "Superior room with balcony",
    image: "https://lankaransprings.az/photos/products/1646141161.LSWR.JPG",
    link: "/superior-nomer-s-balkonom"
  },
  {
    id: '67a94c1cc611d51ba3eb890a',
    title: "Family room with balcony",
    image: "https://lankaransprings.az/photos/products/1645794301.Family%20Suite%20with%20Balcony%20King%20Bed.jpg",
    link: "/family-nomer-s-balkonom"
  },
  {
    id: '67a94c68c611d51ba3eb890c',
    title: "Family room with terrace",
    image: "https://lankaransprings.az/photos/products/1646229616.FMYT-4.jpg",
    link: "/family-nomer-s-terrasoy"
  },
  {
    id: '67b7b5104a3494383a19043d',
    title: "King Suite",
    image: "https://lankaransprings.az/photos/products/1646229732.KST-3.jpg",
    link: "/king-suite"
  },
  {
    id: '67a94d0cc611d51ba3eb8910',
    title: "Standard room with balcony",
    image: "https://lankaransprings.az/photos/products/1625212475.Standard%20Double%20Room%20Balcony%20View.jpg",
    link: "/standard-nomer-s-balkonom"
  },
];

const FeaturedHotels = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <section className={style.featured}>
      <div className={style.context}>
        <div className={style.top}>
          <div className={style.title}>
            <p>OUR LIVING ROOM</p>
            <div className={style.line}></div>
          </div>
          <h1>The Most Memorable Rest <br /> Time Starts Here.</h1>
        </div>
        <div className={style.bottom}>
          <Slider {...settings} className={style.slider}>
            {hotels.map((hotel) => (
              <div key={hotel.id} className={style.card}>
                <img className={style.img} src={hotel.image} alt={hotel.title} />
                <div className={style.details}>
                  <h3>{hotel.title}</h3>
                  <Link to={hotel.link}>
                    <button className={style.btn}>View Details</button>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default FeaturedHotels;
