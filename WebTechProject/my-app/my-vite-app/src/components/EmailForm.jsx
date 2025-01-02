import React from 'react';

const EmailForm = () => {
  return (
    <form className="email-form">
      <input
        type="email"
        placeholder="Email address"
        className="email-input"
      />
      <button className="get-started-button">Get Started &gt;</button>
    </form>
  );
};

export default EmailForm;
