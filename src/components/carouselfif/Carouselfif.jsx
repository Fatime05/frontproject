import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from './Carouselfif.module.css'

const images = [
  "https://lankaransprings.az/photos/products/1646229440.FMYB-2.jpg",
  "https://lankaransprings.az/photos/products/1646229441.FMYB-8.jpg",
  "https://lankaransprings.az/photos/products/1646229442.FMYB-10.jpg",
];

const Carouselfif = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />, 
    prevArrow: <SamplePrevArrow />, 
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

export default Carouselfif;
