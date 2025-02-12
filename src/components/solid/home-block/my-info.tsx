import { Avatar } from "@ark-ui/solid";
import Base from "./base";
import AppAvatar from "../components/app-avatar";
const MyInfo = () => {
	return (
		<Base class="p-6 col-span-2 grid grid-rows-[auto_1fr] gap-2">
			<div class="flex justify-between items-center">
				<AppAvatar
					circle
					class="size-12 "
					src="https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Eden"
				/>
				<div class="flex justify-end gap-2">
					<button class="btn btn-sm btn-circle">
						<img
							src="/simpleicons/light/github.svg"
							alt="github"
							class="size-4"
						/>
					</button>
					<button class="btn btn-sm btn-circle">
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
		</Base>
	);
};
export default MyInfo;
