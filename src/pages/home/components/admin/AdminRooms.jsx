import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./AdminRooms.module.css";

// Axios konfiqurasiya
axios.defaults.withCredentials = true;
const API_BASE_URL = "http://localhost:6068/api/rooms";

const AdminRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [newRoom, setNewRoom] = useState({ title: "", price: "", description: "", hotelId: "" });

  // 📌 Otaqları API-dən çək
  const fetchRooms = async () => {
    try {
      const response = await axios.get(API_BASE_URL);
      console.log("Gətirilən otaqlar:", response.data); // Debug üçün
      setRooms(response.data);
    } catch (error) {
      console.error("Otaqları gətirərkən xəta:", error);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  console.log("API-dən gələn otaqlar:", rooms);
  // 📌 Otaq əlavə et
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
        maxPeople: 2,  // Sabit bir dəyər olaraq qoyulur
        desc: newRoom.description,
        roomNumbers: [],
        hotelId: newRoom.hotelId, // Bunu əlavə et
      };

      console.log("Göndərilən otaq məlumatları:", roomData); // Debug üçün əlavə edildi

      await axios.post(`${API_BASE_URL}/${newRoom.hotelId}`, roomData);
      setNewRoom({ title: "", price: "", description: "", hotelId: "" }); // Formu təmizlə
      fetchRooms(); // Yeni otağı çək
    } catch (error) {
      console.error("Otaq əlavə edilə bilmədi:", error.response ? error.response.data : error);
    }
  };

  // 📌 Otaq sil
  const handleDeleteRoom = async (roomId, hotelId) => {
    console.log("Silinəcək otaq ID:", roomId);
    console.log("Otel ID:", hotelId);
  
    if (!hotelId) {
      console.error("Otel ID tapılmadı, otaq silinə bilməz.");
      return;
    }
  
    try {
      await axios.delete(`http://localhost:6068/api/rooms/${roomId}`);

      fetchRooms(); // Siyahını yenilə
    } catch (error) {
      console.error("Otaq silinə bilmədi:", error.response ? error.response.data : error);
    }
  };
  
  

  return (
    <div>
      <h2>Otaqların idarə olunması</h2>

      {/* 📌 Yeni otaq əlavə etmə formu */}
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

      {/* 📌 Otaqlar siyahısı */}
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
              <td>{room.title}</td>
              <td>{room.price} AZN</td>
              <td>{room.desc}</td>
              <td>{room.hotelId}</td>
              <td>
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
