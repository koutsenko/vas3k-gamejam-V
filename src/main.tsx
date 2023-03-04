import React, { useState } from "react";
import ReactDOM from "react-dom";
import MenuScreen from "./screens/menu";
import GameScreen from "./screens/game";

enum GameStatus {
  MENU,
  PLAYING,
  GAME_OVER,
}

function App() {
  const [status, setStatus] = useState(GameStatus.MENU);

  const startGame = () => {
    setStatus(GameStatus.PLAYING);
  };

  if (status === GameStatus.MENU) {
    return <MenuScreen onStartGame={startGame} />;
  } else if (status === GameStatus.PLAYING) {
    return <GameScreen />;
  } else {
    return <div>Game Over</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
