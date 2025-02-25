import { cn } from "../../utils";
import { createSignal, For, Show } from "solid-js";
type CalculatorProps = {
  showFullScreen?: boolean;
};
const Calculator = (props: CalculatorProps) => {
  const [calculationHistory, setCalculationHistory] = createSignal<
    {
      expression: string[];
      result: string | number;
    }[]
  >([]);

  const [currentInput, setCurrentInput] = createSignal<string[]>([]);

  const addValue = (value: string) => {
    const newValue = [...currentInput()];
    const inputLength = currentInput().length;
    const lastValue = newValue[inputLength - 1];
    if (value === ".") {
      if (
        currentInput().length === 0 ||
        isNaN(Number(lastValue)) ||
        lastValue.includes(".")
      ) {
        return;
      }
    }
    if (!isNaN(Number(lastValue))) {
      newValue[inputLength - 1] += value;
    } else {
      newValue.push(value);
    }
    setCurrentInput(newValue);
  };

  const addCalculationMethod = (value: string) => {
    const newValue = [...currentInput()];
    const inputLength = currentInput().length;
    const lastValue = newValue[inputLength - 1];
    if (!isNaN(Number(lastValue))) {
      setCurrentInput([...currentInput(), value]);
    }
  };

  const calculate = () => {
    const newExpression = currentInput().map((item) => {
      if (item === "multiply") {
        return "*";
      } else if (item === "divide") {
        return "/";
      } else if (item === "subtract") {
        return "-";
      } else if (item === "add") {
        return "+";
      } else {
        return item;
      }
    });
    try {
      // 使用 eval() 计算表达式
      const result = eval(newExpression.join(""));
      const resultAsNumber: number = parseFloat(result.toFixed(2));
      setCalculationHistory([
        ...calculationHistory(),
        { expression: currentInput(), result: resultAsNumber },
      ]);
      setCurrentInput([]);
    } catch (error) {
      return "无效的表达式";
    }
  };

  const expressionShow = (expression: string[]) => {
    const res = expression.map((item) => {
      if (item === "multiply") {
        return (
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
            class="size-4"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        );
      } else if (item === "divide") {
        return (
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
            class="size-4"
          >
            <circle cx="12" cy="6" r="1" />
            <line x1="5" x2="19" y1="12" y2="12" />
            <circle cx="12" cy="18" r="1" />
          </svg>
        );
      } else if (item === "subtract") {
        return (
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
            class="size-4"
          >
            <path d="M5 12h14" />
          </svg>
        );
      } else if (item === "add") {
        return (
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
            class="size-4"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        );
      } else {
        return item;
      }
    });
    return <div class="flex items-center">{res}</div>;
  };

  const deleteLast = () => {
    const newValue = [...currentInput()];
    const inputLength = currentInput().length;
    const lastValue = newValue[inputLength - 1];
    if (!isNaN(Number(lastValue))) {
      newValue[inputLength - 1] = newValue[inputLength - 1].slice(0, -1);
    } else {
      newValue.pop();
    }
    setCurrentInput(newValue);
  };

  const setValuePercentage = () => {
    const newValue = [...currentInput()];
    const inputLength = currentInput().length;
    const lastValue = newValue[inputLength - 1];
    if (!isNaN(Number(lastValue))) {
      newValue[inputLength - 1] = (parseFloat(lastValue) / 100).toString();
      setCurrentInput(newValue);
    }
  };

  return (
    <div class="size-full flex flex-col flex-1 gap-2">
      <div class="grow flex flex-col justify-end items-end text-lg bg-base-200 rounded-t-3xl p-2">
        <div class="grow overflow-auto w-full">
          <For each={calculationHistory()}>
            {(item) => {
              return (
                <div class="flex gap-1 items-center justify-end">
                  {expressionShow(item.expression)}
                  <div>=</div>
                  <div>{item.result}</div>
                </div>
              );
            }}
          </For>
        </div>
        <div class="w-full flex justify-end">
          {expressionShow(currentInput())}
        </div>
      </div>
      <div
        class={cn(
          "flex-none grid gap-2 grid-cols-4 grid-rows-5",
          "*:active:scale-95 *:cursor-pointer *:aspect-square *:bg-base-300 *:rounded-lg *:flex *:justify-center *:items-center"
        )}
      >
        <div
          class="bg-error/20! text-error! cursor-pointer text-lg font-bold"
          onClick={() => {
            setCurrentInput([]);
            setCalculationHistory([]);
          }}
        >
          AC
        </div>
        <div
          class="bg-secondary-content! text-secondary"
          onClick={() => {
            deleteLast();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-1/2"
          >
            <path d="M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" />
            <path d="m12 9 6 6" />
            <path d="m18 9-6 6" />
          </svg>
        </div>
        <div
          class="bg-secondary-content! text-secondary"
          onClick={() => {
            setValuePercentage();
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
            class="size-1/2"
          >
            <line x1="19" x2="5" y1="5" y2="19" />
            <circle cx="6.5" cy="6.5" r="2.5" />
            <circle cx="17.5" cy="17.5" r="2.5" />
          </svg>
        </div>
        <div
          class="bg-secondary-content! text-secondary"
          onClick={() => {
            addCalculationMethod("divide");
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
            class="size-1/2"
          >
            <circle cx="12" cy="6" r="1" />
            <line x1="5" x2="19" y1="12" y2="12" />
            <circle cx="12" cy="18" r="1" />
          </svg>
        </div>
        <div
          class=""
          onClick={() => {
            addValue("7");
          }}
        >
          7
        </div>
        <div
          class=""
          onClick={() => {
            addValue("8");
          }}
        >
          8
        </div>
        <div
          class=""
          onClick={() => {
            addValue("9");
          }}
        >
          9
        </div>
        <div
          class="bg-secondary-content! text-secondary"
          onClick={() => {
            addCalculationMethod("multiply");
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
            class="size-1/2"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </div>
        <div
          class=""
          onClick={() => {
            addValue("4");
          }}
        >
          4
        </div>
        <div
          class=""
          onClick={() => {
            addValue("5");
          }}
        >
          5
        </div>
        <div
          class=""
          onClick={() => {
            addValue("6");
          }}
        >
          6
        </div>
        <div
          class="bg-secondary-content! text-secondary"
          onClick={() => {
            addCalculationMethod("subtract");
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
            class="size-1/2"
          >
            <path d="M5 12h14" />
          </svg>
        </div>
        <div
          class=""
          onClick={() => {
            addValue("1");
          }}
        >
          1
        </div>
        <div
          class=""
          onClick={() => {
            addValue("2");
          }}
        >
          2
        </div>
        <div
          class=""
          onClick={() => {
            addValue("3");
          }}
        >
          3
        </div>
        <div
          class="bg-secondary-content! text-secondary"
          onClick={() => {
            addCalculationMethod("add");
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
            class="size-1/2"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </div>
        <Show when={props?.showFullScreen === true}>
          <div class={cn("bg-primary-content! text-primary rounded-bl-2xl!")}>
            <a
              href="/tools/calculator"
              class="size-full flex justify-center items-center"
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
                class="size-1/2 "
              >
                <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
                <path d="M3 16v3a2 2 0 0 0 2 2h3" />
                <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
              </svg>
            </a>
          </div>
        </Show>
        <div
          class=""
          onClick={() => {
            addValue("0");
          }}
        >
          0
        </div>
        <div
          class=""
          onClick={() => {
            addValue(".");
          }}
        >
          .
        </div>
        <div
          class={cn("bg-primary-content! text-primary rounded-br-2xl!", {
            "col-span-2 aspect-auto!":
              props?.showFullScreen === false,
          })}
          onClick={() => {
            calculate();
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
            class="w-1/2"
          >
            <line x1="5" x2="19" y1="9" y2="9" />
            <line x1="5" x2="19" y1="15" y2="15" />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
