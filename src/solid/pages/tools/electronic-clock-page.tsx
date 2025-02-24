import ElectronicClock from "../../electronic-clock";
import { createSignal } from "solid-js";
import dayjs from "dayjs";

const ElectronicClockPage = () => {
  const [timeType, setTimeType] = createSignal<"AM" | "PM">("AM");
  const date = dayjs().format("YYYY年MM月DD日");
  return (
    <div class="size-full flex flex-col justify-center items-center gap-4">
      <div class="w-3/4 aspect-[5/1] flex flex-col justify-center items-center">
        <ElectronicClock timeType={timeType} />
      </div>
      <div class="w-3/4 flex justify-between text-neutral/50">
        <div
          class="text-xl font-bold cursor-pointer hover:text-neutral"
          onClick={() => {
            setTimeType(timeType() === "AM" ? "PM" : "AM");
          }}
        >
          {timeType()}
        </div>
        <div class="text-xl font-bold">{date}</div>
      </div>
    </div>
  );
};
export default ElectronicClockPage;
