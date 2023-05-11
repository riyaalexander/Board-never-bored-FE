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
    <div>
      <SearchBar searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />

      <SortingFeature sortOrder={sortOrder} onSortOrderChange={setSortOrder} />

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
