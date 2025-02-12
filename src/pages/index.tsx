import { cn } from "../utils";
import { createSignal, For } from "solid-js";
import MyInfo from "../components/solid/home-block/my-info";
import Theme from "../components/solid/home-block/theme";
import AvatarBlock from "../components/solid/home-block/avatar-block";
import TestBlock from "../components/solid/home-block/test-block";

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
		<TestBlock />,
	]);
	return (
		<div class="py-4 sm:py-8 flex flex-col gap-8 items-center sm:px-8">
			<nav class="flex justify-center">
				<ul class="bg-base-300 flex gap-2 rounded-full p-2">
					<li
						class={cn("py-2 px-4 rounded-full cursor-pointer", {
							"bg-base-100 text-primary": active() === ActiveEnum.All,
						})}
						onClick={() => setActive(ActiveEnum.All)}
					>
						全部
					</li>
					<li
						class={cn("py-2 px-4 rounded-full cursor-pointer", {
							"bg-base-100 text-primary": active() === ActiveEnum.Projects,
						})}
						onClick={() => setActive(ActiveEnum.Projects)}
					>
						项目
					</li>
					<li
						class={cn("py-2 px-4 rounded-full cursor-pointer", {
							"bg-base-100 text-primary": active() === ActiveEnum.About,
						})}
						onClick={() => setActive(ActiveEnum.About)}
					>
						关于
					</li>
				</ul>
			</nav>
			<div
				class={cn(
					"grid w-full gap-6 justify-center",
					"sm:grid-cols-[repeat(auto-fill,200px)] sm:grid-rows-[repeat(10,200px)]",
					"grid-cols-[repeat(auto-fill,calc(50vw-48px))] grid-rows-[repeat(10,calc(50vw-48px))]"
				)}
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
