import type { JSX } from "solid-js";

const Content = (props: { children?: JSX.Element }) => {
  return <div>{props.children}</div>;
};

export default Content;
