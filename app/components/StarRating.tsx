import { Rating, Typography } from "@mui/material";

type Props = {
  name: string;
  value: number;
};

export const StarRating = ({ name, value }: Props) => {
  return (
    <div className="skillItem">
      <Typography>{name}</Typography>
      <Rating name={`skill-${name}`} value={value} readOnly />
    </div>
  );
};
