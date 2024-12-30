import { createSignal } from "solid-js";

export default () => {
  const [color, setColor] = createSignal("#E0E0E0");
  const [rounded, setRounded] = createSignal(20);
  return (
    <div
      style={{
        "background-color": color(),
      }}
      class="size-full grid grid-cols-1 grid-rows-2 xl:grid-cols-2 xl:grid-rows-1 p-10 place-items-center"
    >
      <div class="w-full grid grid-cols-2 grid-rows-2 place-content-center place-items-center aspect-square">
        <div
          class="w-3/5 aspect-square "
          style={{
            "border-radius": rounded() + "px",
            "box-shadow": `18px 18px 36px #bebebe,-18px -18px 36px #ffffff;`,
          }}
        ></div>
      </div>
      <div class="w-full aspect-square">asdfasdf</div>
    </div>
  );
};
