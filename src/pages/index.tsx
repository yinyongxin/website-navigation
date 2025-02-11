import { cn } from "../utils";
import { createSignal, For } from "solid-js";
import MyInfo from "../components/solid/home-block/my-info";
import Theme from "../components/solid/home-block/theme";
import AvatarBlock from "../components/solid/home-block/avatar-block";

enum ActiveEnum {
	All = "all",
	Projects = "projects",
	About = "about",
}

const Content = () => {
	const [active, setActive] = createSignal<ActiveEnum>(ActiveEnum.All);
	const [list, setList] = createSignal([
		<MyInfo />,
		<Theme />,
		<AvatarBlock />,
	]);
	return (
		<div class="py-8 sm:py-4 flex flex-col gap-8 items-center px-6">
			<nav class="flex justify-center">
				<ul class="bg-base-300 flex gap-2 rounded-full p-2">
					<li
						class={cn("py-2 px-4 rounded-full cursor-pointer text-secondary", {
							"bg-base-100 text-primary": active() === ActiveEnum.All,
						})}
						onClick={() => setActive(ActiveEnum.All)}
					>
						全部
					</li>
					<li
						class={cn("py-2 px-4 rounded-full cursor-pointer text-secondary", {
							"bg-base-100 text-primary": active() === ActiveEnum.Projects,
						})}
						onClick={() => setActive(ActiveEnum.Projects)}
					>
						项目
					</li>
					<li
						class={cn("py-2 px-4 rounded-full cursor-pointer text-secondary", {
							"bg-base-100 text-primary": active() === ActiveEnum.About,
						})}
						onClick={() => setActive(ActiveEnum.About)}
					>
						关于
					</li>
				</ul>
			</nav>
			<div
				class="grid w-full gap-6 justify-center"
				style={{
					"grid-template-columns": "repeat(auto-fill, 160px)",
					"grid-template-rows": "repeat(10, 160px)",
				}}
			>
				<For each={list()}>
					{(item) => {
						return item;
					}}
				</For>
			</div>
		</div>
	);
};

export default Content;
