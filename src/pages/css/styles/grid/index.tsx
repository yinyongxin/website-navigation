import { createSignal } from "solid-js";
export default () => {
	const [gap, setGap] = createSignal(10);
	return (
		<div class="grid grid-cols-2 gap-6 p-6 size-full">
			<div
				class="border rounded-xl h-full p-4 grid"
				style={{
					gap: gap() + "px",
				}}
			>
				<div class="bg-red-500 rounded-xl">red</div>
				<div class="bg-orange-500 rounded-xl">orange</div>
				<div class="bg-yellow-500 rounded-xl">yellow</div>
				<div class="bg-green-500 rounded-xl">green</div>
				<div class="bg-cyan-500 rounded-xl">cyan</div>
				<div class="bg-blue-500 rounded-xl">blue</div>
				<div class="bg-purple-500 rounded-xl">purple</div>
			</div>
			<div class="border rounded-xl h-full p-4 grid gap-2"></div>
		</div>
	);
};
