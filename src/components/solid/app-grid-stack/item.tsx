import { ParentProps } from "solid-js";

export type AppGridStackItemProps = ParentProps<{
  row?: number;
  col?: number;
}>;
const AppGridStackItem = (props: AppGridStackItemProps) => {
  return (
    <div class="grid-stack-item" gs-w={props.row || 1}  gs-h={props.col || 1}>
      <div class="grid-stack-item-content">{props.children}</div>
    </div>
  );
};

export default AppGridStackItem;
