import { ECellType } from "./enums";

/**
 * Размер чего-либо.
 */
export type TSize = [number, number];

/**
 * Структура игрового мира.
 *
 * @prop map Игровая карта.
 * @prop size Размер карты мира (кол-во ячеек по горизонтали и вертикали).
 * @prop spawnPoint Точка появления персонажа.
 */
export interface IWorld {
  map: Array<Array<ECellType>>;
  size: TSize;
  spawnPoint: [number, number];
}
