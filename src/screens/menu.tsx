import React from "react";

import { ContainerStyled } from "./styles";

interface MenuScreenProps {
  onStartGame: () => void;
}

export default function MenuScreen({ onStartGame }: MenuScreenProps) {
  return (
    <ContainerStyled>
      <h1>Welcome to My Game</h1>
      <button onClick={onStartGame}>Start Game</button>
    </ContainerStyled>
  );
}
