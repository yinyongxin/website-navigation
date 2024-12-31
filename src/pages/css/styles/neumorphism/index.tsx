import { createSignal } from "solid-js";
export default () => {
  const [color, setColor] = createSignal("#E0E0E0");
  const [radius, setRadius] = createSignal(20);
  const [distalce, setDistalce] = createSignal(8);
  const [blur, setBlur] = createSignal(24);
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
          style={{
            "border-radius": radius() + "px",
            "box-shadow": `${distalce()}px ${distalce()}px ${blur()}px #bebebe,-${distalce()}px -${distalce()}px ${blur()}px #ffffff;`,
          }}
        ></div>
        <div
          class="h-3/5 xl:h-[unset] w-[unset] xl:w-3/5 aspect-square "
          style={{
            "border-radius": radius() + "px",
            "box-shadow": `inset ${distalce()}px ${distalce()}px ${blur()}px #bebebe,inset -${distalce()}px -${distalce()}px ${blur()}px #ffffff;`,
          }}
        ></div>
      </div>
      <div class="h-full xl:h-[unset] w-full xl:w-full aspect-square flex flex-col gap-4">
        <div class="flex justify-between">
          <div>radius</div>
          <div>{radius()}</div>
        </div>
        <div class="flex justify-between">
          <div>distalce</div>
          <div>{distalce()}</div>
        </div>
        <div class="flex justify-between">
          <div>blur</div>
          <div>{blur()}</div>
        </div>
      </div>
    </div>
  );
};
