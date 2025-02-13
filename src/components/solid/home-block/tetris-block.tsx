import Base from "./base";

const TetrisBlock = () => {
  return (
    <Base class="p-8 cursor-pointer">
      <a href="/games/tetris">
        <img class="size-full" src="/images/tetris.png" alt="tetris" />
      </a>
    </Base>
  );
};
export default TetrisBlock;
