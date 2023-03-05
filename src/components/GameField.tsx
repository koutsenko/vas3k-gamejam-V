import React, { useEffect, useMemo } from "react";
import { IWorld, TPosition } from "../common/models";
import { useMove } from "../hooks/useMove";

import { CellStyled, FieldStyled, PlayerStyled } from "./styles";

/**
 * @param [hidePlayer] Скрытие игрока.
 * @param [onCellClick] Обработчик клика на ячейку карты мира.
 * @param [onMovePlayer] Обработчик передвижения игрока.
 * @param world Мир.
 */
interface IProps {
  hidePlayer?: boolean;
  onCellClick?: (position: TPosition) => void;
  onMovePlayer?: (position: TPosition) => void;
  world: IWorld;
}

/**
 * Игровое поле.
 */
export default function GameField({
  hidePlayer = false,
  onCellClick,
  onMovePlayer,
  world,
}: IProps) {
  const [playerPosition] = useMove(
    world.playerPosition,
    world.size,
    !hidePlayer
  );

  /**
   * Постфактум уведомляем движок о перемещении персонажа.
   */
  useEffect(() => onMovePlayer?.(playerPosition), [playerPosition]);

  /**
   * Рендер ячеек мира.
   */
  const cells = useMemo(() => {
    let result = [];

    for (let rowIndex = 0; rowIndex < world.size[1]; rowIndex++) {
      for (let colIndex = 0; colIndex < world.size[0]; colIndex++) {
        result.push(
          <CellStyled
            cellType={world.map[rowIndex][colIndex]}
            key={`${colIndex}-${rowIndex}`}
            top={colIndex}
            left={rowIndex}
            {...(onCellClick && {
              onClick: () => onCellClick([colIndex, rowIndex]),
            })}
          />
        );
      }
    }

    return result;
  }, [world]);

  return (
    <FieldStyled size={world.size}>
      {cells}
      {!hidePlayer && <PlayerStyled position={playerPosition} />}
    </FieldStyled>
  );
}
