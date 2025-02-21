import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./SignUp.module.css";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
  
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
  
    try {
      const res = await axios.post("http://localhost:6068/api/auth/register", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      }, { withCredentials: true });

      // Serverdən alınan istifadəçi məlumatlarını localStorage-a yazırıq
      const userData = res.data.user;
      if (userData) {
        localStorage.setItem("user", JSON.stringify(userData));
      }

      alert("Registration successful! Please log in.");
      navigate("/login"); // Qeydiyyat bitəndən sonra login səhifəsinə yönləndiririk
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong!");
    }
  };
  

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupBox}>
        <h2 className={styles.title}>Sign Up</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            className={styles.input}
            value={formData.username}
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className={styles.input}
            value={formData.password}
            onChange={handleChange}
          />
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            className={styles.input}
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.button}>Sign Up</button>
          <div className={styles.links}>
            <span>Already have an account?</span>
            <Link to="/login">Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
