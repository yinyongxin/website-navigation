import { createSignal } from "solid-js";
export default () => {
  const [color, setColor] = createSignal("#E0E0E0");
  const [radius, setRadius] = createSignal(20);
  const [distalce, setDistalce] = createSignal(8);
  const [blur, setBlur] = createSignal(24);
  const getBaseNeumorphism = () => {
    console.log("distalce()", distalce());
    console.log("blur()", blur());
    console.log();
    return {
      "border-radius": radius() + "px",
      "box-shadow":
        distalce() +
        "px " +
        distalce() +
        "px " +
        blur() +
        "px #bebebe," +
        -distalce() +
        "px " +
        -distalce() +
        "px " +
        blur() +
        "px #ffffff",
    };
  };
  return (
    <div
      style={{
        "background-color": color(),
      }}
      class="size-full grid grid-cols-1 grid-rows-2 xl:grid-cols-2 xl:grid-rows-1 p-10 place-items-center overflow-hidden"
    >
      <div class="h-full xl:h-[unset] w-full xl:w-full grid grid-cols-2 grid-rows-2 place-content-center place-items-center aspect-square">
        <div
          class="h-3/5 xl:h-[unset] w-[unset] xl:w-3/5 aspect-square "
          style={getBaseNeumorphism()}
        >
          {blur()}
          {distalce()}
          {radius()}
        </div>
        <div
          class="h-3/5 xl:h-[unset] w-[unset] xl:w-3/5 aspect-square "
          style={{
            "border-radius": radius() + "px",
            "box-shadow":
              `inset ${distalce()}px ${distalce()}px ${blur()}px #bebebe,inset -${distalce()}px -${distalce()}px ${blur()}px #ffffff;` +
              "",
          }}
        >
          {blur()}
          {distalce()}
          {radius()}
        </div>
      </div>
      <div class="h-full xl:h-[unset] w-full xl:w-full aspect-square grid grid-cols-1 xl:grid-cols-2 gap-4 auto-rows-max grid-flow-dense content-center">
        <div
          class="flex items-center justify-between px-6 py-6"
          style={getBaseNeumorphism()}
        >
          <div>radius</div>
          <div class="flex items-center gap-4">
            <div
              class="cursor-pointer px-4 aspect-square flex items-center align-middle"
              style={getBaseNeumorphism()}
              onClick={() => {
                setRadius((r) => r - 1);
              }}
            >
              -
            </div>
            {radius()}
            <div
              class="cursor-pointer px-4 aspect-square flex items-center align-middle"
              style={getBaseNeumorphism()}
              onClick={() => {
                setRadius((r) => r + 1);
              }}
            >
              +
            </div>
          </div>
        </div>
        <div
          class="flex items-center justify-between px-6 py-6"
          style={getBaseNeumorphism()}
        >
          <div>distalce</div>
          <div class="flex items-center gap-4">
            <div
              class="cursor-pointer px-4 aspect-square flex items-center align-middle"
              style={getBaseNeumorphism()}
              onClick={() => {
                setDistalce((d) => d - 1);
              }}
            >
              -
            </div>
            {distalce()}
            <div
              class="cursor-pointer px-4 aspect-square flex items-center align-middle"
              style={getBaseNeumorphism()}
              onClick={() => {
                setDistalce((d) => d + 1);
              }}
            >
              +
            </div>
          </div>
        </div>
        <div
          class="flex items-center justify-between px-6 py-6"
          style={getBaseNeumorphism()}
        >
          <div>Blur</div>
          <div class="flex items-center gap-4">
            <div
              class="cursor-pointer px-4 aspect-square flex items-center align-middle"
              style={getBaseNeumorphism()}
              onClick={() => {
                setBlur((state) => state - 1);
              }}
            >
              -
            </div>
            {blur()}
            <div
              class="cursor-pointer px-4 aspect-square flex items-center align-middle"
              style={getBaseNeumorphism()}
              onClick={() => {
                setBlur((state) => state + 1);
              }}
            >
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
