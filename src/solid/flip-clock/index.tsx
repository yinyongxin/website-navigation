import { createSignal } from "solid-js";
import ItemNumber from "./item-number";

const FlipClock = () => {
  const [second, setSecond] = createSignal(0);
  const [minute, setMinute] = createSignal(0);
  const [hour, setHour] = createSignal(0);
  return (
    <div class="grid grid-cols-3">
      <div>时</div>
      <div>分</div>
      <div>
        <ItemNumber defaultValue={0} value={0} newValue={1} />
      </div>
    </div>
  );
};
export default FlipClock;
