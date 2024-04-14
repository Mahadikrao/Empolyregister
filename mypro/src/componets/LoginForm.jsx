import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Style/Login.css"; // Import the CSS file here

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        formData
      );

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        setMessage("Login successful");
        navigate("/about");
      }
    } catch (error) {
      setMessage("Invalid username or password");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="login-form-container">
      {" "}
      {/* Use CSS class */}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginForm;
