import NavigationData from "@/data/navigation";
import { Fragment } from "react/jsx-runtime";
import { NavigationLink } from "./NavigationLink";

export const Navigation = () => {
  return (
    <div className="navigation">
      <h2>Contents</h2>
      <nav>
        <ul>
          {NavigationData.map((item) => {
            if ("paths" in item) {
              return (
                <Fragment key={item.parentPath.href}>
                  <h3>
                    <NavigationLink
                      name={item.parentPath.name}
                      href={item.parentPath.href}
                    />
                  </h3>
                  <ul>
                    {item.paths.map((subItem) => (
                      <NavigationLink
                        key={subItem.href}
                        href={subItem.href}
                        name={subItem.name}
                      />
                    ))}
                  </ul>
                </Fragment>
              );
            }
            return (
              <NavigationLink
                key={item.href}
                href={item.href}
                name={item.name}
              />
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
