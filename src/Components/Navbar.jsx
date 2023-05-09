import React from 'react';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/search">Search</a>
        </li>
        <li>
          <a href="/form">Add Game</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
