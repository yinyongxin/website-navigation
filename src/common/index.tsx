import { TabsEnum } from "../enums/index";
import MyInfo from "../components/solid/home-block/my-info";
import Theme from "../components/solid/home-block/theme";
import AvatarBlock from "../components/solid/home-block/avatar-block";
import TestBlock from "../components/solid/home-block/test-block";
import SearchBlock from "../components/solid/home-block/search-block";

export const BlockList: {
  //   tags: TabsEnum[];
  //   getContent: () => JSX.Element;
} = [
  {
    tags: [TabsEnum.About],
    getContent: () => <MyInfo />,
  },
  {
    tags: [TabsEnum.Tools],
    getContent: () => <AvatarBlock />,
  },
  {
    tags: [TabsEnum.Tools],
    getContent: () => <Theme />,
  },
  {
    tags: [TabsEnum.Tools],
    getContent: () => <SearchBlock />,
  },
  {
    tags: [TabsEnum.Projects],
    getContent: () => <TestBlock />,
  },
];
