import { Show, createSignal, onMount } from "solid-js";
import { createAvatar } from "@dicebear/core";
import { micah } from "@dicebear/collection";
import Base from "./base";
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
    <Base
      class=" col-span-1 overflow-hidden"
      link={{
        href: "https://www.dicebear.com/",
        name: "Dicebear",
      }}
    >
      <Show when={avatar()} fallback={<div class="skeleton size-full"></div>}>
        <img class="size-full" src={avatar()} alt="" />
      </Show>
    </Base>
  );
};
export default AvatarBlock;
