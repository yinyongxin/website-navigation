import { createSignal, For } from "solid-js";
import Base from "./base";
import { cn } from "../../../utils";

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
      {/* <label class="input w-full rounded-2xl flex-none">
        <svg
          class="h-5 opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            stroke-inejoin="round"
            stroke-llinecap="round"
            stroke-wwidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" class="grow" placeholder="Search" />
      </label> */}
      <div class="relative rounded-full overflow-hidden shadow w-full">
        <input
          class="bg-transparent outline-none border-none pl-6 pr-10 py-3 w-full font-sans text-lg font-semibold"
          placeholder="输入搜索内容"
          name="text"
          type="text"
        />
        <div class="absolute right-2 bottom-2 top-2">
          <button
            class={cn(
              "h-full aspect-square rounded-full group shadow cursor-pointer",
              " flex items-center justify-center ",
              "relative overflow-hidden"
            )}
            onClick={() => {
              const input = document.querySelector(
                "input[type=search]"
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
            <div class="w-full h-full rotate-45 absolute left-[32%] top-[32%] bg-black group-hover:-left-[100%] group-hover:-top-[100%] duration-1000"></div>
            <div class="w-full h-full -rotate-45 absolute -left-[32%] -top-[32%] group-hover:left-[100%] group-hover:top-[100%] bg-black duration-1000"></div>
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
        <div>
          <span class="text-primary font-bold text-xl ml-2">
            {searchList.find((item) => item.key === active())?.label}
          </span>
        </div>
      </div>
    </Base>
  );
};

export default SearchBlock;
