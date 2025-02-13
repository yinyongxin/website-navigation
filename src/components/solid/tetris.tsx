import { createSignal, createEffect, onCleanup } from "solid-js";

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;
const BLOCK_SIZE = 20;
const SHAPES = [
  { matrix: [[1, 1, 1, 1]], color: "bg-cyan-500" },
  {
    matrix: [
      [1, 1],
      [1, 1],
    ],
    color: "bg-yellow-500",
  },
  {
    matrix: [
      [1, 1, 1],
      [0, 1, 0],
    ],
    color: "bg-purple-500",
  },
  {
    matrix: [
      [1, 1, 1],
      [1, 0, 0],
    ],
    color: "bg-blue-500",
  },
  {
    matrix: [
      [1, 1, 1],
      [0, 0, 1],
    ],
    color: "bg-orange-500",
  },
  {
    matrix: [
      [1, 1, 0],
      [0, 1, 1],
    ],
    color: "bg-red-500",
  },
  {
    matrix: [
      [0, 1, 1],
      [1, 1, 0],
    ],
    color: "bg-green-500",
  },
];

const useGameLogic = () => {
  const [board, setBoard] = createSignal(
    Array(BOARD_HEIGHT)
      .fill(0)
      .map(() => Array(BOARD_WIDTH).fill({ value: 0, color: "" }))
  );
  const [currentShape, setCurrentShape] = createSignal<{
    matrix: number[][];
    color: string;
  }>({
    matrix: [],
    color: "",
  });
  const [currentPos, setCurrentPos] = createSignal({ x: 0, y: 0 });
  const [score, setScore] = createSignal(0);
  const [gameOver, setGameOver] = createSignal(true);
  const [isPlaying, setIsPlaying] = createSignal(false);
  const [isDropping, setIsDropping] = createSignal(false);

  const resetGame = () => {
    setBoard(
      Array(BOARD_HEIGHT)
        .fill(0)
        .map(() => Array(BOARD_WIDTH).fill({ value: 0, color: "" }))
    );
    setCurrentShape({ matrix: [], color: "" });
    setCurrentPos({ x: 0, y: 0 });
    setScore(0);
    setGameOver(false);
    setIsPlaying(false);
    setIsDropping(false);
  };

  const createNewShape = () => {
    const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
    const newShape = {
      matrix: shape.matrix,
      color: shape.color,
    };
    const newPos = {
      x:
        Math.floor(BOARD_WIDTH / 2) - Math.floor(newShape.matrix[0].length / 2),
      y: 0,
    };
    if (checkCollision(newShape.matrix, newPos)) {
      setGameOver(true);
      setIsPlaying(false);
      return;
    }
    setCurrentShape(newShape);
    setCurrentPos(newPos);
  };
  const checkCollision = (shape: number[][], pos: { x: number; y: number }) => {
    for (let y = 0; y < shape.length; y++) {
      for (let x = 0; x < shape[y].length; x++) {
        if (shape[y][x]) {
          const newX = pos.x + x;
          const newY = pos.y + y;
          if (newX < 0 || newX >= BOARD_WIDTH || newY >= BOARD_HEIGHT)
            return true;
          if (newY >= 0 && board()[newY][newX].value) return true;
        }
      }
    }
    return false;
  };
  const mergeShape = () => {
    const newBoard = board().map((row) => [...row]);
    for (let y = 0; y < currentShape().matrix.length; y++) {
      for (let x = 0; x < currentShape().matrix[y].length; x++) {
        if (currentShape().matrix[y][x]) {
          const newY = currentPos().y + y;
          if (newY < 0) {
            setGameOver(true);
            setIsPlaying(false);
            return;
          }
          newBoard[newY][currentPos().x + x] = {
            value: 1,
            color: currentShape().color,
          };
        }
      }
    }
    const newScore = newBoard.reduce((score, row, index) => {
      if (row.every((cell) => cell.value === 1)) {
        newBoard.splice(index, 1);
        newBoard.unshift(Array(BOARD_WIDTH).fill({ value: 0, color: "" }));
        return score + 100;
      }
      return score;
    }, score());
    setBoard(newBoard);
    setScore(newScore);
    createNewShape();
    setIsDropping(false);
  };

  const moveShape = (dx: number, dy: number) => {
    if (!isPlaying() || isDropping()) return;
    const newPos = { x: currentPos().x + dx, y: currentPos().y + dy };
    if (!checkCollision(currentShape().matrix, newPos)) {
      setCurrentPos(newPos);
    } else if (dy > 0) {
      mergeShape();
    }
  };
  const quickDrop = () => {
    if (!isPlaying() || isDropping()) return;
    setIsDropping(true);
    let newY = currentPos().y;
    while (
      !checkCollision(currentShape().matrix, { x: currentPos().x, y: newY + 1 })
    ) {
      newY++;
    }
    setCurrentPos((prev) => ({ ...prev, y: newY }));
    mergeShape();
  };
  const rotateShape = () => {
    if (!isPlaying() || isDropping()) return;
    const newMatrix = currentShape().matrix[0].map((_, i) =>
      currentShape()
        .matrix.map((row) => row[i])
        .reverse()
    );
    if (!checkCollision(newMatrix, currentPos())) {
      setCurrentShape({ ...currentShape(), matrix: newMatrix });
    }
  };
  createEffect(() => {
    if (!currentShape().matrix.length && !gameOver() && isPlaying()) {
      createNewShape();
    }
  });
  createEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (gameOver() || !isPlaying()) return;
      switch (e.key) {
        case "ArrowLeft":
          moveShape(-1, 0);
          break;
        case "ArrowRight":
          moveShape(1, 0);
          break;
        case "ArrowDown":
          moveShape(0, 1);
          break;
        case "ArrowUp":
          rotateShape();
          break;
        case " ":
          quickDrop();
          break;
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    onCleanup(() => window.removeEventListener("keydown", handleKeyPress));
  });
  createEffect(() => {
    if (!isPlaying() || gameOver()) return;
    const interval = setInterval(() => moveShape(0, 1), 1000);
    onCleanup(() => clearInterval(interval));
  });

  return {
    board,
    currentShape,
    currentPos,
    score,
    gameOver,
    isPlaying,
    setIsPlaying,
    resetGame,
  };
};

const TetrisGame = () => {
  const {
    board,
    currentShape,
    currentPos,
    score,
    gameOver,
    isPlaying,
    setIsPlaying,
    resetGame,
  } = useGameLogic();
  const renderBlock = (x: number, y: number) => {
    const inCurrentShape =
      currentShape().matrix[y - currentPos().y]?.[x - currentPos().x] === 1;
    const boardCell = board()[y][x];
    if (inCurrentShape) return currentShape().color;
    return boardCell.color;
  };
  const handleGameControl = () => {
    if (gameOver()) {
      resetGame();
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying());
    }
  };
  return (
    <div class="min-h-screen flex gap-6 flex-col justify-center items-center py-6 bg-base-100">
      <div class="text-secondary">得分: {score()}</div>
      <div class="flex items-center justify-center">
        <div
          class={`border-4 bg-base-200 border-primary-content p-4 rounded-xl shadow-lg transition-all duration-300`}
        >
          {Array.from({ length: BOARD_HEIGHT }, (_, y) => (
            <div class="flex">
              {Array.from({ length: BOARD_WIDTH }, (_, x) => (
                <div
                  style={{
                    width: BLOCK_SIZE + "px",
                    height: BLOCK_SIZE + "px",
                  }}
                  class={`border-2 border-primary-content rounded-lg ${
                    renderBlock(x, y) || "bg-base-200"
                  }`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div class={"btn btn-primary btn-soft"} onClick={handleGameControl}>
        {gameOver() ? "开始游戏" : isPlaying() ? "暂停" : "继续"}
      </div>
      <div class={`text-sm text-center text-secondary`}>
        使用方向键移动和旋转，空格键快速下落
      </div>
    </div>
  );
};

export default TetrisGame;
