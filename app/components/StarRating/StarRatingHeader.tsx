import { Info } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { title } from "process";
import { RatingToolTipContent } from "./RatingToolTipContent";

type Props = {
  title: string;
};

export const StarRatingHeader = ({ title }: Props) => {
  return (
    <Tooltip title={<RatingToolTipContent />}>
      <h2>
        {title} <Info />
      </h2>
    </Tooltip>
  );
};
