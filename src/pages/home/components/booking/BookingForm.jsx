import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import style from './BookingForm.module.css'; 
import { RiCalendar2Fill } from 'react-icons/ri';
import { BiSolidUser } from 'react-icons/bi';
import axios from 'axios';

const BookingForm = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guestCount, setGuestCount] = useState(1);
  const [availableRooms, setAvailableRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();



  console.log("Component re-rendered, availableRooms:", availableRooms);



  useEffect(() => {
    if (checkInDate && checkOutDate && guestCount) {
      setLoading(true);
      const fetchRooms = async () => {
        try {
          const response = await axios.post('http://localhost:6068/api/search', {
            checkInDate: checkInDate.toISOString(),
            checkOutDate: checkOutDate.toISOString(),
            guestCount,
          });
          console.log("Response from backend:", response.data);
          console.log("Available rooms from backend:", response.data.availableRooms);
          if (response.data.availableRooms.length > 0) {
            setAvailableRooms(response.data.availableRooms);
            console.log("Updated availableRooms:", availableRooms);
            console.log("Number of available rooms:", availableRooms.length);

          } else {
            alert("No rooms available for the selected dates.");
          }
        } catch (error) {
          console.error('Error fetching rooms', error);
          alert("An error occurred while fetching available rooms.");
        } finally {
          setLoading(false);
        }
      };
      fetchRooms();
    }
  }, [checkInDate, checkOutDate, guestCount]);


  useEffect(() => {
    console.log("Updated availableRooms after setting state:", availableRooms);
  }, [availableRooms]);
  
 
  const handleBooking = (roomId) => {
  
    setAvailableRooms((prevRooms) => prevRooms.filter(room => room._id !== roomId));
    
    navigate(`/room/${roomId}`, { state: { checkInDate, checkOutDate, guestCount } });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!checkInDate || !checkOutDate || !guestCount) {
      alert("Please select check-in, check-out dates, and guest count.");
      return;
    }
    navigate("/availablerooms", {
      state: { checkInDate, checkOutDate, guestCount }
    });

    const bookingDetails = {
      checkInDate: checkInDate.toISOString(),
      checkOutDate: checkOutDate.toISOString(),
      guestCount,
    };

    try {
      const response = await axios.post('http://localhost:6068/api/search', bookingDetails);
      if (response.data.availableRooms.length > 0) {
        setAvailableRooms(response.data.availableRooms); 
      } else {
        alert("No available rooms for the selected dates.");
      }
    } catch (err) {
      console.error("Error fetching rooms", err);
      alert("An error occurred while fetching available rooms.");
    }
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

        <div>
          {loading ? (
            <p>Loading rooms...</p>
          ) : (
            availableRooms.map(room => (
              <div key={room._id}>
                <h3>{room.title}</h3>
                <button onClick={() => handleBooking(room._id)}>Book this room</button>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
