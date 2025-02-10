import { cn } from "../utils";
import { createSignal } from "solid-js";
import MyInfo from "../components/solid/home-block/my-info";
const Content = () => {
  const [active, setActive] = createSignal("all");
  return (
    <div class="bg-[#F5F2F2] py-8 sm:py-4 flex flex-col gap-8 items-center">
      <nav class="flex justify-center">
        <ul class="bg-[#EBE7E7] flex gap-2 rounded-full p-2">
          <li
            class={cn("py-2 px-4 rounded-full cursor-pointer", {
              "bg-white": active() === "all",
            })}
            onClick={() => setActive("all")}
          >
            All
          </li>
          <li
            class={cn("py-2 px-4 rounded-full cursor-pointer", {
              "bg-white": active() === "projects",
            })}
            onClick={() => setActive("projects")}
          >
            Projects
          </li>
          <li
            class={cn("py-2 px-4 rounded-full cursor-pointer", {
              "bg-white": active() === "about",
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
        <MyInfo />
        <MyInfo />
        <MyInfo />
      </div>
    </div>
  );
};

export default Content;
