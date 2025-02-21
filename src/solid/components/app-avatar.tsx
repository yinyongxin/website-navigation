import { Avatar } from "@ark-ui/solid";
import { cn } from "../../utils";
type AppAvatarProps = {
  src: string;
  class: string;
  circle?: boolean;
};
const AppAvatar = (props: AppAvatarProps) => {
  return (
    <Avatar.Root
      class={cn("size-12 rounded-xl bg-slate-100", props.class, {
        "rounded-full": props.circle,
      })}
    >
      <Avatar.Fallback>
        <div
          class={cn(
            "size-full grid place-content-center rounded-xl",
            props.class,
            {
              "rounded-full": props.circle,
            }
          )}
        >
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
            class="lucide lucide-image"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
        </div>
      </Avatar.Fallback>
      <Avatar.Image
        class={cn("rounded-xl", props.class, {
          "rounded-full": props.circle,
        })}
        src={props.src}
        alt="avatar"
      />
    </Avatar.Root>
  );
};
export default AppAvatar;
