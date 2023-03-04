import React from "react";

import { ContainerStyled } from "./styles";

interface MenuScreenProps {
  onStartGame: () => void;
  onEditField: () => void;
}

/**
 * Экран "меню".
 */
export default function MenuScreen({
  onStartGame,
  onEditField,
}: MenuScreenProps) {
  return (
    <ContainerStyled>
      <h1>Welcome to My Game</h1>
      <button onClick={onStartGame}>Start Game</button>
      <button onClick={onEditField}>Edit Fields</button>
    </ContainerStyled>
  );
}
