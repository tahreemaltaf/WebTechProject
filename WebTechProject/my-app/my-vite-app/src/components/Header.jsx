import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function Header() {
  return (
    <header className="header">
      <div className="logo">BookFlix</div>
      <Link to="/signup"> {/* Wrap the button with Link */}
        <button className="sign-in-button">Sign Up</button>
      </Link>
    </header>
  );
}

export default Header;
