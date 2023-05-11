import React from "react";

const SearchBar = ({ searchTerm, onSearchTermChange }) => {
  return (
    <input
      type="text"
      placeholder="Search games"
      value={searchTerm}
      onChange={(e) => onSearchTermChange(e.target.value)}
    />
  );
};

export default SearchBar;
