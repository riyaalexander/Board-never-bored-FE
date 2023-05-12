import React from "react";
import SearchBar from "./SearchBar";

import FormPage from "./Form";

const Navbar = () => {
  return (
    <div className="navbar-container">
      {FormPage}
      
      <div className="search-bar-container">
        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;
