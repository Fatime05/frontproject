import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import style from "./FeaturedHotel.module.css";

const FeaturedHotels = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:6066/api/hotels?featured=true")
      .then((response) => setHotels(response.data))
      .catch((error) => console.error("Error fetching hotels:", error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
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
      {hotels.length > 0 ? (
        <Slider {...settings} className={style.slider}>
          {hotels.map((hotel) => (
            <div key={hotel.id} className={style.card}>
              <img className={style.img} src={hotel.photos} alt={hotel.name} />
              <div className={style.details}>
                <h3>{hotel.title}</h3>
                <button className={style.btn}>View Details</button>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <p>Loading hotels...</p>
      )}
      </div>
      </div>
    </section>
  );
};

export default FeaturedHotels;
