import { cn } from "../utils";
import { createSignal, For } from "solid-js";
import { BlockList, TabsObj, type TabsKey } from "../common/index";

const Content = () => {
  const [active, setActive] = createSignal<TabsKey>("all");
  return (
    <div class="py-4 sm:py-8 flex flex-col gap-4 sm:gap-8 items-center sm:px-8">
      <nav class="flex justify-center">
        <ul class="bg-base-300 max-w-80 sm:max-w-max flex gap-2 rounded-full p-2 overflow-auto">
          <For each={Object.keys(TabsObj) as TabsKey[]}>
            {(item) => {
              return (
                <li
                  class={cn("flex-none py-2 px-4 rounded-full cursor-pointer", {
                    "bg-base-100 text-primary": active() === item,
                  })}
                  onClick={() => setActive(item)}
                >
                  {TabsObj[item].title}
                </li>
              );
            }}
          </For>
        </ul>
      </nav>
      <div
        class={cn(
          "grid grid-flow-dense w-full gap-4 sm:gap-6 justify-center ",
          "sm:grid-cols-[repeat(auto-fill,200px)] sm:grid-rows-[repeat(10,200px)]",
          "grid-cols-[repeat(2,calc(50vw-2rem))] grid-rows-[repeat(10,calc(50vw-2rem))]"
        )}
      >
        <For
          each={BlockList.filter(
            (itemBlock) => active() === "all" || itemBlock.key === active()
          )}
        >
          {(item) => {
            return item.getContent();
          }}
        </For>
      </div>
    </div>
  );
};

export default Content;
