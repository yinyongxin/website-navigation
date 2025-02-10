import { GridStack, GridStackOptions } from "gridstack";
import { For, JSX, onMount } from "solid-js";
import "./styles.css";
import AppGridStackItem, { AppGridStackItemProps } from "./item";
type AppGridStackProps = GridStackOptions & {
  items?: {
    itemProps?:AppGridStackItemProps,
    content?:JSX.Element
  }[]
}
const AppGridStack = (props: AppGridStackProps) => {
  const {items, ...options} = props;
  let gridStack!: HTMLDivElement;
  onMount(() => {
    var grid = GridStack.init(
      {...options, column: 4},
      gridStack
    );
  });
  return (
    <div ref={gridStack}>
      <For each={items}>
        {(item) => (
          <AppGridStackItem {...item.itemProps}>{item.content}</AppGridStackItem>
        )}
      </For>
    </div>
  );
};
export default AppGridStack;
