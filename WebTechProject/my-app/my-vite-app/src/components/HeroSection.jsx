import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'name') {
      setName(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent the form from refreshing

    const formData = { email, name, password };  // Prepare the form data with email, name, and password

    try {
      // Send a POST request to backend to authenticate the user
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);  // Show success message if login is successful
        // Optionally, store the token in localStorage for session management
        localStorage.setItem('token', data.token);  
        navigate('/book-section');  // Redirect to BookSectionPage after login
      } else {
        setError(data.message || 'Error during login');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to connect to server. Please try again.');
    }
  };

  return (
    <section className="hero-section">
      <h1>Endless Books Every Genre You Love</h1>
      <p style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Start for free, Just a Click away
      </p>
      <p>Ready to read? Enter your details and start reading now</p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form className="email-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="input-field"
          value={name}
          onChange={handleInputChange}
          required // Ensure name input is validated
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          className="input-field"
          value={email}
          onChange={handleInputChange}
          required // Ensure email input is validated
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input-field"
          value={password}
          onChange={handleInputChange}
          required // Ensure password input is validated
        />
        <button
          type="submit"
          className="get-started-button"
        >
          Login &gt;
        </button>
      </form>
    </section>
  );
};

export default HeroSection;
