import Link from "next/link";
import { ReactNode } from "react";
import { FootPrintIcon } from "./FootPrintIcon";
import { DirectionLiteral } from "./type";

type Props = {
  href: string;
  children: ReactNode;
  direction?: DirectionLiteral;
  alt: string;
  className?: string;
};

export const FootPrintLink = ({
  href,
  children,
  alt,
  direction = "right",
  className,
}: Props) => {
  return (
    <Link href={href} className={`footPrintLink ${className}`}>
      {children}
      <FootPrintIcon alt={alt} direction={direction} />
    </Link>
  );
};
