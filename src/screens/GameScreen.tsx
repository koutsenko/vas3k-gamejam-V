import React from "react";
import GameField from "../components/GameField";

import { ContainerStyled } from "./styles";
import { IWorld } from "../common/models";

/**
 * @param world Игровой мир.
 */
interface IProps {
  world: IWorld;
}

/**
 * Экран "игра".
 */
export default function GameScreen({ world }: IProps) {
  return (
    <ContainerStyled>
      <h1>Game Screen</h1>
      <GameField world={world} />
    </ContainerStyled>
  );
}
