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
      class="size-full grid grid-cols-1 grid-rows-2 xl:grid-cols-2 xl:grid-rows-1 p-10 place-items-center overflow-hidden"
    >
      <div class="h-full xl:h-[unset] w-full xl:w-full grid grid-cols-2 grid-rows-2 place-content-center place-items-center aspect-square gap-10">
        <div
          class="size-full aspect-square flex justify-center items-center"
          style={getBaseNeumorphism()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="145"
            height="24"
            viewBox="0 0 145 24"
            fill="none"
            stroke="white"
          >
            <path
              d="M0 22H7C15.2843 22 22 15.2843 22 7.00001V3C22 2.44772 22.4477 2 23 2H121C121.552 2 122 2.44772 122 3V7.00001C122 15.2843 128.716 22 137 22H145"
              stroke="inherit"
              stroke-width="6"
            ></path>
          </svg>
        </div>
        <div
          class="size-full aspect-square flex justify-center items-center"
          style={getBaseNeumorphism(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="145"
            height="24"
            viewBox="0 0 145 24"
            fill="none"
            stroke="white"
          >
            <path
              d="M0 2H22V21C22 21.5523 22.4477 22 23 22H121C121.552 22 122 21.5523 122 21V2H145"
              stroke="inherit"
              stroke-width="6"
            ></path>
          </svg>
        </div>
      </div>
      <div class="h-full xl:h-[unset] w-full xl:w-full aspect-square grid grid-cols-1 xl:grid-cols-2 gap-4 auto-rows-max grid-flow-dense content-center">
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
