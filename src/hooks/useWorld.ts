import { useState } from "react";
import { IWorld, TSize } from "../common/models";
import { ECellType } from "../common/enums";
import { emptyWorld, storageObjectName } from "../common/consts";
import { cloneDeep } from "../common/util";

/**
 * Инициализация пустого мира.
 *
 * @param size Размер карты.
 */
const getEmptyWorld = (size: TSize): IWorld => {
  let newWorld: IWorld = cloneDeep(emptyWorld);

  newWorld.size = size;
  for (let j = 0; j < size[1]; j++) {
    newWorld.map.push([]);
    for (let i = 0; i < size[0]; i++) {
      newWorld.map[j].push(ECellType.GRASS);
    }
  }

  return newWorld;
};

/**
 * Хук для работы с игровым миром.
 */
export const useWorld = (size: TSize) => {
  const [world, setWorld] = useState<IWorld>(getEmptyWorld(size));

  const save = () => {
    localStorage.setItem(storageObjectName, JSON.stringify(world));
  };

  const load = () => {
    const savedMap = localStorage.getItem(storageObjectName);

    savedMap && setWorld(JSON.parse(savedMap));
  };

  const clear = () => {
    setWorld(getEmptyWorld(size));
  };

  const clearSave = () => {
    localStorage.removeItem(storageObjectName);
  };

  return {
    world,
    setWorld,
    save,
    load,
    clear,
    clearSave,
  };
};
