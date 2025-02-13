import { createSignal, onMount } from "solid-js";
import { createAvatar, schema } from "@dicebear/core";
import { micah } from "@dicebear/collection";
const options = {
  ...schema.properties,
  ...micah.schema.properties,
};
console.log("options", options);
export default () => {
  const [avatar, setAvatar] = createSignal("");
  const [options, setOptions] = createSignal<typeof schema.properties>({
    backgroundColor: ["ffd5dc", "B6E3F4"],
  });

  onMount(() => {
    const avatar = createAvatar(micah, {
      seed: Math.random().toString(),
      ...options(),
      // ... other options
    });
    // const jsonDate = avatar.tojson();
    // setOptions(jsonDate.options);
    const dataUri = avatar.toDataUri();
    setAvatar(dataUri);
  });

  const randomAvatar = () => {
    const avatar = createAvatar(micah, {
      seed: Math.random().toString(),
      ...options(),
      //... other options
    });
    const dataUri = avatar.toDataUri();
    setAvatar(dataUri);
  };
  return (
    <div class="grid grid-cols-[auto_1fr_auto] h-svh">
      <div class="drawer lg:drawer-open">
        <input id="my-drawer-1" type="checkbox" class="drawer-toggle" />
        <label
          for="my-drawer-1"
          class="lg:hidden drawer-overlay fixed top-1/2 -translate-y-1/2"
        >
          <div class="bg-primary-content w-8 h-16 rounded-r-lg flex items-center justify-center">
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
              class="text-primary"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </label>

        <div class="drawer-side">
          <label
            for="my-drawer-1"
            aria-label="close sidebar"
            class="drawer-overlay"
          ></label>
          <ul class="bg-base-200 text-base-content min-h-full w-20 p-4">
            asdad
          </ul>
        </div>
      </div>
      <div class="h-full flex flex-col py-8">
        <div class="flex-1 h-full grid justify-center content-center gap-8">
          <div class="size-50 rounded-2xl overflow-hidden justify-self-center">
            <Show
              when={avatar()}
              fallback={<div class="skeleton size-full"></div>}
            >
              <img class="size-full" src={avatar()} alt="" />
            </Show>
          </div>
          <div class="flex space-x-4">
            <button
              className="btn btn-neutral"
              onClick={() => {
                randomAvatar();
              }}
            >
              随机生成
            </button>
            <button
              className="btn btn-neutral"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              下载头像
            </button>
            <button className="btn btn-neutral">批量生成</button>
          </div>
        </div>
        <div class="flex justify-center text-secondary">
          <div>Made BY YYX</div>
          <div className="divider divider-horizontal"></div>
          <div>Dicebear</div>
        </div>
      </div>
      <div class="drawer drawer-end lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <label
          for="my-drawer-2"
          class="lg:hidden drawer-overlay fixed right-0 top-1/2 -translate-y-1/2"
        >
          <div class="bg-primary-content w-8 h-16 rounded-l-lg flex items-center justify-center">
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
              class="text-primary"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </div>
        </label>

        <div class="drawer-side">
          <label
            for="my-drawer-2"
            aria-label="close sidebar"
            class="drawer-overlay"
          ></label>
          <ul class="bg-base-200 text-base-content min-h-full w-60 p-4">
            asdad
          </ul>
        </div>
      </div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};
