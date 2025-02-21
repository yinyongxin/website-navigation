import { createSignal, onMount } from "solid-js";
import { cn } from "../../../utils";
type ElectronicBumberProps = {
  value: number;
};
const ElectronicBumber = (props: ElectronicBumberProps) => {
  const [boundingClientRect, setBoundingClientRect] = createSignal<DOMRect>();
  let currentRef!: HTMLDivElement;
  onMount(() => {
    const newBoundingClientRect = currentRef.getBoundingClientRect();
    setBoundingClientRect(newBoundingClientRect);
    console.log(newBoundingClientRect);
  });

  const horizontal = (params?: { show?: boolean; classNames?: string }) => (
    <div
      class={cn(
        "h-1/10 w-4/5 grid grid-cols-[auto_1fr_auto] absolute left-1/2 -translate-x-1/2",
        params?.classNames
      )}
    >
      <div
        class={cn("aspect-square bg-base-300", {
          "bg-base-content": params?.show,
        })}
        style={{
          "clip-path": "polygon(100% 100%, 100% 0%, 0% 50%)",
        }}
      ></div>
      <div
        class={cn("bg-base-300", {
          "bg-base-content": params?.show,
        })}
      ></div>
      <div
        class={cn("aspect-square bg-base-300", {
          "bg-base-content": params?.show,
        })}
        style={{
          "clip-path": "polygon(0% 0%, 100% 50%, 0% 100%)",
        }}
      ></div>
    </div>
  );
  const vertical = (params?: { show?: boolean; classNames?: string }) => (
    <div
      class={cn(
        "h-3/7 w-1/6 grid grid-rows-[auto_1fr_auto] absolute",
        params?.classNames
      )}
    >
      <div
        class={cn("aspect-square bg-base-300", {
          "bg-base-content": params?.show,
        })}
        style={{
          "clip-path": "polygon(100% 100%, 50% 0%, 0% 100%)",
        }}
      ></div>
      <div
        class={cn("bg-base-300", {
          "bg-base-content": params?.show,
        })}
      ></div>
      <div
        class={cn("aspect-square bg-base-300", {
          "bg-base-content": params?.show,
        })}
        style={{
          "clip-path": "polygon(0% 0%, 100% 0%, 50% 100%)",
        }}
      ></div>
    </div>
  );

  return (
    <div class="relative size-full" ref={currentRef}>
      {horizontal({
        show: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(props.value),
      })}
      {vertical({
        classNames: "top-[6%]",
        show: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(props.value),
      })}
      {vertical({
        classNames: "top-[6%] right-0",
        show: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(props.value),
      })}
      {horizontal({
        classNames: "top-1/2 -translate-y-1/2",
        show: [1, 2, 3, 4, 5, 6, 7, 8, 9].includes(props.value),
      })}
      {vertical({
        classNames: "bottom-[6%]",
        show: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(props.value),
      })}
      {vertical({
        classNames: "bottom-[6%] right-0",
        show: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(props.value),
      })}
      {horizontal({
        classNames: "bottom-0",
        show: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(props.value),
      })}
    </div>
  );
};
export default ElectronicBumber;
