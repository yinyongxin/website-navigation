import { Avatar } from "@ark-ui/solid/avatar";

const MyInfo = () => {
  return (
    <div class="p-6 bg-white col-span-2 rounded-3xl hover:shadow-lg transition-shadow duration-400">
      <div>
        <Avatar.Root class="size-12 rounded-full bg-slate-100">
          <Avatar.Fallback>Avatar</Avatar.Fallback>
          <Avatar.Image src="https://i.pravatar.cc/300" alt="avatar" />
        </Avatar.Root>
      </div>
      <div class="mt-2 text-sm">
        大家好，我是<span class="text-lg mx-2 font-bold">银永鑫</span>是一名前端开发者。主要技术栈是React、Vue、NestJS进行开发，擅长构建高效、可维护的前端应用和后端服务。我热爱技术，喜欢探索新工具和框架，致力于通过代码解决实际问题
      </div>
    </div>
  );
};
export default MyInfo;
