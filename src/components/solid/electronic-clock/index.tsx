import { createSignal } from "solid-js";
import ElectronicBumber from "./electronic-number";

const ElectronicClock = () => {
  const [timeFormat, setTimeFormat] = createSignal("HH:mm:ss");
  const [second, setSecond] = createSignal(0);
  const [minute, setMinute] = createSignal(0);
  const [hour, setHour] = createSignal(0);
  return (
    <div class="size-full grid grid-cols-3">
      <div>时</div>
      <div>分</div>
      <div class="w-4/5">
        <ElectronicBumber value={0} />
      </div>
    </div>
  );
};

export default ElectronicClock;
