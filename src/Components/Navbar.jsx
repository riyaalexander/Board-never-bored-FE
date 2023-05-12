import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar-title">Board, Never Bored!</h1>
      <div className="navbar-links">
        <input type="text" placeholder="Search games" className="search-input" />
        <select className="sort-select">
          <option value="asc">Sort A-Z</option>
          <option value="desc">Sort Z-A</option>
        </select>
        <Link to="/form" className="form-link">Add Game</Link>
      </div>
    </div>
  );
};

export default Navbar;
