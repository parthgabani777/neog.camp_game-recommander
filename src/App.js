import "./styles.css";
import { useState } from "react";

function App() {
  const games = {
    Action: [
      {
        name: "Grand Theft Auto V",
        rating: "9.5/10",
        description:
          "Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond."
      },
      {
        name: "Batman: Arkham City",
        rating: "9.4/10",
        description:
          "Arkham City is an open world action video game that incorporates elements of stealth and predator tactics."
      },
      {
        name: "Assassin’s Creed IV: Black Flag",
        rating: "8.7/10",
        description:
          "EXPLORE AN OPEN WORLD FILLED WITH OPPORTUNITIES Discover the largest and most diverse Assassin’s Creed world ever created."
      }
    ],
    Adventure: [
      {
        name: "Minecraft",
        rating: "8.4/10",
        description:
          "Explore infinite worlds and build everything from the simplest of homes to the grandest of castles."
      },
      {
        name: "Red Dead Redemption 2",
        rating: "9.7/10",
        description:
          "RDR2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age."
      },
      {
        name: "Spider-Man",
        rating: "9.2/10",
        description:
          "Based on the Marvel Comics superhero Spider-Man, it is inspired by the long-running comic book lore series adaptations in other media."
      }
    ],
    Survival: [
      {
        name: "Rust",
        rating: "6.8/10",
        description:
          "The objective of Rust is to survive in the wilderness using gathered or stolen materials. Players must successfully manage their hunger, thirst, and health, or risk dying."
      },
      {
        name: "ARK: Survival Evolved",
        rating: "6.9/10",
        description:
          "Players must survive being stranded on an island filled with roaming dinosaurs and other prehistoric animals, natural hazards, and potentially hostile human players."
      },
      {
        name: "Subnautica",
        rating: "8.4/10",
        description:
          "Subnautica is a survival action-adventure game set in an open world environment and played from a first-person perspective."
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
            <li className="rating" key={value.rating}>
              {value.rating}
            </li>
            <li className="small-font" key={value.description}>
              {value.description}
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
