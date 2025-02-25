import Calculator from "../../components/calculator";

const CalculatorPage = () => {
  return (
    <div class="size-full flex items-center justify-center">
      <div class="w-full h-full sm:w-80 sm:h-4/5 p-6">
        <Calculator showFullScreen={false} />
      </div>
    </div>
  );
};

export default CalculatorPage;
