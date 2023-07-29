import { Box, Chip } from "@mui/material";

interface Props {
  skills: string;
}

export const Chips: React.FC<Props> = ({ skills }) => {
  const labelsAsArray = skills ? skills.split(",") : [];
  return (
    <Box>
      {labelsAsArray.map((label, index) => (
        <Chip key={index} label={label} sx={{ m: "2px" }} />
      ))}
    </Box>
  );
};
