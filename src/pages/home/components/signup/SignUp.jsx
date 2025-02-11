import { useState } from "react";
import styles from "./SignUp.module.css"; // CSS Modules import
import { Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("User Data:", formData);
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
