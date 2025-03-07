import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RoomsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { checkInDate, checkOutDate, guestCount } = location.state || {};

  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!checkInDate || !checkOutDate || !guestCount) {
      setError('Invalid search parameters');
      setLoading(false);
      return;
    }

    const fetchRooms = async () => {
      try {
        const response = await axios.post('http://localhost:6068/api/search', {
          checkInDate,
          checkOutDate,
          guestCount,
        });

        if (response.data.availableRooms.length === 0) {
          setError('No rooms available for the selected dates.');
        } else {
          setRooms(response.data.availableRooms);
        }
      } catch (err) {
        setError('Error fetching rooms');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, [checkInDate, checkOutDate, guestCount]);

  const handleBooking = (roomId) => {
    navigate(`/availablerooms/${roomId}`, {
      state: { checkInDate, checkOutDate, guestCount }
    });
  };

  return (
    <section>
      <h1>Available Rooms</h1>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <>
          <p>{error}</p>
          <button onClick={() => navigate('/')}>Go back</button>
        </>
      ) : (
        <div>
          {rooms.map((room) => (
            <div key={room._id}>
              <h2>{room.title}</h2>
              <p>Max Guests: {room.maxPeople}</p>
              <p>Price: ${room.price}</p>
              <button onClick={() => handleBooking(room._id)}>Book this room</button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default RoomsPage;
