import React from "react";
import GameField from "../components/GameField";

import { ContainerStyled } from "./styles";
import { IWorld, TPosition } from "../common/models";

/**
 * @param world Игровой мир.
 */
interface IProps {
  onMovePlayer: (position: TPosition) => void;
  world: IWorld;
}

/**
 * Экран "игра".
 */
export default function GameScreen({ onMovePlayer, world }: IProps) {
  return (
    <ContainerStyled>
      <h1>Game Screen</h1>
      <GameField world={world} onMovePlayer={onMovePlayer} />
    </ContainerStyled>
  );
}
