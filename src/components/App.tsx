import React, { useCallback, useState } from "react";
import MenuScreen from "../screens/MenuScreen";
import GameScreen from "../screens/GameScreen";
import GameOverScreen from "../screens/GameOverScreen";
import { IS_DEV, emptyWorld } from "../common/consts";
import { EGameStatus } from "../common/enums";
import EditorScreen from "../screens/EditorScreen";
import { IWorld, TPosition } from "../common/models";

/**
 * Начальный статус игры в режиме разработки.
 */
const initialStatus = IS_DEV ? EGameStatus.EDITOR : EGameStatus.MENU;

export function App() {
  const [status, setStatus] = useState(initialStatus);
  const [world, setWorld] = useState<IWorld>(emptyWorld);

  const startGame = () => {
    setStatus(EGameStatus.PLAYING);
  };

  const openEditor = () => {
    setStatus(EGameStatus.EDITOR);
  };

  const openMenu = () => {
    setStatus(EGameStatus.MENU);
  };

  const testWorld = (world: IWorld) => {
    setWorld(world);
    setStatus(EGameStatus.PLAYING);
  };

  const movePlayer = useCallback(
    (playerPosition: TPosition) => {
      setWorld({
        ...world,
        playerPosition,
      });
    },
    [world]
  );

  if (status === EGameStatus.MENU) {
    return <MenuScreen onStartGame={startGame} onOpenEditor={openEditor} />;
  } else if (status === EGameStatus.PLAYING) {
    return <GameScreen onMovePlayer={movePlayer} world={world} />;
  } else if (status === EGameStatus.EDITOR) {
    return <EditorScreen onTestWorld={testWorld} onOpenMenu={openMenu} />;
  } else {
    return <GameOverScreen />;
  }
}
