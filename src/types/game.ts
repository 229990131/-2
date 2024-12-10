export type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

export type Position = {
  x: number;
  y: number;
};

export type GameColors = {
  head: string;
  body: string;
  food: string;
};

export type GameState = {
  snake: Position[];
  food: Position;
  direction: Direction;
  isGameOver: boolean;
  score: number;
  colors: GameColors;
};