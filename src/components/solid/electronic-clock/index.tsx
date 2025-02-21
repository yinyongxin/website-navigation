import { createSignal, onMount } from "solid-js";
import ElectronicBumber from "./electronic-number";
import dayjs from "dayjs";

const ElectronicClock = () => {
  const [timeFormat, setTimeFormat] = createSignal("HH:mm:ss");
  const [second, setSecond] = createSignal([0, 0]);
  const [minute, setMinute] = createSignal([0, 0]);
  const [hour, setHour] = createSignal([0, 0]);
  onMount(() => {
    setInterval(() => {
      const currentTime = dayjs().format("HH:mm:ss");
      const [h, m, s] = currentTime.split(":");
      setHour(h.split("").map(Number));
      setMinute(m.split("").map(Number));
      setSecond(s.split("").map(Number));
    }, 1000);
  });
  return (
    <div class="size-full grid grid-cols-[2fr_1fr_2fr_1fr_2fr]">
      <div class="grid grid-cols-2 gap-4">
        <ElectronicBumber value={hour()[0]} />
        <ElectronicBumber value={hour()[1]} />
      </div>
      <div class="flex flex-col justify-around items-center">
        <div class="bg-base-content w-1/5 aspect-square"></div>
        <div class="bg-base-content w-1/5 aspect-square"></div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <ElectronicBumber value={minute()[0]} />
        <ElectronicBumber value={minute()[1]} />
      </div>
      <div class="flex flex-col justify-around items-center">
        <div class="bg-base-content w-1/5 aspect-square"></div>
        <div class="bg-base-content w-1/5 aspect-square"></div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <ElectronicBumber value={second()[0]} />
        <ElectronicBumber value={second()[1]} />
      </div>
    </div>
  );
};

export default ElectronicClock;
