import { createSignal, For, Index, onMount, Show } from "solid-js";
import { uniq } from "lodash-es";
import { cn } from "../../utils";
import { TransitionGroup } from "solid-transition-group";
import { Dialog } from "@ark-ui/solid";
import { Portal } from "solid-js/web";
import styles from "./index.module.css";
import { useTheme } from "../hooks/useTheme";
import { list } from "./data";

const WebsitesNavigation = () => {
	const [open, setOpen] = createSignal(false);
	const { theme, toggleTheme } = useTheme();
	const [tags, setTags] = createSignal<
		{
			label: string;
			checked: boolean;
		}[]
	>([]);

	const getFilterList = () => {
		return list.filter((listItem) => {
			return tags().every((tag) => {
				return tag.checked ? listItem.tags.includes(tag.label) : true;
			});
		});
	};

	onMount(() => {
		setTags(
			uniq(list.map((item) => item.tags).flat()).map((item) => ({
				label: item,
				checked: false,
			}))
		);
	});

	return (
		<div class="h-svh overflow-hidden relative flex flex-col">
			<div class="navbar shadow-sm bg-base-100/20 backdrop-blur">
				<div class="navbar-start">
					<div
						tabindex="0"
						role="button"
						class="btn btn-ghost btn-circle"
						onClick={() => {
							console.log(open());
							setOpen(open() ? false : true);
						}}
					>
						<Show
							when={!open()}
							fallback={
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-x"
								>
									<path d="M18 6 6 18" />
									<path d="m6 6 12 12" />
								</svg>
							}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h7"
								/>
							</svg>
						</Show>
					</div>
				</div>
				<div class="navbar-center">
					<a class="btn btn-ghost text-xl">导航</a>
				</div>
				<div class="navbar-end">
					<button class="btn btn-ghost btn-circle">
						<label class="swap swap-rotate ">
							{/* <!-- this hidden checkbox controls the state --> */}
							<input
								type="checkbox"
								class="theme-controller"
								value="dark"
								checked={theme() === "dark"}
								onChange={(e) => {
									if (e.target.checked) {
										toggleTheme("dark");
									} else {
										toggleTheme("light");
									}
								}}
							/>
							{/* <!-- sun icon --> */}
							<svg
								class="swap-off fill-current h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							>
								<path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
							</svg>

							{/* <!-- moon icon --> */}
							<svg
								class="swap-on h-6 w-6 fill-current"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							>
								<path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
							</svg>
						</label>
					</button>
					<button class="btn btn-ghost btn-circle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</button>
				</div>
			</div>
			<div class="p-6 flex-1 overflow-auto">
				<ul
					class="w-full grid gap-6"
					style={{
						"grid-template-columns": "repeat(auto-fill, minmax(240px, 1fr))",
					}}
				>
					<For each={getFilterList()}>
						{(item) => {
							return (
								<li
									class={cn(
										styles.card,
										"bg-gradient-to-br from-primary/20 to-secondary/20 shadow border border-base-300"
									)}
								>
									<div
										class={cn(
											styles.main,
											"size-full flex flex-col gap-2 text-lg font-bold justify-center items-center"
										)}
									>
										<img src={item.icon} alt="icon" class="h-1/3" />
										<div>{item.title}</div>
									</div>
									<div class={cn(styles.content, "bg-base-100")}>
										<div class="text-lg font-bold flex justify-between">
											<div>{item.title}</div>
											<a href={item.url} target="_blank">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													stroke-width="2"
													stroke-linecap="round"
													stroke-linejoin="round"
													class="lucide lucide-arrow-right"
												>
													<path d="M5 12h14" />
													<path d="m12 5 7 7-7 7" />
												</svg>
											</a>
										</div>
										<p
											class={cn(
												"mt-2 text-justify text-sm text-base-content/50"
											)}
										>
											{item.description}
										</p>
									</div>
								</li>
							);
						}}
					</For>
				</ul>
			</div>
			<Dialog.Root preventScroll={false} modal={false} open={open()}>
				<Portal>
					<Dialog.Positioner class="absolute left-0 top-16 bottom-0 flex justify-center items-center">
						<Dialog.Content class="bg-base-100 shadow h-full overflow-hidden flex flex-col">
							<ul class="menu rounded-box w-56">
								<Index each={tags()}>
									{(tag, index) => {
										return (
											<li
												class="mt-2"
												onClick={() => {
													setTags((prev) =>
														prev.map((item, i) =>
															i === index
																? { ...item, checked: !item.checked }
																: item
														)
													);
												}}
											>
												<a
													class={cn({
														"menu-active": tag().checked,
													})}
												>
													{" "}
													{tag().label}
												</a>
											</li>
										);
									}}
								</Index>
							</ul>
						</Dialog.Content>
					</Dialog.Positioner>
				</Portal>
			</Dialog.Root>
		</div>
	);
};

export default WebsitesNavigation;
