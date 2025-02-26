import {
  BLOCK_SIZE,
  BOARD_HEIGHT,
  BOARD_WIDTH,
  useGameLogic,
} from "./useGameLogic";

const Tetris = () => {
  const {
    board,
    currentShape,
    currentPos,
    score,
    gameOver,
    isPlaying,
    setIsPlaying,
    resetGame,
    rotateShape,
    moveShape,
    quickDrop,
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
    <div class="min-h-svh flex gap-6 flex-col justify-center items-center py-6 bg-base-100">
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
                  class={`border border-primary-content rounded ${
                    renderBlock(x, y) || "bg-base-200"
                  }`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div class="grid grid-flow-row grid-cols-5 grid-rows-2 p-4 gap-2 rounded-lg bg-gradient-to-br from-sky-800 via-sky-700 to-sky-400 [box-shadow:3px_4px_0px_2px_#000]">
        <button
          onClick={() => rotateShape()}
          class="cursor-pointer col-start-2 relative size-full flex justify-center items-center duration-300 acitve:translate-y-0.5 active:translate-x-0.5 bg-neutral-800 rounded [box-shadow:2px_2px_0px_2px_#000] active:[box-shadow:1px_1px_0px_1px_#000]"
        >
          {/* 上 */}
          <span class="rotate-90 font-bold text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              class="fill-neutral-50 w-12 h-12"
            >
              <path d="M18.0003 12.0001V14.6701C18.0003 17.9801 15.6503 19.3401 12.7803 17.6801L10.4703 16.3401L8.16031 15.0001C5.29031 13.3401 5.29031 10.6301 8.16031 8.97005L10.4703 7.63005L12.7803 6.29005C15.6503 4.66005 18.0003 6.01005 18.0003 9.33005V12.0001Z"></path>
            </svg>
          </span>
        </button>
        {/* 左 */}
        <button
          onClick={() => moveShape(-1, 0)}
          class="cursor-pointer col-start-1 relative size-full flex justify-center items-center duration-300 acitve:translate-y-0.5 active:translate-x-0.5 bg-neutral-800 rounded [box-shadow:2px_2px_0px_2px_#000] active:[box-shadow:1px_1px_0px_1px_#000]"
        >
          <span class="font-bold text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              class="fill-neutral-50 w-12 h-12"
            >
              <path d="M18.0003 12.0001V14.6701C18.0003 17.9801 15.6503 19.3401 12.7803 17.6801L10.4703 16.3401L8.16031 15.0001C5.29031 13.3401 5.29031 10.6301 8.16031 8.97005L10.4703 7.63005L12.7803 6.29005C15.6503 4.66005 18.0003 6.01005 18.0003 9.33005V12.0001Z"></path>
            </svg>
          </span>
        </button>
        <button
          onClick={() => moveShape(0, 1)}
          class="cursor-pointer relative size-full flex justify-center items-center duration-300 acitve:translate-y-0.5 active:translate-x-0.5 bg-neutral-800 rounded [box-shadow:2px_2px_0px_2px_#000] active:[box-shadow:1px_1px_0px_1px_#000]"
        >
          <span class="-rotate-90 font-bold text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              class="fill-neutral-50 w-12 h-12"
            >
              <path d="M18.0003 12.0001V14.6701C18.0003 17.9801 15.6503 19.3401 12.7803 17.6801L10.4703 16.3401L8.16031 15.0001C5.29031 13.3401 5.29031 10.6301 8.16031 8.97005L10.4703 7.63005L12.7803 6.29005C15.6503 4.66005 18.0003 6.01005 18.0003 9.33005V12.0001Z"></path>
            </svg>
          </span>
        </button>
        {/* 右 */}
        <button
          onclick={() => moveShape(1, 0)}
          class="cursor-pointer relative size-full flex justify-center items-center duration-300 acitve:translate-y-0.5 active:translate-x-0.5 bg-neutral-800 rounded [box-shadow:2px_2px_0px_2px_#000] active:[box-shadow:1px_1px_0px_1px_#000]"
        >
          <span class="rotate-180 font-bold text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              class="fill-neutral-50 w-12 h-12"
            >
              <path d="M18.0003 12.0001V14.6701C18.0003 17.9801 15.6503 19.3401 12.7803 17.6801L10.4703 16.3401L8.16031 15.0001C5.29031 13.3401 5.29031 10.6301 8.16031 8.97005L10.4703 7.63005L12.7803 6.29005C15.6503 4.66005 18.0003 6.01005 18.0003 9.33005V12.0001Z"></path>
            </svg>
          </span>
        </button>
        <button
          onClick={handleGameControl}
          class="col-span-2 text-white cursor-pointer row-start-1 col-start-4 relative size-full flex justify-center items-center duration-300 acitve:translate-y-0.5 active:translate-x-0.5 bg-neutral-800 rounded [box-shadow:2px_2px_0px_2px_#000] active:[box-shadow:1px_1px_0px_1px_#000]"
        >
          {gameOver() ? "开始游戏" : isPlaying() ? "暂停" : "继续"}
        </button>
        <button
          onClick={() => quickDrop()}
          class="cursor-pointer text-white col-start-4 col-span-2 relative size-full flex justify-center items-center duration-300 acitve:translate-y-0.5 active:translate-x-0.5 bg-neutral-800 rounded [box-shadow:2px_2px_0px_2px_#000] active:[box-shadow:1px_1px_0px_1px_#000]"
        >
          <span class="font-bold text-xs">到底</span>
        </button>
      </div>
      <div class="invisible sm:visible text-sm text-center text-secondary">
        使用方向键移动和旋转，空格键快速下落
      </div>
    </div>
  );
};

export default Tetris;
