import React from "react";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <main className="main bg-dark">
      <div className="error">
        <h1 className="error_message">You are in a secure space.</h1>
        <p className="error_message">Please log in to access your accounts. </p>
      </div>
      <div className="error_buttons">
        <button className="sign-in-button error_button">
          <Link to="/Home" className="no-underline">
            Home page
          </Link>
        </button>
        <button className="sign-in-button error_button">
          <Link to="/LoginPage" className="no-underline">
            Sign in
          </Link>
        </button>
      </div>
    </main>
  );
};

export default ErrorPage;
