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
  });

  const horizontal = (params?: { show?: boolean; classNames?: string }) => (
    <div
      class={cn(
        "h-1/10 w-4/5 absolute left-1/2 -translate-x-1/2",
        params?.classNames
      )}
    >
      <div
        class={cn("bg-base-200 w-full h-full transition duration-100", {
          "bg-base-content": params?.show,
        })}
        style={{
          "clip-path":
            "polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)",
        }}
      ></div>
    </div>
  );
  const vertical = (params?: { show?: boolean; classNames?: string }) => (
    <div class={cn("h-3/7 w-1/6 absolute", params?.classNames)}>
      <div
        class={cn("bg-base-200 size-full transition duration-100", {
          "bg-base-content": params?.show,
        })}
        style={{
          "clip-path":
            "polygon(50% 0%, 100% 20%, 100% 80%, 50% 100%, 0% 80%, 0% 20%)",
        }}
      ></div>
    </div>
  );

  return (
    <div class="relative size-full" ref={currentRef}>
      {horizontal({
        show: [0, 2, 3, 5, 6, 7, 8, 9].includes(props.value),
      })}
      {vertical({
        classNames: "top-[6%]",
        show: [0, 4, 5, 6, 8, 9].includes(props.value),
      })}
      {vertical({
        classNames: "top-[6%] right-0",
        show: [0, 1, 2, 3, 4, 7, 8, 9].includes(props.value),
      })}
      {horizontal({
        classNames: "top-1/2 -translate-y-1/2",
        show: [2, 3, 4, 5, 6, 8, 9].includes(props.value),
      })}
      {vertical({
        classNames: "bottom-[6%]",
        show: [0, 2, 6, 8].includes(props.value),
      })}
      {vertical({
        classNames: "bottom-[6%] right-0",
        show: [0, 1, 3, 4, 5, 6, 7, 8, 9].includes(props.value),
      })}
      {horizontal({
        classNames: "bottom-0",
        show: [0, 2, 3, 5, 6, 8, 9].includes(props.value),
      })}
    </div>
  );
};
export default ElectronicBumber;
