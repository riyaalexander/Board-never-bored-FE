import React from "react";
import GameCard from "./GameCard"; // Import your GameCard component here

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [] // Initialize your games state as an empty array
    };
  }

  componentDidMount() {
    // Fetch the games data from your backend API
    fetch("http://localhost:3000/games")
      .then(response => response.json())
      .then(data => {
        this.setState({ games: data });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Board Games</h1>
        <div className="game-list">
          {this.state.games.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    );
  }
}

export default HomePage;
