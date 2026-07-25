import { Rating, Typography } from "@mui/material";

type Props = {
  name: string;
  value: number;
};

    const labels = [
      "None",
      "Worked With",
      "Selective Knowledge",
      "Practical Expertise",
      "Expert",
      "Exceptional",
    ];

export const StarRating = ({ name, value }: Props) => {
  
  return (
    <div className="skillItem">
      <Typography>{name}</Typography>
      <Rating
        className="starRating"
        name={`skill-${name}`}
        value={value}
        readOnly
        sx={{ color: "black" }}
         
      />
    </div>
  );
};
