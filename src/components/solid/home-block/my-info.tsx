import { Avatar } from "@ark-ui/solid/avatar";
const MyInfo = () => {
  return (
    <div class="p-6 bg-white col-span-2 rounded-3xl hover:shadow-lg transition-shadow duration-400 flex flex-col gap-2">
      <div>
        <Avatar.Root class="size-12 rounded-full bg-slate-100">
          <Avatar.Fallback>Avatar</Avatar.Fallback>
          <Avatar.Image
            class="rounded-full"
            src="https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=George"
            alt="avatar"
          />
        </Avatar.Root>
      </div>
      <div class="text-sm flex-1">
        大家好，我是<span class="text-lg mx-2 font-bold">银永鑫</span>
        是一名前端开发者。主要技术栈是React、Vue、NestJS, 我热爱技术，喜欢探索。
      </div>
      <div class="flex justify-end gap-2">
        <button class="btn btn-sm btn-circle ">
          <img
            src="/simpleicons/light/github.svg"
            alt="github"
            class="size-4"
          />
        </button>
        <button class="btn btn-sm btn-circle ">
          <img
            src="/simpleicons/light/gitee.svg"
            alt="gitee"
            class="size-4"
          />
        </button>
      </div>
    </div>
  );
};
export default MyInfo;
