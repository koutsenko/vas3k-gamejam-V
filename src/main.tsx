import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import MenuScreen from "./screens/menu";
import GameScreen from "./screens/game";

enum GameStatus {
  MENU,
  PLAYING,
  GAME_OVER,
}

/**
 * Начальный статус игры в режиме разработки.
 */
const initialStatus =
  process.env.NODE_ENV === "development" ? GameStatus.PLAYING : GameStatus.MENU;

function App() {
  const [status, setStatus] = useState(initialStatus);

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

createRoot(document.getElementById("app") as Element).render(<App />);
