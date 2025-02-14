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
    <Base class="relative col-span-1 overflow-hidden group">
      <Show when={avatar()} fallback={<div class="skeleton size-full"></div>}>
        <img class="size-full" src={avatar()} alt="" />
      </Show>
      <div class="absolute bottom-0 left-0 right-0 border-t border-base-200/10 rounded-b-2xl overflow-hidden  bg-base-100/20 backdrop-blur-sm grid grid-cols-3 transition-[transform_opacity] duration-300 opacity-0 sm:group-hover:opacity-100 group-active:opacity-100 -translate-y-1/4 group-active:translate-y-0  sm:group-hover:translate-y-0">
        <div class="aspect-square flex justify-center items-center rounded-bl-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-refresh-cw size-2/5 group-hover:scale-110 group-active:scale-100  cursor-pointer"
          >
            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
            <path d="M21 3v5h-5" />
            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
            <path d="M8 16H3v5" />
          </svg>
        </div>
        <div class="aspect-square flex justify-center items-center border-x border-base-200/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-image-down size-2/5 group-hover:scale-110 group-active:scale-100 cursor-pointer"
          >
            <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
            <path d="m14 19 3 3v-5.5" />
            <path d="m17 22 3-3" />
            <circle cx="9" cy="9" r="2" />
          </svg>
        </div>
        <a href="/tools/create-avatar">
          <div class="aspect-square flex justify-center items-center rounded-br-2xl ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-maximize group-hover:scale-110 group-active:scale-100 cursor-pointer size-2/5"
            >
              <path d="M8 3H5a2 2 0 0 0-2 2v3" />
              <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
              <path d="M3 16v3a2 2 0 0 0 2 2h3" />
              <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
            </svg>
          </div>
        </a>
      </div>
    </Base>
  );
};
export default AvatarBlock;
