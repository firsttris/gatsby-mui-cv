import { Box, Chip } from "@mui/material";

interface Props {
  skills: string;
  mb: string;
  mt: string;
}

export const Chips: React.FC<Props> = ({ skills, mb, mt }) => {
  const labelsAsArray = skills ? skills.split(",") : [];
  return (
    <Box sx={{ mb, mt }}>
      {labelsAsArray.map((label, index) => (
        <Chip key={index} label={label} sx={{ m: "2px" }} />
      ))}
    </Box>
  );
};
