import React, { useMemo } from "react";

import { CellStyled, FieldStyled } from "./styles";

/**
 * @param [map] Карта.
 * @param [onCellClick] Обработчик клика на ячейку.
 * @param x Размер поля по-горизонтали, кол-во спрайтов.
 * @param y Размер поля по-вертикали, кол-во спрайтов.
 */
interface IProps {
  map?: Array<Array<boolean>>;
  onCellClick?: (y: number, x: number) => void;
  x: number;
  y: number;
}

/**
 * Игровое поле.
 */
export default function GameField({
  map = [],
  onCellClick = () => {},
  x,
  y,
}: IProps): JSX.Element {
  const cells = useMemo(() => {
    let result = [];

    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        result.push(
          <CellStyled
            busy={map[j][i]}
            key={`${i}-${j}`}
            onClick={() => onCellClick(j, i)}
            top={i}
            left={j}
          />
        );
      }
    }

    return result;
  }, [map, x, y]);

  return (
    <FieldStyled width={x} height={y}>
      {cells}
    </FieldStyled>
  );
}
