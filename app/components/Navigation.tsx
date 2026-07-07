import NavigationData from "@/data/navigation";
import { NavigationItem } from "@/data/types";
import Link from "next/link";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        {NavigationData.map((item) => {
          if ("paths" in item) {
            return (
              <li key={item.parentPath.path}>
                <a href={item.parentPath.path}>{item.parentPath.name}</a>
                <ul>
                  {item.paths.map((subItem) => (
                    <NavigationLink
                      key={subItem.path}
                      path={subItem.path}
                      name={subItem.name}
                    />
                  ))}
                </ul>
              </li>
            );
          }
          return (
            <NavigationLink key={item.path} path={item.path} name={item.name} />
          );
        })}
      </ul>
    </nav>
  );
};

const NavigationLink = ({ path, name }: NavigationItem) => {
  return (
    <li key={path}>
      <Link href={path}>{name}</Link>
    </li>
  );
};
