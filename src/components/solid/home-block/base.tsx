import { cn } from "../../../utils";
import { type JSX, splitProps } from "solid-js";
const Base = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
	const [local, others] = splitProps(props, ["children", "class"]);
	return (
		<div
			class={cn(
				"bg-base-100 rounded-3xl hover:base-100 hover:shadow-lg transition-shadow duration-400",
				local?.class
			)}
			{...others}
		>
			{local?.children}
		</div>
	);
};
export default Base;
