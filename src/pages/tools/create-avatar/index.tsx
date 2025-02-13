import { createSignal, onMount, Show } from "solid-js";
import {
  createAvatar,
  schema,
  type Result,
  type Options,
} from "@dicebear/core";
import { micah } from "@dicebear/collection";
import { toPng, type Avatar } from "@dicebear/converter";
import { downloadImage } from "../../../utils/download";

const defaultOptions = {
  ...schema.properties,
  ...micah.schema.properties,
};
console.log("defaultOptions", defaultOptions);

export default () => {
  const [avatar, setAvatar] = createSignal<ReturnType<typeof createAvatar>>();
  const [options, setOptions] = createSignal<Partial<micah.Options & Options>>({
    backgroundColor: ["ffd5dc", "B6E3F4"],
    backgroundType: ["gradientLinear", "solid"],
  });
  //
  onMount(() => {
    randomAvatar();
  });

  const randomAvatar = () => {
    const avatar = createAvatar(micah, {
      seed: Math.random().toString(),
      ...options(),
      //... other options
    });
    setAvatar(avatar);
  };
  return (
    <div
      class="grid grid-cols-[auto_1fr_auto] h-svh"
      style={{
        "background-color": avatar()?.toJson()?.extra
          ?.primaryBackgroundColor as string,
      }}
    >
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
              <img class="size-full" src={avatar()?.toDataUri()} alt="" />
            </Show>
          </div>
          <div class="flex space-x-4">
            <button
              class="btn btn-neutral"
              onClick={() => {
                randomAvatar();
              }}
            >
              随机生成
            </button>
            <button
              class="btn btn-neutral"
              onClick={async () => {
                if (!avatar()) {
                  return;
                }
                // document.getElementById("my_modal_2").showModal();
                // downloadImage(toPng(avatar()).toArrayBuffer(), "avatar.png");
                try {
                  // 将 avatar() 转换为 PNG 的 ArrayBuffer
                  const pngData = await toPng(
                    avatar() as Avatar
                  ).toArrayBuffer();
                  // 调用下载函数
                  downloadImage(pngData, "avatar.png");
                } catch (error) {
                  console.error("图片下载失败:", error);
                }
              }}
            >
              下载头像
            </button>
            <button class="btn btn-neutral">批量生成</button>
          </div>
        </div>
        <div class="flex justify-center text-secondary">
          <div>Made BY YYX</div>
          <div class="divider divider-horizontal"></div>
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
      <dialog id="my_modal_2" class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Hello!</h3>
          <p class="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};
