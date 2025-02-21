import { createSignal, For } from "solid-js";
import Base from "./base";
import { cn } from "../../utils";

const searchList = [
  {
    label: "谷歌",
    key: "google",
    url: "https://www.google.com/search?q=",
    iconImage: "/images/google.png",
  },
  {
    label: "百度",
    key: "baidu",
    url: "https://www.baidu.com/s?ie-utf8&word=",
    iconImage: "/images/baidu.png",
  },
] as const;
const SearchBlock = () => {
  const [active, setActive] = createSignal<(typeof searchList)[number]["key"]>(
    searchList[0].key
  );
  return (
    <Base class="bg-base-100 col-span-2 flex flex-col justify-between p-4 sm:p-6">
      <div class="flex justify-between items-center">
        <div>
          <span class="text-primary font-bold text-xl">
            {searchList.find((item) => item.key === active())?.label}
          </span>
        </div>
        <a
          href="/tools/search"
          class={cn(
            "size-6 sm:size-8 flex justify-center items-center cursor-pointer"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-fullscreen size-4/5"
          >
            <path d="M3 7V5a2 2 0 0 1 2-2h2" />
            <path d="M17 3h2a2 2 0 0 1 2 2v2" />
            <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
            <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
            <rect width="10" height="8" x="7" y="8" rx="1" />
          </svg>
        </a>
      </div>
      <div class="w-full relative rounded-full overflow-hidden shadow">
        <input
          class="bg-transparent outline-none border-none pl-6 pr-10 py-3 w-full font-sans text-lg font-semibold"
          placeholder="输入搜索内容"
          name="search"
          type="text"
        />
        <div class="absolute right-2 bottom-2 top-2 group">
          <button
            class={cn(
              "h-full aspect-square rounded-full shadow cursor-pointer bg-primary",
              "flex items-center justify-center ",
              "relative overflow-hidden"
            )}
            onClick={() => {
              const input = document.querySelector(
                "input[name=search]"
              ) as HTMLInputElement;
              const value = input.value;
              const url = searchList.find((item) => item.key === active())?.url;
              if (url) {
                window.open(url + value);
              }
            }}
          >
            <svg
              class="relative z-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 64 64"
            >
              <path
                fill-opacity="0.01"
                fill="white"
                d="M63.6689 29.0491L34.6198 63.6685L0.00043872 34.6194L29.0496 1.67708e-05L63.6689 29.0491Z"
              ></path>
              <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="3.76603"
                stroke="white"
                d="M42.8496 18.7067L21.0628 44.6712"
              ></path>
              <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="3.76603"
                stroke="white"
                d="M26.9329 20.0992L42.85 18.7067L44.2426 34.6238"
              ></path>
            </svg>
            <div class="w-full h-full rotate-45 absolute left-[32%] top-[32%] bg-base group-hover:-left-[100%] group-hover:-top-[100%] duration-1000"></div>
            <div class="w-full h-full -rotate-45 absolute -left-[32%] -top-[32%] group-hover:left-[100%] group-hover:top-[100%] bg-base duration-1000"></div>
          </button>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex gap-2">
          <For each={searchList}>
            {(item) => {
              return (
                <div
                  class={cn(
                    "size-8 sm:size-10 p-1 rounded-full overflow-hidden cursor-pointer hover:border-2 hover:border-primary",
                    {
                      "border-2 border-primary": active() === item.key,
                    }
                  )}
                  onClick={() => setActive(item.key)}
                >
                  <img src={item.iconImage} class="size-full" alt="google" />
                </div>
              );
            }}
          </For>
        </div>
      </div>
    </Base>
  );
};

export default SearchBlock;
