import { createSignal, For, onMount } from "solid-js";

const Content = () => {
	const list = [
		{
			title: "SolidJS",
			url: "https://solidjs.com/",
			description:
				"SolidJS 是一个轻量级、快速且可扩展的 JavaScript 库，用于构建用户界面。",
			icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20166%20155.3'%3e%3cpath%20d='M163%2035S110-4%2069%205l-3%201c-6%202-11%205-14%209l-2%203-15%2026%2026%205c11%207%2025%2010%2038%207l46%209%2018-30z'%20fill='%2376b3e1'/%3e%3clinearGradient%20id='a'%20gradientUnits='userSpaceOnUse'%20x1='27.5'%20y1='3'%20x2='152'%20y2='63.5'%3e%3cstop%20offset='.1'%20stop-color='%2376b3e1'/%3e%3cstop%20offset='.3'%20stop-color='%23dcf2fd'/%3e%3cstop%20offset='1'%20stop-color='%2376b3e1'/%3e%3c/linearGradient%3e%3cpath%20d='M163%2035S110-4%2069%205l-3%201c-6%202-11%205-14%209l-2%203-15%2026%2026%205c11%207%2025%2010%2038%207l46%209%2018-30z'%20opacity='.3'%20fill='url(%23a)'/%3e%3cpath%20d='M52%2035l-4%201c-17%205-22%2021-13%2035%2010%2013%2031%2020%2048%2015l62-21S92%2026%2052%2035z'%20fill='%23518ac8'/%3e%3clinearGradient%20id='b'%20gradientUnits='userSpaceOnUse'%20x1='95.8'%20y1='32.6'%20x2='74'%20y2='105.2'%3e%3cstop%20offset='0'%20stop-color='%2376b3e1'/%3e%3cstop%20offset='.5'%20stop-color='%234377bb'/%3e%3cstop%20offset='1'%20stop-color='%231f3b77'/%3e%3c/linearGradient%3e%3cpath%20d='M52%2035l-4%201c-17%205-22%2021-13%2035%2010%2013%2031%2020%2048%2015l62-21S92%2026%2052%2035z'%20opacity='.3'%20fill='url(%23b)'/%3e%3clinearGradient%20id='c'%20gradientUnits='userSpaceOnUse'%20x1='18.4'%20y1='64.2'%20x2='144.3'%20y2='149.8'%3e%3cstop%20offset='0'%20stop-color='%23315aa9'/%3e%3cstop%20offset='.5'%20stop-color='%23518ac8'/%3e%3cstop%20offset='1'%20stop-color='%23315aa9'/%3e%3c/linearGradient%3e%3cpath%20d='M134%2080a45%2045%200%2000-48-15L24%2085%204%20120l112%2019%2020-36c4-7%203-15-2-23z'%20fill='url(%23c)'/%3e%3clinearGradient%20id='d'%20gradientUnits='userSpaceOnUse'%20x1='75.2'%20y1='74.5'%20x2='24.4'%20y2='260.8'%3e%3cstop%20offset='0'%20stop-color='%234377bb'/%3e%3cstop%20offset='.5'%20stop-color='%231a336b'/%3e%3cstop%20offset='1'%20stop-color='%231a336b'/%3e%3c/linearGradient%3e%3cpath%20d='M114%20115a45%2045%200%2000-48-15L4%20120s53%2040%2094%2030l3-1c17-5%2023-21%2013-34z'%20fill='url(%23d)'/%3e%3c/svg%3e",
			tags: ["JavaScript", "TypeScript"],
		},
		{
			title: "AstroJS",
			url: "https://astro.build/",
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
		<div class="h-full w-full py-6">
			<div class="flex justify-center">
				<ul
					class="w-4/5 grid gap-4"
					style={{
						"grid-template-columns": "repeat(auto-fill, minmax(300px, 1fr))",
					}}
				>
					<For each={list}>
						{(item) => (
							<li class="border-solid border-[1px] border-gray-300 p-4 rounded-xl shadow-md flex flex-col gap-2">
								<div class="flex justify-between items-center ">
									<div class="w-20 h-20">
										<img alt="icon" width="100%" src={item.icon} />
									</div>
									<div class="flex-1 text-end text-3xl">{item.title}</div>
								</div>
								<div class="text-ellipsis line-clamp-2 h-12">{item.description}</div>
								<ol class="flex gap-2">
									<For each={item.tags}>
										{(tag) => (
											<li class="text-sm border-2 rounded-xl px-2 py-1">
												{tag}
											</li>
										)}
									</For>
								</ol>
								<button
									class="py-4 bg-slate-100 rounded-xl text-center cursor-pointer"
									onClick={() => {
										window.open(item.url);
									}}
								>
									{item.url}
								</button>
							</li>
						)}
					</For>
				</ul>
			</div>
		</div>
	);
};

export default Content;
