import { createSignal, For, Index, onMount, Show } from "solid-js";
import { uniq } from "lodash-es";
import { cn } from "../../utils";
import { TransitionGroup } from "solid-transition-group";
import "./index.css";

const Content = () => {
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
    <div class="h-full w-full">
      <div class="flex gap-4 sticky top-0 p-6 glass">
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
      <div class="px-6">
        <ul
          class="w-full grid gap-4"
          style={{
            "grid-template-columns": "repeat(auto-fill, minmax(300px, 1fr))",
          }}
        >
          <For each={getFilterList()}>
            {(item) => {
              return (
                <li class="border-solid border border-gray-300 p-4 rounded-xl shadow hover:shadow-md transition-shadow flex flex-col gap-2">
                  <div class="flex justify-between items-center ">
                    <div class="w-16 h-16 border rounded-xl flex justify-center items-center">
                      <img alt="icon" width="70%" src={item.icon} />
                    </div>
                    <div class="flex-1 text-end text-2xl">{item.title}</div>
                  </div>
                  <div class="text-ellipsis line-clamp-2 h-12 text-justify">
                    {item.description}
                  </div>
                  <ol class="flex gap-2">
                    <For each={item.tags.slice(0, 2)}>
                      {(tag) => (
                        <li
                          class={cn(
                            "text-xs border rounded-lg px-2 py-1 hover:bg-neutral-100 active:bg-neutral-50 transition-colors cursor-pointer",
                            {
                              "bg-neutral-100 border-dashed": tags().find(
                                (tagsItem) =>
                                  tagsItem.label === tag && tagsItem.checked
                              ),
                            }
                          )}
                          onClick={() => {
                            setTags((prev) =>
                              prev.map((item, i) =>
                                item.label === tag
                                  ? { ...item, checked: !item.checked }
                                  : item
                              )
                            );
                          }}
                        >
                          {tag}
                        </li>
                      )}
                    </For>
                    <Show when={item.tags.length > 2}>
                      <li class="text-xs border-2 rounded-lg px-2 py-1 cursor-pointer">
                        更多
                      </li>
                    </Show>
                  </ol>
                  <button
                    class="py-4 bg-neutral-100 hover:bg-neutral-200 transition-colors rounded-xl text-center cursor-pointer"
                    onClick={() => {
                      window.open(item.url);
                    }}
                  >
                    {item.url}
                  </button>
                </li>
              );
            }}
          </For>
        </ul>
      </div>
    </div>
  );
};

export default Content;
