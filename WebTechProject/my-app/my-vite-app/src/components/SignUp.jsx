import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState(''); // To display error messages
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Sending data to backend
      const response = await fetch('http://localhost:3010/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      

      const data = await response.json();

      if (response.ok) {
        alert(`Account created for: ${formData.username}`);
        navigate('/book-section'); // Redirect to BookSectionPage after account creation
      } else {
        setError(data.message || 'Error occurred');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to connect to server. Please try again.');
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h1 className="signup-title">Create an Account</h1>
        <p className="signup-description">Join us to explore endless books and genres!</p>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            className="form-input"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            className="form-input"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
