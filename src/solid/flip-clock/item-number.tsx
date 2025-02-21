type ItemNumberProps = {
  defaultValue: number | string;
  value: number | string;
  newValue: number | string;
};
const ItemNumber = (props: ItemNumberProps) => {
  return (
    <div class="size-full relative text-[100px]">
      <div class="size-full absolute inset-0">
        <div>
          <div>{props.value}</div>
        </div>
        <div>
          <div>{props.newValue}</div>
        </div>
      </div>
      <div class="size-full absolute inset-0">
        <div>
          <div>{props.newValue}</div>
        </div>
        <div>
          <div>{props.value}</div>
        </div>
      </div>
    </div>
  );
};

export default ItemNumber;
