import styles from './Login.module.css'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await axios.post("http://localhost:6066/api/auth/login", {
        username: email,  // Backend username istifadə etdiyi üçün email-i göndəririk
        password
      }, { withCredentials: true });

      // Serverdən gələn məlumatı konsola yazırıq
      console.log("Server response:", res.data);  // Tam cavabı yaz

      // Serverdən gələn user məlumatını birbaşa res.data istifadə edirik
      const userData = res.data;   // res.data birbaşa istifadə olunur

      // localStorage-ın mövcudluğunu yoxlayırıq
      if (typeof(Storage) !== "undefined") {
        // localStorage mövcuddursa, məlumatı saxlayırıq
        if (userData) {
          console.log("User data to store:", userData);
          localStorage.setItem("user", JSON.stringify(userData));
        } else {
          console.log("No user data found!");
        }
      } else {
        console.log("localStorage is not supported or is disabled in this environment");
      }

      console.log(res.data);
      navigate("/dashboard"); // Daxil olduqdan sonra yönləndiririk
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Something went wrong!");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2 className={styles.title}>Sign In</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.button}>Sign In</button>
          <div className={styles.links}>
            <Link to="/forgot-password">Forgot Password?</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
