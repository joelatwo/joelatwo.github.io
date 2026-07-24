export type NavigationItem = {
  href: string;
  name: string;
};

export type ListNavigationItem = {
  paths: NavigationItem[];
  title: string;
  parentPath: NavigationItem;
};
