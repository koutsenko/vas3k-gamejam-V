import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import MenuScreen from "./screens/menu";
import GameScreen from "./screens/game";
import GameOverScreen from "./screens/gameover";
import { IS_DEV } from "./common/consts";
import { EGameStatus } from "./common/enums";
import EditorScreen from "./screens/editor";

/**
 * Начальный статус игры в режиме разработки.
 */
const initialStatus = IS_DEV ? EGameStatus.EDITOR : EGameStatus.MENU;

function App() {
  const [status, setStatus] = useState(initialStatus);

  const startGame = () => {
    setStatus(EGameStatus.PLAYING);
  };

  const openEditor = () => {
    setStatus(EGameStatus.EDITOR);
  };

  const openMenu = () => {
    setStatus(EGameStatus.MENU);
  };

  if (status === EGameStatus.MENU) {
    return <MenuScreen onStartGame={startGame} onOpenEditor={openEditor} />;
  } else if (status === EGameStatus.PLAYING) {
    return <GameScreen />;
  } else if (status === EGameStatus.EDITOR) {
    return <EditorScreen onOpenMenu={openMenu} />;
  } else {
    return <GameOverScreen />;
  }
}

createRoot(document.getElementById("app") as Element).render(<App />);
