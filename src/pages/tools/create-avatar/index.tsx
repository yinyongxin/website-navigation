import { createSignal, onMount, Show } from "solid-js";
import { createStore } from "solid-js/store";
import {
  createAvatar,
  schema,
  type Result,
  type Options,
} from "@dicebear/core";
import { micah } from "@dicebear/collection";
import { toPng, type Avatar } from "@dicebear/converter";
import { downloadImage } from "../../../utils/download";
import { Dialog } from "@ark-ui/solid";
import { Portal } from "solid-js/web";

const defaultOptions = {
  ...schema.properties,
  ...micah.schema.properties,
};
console.log("schema.properties", schema.properties);

export default () => {
  const [avatar, setAvatar] = createSignal<ReturnType<typeof createAvatar>>();
  const [open, setOpen] = createSignal(false);
  const [options, setOptions] = createStore<Partial<micah.Options & Options>>({
    backgroundColor: [
      "ffd5dc",
      "B6E3F4",
      "EED267",
      "DFDDFC",
      "D8EEF2",
      "D8EEF2",
      "FCECAC",
      "5569EC",
      "E5875B",
      "63A79A",
      "BBA0F9",
      "EC7864",
      "CF7477",
    ],
    backgroundType: ["gradientLinear", "solid"],
  });
  //
  onMount(() => {
    randomAvatar();
  });

  const randomAvatar = () => {
    const avatar = createAvatar(micah, {
      seed: Math.random().toString(),
      ...options,
      //... other options
    });
    setAvatar(avatar);
  };
  return (
    <div
      class="h-svh"
      style={{
        "background-color": avatar()?.toJson()?.extra
          ?.primaryBackgroundColor as string,
      }}
    >
      <div class="h-full flex flex-col py-8">
        <div class="flex-1 h-full grid justify-center content-center gap-8">
          <div class="size-50 rounded-2xl border-4 border-base-100 shadow overflow-hidden justify-self-center">
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

            <Dialog.Root open={open()}>
              <Dialog.Trigger
                class="btn btn-neutral"
                onClick={() => {
                  setOpen(true);
                }}
              >
                批量生成
              </Dialog.Trigger>
              <Portal>
                <Dialog.Backdrop class="absolute inset-0 bg-base-content/50" />
                <Dialog.Positioner class="absolute inset-0 p-6 flex justify-center items-center">
                  <Dialog.Content class="bg-base-100 rounded-2xl shadow-lg w-full h-full sm-w-3/5">
                    <div class="flex justify-between items-center px-6 py-4 shadow">
                      <Dialog.Title class="font-bold">
                        已为你自动生成头像
                      </Dialog.Title>
                      <div class="flex space-x-2 items-center">
                        <div class="btn btn-sm btn-primary btn-soft">
                          换一批
                        </div>
                        <Dialog.CloseTrigger
                          class="cursor-pointer"
                          onClick={() => {
                            setOpen(false);
                          }}
                        >
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
                            class="lucide lucide-circle-x"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="m15 9-6 6" />
                            <path d="m9 9 6 6" />
                          </svg>
                        </Dialog.CloseTrigger>
                      </div>
                    </div>
                    <Dialog.Description class="p-6">
                      Dialog Description
                    </Dialog.Description>
                  </Dialog.Content>
                </Dialog.Positioner>
              </Portal>
            </Dialog.Root>
          </div>
        </div>
        <div class="flex justify-center text-neutral/70">
          <div>银永鑫</div>
          <div class="divider divider-horizontal py-1 mx-1"></div>
          <a
            class="hover:text-primary cursor-pointer"
            href="https://www.dicebear.com/"
            target="_blank"
          >
            Dicebear
          </a>
        </div>
      </div>
    </div>
  );
};
