import React, { useState } from "react";

const SearchAndSortPage = ({ games }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // filter games based on search term
  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // sort games based on sortOrder
  const sortedGames = filteredGames.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search games"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="asc">Sort A-Z</option>
        <option value="desc">Sort Z-A</option>
      </select>

      {sortedGames.map((game) => (
        <div key={game.id}>
          <h2>{game.name}</h2>
          <p>{game.description}</p>
          <a href={`/games/${game.id}`}>View Game</a>
        </div>
      ))}
    </div>
  );
};

export default SearchAndSortPage;
