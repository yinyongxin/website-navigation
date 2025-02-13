import {
  createSignal,
  createEffect,
  onCleanup,
  createContext,
  useContext,
  type Accessor,
} from "solid-js";

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

const ThemeContext = createContext<{
  isDark?: Accessor<boolean>;
  toggleTheme?: () => void;
}>({
});

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
  const [gameOver, setGameOver] = createSignal(false);
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
    setCurrentShape(shape);
    setCurrentPos({
      x: Math.floor(BOARD_WIDTH / 2) - Math.floor(shape.matrix[0].length / 2),
      y: 0,
    });
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
    const handleKeyPress = (e) => {
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
const ControlButton = (props) => {
  const { isDark } = useContext(ThemeContext);
  return (
   
  );
};

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      class={`w-full py-3 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg ${
        isDark?.()
          ? "bg-gradient-to-r from-gray-800 to-gray-600 text-yellow-400"
          : "bg-gradient-to-r from-yellow-200 to-yellow-100 text-gray-800"
      }`}
    >
      {isDark?.() ? "light" : "dark"}
    </button>
  );
};

const GameInfo = (props) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div class="flex flex-col gap-4">
      <div
        class={`text-2xl rounded-xl px-8 py-3 shadow-lg transform transition-all duration-300 ${
          isDark() ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        }`}
      >
        分数: {props.score}
      </div>
      {props.gameOver && (
        <div class="text-2xl text-red-500 font-bold animate-pulse text-center">
          游戏结束!
        </div>
      )}
    </div>
  );
};

const TetrisGame = () => {
  const [isDark, setIsDark] = createSignal(true);
  const toggleTheme = () => {
    setIsDark(!isDark());
  };
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
  const renderBlock = (x, y) => {
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
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div
        class={`min-h-screen ${
          isDark() ? "bg-gray-900" : "bg-gray-100"
        } transition-all duration-300 flex items-center justify-center`}
      >
        <div class="flex items-center justify-center gap-8">
          <div
            class={`border-4 ${
              isDark()
                ? "border-gray-700 bg-gray-800"
                : "border-gray-300 bg-white"
            } p-4 rounded-xl shadow-lg transition-all duration-300`}
          >
            {Array.from({ length: BOARD_HEIGHT }, (_, y) => (
              <div key={y} class="flex">
                {Array.from({ length: BOARD_WIDTH }, (_, x) => (
                  <div
                    key={`${x}-${y}`}
                    style={{
                      width: BLOCK_SIZE + "px",
                      height: BLOCK_SIZE + "px",
                    }}
                    class={`border ${
                      isDark() ? "border-gray-700" : "border-gray-200"
                    } rounded-lg ${
                      renderBlock(x, y) ||
                      (isDark() ? "bg-gray-900" : "bg-gray-50")
                    }`}
                  />
                ))}
              </div>
            ))}
          </div>
          <div class="flex flex-col gap-4 w-full lg:w-48">
            <GameInfo score={score()} gameOver={gameOver()} isDark={isDark} />
            <div class="flex flex-row lg:flex-col gap-4">
              <ControlButton onClick={handleGameControl}>
                {gameOver() ? "开始游戏" : isPlaying() ? "暂停" : "继续"}
              </ControlButton>
              <ControlButton onClick={resetGame}>重新开始</ControlButton>
              <ThemeToggle />
            </div>
            <div
              class={`text-sm px-6 py-3 rounded-xl ${
                isDark() ? "bg-gray-800 text-white" : "bg-white text-gray-800"
              } shadow-lg transition-all duration-300 text-center`}
            >
              使用方向键移动和旋转，空格键快速下落
            </div>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default TetrisGame;
