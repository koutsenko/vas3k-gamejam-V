import React, { useMemo } from "react";
import { IWorld } from "../common/models";

import { CellStyled, FieldStyled } from "./styles";

/**
 * @param world Мир.
 * @param [onCellClick] Обработчик клика на ячейку карты мира.
 */
interface IProps {
  world: IWorld;
  onCellClick?: (y: number, x: number) => void;
}

/**
 * Игровое поле.
 */
export default function GameField({ world, onCellClick }: IProps): JSX.Element {
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

  return <FieldStyled size={world.size}>{cells}</FieldStyled>;
}
