import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import style from './UserDashboard.module.css'

const UserDashboard = () => {
  const [user, setUser] = useState(null);  // İstifadəçi məlumatları
  const [loading, setLoading] = useState(true); // Yükləmə vəziyyəti
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const storedUser = localStorage.getItem("user");

        // localStorage-də məlumat yoxdursa, login səhifəsinə yönləndiririk
        if (!storedUser) {
          navigate("/login");
          return;
        }

        let user = null;
        try {
          // localStorage-dan alınan məlumatı JSON formatına çeviririk
          user = JSON.parse(storedUser);
          if (!user || !user._id) {
            navigate("/login");
            return;
          }
        } catch (error) {
          console.log("Error parsing user data from localStorage:", error);
          navigate("/login");
          return;
        }

        // İstifadəçi məlumatı varsa, serverdən alırıq
        const res = await axios.get(
          `http://localhost:6066/api/users/${user._id}`,
          { withCredentials: true }
        );

        setUser(res.data); // Məlumatı state-də saxlayırıq
        setLoading(false);
      } catch (error) {
        console.log("Error fetching user data:", error);
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

  if (loading) return <p>Loading...</p>; // Loading yazısını göstəririk

  // Yalnız `user` mövcud olduqda məlumatları göstəririk
  if (!user) return <p>User data not found</p>;

  return (
    <div className={style.dashboardContainer}>
      {loading ? (
        <p className={style.loading}>Loading...</p>
      ) : (
        <div>
          <h2>Welcome, {user.username}!</h2>
          <p className={style.userInfo}>Email: {user.email}</p>
          <button onClick={() => navigate("/logout")}>Logout</button>
        </div>
      )}
    </div>
  );
  
};

export default UserDashboard;
