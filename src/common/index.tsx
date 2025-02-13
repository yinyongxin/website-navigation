import { type JSX } from "solid-js";
import MyInfo from "../components/solid/home-block/my-info";
import Theme from "../components/solid/home-block/theme";
import AvatarBlock from "../components/solid/home-block/avatar-block";
import TestBlock from "../components/solid/home-block/test-block";
import SearchBlock from "../components/solid/home-block/search-block";
export const TabsObj = {
  all: {
    title: "全部",
  },

  tools: {
    title: "工具",
  },
  projects: {
    title: "项目",
  },
  about: {
    title: "关于我",
  },
} as const;

export type TabsKey = keyof typeof TabsObj;

export const BlockList: {
  key: TabsKey;
  getContent: () => JSX.Element;
}[] = [
  {
    key: "about",
    getContent: () => <MyInfo />,
  },
  {
    key: "tools",
    getContent: () => <AvatarBlock />,
  },
  {
    key: "tools",
    getContent: () => <Theme />,
  },
  {
    key: "tools",
    getContent: () => <SearchBlock />,
  },
  {
    key: "projects",
    getContent: () => <TestBlock />,
  },
];
