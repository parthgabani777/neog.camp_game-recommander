import "./styles.css";
import { useState } from "react";

function App() {
  const games = {
    Action: [
      {
        name: "Grand Theft Auto V",
        rating: "9.5/10"
      },
      {
        name: "Batman: Arkham City",
        rating: "9.4/10"
      },
      {
        name: "Assassin’s Creed IV: Black Flag",
        rating: "8.7/10"
      }
    ],
    Adventure: [
      {
        name: "Minecraft",
        rating: "8.4/10"
      },
      {
        name: "Red Dead Redemption 2",
        rating: "9.7/10"
      },
      {
        name: "Spider-Man",
        rating: "9.2/10"
      }
    ],
    Survival: [
      {
        name: "Rust",
        rating: "6.8/10"
      },
      {
        name: "ARK: Survival Evolved",
        rating: "6.9/10"
      },
      {
        name: "Subnautica",
        rating: "8.4/10"
      }
    ]
  };

  let [gameCategory, setGameCategory] = useState("Action");

  function handleChange(key) {
    setGameCategory(key);
  }

  return (
    <div className="App container">
      <h1>🎮 Game Recommander</h1>
      <p>Select the types of game which you liked to play</p>
      {Object.keys(games).map((key) => {
        return (
          <button className="btn" key={key} onClick={() => handleChange(key)}>
            {key}
          </button>
        );
      })}
      <hr />
      {games[gameCategory].map((value) => {
        return (
          <ul className="box" key={value.name}>
            <li key={value.name}>{value.name}</li>
            <li key={value.rating}>{value.rating}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
