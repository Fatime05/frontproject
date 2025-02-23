import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./AdminRooms.module.css";


axios.defaults.withCredentials = true;
const API_BASE_URL = "http://localhost:6068/api/rooms";

const AdminRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [newRoom, setNewRoom] = useState({ title: "", price: "", description: "", hotelId: "" });


  const fetchRooms = async () => {
    try {
      const response = await axios.get(API_BASE_URL);
      console.log("Gətirilən otaqlar:", response.data); 
      setRooms(response.data);
    } catch (error) {
      console.error("Otaqları gətirərkən xəta:", error);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  console.log("API-dən gələn otaqlar:", rooms);

  const handleAddRoom = async (e) => {
    e.preventDefault();
    try {
      if (!newRoom.hotelId) {
        alert("Zəhmət olmasa bir otel ID daxil edin.");
        return;
      }
      const roomData = {
        title: newRoom.title,
        price: newRoom.price,
        maxPeople: 2, 
        desc: newRoom.description,
        roomNumbers: [],
        hotelId: newRoom.hotelId, 
      };

      console.log("Göndərilən otaq məlumatları:", roomData); 

      await axios.post(`${API_BASE_URL}/${newRoom.hotelId}`, roomData);
      setNewRoom({ title: "", price: "", description: "", hotelId: "" }); 
      fetchRooms(); 
    } catch (error) {
      console.error("Otaq əlavə edilə bilmədi:", error.response ? error.response.data : error);
    }
  };


  const handleDeleteRoom = async (roomId, hotelId) => {
    console.log("Silinəcək otaq ID:", roomId);
    console.log("Otel ID:", hotelId);
  
    if (!hotelId) {
      console.error("Otel ID tapılmadı, otaq silinə bilməz.");
      return;
    }
  
    try {
      await axios.delete(`http://localhost:6068/api/rooms/${roomId}`);

      fetchRooms(); 
    } catch (error) {
      console.error("Otaq silinə bilmədi:", error.response ? error.response.data : error);
    }
  };
  
  

  return (
    <div>
      <h2>Otaqların idarə olunması</h2>

      {}
      <form onSubmit={handleAddRoom} className={style.roomform}>
        <input
          type="text"
          placeholder="Otaq adı"
          value={newRoom.title}
          onChange={(e) => setNewRoom({ ...newRoom, title: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Qiymət"
          value={newRoom.price}
          onChange={(e) => setNewRoom({ ...newRoom, price: e.target.value })}
          required
        />
        <textarea
          placeholder="Təsvir"
          value={newRoom.description}
          onChange={(e) => setNewRoom({ ...newRoom, description: e.target.value })}
          required
        ></textarea>
        <input
          type="text"
          placeholder="Otel ID"
          value={newRoom.hotelId}
          onChange={(e) => setNewRoom({ ...newRoom, hotelId: e.target.value })}
          required
        />
        <button type="submit">Əlavə et</button>
      </form>

      {}
      <table className={style.roomstable}>
        <thead>
          <tr>
            <th>Otaq adı</th>
            <th>Qiymət</th>
            <th>Təsvir</th>
            <th>Otel ID</th>
            <th>Əməliyyatlar</th>
          </tr>
        </thead>
        <tbody>
  {rooms.map((room) => (
    <tr key={room._id}>
      <td data-label="Otaq adı">{room.title}</td>
      <td data-label="Qiymət">{room.price} AZN</td>
      <td data-label="Təsvir">{room.desc}</td>
      <td data-label="Otel ID">{room.hotelId}</td>
      <td data-label="Əməliyyatlar">
        <button onClick={() => handleDeleteRoom(room._id, room.hotelId)}>Sil</button>
      </td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
};

export default AdminRooms;
