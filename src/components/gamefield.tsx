import React, { useMemo } from "react";

import { CellStyled, FieldStyled } from "./styles";

/**
 * @param x Размер поля по-горизонтали, кол-во спрайтов.
 * @param x Размер поля по-вертикали, кол-во спрайтов.
 */
interface IProps {
  x: number;
  y: number;
}

/**
 * Игровое поле.
 */
export default function GameField({ x, y }: IProps): JSX.Element {
  const cells = useMemo(() => {
    let result = [];

    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        result.push(<CellStyled key={`${i}-${j}`} top={i} left={j} />);
      }
    }

    return result;
  }, [x, y]);

  return (
    <FieldStyled width={x} height={y}>
      {cells}
    </FieldStyled>
  );
}
