import NavigationData from "@/data/navigation";
import { NavigationItem } from "@/data/types";
import Image from "next/image";
import Link from "next/link";
import footsteps from "@/app/assets/footsteps.png";
import { Fragment } from "react/jsx-runtime";

export const Navigation = () => {
  return (
    <div className="navigation">
      <h2>Contents</h2>
      <nav>
        <ul>
          {NavigationData.map((item) => {
            if ("paths" in item) {
              return (
                <Fragment key={item.parentPath.path}>
                  <h3>
                    <NavigationLink
                      name={item.parentPath.name}
                      path={item.parentPath.path}
                    />
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
                </Fragment>
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
    <li key={path} className="navigationLink">
      <Link href={path}>
        {name}{" "}
        <Image className="footstepsIcon right" alt={name} src={footsteps} />
      </Link>
    </li>
  );
};
