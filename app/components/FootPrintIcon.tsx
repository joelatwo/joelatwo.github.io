import Image from "next/image";
import footsteps from "@/app/assets/footsteps.png";
import { DirectionLiteral } from "./type";

type Props = {
  direction: DirectionLiteral;
  alt: string;
};

export const FootPrintIcon = ({ direction, alt }: Props) => {
  return (
    <Image className={`footstepsIcon ${direction}`} alt={alt} src={footsteps} />
  );
};
