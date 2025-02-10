import { cn } from "../utils";
import { createSignal, For } from "solid-js";
import MyInfo from "../components/solid/home-block/my-info";
enum ActiveEnum {
  All = "all",
  Projects = "projects",
  About = "about",
}
const Content = () => {
  const [active, setActive] = createSignal<ActiveEnum>(ActiveEnum.All);
  const [list, setList] = createSignal([<MyInfo />]);
  return (
    <div class="bg-gray-50 py-8 sm:py-4 flex flex-col gap-8 items-center">
      <nav class="flex justify-center">
        <ul class="bg-gray-200 flex gap-2 rounded-full p-2">
          <li
            class={cn("py-2 px-4 rounded-full cursor-pointer text-gray-500", {
              "bg-white text-black": active() === "all",
            })}
            onClick={() => setActive("all")}
          >
            All
          </li>
          <li
            class={cn("py-2 px-4 rounded-full cursor-pointer text-gray-500", {
              "bg-white text-black": active() === "projects",
            })}
            onClick={() => setActive("projects")}
          >
            Projects
          </li>
          <li
            class={cn("py-2 px-4 rounded-full cursor-pointer text-gray-500", {
              "bg-white text-black": active() === "about",
            })}
            onClick={() => setActive("about")}
          >
            About
          </li>
        </ul>
      </nav>
      <div
        class="grid w-full gap-6 justify-center"
        style={{
          "grid-template-columns": "repeat(auto-fill, 200px)",
          "grid-template-rows": "repeat(10, 200px)",
        }}
      >
        <For each={list()}>
          {(item) => {
            return item;
          }}
        </For>
      </div>
    </div>
  );
};

export default Content;
