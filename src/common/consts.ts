import { ECellType } from "./enums";
import { IWorld, TSize } from "./models";

export const CELL_SIZE = 32;

// export const CAN_WARP = false;
export const CAN_WARP = true;

// export const IS_DEV = false;
export const IS_DEV = process.env.NODE_ENV === "development";

export const storageObjectName = "world";

export const defaultSize: TSize = [10, 10];

/**
 * Карта соответствия типа ячейки и игрового фона.
 */
export const mapCellTypeToBackgroundColor = {
  [ECellType.GRASS]: "green",
  [ECellType.HOUSE]: "gray",
  [ECellType.POOL]: "blue",
};

/**
 * Карта переключения типа ячейки в редакторе.
 */
export const editorChangesMap = {
  [ECellType.GRASS]: ECellType.HOUSE,
  [ECellType.HOUSE]: ECellType.POOL,
  [ECellType.POOL]: ECellType.GRASS,
};

/**
 * Пустой мир.
 */
export const emptyWorld: IWorld = {
  map: [[ECellType.GRASS]],
  playerPosition: [0, 0],
  size: [1, 1],
};
