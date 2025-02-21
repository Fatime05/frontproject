import React from "react";
import style from "./Holidays.module.css";
const Holidays = () => {
  return (
    <div className={style.container}>
      <div className={style.context}>
        <div className={style.image}>
          <img
            src="https://rayalparkhotel.netlify.app/assets/about.jpg"
            alt=""
          />
        </div>

        <div className={style.text}>
          <div className={style.title}>
            <p>ABOUT US</p>
            <div className={style.line}></div>
          </div>
          <h1>
          The Best Holidays Start <br /> Here!
          </h1>
          <p className={style.focus}>With a focus on quality accommodations, personalized experiences, <br /> and seamless booking, our platform is dedicated to ensuring that <br /> every traveler embarks on their dream holiday with confidence and <br /> excitement.</p>
          <button className={style.btn}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Holidays;
