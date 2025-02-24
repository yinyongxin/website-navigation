import dayjs from "dayjs";
import ElectronicClock from "../electronic-clock";
import Base from "./base";
import { createSignal } from "solid-js";

const ElectronicClockBlock = () => {
  const [timeType, setTimeType] = createSignal<"AM" | "PM">("AM");
  const date = dayjs().format("YYYY年MM月DD日");
  return (
    <Base class="col-span-2 bg-base-100 p-6 flex flex-col justify-between">
      <div class="flex justify-end">
        <div class="text-sm text-gray-500 cursor-pointer hover:scale-105">
          <a href="/tools/electronic-clock">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-4 w-4"
            >
              <path d="M8 3H5a2 2 0 0 0-2 2v3" />
              <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
              <path d="M3 16v3a2 2 0 0 0 2 2h3" />
              <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
            </svg>
          </a>
        </div>
      </div>
      <div class="h-2/5 w-full">
        <ElectronicClock timeType={timeType()} />
      </div>
      <div class="flex justify-between text-neutral-content">
        <div
          class="text-lg font-bold cursor-pointer hover:text-neutral"
          onClick={() => {
            setTimeType(timeType() === "AM" ? "PM" : "AM");
          }}
        >
          {timeType()}
        </div>
        <div class="text-lg font-bold">{date}</div>
      </div>
    </Base>
  );
};
export default ElectronicClockBlock;
