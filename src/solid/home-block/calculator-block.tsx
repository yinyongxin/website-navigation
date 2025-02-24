import Calculator from "../components/calculator";
import Base from "./base";
const CalculatorBlock = () => {
  return (
    <Base class="col-span-1 row-span-2 p-2 flex flex-col">
      <Calculator />
    </Base>
  );
};

export default CalculatorBlock;
