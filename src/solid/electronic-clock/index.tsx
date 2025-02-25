import { createSignal, onMount, onCleanup } from "solid-js";
import ElectronicBumber from "./electronic-number";
import dayjs from "dayjs";
type ElectronicClockProps = {
	timeType?: "AM" | "PM";
};
const ElectronicClock = (props: ElectronicClockProps) => {
	const [second, setSecond] = createSignal([0, 0]);
	const [minute, setMinute] = createSignal([0, 0]);
	const [hour, setHour] = createSignal([0, 0]);
	onMount(() => {
		let timerId: number;

		const updateTime = () => {
			try {
				if (props?.timeType !== "PM" && props?.timeType !== "AM") {
					console.warn("Invalid timeType prop. Using default 'AM'.");
					props.timeType = "AM";
				}

				const currentTime = dayjs().format(
					props?.timeType === "PM" ? "HH:mm:ss" : "hh:mm:ss"
				);
				const [h, m, s] = currentTime.split(":");

				setHour(h.split("").map(Number));
				setMinute(m.split("").map(Number));
				setSecond(s.split("").map(Number));
			} catch (error) {
				console.error("Error updating time:", error);
			}
		};

		timerId = setInterval(updateTime, 1000);

		onCleanup(() => {
			clearInterval(timerId);
		});

		// 立即更新一次时间
		updateTime();
	});
	return (
		<div class="size-full grid grid-cols-[2fr_1fr_2fr_1fr_2fr]">
			<div class="grid grid-cols-2 gap-4">
				<ElectronicBumber value={hour()[0]} />
				<ElectronicBumber value={hour()[1]} />
			</div>
			<div class="flex flex-col justify-around items-center">
				<div class="bg-base-content w-1/5 aspect-square"></div>
				<div class="bg-base-content w-1/5 aspect-square"></div>
			</div>
			<div class="grid grid-cols-2 gap-4">
				<ElectronicBumber value={minute()[0]} />
				<ElectronicBumber value={minute()[1]} />
			</div>
			<div class="flex flex-col justify-around items-center">
				<div class="bg-base-content w-1/5 aspect-square"></div>
				<div class="bg-base-content w-1/5 aspect-square"></div>
			</div>
			<div class="grid grid-cols-2 gap-4">
				<ElectronicBumber value={second()[0]} />
				<ElectronicBumber value={second()[1]} />
			</div>
		</div>
	);
};

export default ElectronicClock;
