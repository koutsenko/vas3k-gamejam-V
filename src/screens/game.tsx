import React from "react";
import GameField from "../components/gamefield";
import { emptyWorld } from "../common/consts";

import { ContainerStyled } from "./styles";
import { cloneDeep } from "../common/util";

/**
 * Экран "игра".
 */
export default function GameScreen() {
  // TODO Загружать мир из json.
  const world = cloneDeep(emptyWorld);

  return (
    <ContainerStyled>
      <h1>Game Screen</h1>
      <GameField world={world} />
    </ContainerStyled>
  );
}
