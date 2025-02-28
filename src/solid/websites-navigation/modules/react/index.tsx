import { For } from "solid-js";

const ReactContnet = () => {
  return (
    <div class="">
      <div class="rounded-2xl glass p-4">
        <div class="text-2xl font-bold">Recat</div>
        <div class="text-base-content text-sm mt-2">
          React 是一个由 Facebook 开发和维护的开源 JavaScript
          库，用于构建用户界面，尤其是单页面应用（SPA）。它允许开发者通过组件的方式来组织和构建前端界面，使得开发过程更加高效和模块化。
        </div>
      </div>
      <div class="text-xl font-bold mt-4">UI</div>
      <div class="h-2 bg-gradient-to-r from-primary/20 to-transparent"></div>
      <ul
        class="w-full grid gap-6"
        style={{
          "grid-template-columns": "repeat(auto-fill, minmax(240px, 1fr))",
        }}
      ></ul>
    </div>
  );
};

export default ReactContnet;
