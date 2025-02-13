import Base from "../base";
import "./index.css";

const TetrisBlock = () => {
	return (
		<Base class="cursor-pointer">
			<a href="/games/tetris">
				<div class="app-card">
					<img class="size-2/3" src="/images/tetris.png" alt="tetris" />
				</div>
			</a>
		</Base>
	);
};
export default TetrisBlock;
