import { cn } from "../../../utils";
import { type JSX, splitProps } from "solid-js";
type BaseProps = JSX.HTMLAttributes<HTMLDivElement> & {
  link?: {
    name: string;
    href: string;
  };
};
const Base = (props: BaseProps) => {
  const [local, others] = splitProps(props, ["children", "class", "link"]);
  return (
    <div
      class={cn(
        "bg-base-100 rounded-3xl hover:base-100 hover:shadow-lg transition-shadow duration-400 relative",
        local?.class
      )}
      {...others}
    >
      <Show when={local?.link}>
        <div class="absolute left-4 bottom-4 h-10 bg-base-100 cursor-pointer rounded-full flex hover:shadow group">
          <div class="flex items-center w-0 group-hover:w-unset group-hover:px-2 overflow-hidden">
            asda
          </div>
          <div class="size-10 flex justify-center items-center -rotate-45">
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
          </div>
        </div>
      </Show>
      {local?.children}
    </div>
  );
};
export default Base;
