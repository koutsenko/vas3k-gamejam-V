import React from "react";
import GameField from "../components/gamefield";

import { ContainerStyled } from "./styles";

export default function GameScreen() {
  return (
    <ContainerStyled>
      <h1>Game Screen</h1>
      <GameField x={10} y={10} />
    </ContainerStyled>
  );
}
