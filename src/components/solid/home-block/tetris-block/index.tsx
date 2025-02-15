import Base from "../base";
import "./index.css";

const TetrisBlock = () => {
	return (
		<Base class="cursor-pointer flex justify-center items-center tetris-block border-0">
			<div class="app-card flex justify-center items-center">
				<a href="/games/tetris" class="size-2/3">
					<img src="/images/tetris.png" class="size-full" alt="tetris" />
				</a>
			</div>
		</Base>
	);
};
export default TetrisBlock;
