import { useState } from "react";
import { TSize } from "../models";

/**
 * Инициализация пустой карты.
 *
 * @param size Размер карты.
 */
const getEmptyMap = (size: TSize) => {
  let newMap = [];
  for (let j = 0; j < size[1]; j++) {
    newMap.push([]);
    for (let i = 0; i < size[0]; i++) {
      newMap[j].push(false as never);
    }
  }
  return newMap;
};

/**
 * Хук для работы с игровой картой.
 */
export const useMap = (size: TSize) => {
  const [map, setMap] = useState<Array<Array<boolean>>>(getEmptyMap(size));

  const saveMap = () => {
    localStorage.setItem("map", JSON.stringify(map));
  };

  const loadMap = () => {
    const savedMap = localStorage.getItem("map");

    savedMap && setMap(JSON.parse(savedMap));
  };

  const clearMap = () => {
    setMap(getEmptyMap(size));
  };

  const clearSave = () => {
    localStorage.removeItem("map");
  };

  return {
    map,
    setMap,
    saveMap,
    loadMap,
    clearMap,
    clearSave,
  };
};
