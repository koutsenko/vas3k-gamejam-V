import React, { useCallback } from "react";
import GameField from "../components/GameField";
import { useWorld } from "../hooks/useWorld";
import { TSize, IWorld, TPosition } from "../common/models";
import { ContainerStyled } from "./styles";
import { editorChangesMap } from "../common/consts";

const size: TSize = [10, 10];

/**
 * @prop onOpenMenu Обработчик перехода в игровое меню.
 * @prop onTestWorld Обработчик переход в режим тестирования мира.
 */
interface IProps {
  onOpenMenu: () => void;
  onTestWorld: (world: IWorld) => void;
}

/**
 * Экран "редактор".
 */
export default function EditorScreen({ onOpenMenu, onTestWorld }: IProps) {
  const { world, setWorld, save, load, clear, clearSave } = useWorld(size);

  /**
   * Обработчик клика на ячейку в редакторе карты.
   */
  const handleCellClick = ([x, y]: TPosition) => {
    const map = world.map.map((row) => [...row]);

    map[y][x] = editorChangesMap[map[y][x]];

    setWorld({ ...world, map });
  };

  /**
   * Обработчик выхода в меню.
   */
  const handleOpenMenu = () => {
    onOpenMenu();
  };

  /**
   * Обработчик клика на кнопку тестирования мира.
   */
  const handleTestWorld = useCallback(() => {
    onTestWorld(world);
  }, [world]);

  return (
    <ContainerStyled>
      <h1>Editor Screen</h1>
      <GameField hidePlayer world={world} onCellClick={handleCellClick} />
      <div>
        <button onClick={clear}>Clear</button>
        <button onClick={save}>Save</button>
        <button onClick={load}>Load</button>
        <button onClick={clearSave}>Clear Save</button>
      </div>
      <div>
        <button onClick={handleOpenMenu}>Menu</button>
        <button onClick={handleTestWorld}>Test World</button>
      </div>
    </ContainerStyled>
  );
}
