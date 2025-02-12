import { cn } from "../../../utils";
import { type JSX, splitProps, Show, onMount, createSignal } from "solid-js";
type BaseProps = JSX.HTMLAttributes<HTMLDivElement> & {
	link?: {
		name: string;
		href?: string;
		onCLick?: () => void;
	};
};
const Base = (props: BaseProps) => {
	const [local, others] = splitProps(props, ["children", "class", "link"]);
	const [hover, setHover] = createSignal(false);
	let ref!: HTMLDivElement;
	return (
		<div
			class={cn(
				"group",
				"bg-base-100 border border-base-300 rounded-3xl hover:base-100 hover:shadow-lg transition-shadow duration-400 relative",
				local?.class
			)}
			{...others}
			onMouseEnter={() => {
				setHover(true);
			}}
			onMouseLeave={() => {
				setHover(false);
			}}
		>
			<Show when={local?.link}>
				<div
					onclick={() => {
						if (local?.link?.href) {
							window.open(local?.link.href, "_blank");
						}
						local?.link?.onCLick?.();
					}}
					style={{
						width: hover()
							? `calc(${ref.getBoundingClientRect().width}px)`
							: "2.5rem",
					}}
					class={cn(
						"absolute left-3 bottom-3 h-10 bg-base-200 cursor-pointer rounded-full flex duration-200 p-2 overflow-hidden outline-0 hover:outline-3 outline-base-300 outline-solid"
					)}
				>
					<div
						ref={ref}
						class={cn(
							"flex items-center duration-500",
							"opacity-0 group-hover:opacity-100 pl-2 pr-12 -translate-x-[50%] group-hover:-translate-x-0"
						)}
					>
						{local?.link?.name}
					</div>
					<div class="grid place-content-center -rotate-45 group-hover:rotate-0 size-10 absolute top-0 right-0 duration-500 rounded-full">
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
					</div>
				</div>
			</Show>
			{local?.children}
		</div>
	);
};
export default Base;
