import React, { useMemo, useState } from "react";
import { IWorld } from "../common/models";

import { CellStyled, FieldStyled, PlayerStyled } from "./styles";

/**
 * @param [hidePlayer] Скрытие игрока.
 * @param [onCellClick] Обработчик клика на ячейку карты мира.
 * @param world Мир.
 */
interface IProps {
  hidePlayer?: boolean;
  onCellClick?: (y: number, x: number) => void;
  world: IWorld;
}

/**
 * Игровое поле.
 */
export default function GameField({
  hidePlayer = false,
  onCellClick,
  world,
}: IProps): JSX.Element {
  const [playerPosition, setPlayerPosition] = useState(world.spawnPoint);

  const cells = useMemo(() => {
    let result = [];

    for (let i = 0; i < world.size[0]; i++) {
      for (let j = 0; j < world.size[1]; j++) {
        result.push(
          <CellStyled
            cellType={world.map[j][i]}
            key={`${i}-${j}`}
            top={i}
            left={j}
            {...(onCellClick && {
              onClick: () => onCellClick(j, i),
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
