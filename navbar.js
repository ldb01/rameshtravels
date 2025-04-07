import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <div className="logo">
          <img src="logo.jpeg" alt="Ramesh Travels Logo" />
        </div>
        <div className="logo-text">Pathfinder</div>
      </div>

      <div className="search-container">
        <div className="search-box">
          <svg
            className="search-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      <div className="nav-links">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="nav-link" target="_blank">Explore</a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="nav-link" target="_blank" >Review</a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="nav-link" target="_blank">Recommendations</a>
      </div>

    <div className="buttonthingy">
    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
    <img src="bookmark.png" alt="Logo" className="navbar-logo" />
  </a>

  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
    <img src="user.png" alt="Logo" className="navbar-logo" />
  </a>
    </div>


    </nav>
  );
};

export default Navbar;
