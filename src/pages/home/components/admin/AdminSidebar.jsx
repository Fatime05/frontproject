import React from "react";
import { Link } from "react-router-dom";
import { FaHotel, FaClipboardList, FaUsers, FaChartBar } from "react-icons/fa";
import style from './AdminSidebar.module.css'

const AdminSidebar = () => {
  return (
    <div className={style.adminsidebar}>
      <h2>Admin Panel</h2>
      <ul>
        <li>
          <Link to="/admin/dashboard">
            <FaChartBar /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin/rooms">
            <FaHotel /> Otaqlar
          </Link>
        </li>
        <li>
          <Link to="/admin/bookings">
            <FaClipboardList /> Rezervasiyalar
          </Link>
        </li>
        <li>
          <Link to="/admin/users">
            <FaUsers /> İstifadəçilər
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
