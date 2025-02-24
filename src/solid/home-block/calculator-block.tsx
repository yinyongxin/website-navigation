import Calculator from "../components/calculator";
import Base from "./base";
const CalculatorBlock = () => {
  return (
    <Base class="col-span-1 row-span-2">
      <Calculator />
    </Base>
  );
};

export default CalculatorBlock;
