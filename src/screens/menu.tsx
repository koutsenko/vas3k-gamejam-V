import React from "react";

interface MenuScreenProps {
  onStartGame: () => void;
}

export default function MenuScreen({ onStartGame }: MenuScreenProps) {
  return (
    <div>
      <h1>Welcome to My Game</h1>
      <button onClick={onStartGame}>Start Game</button>
    </div>
  );
}
