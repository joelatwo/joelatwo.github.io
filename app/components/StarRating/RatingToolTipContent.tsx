import { Box, Typography } from "@mui/material";

export const RatingToolTipLabels = [
  "None",
  "Worked With",
  "Selective Knowledge",
  "Practical Expertise",
  "Expert",
  "Exceptional",
];

export const RatingToolTipContent = () => {
  return (
    <Box
      component="div"
      sx={{ display: "grid", gap: 0.5, p: 1, minWidth: 160 }}
    >
      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
        Rating scale
      </Typography>
      {RatingToolTipLabels.map((label, index) => (
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
  );
};
