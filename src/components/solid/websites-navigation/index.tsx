import { createSignal, For, Index, onMount, Show } from "solid-js";
import { uniq } from "lodash-es";
import { cn } from "../../../utils";
import { TransitionGroup } from "solid-transition-group";
import { Dialog } from "@ark-ui/solid";
import { Portal } from "solid-js/web";
import styles from "./index.module.css";

const WebsitesNavigation = () => {
  const [open, setOpen] = createSignal(false);
  const [tags, setTags] = createSignal<
    {
      label: string;
      checked: boolean;
    }[]
  >([]);
  const list = [
    {
      title: "SolidJS",
      url: "https://solidjs.com",
      description:
        "SolidJS 是一个轻量级、快速且可扩展的 JavaScript 库，用于构建用户界面。",
      icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20166%20155.3'%3e%3cpath%20d='M163%2035S110-4%2069%205l-3%201c-6%202-11%205-14%209l-2%203-15%2026%2026%205c11%207%2025%2010%2038%207l46%209%2018-30z'%20fill='%2376b3e1'/%3e%3clinearGradient%20id='a'%20gradientUnits='userSpaceOnUse'%20x1='27.5'%20y1='3'%20x2='152'%20y2='63.5'%3e%3cstop%20offset='.1'%20stop-color='%2376b3e1'/%3e%3cstop%20offset='.3'%20stop-color='%23dcf2fd'/%3e%3cstop%20offset='1'%20stop-color='%2376b3e1'/%3e%3c/linearGradient%3e%3cpath%20d='M163%2035S110-4%2069%205l-3%201c-6%202-11%205-14%209l-2%203-15%2026%2026%205c11%207%2025%2010%2038%207l46%209%2018-30z'%20opacity='.3'%20fill='url(%23a)'/%3e%3cpath%20d='M52%2035l-4%201c-17%205-22%2021-13%2035%2010%2013%2031%2020%2048%2015l62-21S92%2026%2052%2035z'%20fill='%23518ac8'/%3e%3clinearGradient%20id='b'%20gradientUnits='userSpaceOnUse'%20x1='95.8'%20y1='32.6'%20x2='74'%20y2='105.2'%3e%3cstop%20offset='0'%20stop-color='%2376b3e1'/%3e%3cstop%20offset='.5'%20stop-color='%234377bb'/%3e%3cstop%20offset='1'%20stop-color='%231f3b77'/%3e%3c/linearGradient%3e%3cpath%20d='M52%2035l-4%201c-17%205-22%2021-13%2035%2010%2013%2031%2020%2048%2015l62-21S92%2026%2052%2035z'%20opacity='.3'%20fill='url(%23b)'/%3e%3clinearGradient%20id='c'%20gradientUnits='userSpaceOnUse'%20x1='18.4'%20y1='64.2'%20x2='144.3'%20y2='149.8'%3e%3cstop%20offset='0'%20stop-color='%23315aa9'/%3e%3cstop%20offset='.5'%20stop-color='%23518ac8'/%3e%3cstop%20offset='1'%20stop-color='%23315aa9'/%3e%3c/linearGradient%3e%3cpath%20d='M134%2080a45%2045%200%2000-48-15L24%2085%204%20120l112%2019%2020-36c4-7%203-15-2-23z'%20fill='url(%23c)'/%3e%3clinearGradient%20id='d'%20gradientUnits='userSpaceOnUse'%20x1='75.2'%20y1='74.5'%20x2='24.4'%20y2='260.8'%3e%3cstop%20offset='0'%20stop-color='%234377bb'/%3e%3cstop%20offset='.5'%20stop-color='%231a336b'/%3e%3cstop%20offset='1'%20stop-color='%231a336b'/%3e%3c/linearGradient%3e%3cpath%20d='M114%20115a45%2045%200%2000-48-15L4%20120s53%2040%2094%2030l3-1c17-5%2023-21%2013-34z'%20fill='url(%23d)'/%3e%3c/svg%3e",
      tags: ["SolidJS"],
    },
    {
      title: "AstroJS",
      url: "https://astro.build",
      description: "Astro 是一个用于构建快速、内容聚焦网站的 Web 框架。",
      icon: "https://astro.build/favicon.svg",
      tags: ["静态网站", "SolidJS", "ReactJS", "VueJS"],
    },
    {
      title: "Vite",
      url: "https://vitejs.dev",
      description:
        "Vite 是一个旨在为现代 Web 项目提供更快、更精简开发体验的构建工具。",
      icon: "https://vitejs.dev/logo.svg",
      tags: ["Build", "Vite"],
    },
    {
      title: "ReactJS",
      url: "https://react.dev",
      description:
        "Vite 是一个旨在为现代 Web 项目提供更快、更精简开发体验的构建工具。",
      icon: "https://react.dev/favicon-32x32.png",
      tags: ["React"],
    },
    {
      title: "Nodejs中文网",
      url: "https://nodejs.cn",
      description:
        "Node.js 是一个基于 Chrome V8 JavaScript 引擎的开源、跨平台的 JavaScript 运行时环境。它允许开发者使用 JavaScript 编写服务器端应用程序，从而实现全栈开发。",
      icon: "https://img.nodejs.cn/favicon.png",
      tags: ["中文", "Nodejs", "Runtime"],
    },
    {
      title: "BestofJS",
      url: "https://bestofjs.org",
      description:
        "bestofjs.org 是一个社区驱动的网站，旨在帮助开发者发现和评估最优秀的 JavaScript 项目、库和工具。该网站通过收集和展示来自 GitHub 的数据，提供了一个全面的资源列表，帮助开发者找到适合他们需求的 JavaScript 项目。",
      icon: "https://bestofjs.org/favicon.ico",
      tags: ["推荐", "Github"],
    },
  ];

  const getFilterList = () => {
    return list.filter((listItem) => {
      return tags().every((tag) => {
        return tag.checked ? listItem.tags.includes(tag.label) : true;
      });
    });
  };

  onMount(() => {
    setTags(
      uniq(list.map((item) => item.tags).flat()).map((item) => ({
        label: item,
        checked: false,
      }))
    );
  });

  return (
    <div class="h-svh overflow-hidden relative flex flex-col">
      <div class="navbar bg-base-100 shadow-sm">
        <div class="navbar-start">
          <div
            tabindex="0"
            role="button"
            class="btn btn-ghost btn-circle"
            onClick={() => {
              console.log(open());
              setOpen(open() ? false : true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
        </div>
        <div class="navbar-center">
          <a class="btn btn-ghost text-xl">前端导航</a>
        </div>
        <div class="navbar-end">
          <button class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />{" "}
            </svg>
          </button>
        </div>
      </div>
      <div class="p-6 flex-1 overflow-auto">
        <ul
          class="w-full grid gap-6"
          style={{
            "grid-template-columns": "repeat(auto-fill, minmax(300px, 1fr))",
          }}
        >
          <For each={getFilterList()}>
            {(item) => {
              return (
                <li class={styles.card}>
                  <img src={item.icon} alt="icon" class="w-20" />
                  <div class={cn(styles.content, "bg-base-100")}>
                    <div class="text-lg font-bold flex justify-between">
                      <div>{item.title}</div>
                      <a href={item.url} target="_blank">
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
                          class="lucide lucide-arrow-right"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                    <p class={cn(styles.description, "text-justify")}>
                      {item.description}
                    </p>
                  </div>
                </li>
              );
            }}
          </For>
        </ul>
      </div>
      <Dialog.Root preventScroll={false} modal={false} open={open()}>
        <Portal>
          <Dialog.Positioner class="absolute left-0 top-16 bottom-0 flex justify-center items-center">
            <Dialog.Content class="bg-base-100 shadow h-full overflow-hidden flex flex-col">
              <ul class="menu rounded-box w-56">
                <Index each={tags()}>
                  {(tag, index) => {
                    return (
                      <li
                        class="mt-2"
                        onClick={() => {
                          setTags((prev) =>
                            prev.map((item, i) =>
                              i === index
                                ? { ...item, checked: !item.checked }
                                : item
                            )
                          );
                        }}
                      >
                        <a
                          class={cn({
                            "menu-active": tag().checked,
                          })}
                        >
                          {" "}
                          {tag().label}
                        </a>
                      </li>
                    );
                  }}
                </Index>
              </ul>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
      {/* <div class="flex gap-4 sticky top-0 p-6 glass">
        <img src="/icons/filter.svg" alt="filter" />
        <div class="flex flex-wrap gap-2">
          <Index each={tags()}>
            {(tag, index) => {
              return (
                <div
                  class={cn(
                    "px-4 py-2 border rounded-xl hover:bg-neutral-100 active:bg-neutral-50 transition-colors cursor-pointer",
                    {
                      "bg-base-200 border-dashed": tag().checked,
                    }
                  )}
                  onClick={() => {
                    setTags((prev) =>
                      prev.map((item, i) =>
                        i === index ? { ...item, checked: !item.checked } : item
                      )
                    );
                  }}
                >
                  {tag().label}
                </div>
              );
            }}
          </Index>
        </div>
      </div>
      */}
    </div>
  );
};

export default WebsitesNavigation;
