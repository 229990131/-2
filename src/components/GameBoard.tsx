import React from 'react';
import { GameColors, Position } from '../types/game';
import { CELL_SIZE, GRID_SIZE } from '../utils/gameUtils';

interface GameBoardProps {
  snake: Position[];
  food: Position;
  colors: GameColors;
}

const GameBoard: React.FC<GameBoardProps> = ({ snake, food, colors }) => {
  return (
    <div 
      className="relative bg-gray-800 border-2 border-gray-700"
      style={{
        width: GRID_SIZE * CELL_SIZE,
        height: GRID_SIZE * CELL_SIZE,
      }}
    >
      {snake.map((segment, index) => (
        <div
          key={`${index}-${segment.x}-${segment.y}`}
          className="absolute rounded-sm"
          style={{
            width: CELL_SIZE - 2,
            height: CELL_SIZE - 2,
            left: segment.x * CELL_SIZE,
            top: segment.y * CELL_SIZE,
            backgroundColor: index === 0 ? colors.head : colors.body,
          }}
        />
      ))}
      <div
        className="absolute rounded-full"
        style={{
          width: CELL_SIZE - 2,
          height: CELL_SIZE - 2,
          left: food.x * CELL_SIZE,
          top: food.y * CELL_SIZE,
          backgroundColor: colors.food,
        }}
      />
    </div>
  );
};

export default GameBoard;