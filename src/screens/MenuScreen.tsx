import React from "react";

import { ContainerStyled } from "./styles";

/**
 * @param onOpenEditor Обработчик перехода в редактор.
 * @param onStartGame Обработчик начала игры.
 */
interface MenuScreenProps {
  onOpenEditor: () => void;
  onStartGame: () => void;
}

/**
 * Экран "меню".
 */
export default function MenuScreen({
  onStartGame,
  onOpenEditor,
}: MenuScreenProps) {
  return (
    <ContainerStyled>
      <h1>Welcome to My Game</h1>
      <button onClick={onStartGame}>Start Game</button>
      <button onClick={onOpenEditor}>Edit World</button>
    </ContainerStyled>
  );
}
