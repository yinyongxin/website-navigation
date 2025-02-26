import { cn } from "../../../utils";
import styles from "./index.module.css";
type ItemCardProps = {
  data: {
    title: string;
    url: string;
    icon: string;
    name: string;
    description: string;
  };
};
const ItemCard = (props: ItemCardProps) => {
  return (
    <li
      class={cn(
        styles.card,
        "bg-gradient-to-br from-primary/20 to-secondary/20 shadow border border-base-300"
      )}
    >
      <div
        class={cn(
          styles.main,
          "size-full flex flex-col gap-2 text-lg font-bold justify-center items-center"
        )}
      >
        <img src={props.data.icon} alt="icon" class="h-1/3" />
        <div>{props.data.title}</div>
      </div>
      <div class={cn(styles.content, "bg-base-100")}>
        <div class="text-lg font-bold flex justify-between">
          <div>{props.data.title}</div>
          <a href={props.data.url} target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-right"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
        <p class={cn("mt-2 text-justify text-sm text-base-content/50")}>
          {props.data.description}
        </p>
      </div>
    </li>
  );
};
export default ItemCard;
