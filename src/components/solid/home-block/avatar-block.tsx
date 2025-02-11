import { createSignal, onMount } from "solid-js";
import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";

const AvatarBlock = () => {
  const [avatar, setAvatar] = createSignal("");
  onMount(() => {
    const avatar = createAvatar(lorelei, {
      seed: "John Doe",
      // ... other options
    });
    const svg = avatar.toDataUri();
    setAvatar(svg);
  });
  return (
    <div class="p-6 bg-white col-span-1 rounded-3xl hover:shadow-lg transition-shadow duration-400 grid justify-center">
      <img src={avatar()} alt="" />
    </div>
  );
};
export default AvatarBlock;
