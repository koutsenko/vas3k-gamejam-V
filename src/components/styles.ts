import styled from "styled-components";
import { CELL_SIZE, mapCellTypeToBackgroundColor } from "../common/consts";
import { ECellType } from "../common/enums";
import { TSize, TPosition } from "../common/models";

/**
 * Игровое поле.
 */
export const FieldStyled = styled.div<{ size: TSize }>`
  display: inline-block;
  outline: 2px dashed gray;
  position: relative;
  width: ${(props) => props.size[0] * CELL_SIZE}px;
  height: ${(props) => props.size[1] * CELL_SIZE}px;
`;

/**
 * Спрайт игрового поля.
 */
export const CellStyled = styled.div<{
  cellType: ECellType;
  top: number;
  left: number;
}>`
  background-color: ${(props) => mapCellTypeToBackgroundColor[props.cellType]};
  height: ${CELL_SIZE}px;
  left: ${(props) => props.left * CELL_SIZE}px;
  outline: 1px dashed gray;
  position: absolute;
  top: ${(props) => props.top * CELL_SIZE}px;
  width: ${CELL_SIZE}px;
`;

/**
 * Спрайт игрока.
 */
export const PlayerStyled = styled.div<{ position: TPosition }>`
  background-color: yellow;
  border-radius: ${CELL_SIZE / 2}px;
  height: ${CELL_SIZE}px;
  left: ${(props) => props.position[0] * CELL_SIZE}px;
  position: absolute;
  top: ${(props) => props.position[1] * CELL_SIZE}px;
  width: ${CELL_SIZE}px;
`;
