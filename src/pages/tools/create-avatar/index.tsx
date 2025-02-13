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

const defaultOptions = {
  ...schema.properties,
  ...micah.schema.properties,
};
console.log("defaultOptions", defaultOptions);

export default () => {
  const [avatar, setAvatar] = createSignal<ReturnType<typeof createAvatar>>();
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
            <button class="btn btn-neutral">批量生成</button>
          </div>
        </div>
        <div class="flex justify-center text-sm text-neutral">
          <div>Made BY YYX</div>
          <div class="divider divider-horizontal"></div>
          <div>Dicebear</div>
        </div>
      </div>
    </div>
  );
};
