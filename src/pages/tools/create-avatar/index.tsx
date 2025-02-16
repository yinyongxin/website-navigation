import { createMemo, createSignal, For, onMount, Show } from "solid-js";
import { createStore } from "solid-js/store";
import {
	createAvatar,
	schema,
	type Result,
	type Options,
} from "@dicebear/core";
import { micah } from "@dicebear/collection";
import { toPng, type Avatar } from "@dicebear/converter";
import { downloadImage } from "../../../utils/download";
import { Dialog } from "@ark-ui/solid";
import { Portal } from "solid-js/web";
import { AvatarDefaultOptions } from "../../../common";
import { cn } from "../../../utils";

const defaultOptions = {
	...schema.properties,
	...micah.schema.properties,
};
console.log("schema.properties", schema.properties);

export default () => {
	const [avatar, setAvatar] = createSignal<Result>();
	const [open, setOpen] = createSignal(false);
	const [options, setOptions] =
		createStore<Partial<micah.Options & Options>>(AvatarDefaultOptions);
	//
	onMount(() => {
		randomAvatar();
	});

	const randomAvatar = () => {
		const avatar = createAvatar(micah, {
			seed: Math.random().toString(),
			...options,
			//... other options
		});
		setAvatar(avatar);
	};
	const [avatarList, setAvatarList] = createSignal<Result[]>([]);

	const createAvatarList = () => {
		const newAvatarList = Array.from({ length: 18 }, (_, index) => {
			const avatar = createAvatar(micah, {
				seed: Math.random().toString(),
				...options,
				//... other options
			});
			return avatar;
		});
		setAvatarList(newAvatarList);
	};

	const download = async (value: Avatar) => {
		if (!avatar()) {
			return;
		}
		try {
			// 将 avatar() 转换为 PNG 的 ArrayBuffer
			const pngData = await toPng(value).toArrayBuffer();
			// 调用下载函数
			downloadImage(pngData as ArrayBuffer, "avatar.png");
		} catch (error) {
			console.error("图片下载失败:", error);
		}
	};
	return (
		<div
			class="h-svh relative overflow-hidden"
			style={{
				"background-color": avatar()?.toJson()?.extra
					?.primaryBackgroundColor as string,
			}}
		>
			<div class="h-full flex flex-col py-6 ">
				<div class="flex-1 h-full grid justify-center content-center gap-8">
					<div class="size-50 md:size-60 xl:size-70 rounded-2xl border-4 md:border-6 xl:border-8 border-base-100 shadow overflow-hidden justify-self-center">
						<Show
							when={avatar()}
							fallback={<div class="skeleton size-full"></div>}
						>
							<img class="size-full" src={avatar()?.toDataUri()} alt="" />
						</Show>
					</div>
					<div class="flex space-x-4">
						<button
							class="btn btn-neutral md:btn-lg"
							onClick={() => {
								randomAvatar();
							}}
						>
							随机生成
						</button>
						<button
							class="btn btn-neutral md:btn-lg"
							onClick={async () => {
								download(avatar() as Avatar);
							}}
						>
							下载头像
						</button>

						<Dialog.Root open={open()}>
							<Dialog.Trigger
								class="btn btn-neutral md:btn-lg"
								onClick={() => {
									setOpen(true);
									createAvatarList();
								}}
							>
								批量生成
							</Dialog.Trigger>
							<Portal>
								<Dialog.Backdrop class="absolute inset-0 bg-base-content/50" />
								<Dialog.Positioner class="absolute inset-0 p-6 flex justify-center items-center">
									<Dialog.Content class="bg-base-100 rounded-2xl shadow-lg w-full sm:w-3/5 max-h-4/5 overflow-hidden flex flex-col">
										<div class="flex justify-between items-center px-6 py-4 shadow">
											<Dialog.Title class="font-bold">
												已为你自动生成头像
											</Dialog.Title>
											<div class="flex space-x-2 items-center">
												<div
													class="btn btn-sm btn-primary btn-soft"
													onClick={() => {
														createAvatarList();
													}}
												>
													换一批
												</div>
												<Dialog.CloseTrigger
													class="cursor-pointer"
													onClick={() => {
														setOpen(false);
													}}
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
														class="lucide lucide-circle-x"
													>
														<circle cx="12" cy="12" r="10" />
														<path d="m15 9-6 6" />
														<path d="m9 9 6 6" />
													</svg>
												</Dialog.CloseTrigger>
											</div>
										</div>
										<Dialog.Description class="p-6 overflow-auto flex-1">
											<div class="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
												<For each={avatarList()}>
													{(item) => {
														return (
															<div class="size-full rounded-2xl border-4 border-base-100 shadow overflow-hidden group relative">
																<img
																	class="size-full"
																	src={item.toDataUri()}
																	alt="avatar"
																/>
																<div class="absolute left-0 right-0 bottom-6 lg:bottom-4 xl:bottom-2 flex justify-center items-center invisible group-hover:visible">
																	<div
																		class="btn btn-sm glass "
																		onClick={() => {
																			download(item as Avatar);
																		}}
																	>
																		下载图片
																	</div>
																</div>
															</div>
														);
													}}
												</For>
											</div>
										</Dialog.Description>
									</Dialog.Content>
								</Dialog.Positioner>
							</Portal>
						</Dialog.Root>
					</div>
				</div>
				<div class="flex justify-center font-bold">
					<a class="hover:text-primary cursor-pointer" href="/">
						银永鑫
					</a>
					<div class="divider divider-horizontal py-1 mx-1"></div>
					<a
						class="hover:text-primary cursor-pointer"
						href="https://www.dicebear.com/"
						target="_blank"
					>
						Dicebear
					</a>
				</div>
			</div>
			<div class="absolute top-0 bottom-0 right-0 w-70 has-[:checked]:translate-x-full duration-300">
				<label
					class={cn(
						"absolute w-6 h-12 -left-6 top-1/2 -translate-y-1/2 flex items-center border-l border-y",
						"bg-base-300 rounded-l-lg cursor-pointer duration-100 hover:scale-110 active:scale-90"
					)}
				>
					<input type="checkbox" class="hidden" checked></input>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-ellipsis-vertical w-full"
					>
						<circle cx="12" cy="12" r="1" />
						<circle cx="12" cy="5" r="1" />
						<circle cx="12" cy="19" r="1" />
					</svg>
				</label>
				<ul
					class={cn(
						"p-6 h-full overflow-auto",
						"bg-base-200",
						"shadow-lg sm:shadow-none"
					)}
				>
					<li class="flex flex-col gap-4">
						<div class="font-bold">头像形状</div>
						<div class="flex gap-4">
							<div class="rounded-full size-10 bg-primary-content"></div>
							<div class="rounded-lg size-10 bg-primary-content"></div>
							<div class="size-10 bg-primary-content"></div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};
