import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const ReadMoreSignUp = () => {
  return (
    <div className="read-more-sign-up">
      <p className="read-more-text">Wanna Read More?</p>
      {/* Use Link to redirect to the /signup page */}
      <Link to="/signup" className="cta-button">Sign Up</Link>
    </div>
  );
};

export default ReadMoreSignUp;
