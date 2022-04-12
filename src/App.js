import { useState } from "react";
import "./App.css";
import EndScreen from "./components/EndScreen/EndScreen";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Quiz from "./components/Quiz/Quiz";
import { GameProvider } from "./context/UserContext";

function App() {
  const [user, setUser] = useState("");
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <GameProvider
        value={{
          gameState,
          setGameState,
          user,
          setUser,
          score,
          setScore,
        }}
      >
        <Header user={user}/>
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Quiz />}
        {gameState === "finished" && <EndScreen />}
      </GameProvider>
      {
        gameState !== 'playing' && (
          <div className="about">
            <p> Quiz App </p>
            <p>---------------------------------</p>
            <p>Built completely with ReactJS using Hooks and the Context API.</p>
          </div>
        )
      }
    </div>
  );
}

export default App;
