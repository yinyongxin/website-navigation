import { Avatar } from "@ark-ui/solid/avatar";
const MyInfo = () => {
  return (
    <div class="p-6 bg-white col-span-2 rounded-3xl hover:shadow-lg transition-shadow duration-400 grid grid-rows-[auto_1fr] gap-2 overflow-hidden">
      <div class="flex justify-between items-center">
        <Avatar.Root class="size-12 rounded-full bg-slate-100">
          <Avatar.Fallback>Avatar</Avatar.Fallback>
          <Avatar.Image
            class="rounded-full"
            src="https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Eden"
            alt="avatar"
          />
        </Avatar.Root>
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
      <div class="text-sm"> 
        大家好，我是<span class="text-lg mx-2 font-bold">银永鑫</span>
        是一名前端开发者。主要技术栈是React、Vue、NestJS。
      </div>
      
    </div>
  );
};
export default MyInfo;
