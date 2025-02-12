import { cn } from "../../../utils";
import { type JSX, splitProps, Show } from "solid-js";
type BaseProps = JSX.HTMLAttributes<HTMLDivElement> & {
	link?: {
		name: string;
		href?: string;
		onCLick?: () => void;
	};
};
const Base = (props: BaseProps) => {
	const [local, others] = splitProps(props, ["children", "class", "link"]);
	return (
		<div
			class={cn(
				"group",
				"bg-base-100 border border-base-300 rounded-3xl hover:base-100 hover:shadow-lg transition-shadow duration-400 relative",
				local?.class
			)}
			{...others}
		>
			<Show when={local?.link}>
				<div
					onclick={() => {
						if (local?.link?.href) {
							window.open(local?.link.href, "_blank");
						}
						local?.link?.onCLick?.();
					}}
					class="absolute left-3 bottom-3 h-10 bg-base-200 cursor-pointer rounded-full flex hover:shadow duration-500 p-2 overflow-hidden"
				>
					<div
						class={cn(
							"flex items-center ",
							"w-0 group-hover:w-max",
							" -translate-x-[100%] group-hover:px-2 group-hover:-translate-x-[0] overflow-hidden duration-500"
						)}
					>
						{local?.link?.name}
					</div>
					<div class="h-full flex justify-center items-center -rotate-45 group-hover:rotate-0 duration-500 rounded-full">
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
