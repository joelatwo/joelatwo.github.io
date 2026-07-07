export type NavigationItem = {
  path: string;
  name: string;
};

export type ListNavigationItem = {
  paths: NavigationItem[];
  title: string;
  parentPath: NavigationItem;
};
