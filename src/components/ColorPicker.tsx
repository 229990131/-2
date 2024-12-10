import React from 'react';
import { GameColors } from '../types/game';

interface ColorPickerProps {
  colors: GameColors;
  onColorChange: (colors: GameColors) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ colors, onColorChange }) => {
  return (
    <div className="flex flex-col items-center gap-4 mt-4 p-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold text-gray-800">自定义颜色</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col items-center">
          <label className="text-sm text-gray-600 mb-1">蛇头</label>
          <input
            type="color"
            value={colors.head}
            onChange={(e) =>
              onColorChange({ ...colors, head: e.target.value })
            }
            className="w-12 h-8 cursor-pointer"
          />
        </div>
        <div className="flex flex-col items-center">
          <label className="text-sm text-gray-600 mb-1">蛇身</label>
          <input
            type="color"
            value={colors.body}
            onChange={(e) =>
              onColorChange({ ...colors, body: e.target.value })
            }
            className="w-12 h-8 cursor-pointer"
          />
        </div>
        <div className="flex flex-col items-center">
          <label className="text-sm text-gray-600 mb-1">食物</label>
          <input
            type="color"
            value={colors.food}
            onChange={(e) =>
              onColorChange({ ...colors, food: e.target.value })
            }
            className="w-12 h-8 cursor-pointer"
          />
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <button
          onClick={() => onColorChange({ head: '#22c55e', body: '#4ade80', food: '#ef4444' })}
          className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
        >
          默认配色
        </button>
        <button
          onClick={() => onColorChange({ head: '#6366f1', body: '#818cf8', food: '#f472b6' })}
          className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
        >
          梦幻配色
        </button>
        <button
          onClick={() => onColorChange({ head: '#f59e0b', body: '#fbbf24', food: '#7c3aed' })}
          className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
        >
          金色配色
        </button>
      </div>
    </div>
  );
};

export default ColorPicker;