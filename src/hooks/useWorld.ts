import { useState } from "react";
import { IWorld, TSize } from "../common/models";
import { storageObjectName } from "../common/consts";
import { buildEmptyWorld } from "../common/utils";

/**
 * Хук для работы с игровым миром.
 */
export const useWorld = (size: TSize) => {
  const [world, setWorld] = useState<IWorld>(buildEmptyWorld(size));

  const save = () => {
    localStorage.setItem(storageObjectName, JSON.stringify(world));
  };

  const load = () => {
    const savedMap = localStorage.getItem(storageObjectName);

    savedMap && setWorld(JSON.parse(savedMap));
  };

  const clear = () => {
    setWorld(buildEmptyWorld(size));
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
