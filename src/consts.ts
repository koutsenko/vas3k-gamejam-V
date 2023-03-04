import { ECellType } from "./enums";

export const CELL_SIZE = 32;

// export const IS_DEV = false;
export const IS_DEV = process.env.NODE_ENV === "development";

/**
 * Карта соответствия типа ячейки и игрового фона.
 */
export const mapCellTypeToBackgroundColor = {
  [ECellType.GRASS]: "green",
  [ECellType.HOUSE]: "gray",
  [ECellType.POOL]: "blue",
};
