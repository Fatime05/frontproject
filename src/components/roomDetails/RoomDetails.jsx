import axios from 'axios';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RoomDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { checkInDate, checkOutDate, guestCount } = location.state || {};
  const roomId = location.pathname.split("/").pop(); 

  const handleConfirmBooking = async () => {
    try {
      await axios.post("http://localhost:6068/api/book", {
        roomId,
        checkInDate,
        checkOutDate,
        userId: "67b628b37525c22f83636177" 
      });

      alert("Room successfully booked!");
      navigate("/");
    } catch (err) {
      console.error("Error booking room", err);
      alert("Failed to book the room. Please try again.");
    }
  };

  return (
    <section>
      <h1>Room Details</h1>
      <p>Check-in: {new Date(checkInDate).toLocaleDateString()}</p>
      <p>Check-out: {new Date(checkOutDate).toLocaleDateString()}</p>
      <p>Guests: {guestCount}</p>
      <button onClick={handleConfirmBooking}>Confirm Booking</button>
    </section>
  );
};

export default RoomDetails;
