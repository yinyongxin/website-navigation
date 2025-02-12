import { createSignal } from "solid-js";
export default () => {
  const [avatar, setAvatar] = createSignal();
  return (
    <div class="grid grid-cols-[auto_1fr_auto] size-full">
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
      <div class="grid justify-center content-center">
        <div class="size-40 rounded-3xl">
          <Show
            when={avatar()}
            fallback={<div class="skeleton size-full"></div>}
          >
            <img class="size-full" src={avatar()} alt="" />
          </Show>
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
    </div>
  );
};
