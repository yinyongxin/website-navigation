import { Show, createSignal, onMount } from "solid-js";
import { createAvatar } from "@dicebear/core";
import { micah } from "@dicebear/collection";
const AvatarBlock = () => {
	const [avatar, setAvatar] = createSignal("");
	onMount(() => {
		const avatar = createAvatar(micah, {
			seed: Math.random().toString(),
			backgroundColor: ["ffd5dc", "B6E3F4"],
			// ... other options
		});
		console.log("avatar", avatar.toJson());
		const svg = avatar.toDataUri();
		console.log("svg", svg);
		setAvatar(svg);
	});
	return (
		<div class="bg-white col-span-1 rounded-3xl hover:shadow-lg transition-shadow duration-400 grid justify-center overflow-hidden">
			<Show when={avatar()}>
				<img class="size-full" src={avatar()} alt="" />
			</Show>
		</div>
	);
};
export default AvatarBlock;
