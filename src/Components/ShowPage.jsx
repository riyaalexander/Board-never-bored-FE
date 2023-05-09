import React from 'react';

const ShowPage = (props) => {
  const { game } = props;

  return (
    <div>
      <h1>{game.title}</h1>
      <img src={game.image} alt={game.title} />
      <p>Released: {game.releaseDate}</p>
      <p>Rating: {game.rating}</p>
      <p>Description: {game.description}</p>
      <p>Genre: {game.genre}</p>
    </div>
  );
}

export default ShowPage;
