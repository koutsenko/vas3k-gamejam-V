import styled from "styled-components";
import { CELL_SIZE } from "../consts";

/**
 * Игровое поле.
 */
export const FieldStyled = styled.div<{ height: number; width: number }>`
  display: inline-block;
  outline: 2px dashed gray;
  position: relative;
  width: ${(props) => props.width * CELL_SIZE}px;
  height: ${(props) => props.height * CELL_SIZE}px;
`;

/**
 * Ячейка игрового поля.
 */
export const CellStyled = styled.div<{ top: number; left: number }>`
  height: ${CELL_SIZE}px;
  left: ${(props) => props.left * CELL_SIZE}px;
  outline: 1px dashed gray;
  position: absolute;
  top: ${(props) => props.top * CELL_SIZE}px;
  width: ${CELL_SIZE}px;
`;