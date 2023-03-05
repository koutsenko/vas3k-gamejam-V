import { useEffect, useMemo, useState } from "react";
import { TPosition, TSize } from "../common/models";
import { CAN_WARP } from "../common/consts";
import { Keys } from "../common/enums";

/**
 * Хук для работы с перемещениями персонажа.
 */
export const useMove = (
  initialPosition: TPosition,
  size: TSize,
  isEnabled: boolean
) => {
  const [position, setPosition] = useState<TPosition>(initialPosition);
  const [limX, limY] = useMemo(() => [size[0] - 1, size[1] - 1], [size]);

  /**
   * Вычисление и установка новой позиции персонажа.
   */
  const moveCharacter = (key: string) => {
    setPosition((prev) => {
      const isWall = CAN_WARP
        ? false
        : (key === Keys.Left && prev[0] === 0) ||
          (key === Keys.Right && prev[0] === limX) ||
          (key === Keys.Up && prev[1] === 0) ||
          (key === Keys.Down && prev[1] === limY);

      if (isWall) {
        return prev;
      }

      const next: TPosition = [...prev];

      if (key === Keys.Left) {
        next[0] = next[0] === 0 ? limX : next[0] - 1;
      } else if (key === Keys.Right) {
        next[0] = next[0] === limX ? 0 : next[0] + 1;
      } else if (key === Keys.Up) {
        next[1] = next[1] === 0 ? limY : next[1] - 1;
      } else if (key === Keys.Down) {
        next[1] = next[1] === limY ? 0 : next[1] + 1;
      }

      return next;
    });
  };

  /**
   * Обработчик нажатия.
   */
  const handleKeyPress = (event: KeyboardEvent) => {
    const key = event.code as Keys;

    Object.values(Keys).includes(key) && moveCharacter(key);
  };

  /**
   * Эффект на установку/снятие обработчика, если хук активен.
   */
  useEffect(() => {
    isEnabled && window.addEventListener("keydown", handleKeyPress);

    return () => {
      isEnabled && window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return [position];
};
