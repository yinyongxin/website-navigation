import { createSignal, For, onMount } from "solid-js";

const Content = () => {
	const list = [
		{
			title: "SolidJS",
			url: "https://docs.solidjs.com/",
			description:
				"SolidJS 是一个轻量级、快速且可扩展的 JavaScript 库，用于构建用户界面。",
			icon: "https://docs.solidjs.com/favicon.ico",
			tags: ["JavaScript", "TypeScript"],
		},
		{
			title: "AstroJS",
			url: "https://docs.astrojs.com/",
			description: "Astro 是一个用于构建快速、内容聚焦网站的 Web 框架。",
			icon: "https://astro.build/favicon.svg",
			tags: ["JavaScript", "TypeScript"],
		},
		{
			title: "Vite",
			url: "https://vitejs.dev/",
			description:
				"Vite 是一个旨在为现代 Web 项目提供更快、更精简开发体验的构建工具。",
			icon: "https://vitejs.dev/logo.svg",
			tags: ["JavaScript", "TypeScript", "Build"],
		},
	];
	return (
		<div class="h-full w-full">
			<div class="flex justify-center">
				<ul
					class="w-4/5 grid grid-cols-12 gap-4"
					style={{
						"grid-template-columns": "repeat(auto-fill, minmax(300px, 1fr))",
					}}
					card-list
				>
					<For each={list}>
						{(item) => (
							<li
								onClick={() => {
									window.open(item.url);
								}}
								class="card border-solid border-[1px] border-gray-300 p-4 rounded-xl cursor-pointer shadow-md"
							>
								<div class="flex justify-between items-center">
									<div class="w-20 h-20">
										<img alt="icon" width="100%" src={item.icon} />
									</div>
									<div class="flex-1 text-end text-3xl">{item.title}</div>
								</div>
								<div>{item.description}</div>
								<div>{item.url}</div>
							</li>
						)}
					</For>
				</ul>
			</div>
		</div>
	);
};

export default Content;
