import NavigationData from "@/data/navigation";
import { NavigationItem } from "@/data/types";
import Link from "next/link";
import { Fragment } from "react/jsx-runtime";
import { FootPrintIcon } from "./FootPrintIcon";

export const NavigationLink = ({ href, name }: NavigationItem) => {
  return (
    <li key={href} className="navigationLink">
      <Link href={href}>
        {name} <FootPrintIcon direction="right" alt={name} />
      </Link>
    </li>
  );
};
