import { Show, createSignal, onMount } from "solid-js";
import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";

const AvatarBlock = () => {
  const [avatar, setAvatar] = createSignal("");
  onMount(() => {
    const avatar = createAvatar(lorelei, {
      seed: Math.random().toString(),
      // ... other options
    });
    const svg = avatar.toDataUri();
    console.log("svg", svg);
    setAvatar(svg);
  });
  return (
    <div class="p-6 bg-white col-span-1 rounded-3xl hover:shadow-lg transition-shadow duration-400 grid justify-center">
      <Show when={avatar()}>
        <img class="size-full" src={avatar()} alt="" />
      </Show>
    </div>
  );
};
export default AvatarBlock;
