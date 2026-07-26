import { Box, Rating, Tooltip, Typography } from "@mui/material";

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
  const valueLabel = labels[value] ?? `Rating ${value}`;

  return (
    <div className="skillItem">
      <Typography>{name}</Typography>
      <Tooltip title={<RatingToolTipContent />} arrow>
        <span>
          <Rating
            className="starRating"
            name={`skill-${name}`}
            value={value}
            readOnly
            sx={{ color: "black" }}
            aria-label={valueLabel}
          />
        </span>
      </Tooltip>
    </div>
  );
};

const RatingToolTipContent = () => {
  return <Box component="div" sx={{ display: "grid", gap: 0.5, p: 1, minWidth: 160 }}>
    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
      Rating scale
    </Typography>
    {labels.map((label, index) => (
      <Box
        key={label}
        sx={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gap: 1,
          alignItems: "center",
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 700 }}>
          {index}
        </Typography>
        <Typography variant="body2">{label}</Typography>
      </Box>
    ))}
  </Box>
}