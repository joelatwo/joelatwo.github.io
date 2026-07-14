import NavigationData from "@/data/navigation";
import { NavigationItem } from "@/data/types";
import Link from "next/link";

export const Navigation = () => {
  return (
    <div>
      <h2>Contents</h2>
      <nav>
        <ul>
          {NavigationData.map((item) => {
            if ("paths" in item) {
              return (
                <li key={item.parentPath.path}>
                  <h3>
                    <a href={item.parentPath.path}>{item.parentPath.name}</a>
                  </h3>
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
              <NavigationLink
                key={item.path}
                path={item.path}
                name={item.name}
              />
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

const NavigationLink = ({ path, name }: NavigationItem) => {
  return (
    <li key={path}>
      <Link href={path}>{name}</Link>
    </li>
  );
};
