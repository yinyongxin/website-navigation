import { createSignal, For } from "solid-js";
import Base from "./base";
import { cn } from "../../../utils";

const searchList = [
	{
		label: "谷歌",
		key: "google",
		url: "https://www.google.com/search?q=",
		iconImage: "/images/google.png",
	},
	{
		label: "百度",
		key: "baidu",
		url: "https://www.baidu.com/s?ie-utf8&word=",
		iconImage: "/images/baidu.png",
	},
] as const;
const SearchBlock = () => {
	const [active, setActive] = createSignal<(typeof searchList)[number]["key"]>(
		searchList[0].key
	);
	return (
		<Base class="bg-base-100 col-span-2 flex flex-col justify-between p-4 sm:p-6">
			<label class="input w-full rounded-2xl flex-none">
				<svg
					class="h-5 opacity-50"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<g
						stroke-inejoin="round"
						stroke-llinecap="round"
						stroke-wwidth="2.5"
						fill="none"
						stroke="currentColor"
					>
						<circle cx="11" cy="11" r="8"></circle>
						<path d="m21 21-4.3-4.3"></path>
					</g>
				</svg>
				<input type="search" class="grow" placeholder="Search" />
			</label>
			<div class="flex justify-between items-center">
				<div class="flex gap-2">
					<For each={searchList}>
						{(item) => {
							return (
								<div
									class={cn(
										"size-8 sm:size-10 p-1 rounded-full overflow-hidden cursor-pointer hover:border-2 hover:border-primary",
										{
											"border-2 border-primary": active() === item.key,
										}
									)}
									onClick={() => setActive(item.key)}
								>
									<img src={item.iconImage} class="size-full" alt="google" />
								</div>
							);
						}}
					</For>
				</div>
				<div>
					当前搜索跳转为
					<span class="text-primary font-bold text-xl ml-2">
						{searchList.find((item) => item.key === active())?.label}
					</span>
				</div>
			</div>
			<input
				type="submit"
				value="搜索"
				class="btn btn-soft btn-block btn-primary rounded-full"
				onClick={() => {
					const input = document.querySelector(
						"input[type=search]"
					) as HTMLInputElement;
					const value = input.value;
					const url = searchList.find((item) => item.key === active())?.url;
					if (url) {
						window.open(url + value);
					}
				}}
			/>
		</Base>
	);
};

export default SearchBlock;
