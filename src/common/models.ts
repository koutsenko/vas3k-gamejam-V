import { ECellType } from "./enums";

/**
 * Размер чего-либо.
 */
export type TSize = [number, number];

/**
 * Позиция чего-либо.
 */
export type TPosition = [number, number];

/**
 * Структура игрового мира.
 *
 * @prop map Игровая карта.
 * @prop playerPosition Координата персонажа.
 * @prop size Размер карты мира (кол-во ячеек по горизонтали и вертикали).
 */
export interface IWorld {
  map: Array<Array<ECellType>>;
  playerPosition: TPosition;
  size: TSize;
}
