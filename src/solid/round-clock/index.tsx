import { For, createSignal, onMount, onCleanup } from "solid-js";
import { cn } from "../../utils";
import dayjs from "dayjs";

const RoundClock = () => {
  const [second, setSecond] = createSignal(0);
  const [minute, setMinute] = createSignal(0);
  const [hour, setHour] = createSignal(0);
  const hoursRender = () => {
    const hours = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
    ];
    return (
      <div class="absolute inset-0">
        <For each={hours}>
          {(hour) => {
            return (
              <div
                class={cn(
                  "text-sm font-bold absolute top-1/2 left-0 right-0 -translate-y-1/2 p-1",
                  {
                    "rotate-90": hour === "12",
                    "rotate-120": hour === "1",
                    "rotate-150": hour === "2",
                    "rotate-180": hour === "3",
                    "rotate-210": hour === "4",
                    "rotate-240": hour === "5",
                    "rotate-270": hour === "6",
                    "rotate-300": hour === "7",
                    "rotate-330": hour === "8",
                    "rotate-360": hour === "9",
                    "rotate-390": hour === "10",
                    "rotate-420": hour === "11",
                  }
                )}
              >
                <div
                  class={cn("inline-block", {
                    "rotate-180": 1 <= parseInt(hour) && parseInt(hour) <= 5,
                  })}
                >
                  {hour}
                </div>
              </div>
            );
          }}
        </For>
      </div>
    );
  };
  let timerId: number;

  onMount(() => {
    timerId = setInterval(() => {
      const now = dayjs();
      setSecond(now.second());
      setMinute(now.minute());
      setHour(now.hour());
    }, 1000);

    // 确保在组件卸载时清除定时器
    onCleanup(() => {
      clearInterval(timerId);
    });
  });
  return (
    <div class="w-full aspect-square rounded-full border-6 border-neutral/90 bg-base-300 relative">
      {hoursRender()}
      <div class="absolute inset-0 rounded-full shadow-[inset_0_0_20px_0_rgba(0,0,0,0.5)] shadow-base-content/40"></div>
      {/* 时 */}
      <div
        class="w-full h-[6px] absolute top-1/2 -translate-y-1/2 pr-[40%] pl-[15%]"
        style={{ transform: "rotate(" + (90 + hour() * 6) + "deg)" }}
      >
        <div class="size-full bg-gradient-to-r from-accent to-base-content rounded-[3px] shadow"></div>
      </div>
      {/* 分 */}
      <div
        class="w-full h-[4px] absolute top-1/2 -translate-y-1/2 pr-[38%] pl-[10%]"
        style={{ transform: "rotate(" + (90 + minute() * 6) + "deg)" }}
      >
        <div class="size-full bg-gradient-to-r from-secondary to-base-content rounded-[2px] shadow"></div>
      </div>
      {/* 秒 */}
      <div
        class="w-full h-[2px] absolute top-1/2 -translate-y-1/2 pr-[36%] pl-[5%]"
        style={{ transform: "rotate(" + (90 + second() * 6) + "deg)" }}
      >
        <div class="size-full bg-gradient-to-r from-primary to-base-content rounded-[1px] shadow"></div>
      </div>
      <div class="size-4 rounded-full bg-base-content absolute top-1/2 left-1/2 -translate-1/2 shadow"></div>
    </div>
  );
};
export default RoundClock;
