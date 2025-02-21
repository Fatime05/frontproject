import React from "react";
import AdminSidebar from "../admin/AdminSidebar";
import style from './AdminLayout.module.css'

const AdminLayout = ({ children }) => {
  return (
    <div className={style.admincontainer}>
      <AdminSidebar />
      <div className={style.admincontent}>{children}</div>
    </div>
  );
};

export default AdminLayout;
