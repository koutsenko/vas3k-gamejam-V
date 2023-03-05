/**
 * Глобальные состояния игры.
 */
export enum EGameStatus {
  EDITOR,
  MENU,
  PLAYING,
  GAME_OVER,
}

/**
 * Тип ячейки игрового поля.
 */
export enum ECellType {
  HOUSE,
  GRASS,
  POOL,
}

/**
 * Коды клавиш.
 */
export enum Keys {
  Up = "ArrowUp",
  Right = "ArrowRight",
  Down = "ArrowDown",
  Left = "ArrowLeft",
}
