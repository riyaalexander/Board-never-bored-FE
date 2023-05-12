import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SortingFeature from "./SortingFeature";

const SearchAndSortPage = ({ games }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedGames = filteredGames.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return (
    <div className="search-and-sort-page">
      <SearchBar searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />

      <SortingFeature sortOrder={sortOrder} onSortOrderChange={setSortOrder} />

      <div className="game-container">
        {sortedGames.map((game) => (
          <a href={`/games/${game.id}`} key={game.id} className="game-box">
            <img src={game.image} alt={game.name} className="game-image" />
            <h2>{game.name}</h2>
            <p>{game.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SearchAndSortPage;
