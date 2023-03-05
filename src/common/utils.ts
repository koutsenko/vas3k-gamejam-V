import { ECellType } from "../common/enums";
import { emptyWorld } from "../common/consts";
import { IWorld, TSize } from "../common/models";

/**
 * Краткая замена cloneDeep из lodash.
 */
export const cloneDeep = (obj: any): any => JSON.parse(JSON.stringify(obj));

/**
 * Инициализация пустого мира.
 *
 * @param size Размер карты.
 */
export const buildEmptyWorld = (size: TSize): IWorld => {
  let newWorld: IWorld = cloneDeep(emptyWorld);

  newWorld.size = size;
  for (let rowIndex = 0; rowIndex < size[1]; rowIndex++) {
    newWorld.map.push([]);
    for (let colIndex = 0; colIndex < size[0]; colIndex++) {
      newWorld.map[rowIndex].push(ECellType.GRASS);
    }
  }

  return newWorld;
};
