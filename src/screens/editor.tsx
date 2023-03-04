import React from "react";
import GameField from "../components/gamefield";
import { useMap } from "../hooks/useMap";
import { TSize } from "../models";
import { ContainerStyled } from "./styles";

const size: TSize = [10, 10];

/**
 * Экран "редактор".
 */
export default function EditorScreen() {
  const { map, setMap, saveMap, loadMap, clearMap, clearSave } = useMap(size);

  /**
   * Обработчик клика на ячейку в редакторе карты.
   */
  const handleCellClick = (rowIndex: number, colIndex: number) => {
    const updatedMap = map.map((row) => [...row]);
    updatedMap[rowIndex][colIndex] = !updatedMap[rowIndex][colIndex];
    setMap(updatedMap);
  };

  return (
    <ContainerStyled>
      <h1>Editor Screen</h1>
      <GameField
        x={size[0]}
        y={size[1]}
        map={map}
        onCellClick={handleCellClick}
      />
      <div>
        <button onClick={clearMap}>Clear</button>
        <button onClick={saveMap}>Save</button>
        <button onClick={loadMap}>Load</button>
        <button onClick={clearSave}>Clear Save</button>
      </div>
    </ContainerStyled>
  );
}
