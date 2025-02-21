import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { FaUserCircle } from "react-icons/fa"; // İstifadəçi iconu
import { FiMenu } from "react-icons/fi"; // Mobil menyu iconu
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import style from "./Header.module.css";

const Header = ({ isHomePage }) => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false); // Drawer üçün state

  const toggleDrawer = () => setIsOpen((prev) => !prev);

  const headerStyle = isHomePage ? style.homeHeader : style.otherHeader;
  const contextt = isHomePage ? style.logoHome : style.contextt;

  return (
    <div className={headerStyle}>
      <div className={`${style.context} ${contextt}`}>
        <div className={style.logo}>
          <Link to="/home">
            <h1>Kera</h1>
          </Link>
        </div>

        {/* Mobil menyu düyməsi */}
        <button className={style.menuBtn} onClick={toggleDrawer}>
          <FiMenu size={28} />
        </button>

        {/* Mobil menyu */}
        <Drawer open={isOpen} onClose={toggleDrawer} direction="right">
          <div className={style.mobileMenu}>
            <ul>
              <li><Link to="/home" onClick={toggleDrawer}>Home</Link></li>
              <li><Link to="/rooms" onClick={toggleDrawer}>Accommodation</Link></li>
              <li><Link to="/restaurants" onClick={toggleDrawer}>Restaurants</Link></li>
              <li><Link to="/admin" onClick={toggleDrawer}>Admin Panel</Link></li>
              <li><Link to="#" onClick={toggleDrawer}>Contact</Link></li>
            </ul>
          </div>
        </Drawer>

        <div className={style.navbar}>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/rooms">Accommodation</Link></li>
            <li><Link to="/restaurants">Restaurants</Link></li>
            <li><Link to="/admin">Admin Panel</Link></li>
            <li><Link to="#">Contact</Link></li>
          </ul>
        </div>

        <div className={style.logreg}>
          {user ? (
            <div className={style.userMenu}>
              <FaUserCircle size={24} className={style.userIcon} />
              <span>{user.username}</span>
              <button onClick={logout} className={style.logoutBtn}>Logout</button>
            </div>
          ) : (
            <>
              <button onClick={() => navigate("/login")} className={style.login}>Login</button>
              <button onClick={() => navigate("/signup")} className={style.register}>Register</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
