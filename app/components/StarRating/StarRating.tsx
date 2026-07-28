"use client";

import { Rating, Typography } from "@mui/material";
import { RatingToolTipLabels } from "./RatingToolTipContent";

type Props = {
  name: string;
  value: number;
};

export const StarRating = ({ name, value }: Props) => {
  const valueLabel = RatingToolTipLabels[value] ?? `Rating ${value}`;

  return (
    <div className="skillItem">
      <Typography>{name}</Typography>

      <span>
        <Rating
          className="starRating"
          name={`skill-${name}`}
          value={value}
          readOnly
          sx={{ color: "black" }}
          aria-label={valueLabel}
        />
        <Typography
          component="span"
          className="starRatingNumber"
          aria-label={valueLabel}
        >
          {value}/5
        </Typography>
      </span>
    </div>
  );
};
