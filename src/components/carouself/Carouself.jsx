import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from './Carouself.module.css'

const images = [
  "https://lankaransprings.az/photos/products/1646224090.STD%20terrace-9.jpg",
  "https://lankaransprings.az/photos/products/1646224243.STD%20terrace-1.jpg",
  "https://lankaransprings.az/photos/products/1646224245.STD%20terrace-3.jpg",
  "https://lankaransprings.az/photos/products/1646224248.STD%20terrace-6.jpg"
];

const Carouself = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />, // Oxları əlavə edirik
    prevArrow: <SamplePrevArrow />, // Oxları əlavə edirik
  };

  return (
   <div className={style.container}>
     <div className={style.carouselContainer}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className={style.slide}>
            <img src={img} alt={`Slide ${index + 1}`} className={style.image} />
          </div>
        ))}
      </Slider>
    </div>
   </div>
  );
};

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${style.nextArrow}`}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  };
  
  // Əvvəlki ox komponenti
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${style.prevArrow}`}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  };

export default Carouself;
