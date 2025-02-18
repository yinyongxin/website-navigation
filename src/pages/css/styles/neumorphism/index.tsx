import { createSignal } from "solid-js";
export default () => {
  const [color, setColor] = createSignal("#E0E0E0");
  const [radius, setRadius] = createSignal(20);
  const [distalce, setDistalce] = createSignal(8);
  const [blur, setBlur] = createSignal(24);
  const getBaseNeumorphism = (inset: boolean = false) => {
    const shadows = [
      (inset ? "inset " : "") +
        distalce() +
        "px " +
        distalce() +
        "px " +
        blur() +
        "px #bebebe",
      (inset ? "inset " : "") +
        -distalce() +
        "px " +
        -distalce() +
        "px " +
        blur() +
        "px #ffffff",
    ];
    return {
      "border-radius": radius() + "px",
      "box-shadow": shadows.join(","),
    };
  };
  return (
    <div
      style={{
        "background-color": color(),
      }}
      class="size-full grid grid-cols-1 grid-rows-2 xl:grid-cols-2 xl:grid-rows-1 p-10 place-items-center overflow-hidden gap-5"
    >
      <div class="h-full xl:h-[unset] w-full xl:w-full grid grid-cols-2 grid-rows-2 place-content-center place-items-center aspect-square gap-10">
        <div
          class="size-full aspect-square flex justify-center items-center"
          style={getBaseNeumorphism()}
        >
          <img src="/icons/a.svg" alt="a" class="w-2/5" />
        </div>
        <div
          class="size-full aspect-square flex justify-center items-center"
          style={getBaseNeumorphism(true)}
        >
          <img src="/icons/b.svg" alt="a" class="w-2/5" />
        </div>
        <div
          class="size-full aspect-square flex justify-center items-center"
          style={{...getBaseNeumorphism(false),background: 'linear-gradient(145deg, #f0f0f0, #cacaca)'}}
        >
          <img src="/icons/c.svg" alt="a" class="w-2/5" />
        </div>
        <div
          class="size-full aspect-square flex justify-center items-center"
          style={{...getBaseNeumorphism(false),background: 'linear-gradient(145deg, #cacaca, #f0f0f0)'}}
        >
          <img src="/icons/d.svg" alt="a" class="w-2/5" />
        </div>
      </div>
      <div class="h-full xl:h-[unset] w-full xl:w-full aspect-square grid grid-cols-1 gap-4 auto-rows-max grid-flow-dense content-center">
        <div
          class="flex items-center justify-between px-6 py-6"
          style={getBaseNeumorphism()}
        >
          <div>Radius</div>
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
          <div>Distalce</div>
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
