import ElectronicClock from "../electronic-clock";
import Base from "./base";

const TestBlock = () => {
  return (
    <Base class="col-span-2 bg-base-100 p-4">
      <div class="h-2/5 w-full">
        <ElectronicClock />
      </div>
    </Base>
  );
};

export default TestBlock;
