import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import style from './BookingForm.module.css';
import { RiCalendar2Fill } from 'react-icons/ri';
import { BiSolidUser } from 'react-icons/bi';

const BookingForm = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guestCount, setGuestCount] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Check-in:", checkInDate);
    console.log("Check-out:", checkOutDate);
    console.log("Guests:", guestCount);
  };

  return (
    <section className={style.bookingform}>
     <div className={style.formDiv}>
         <form onSubmit={handleSubmit}>
        <div className={style.formm}>
        <div className={style.form}>
          <div className={style.iconDiv}>
            <RiCalendar2Fill />
          </div>
          <div className={style.date}>
            <label>Check-in:</label>
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              selectsStart
              startDate={checkInDate}
              endDate={checkOutDate}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select Check-in date"
            />
          </div>
        </div>

        <div className={style.form}>
          <div className={style.iconDiv}>
            <RiCalendar2Fill />
          </div>
          <div className={style.date}>
            <label>Check-out:</label>
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              selectsEnd
              startDate={checkInDate}
              endDate={checkOutDate}
              minDate={checkInDate}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select Check-out date"
            />
          </div>
        </div>

        <div className={style.form}>
          <div className={style.iconDiv}>
            <BiSolidUser />
          </div>
          <div className={style.date}>
            <label>Guests:</label>
            <select value={guestCount} onChange={(e) => setGuestCount(e.target.value)}>
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Guest' : 'Guests'}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button type="submit">CHECK OUT</button>
        </div>
      </form>
     </div>
    </section>
  );
};

export default BookingForm;
