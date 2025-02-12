import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Login.module.css";

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

      console.log("Login Successful:", res.data);
      navigate("/dashboard"); // İstifadəçi daxil olduqdan sonra yönləndirilir
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong!");
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
