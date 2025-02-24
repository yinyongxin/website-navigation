import { cn } from "../../utils";
import { createSignal, For } from "solid-js";

const Calculator = () => {
  const [calculationHistory, setCalculationHistory] = createSignal<
    {
      expression: string;
      result: string;
    }[]
  >([]);
  const [currentInput, setCurrentInput] = createSignal([]);
  const numberButtonClick = (value) => {
    setCurrentInput([...currentInput(), value]);
  };
  function calculate(expression) {
    // 替换 × 为 *，替换 ÷ 为 /
    const newExpression = expression.map((item) => {
      if (item === "multiply") {
        return "*";
      } else if (item === "/") {
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
      console.log(result);
      return result;
    } catch (error) {
      return "无效的表达式";
    }
  }

  const expressionShow = (expression) => {
    const res = expression.map((item) => {
      if (item === "multiply") {
        return "*";
      } else if (item === "/") {
        return "/";
      } else if (item === "subtract") {
        return "-";
      } else if (item === "add") {
        return "+";
      } else {
        return item;
      }
    });
    return res;
  };

  return (
    <div class="flex flex-col flex-1 gap-2">
      <div class="grow flex flex-col justify-end items-end text-lg overflow-auto">
        <div class="grow">
          <For each={calculationHistory()}>
            {(item) => {
              return (
                <div class="flex gap-1 items-center justify-end">
                  <div>{expressionShow(item.expression)}</div>
                  <div>=</div>
                  <div>{item.result}</div>
                </div>
              );
            }}
          </For>
        </div>
        <div>{expressionShow(currentInput())}</div>
      </div>
      <div
        class={cn(
          "flex-none grid gap-2 grid-cols-4 grid-rows-5",
          "*:active:scale-95 *:cursor-pointer *:aspect-square *:bg-base-300 *:rounded-lg *:flex *:justify-center *:items-center"
        )}
      >
        <div
          class="bg-secondary-content! text-secondary"
          onClick={() => {
            setCurrentInput([]);
          }}
        >
          <button class="w-full h-full">AC</button>
        </div>
        <div
          class="bg-secondary-content! text-secondary"
          onClick={() => {
            let newValue = currentInput().slice(0, -1);
            setCurrentInput(newValue);
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
        <div class="bg-secondary-content! text-secondary">
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
            setCurrentInput(currentInput() + "divide");
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
            class="lucide lucide-divide"
          >
            <circle cx="12" cy="6" r="1" />
            <line x1="5" x2="19" y1="12" y2="12" />
            <circle cx="12" cy="18" r="1" />
          </svg>
        </div>
        <div
          class=""
          onClick={() => {
            numberButtonClick("7");
          }}
        >
          7
        </div>
        <div
          class=""
          onClick={() => {
            numberButtonClick("8");
          }}
        >
          8
        </div>
        <div
          class=""
          onClick={() => {
            numberButtonClick("9");
          }}
        >
          9
        </div>
        <div
          class="bg-secondary-content! text-secondary"
          onClick={() => {
            setCurrentInput([...currentInput(), "multiply"]);
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
            numberButtonClick("4");
          }}
        >
          4
        </div>
        <div
          class=""
          onClick={() => {
            numberButtonClick("5");
          }}
        >
          5
        </div>
        <div
          class=""
          onClick={() => {
            numberButtonClick("6");
          }}
        >
          6
        </div>
        <div
          class="bg-secondary-content! text-secondary"
          onClick={() => {
            setCurrentInput([...currentInput(), "subtract"]);
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
            numberButtonClick("1");
          }}
        >
          1
        </div>
        <div
          class=""
          onClick={() => {
            numberButtonClick("2");
          }}
        >
          2
        </div>
        <div
          class=""
          onClick={() => {
            numberButtonClick("3");
          }}
        >
          3
        </div>
        <div
          class="bg-secondary-content! text-secondary"
          onClick={() => {
            setCurrentInput([...currentInput(), "add"]);
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
        <div class="bg-primary-content! text-primary rounded-bl-2xl!">
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
        </div>
        <div class="">0</div>
        <div class="">.</div>
        <div
          class=" bg-primary-content! text-primary rounded-br-2xl!"
          onClick={() => {
            setCalculationHistory([
              ...calculationHistory(),
              { expression: currentInput(), result: calculate(currentInput()) },
            ]);
            setCurrentInput([]);
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
            <line x1="5" x2="19" y1="9" y2="9" />
            <line x1="5" x2="19" y1="15" y2="15" />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
