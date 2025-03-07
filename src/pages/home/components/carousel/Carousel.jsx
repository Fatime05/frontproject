import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from './Carousel.module.css'

const images = [
  "https://lankaransprings.az/photos/products/1646224629.STD-2.jpg",
  "https://lankaransprings.az/photos/products/1646224630.STD-6.jpg",
  "https://lankaransprings.az/photos/products/1646224631.STD-16.jpg",
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, 
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

export default Carousel;
