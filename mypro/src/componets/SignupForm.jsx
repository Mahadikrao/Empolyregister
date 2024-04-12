import { useState } from 'react';
import axios from 'axios';

function SignupForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });
  const [message, setMessage] = useState('');

  const { username, password, email } = formData;


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/signup', formData);

      if (response.status === 201) {
        setMessage('User created successfully');
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setMessage('Username already exists');
      } else {
        setMessage('Internal server error');
      }
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default SignupForm;
