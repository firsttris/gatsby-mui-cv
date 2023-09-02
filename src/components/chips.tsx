import { Box, Chip } from "@mui/material";

interface Props {
  skills: string;
  mb?: string;
  mt?: string;
}

export const Chips: React.FC<Props> = ({ skills, mb, mt }) => {
  const labelsAsArray = skills ? skills.split(",") : [];
  return (
    <Box sx={{ mb, mt }}>
      {labelsAsArray.map((label, index) => (
        <Chip
          key={index}
          label={label}
          sx={{
            mx: "2px",
            my: "3px",
            height: "22px",
            backgroundColor: "white",
            border: "1px solid black",
            borderRadius: "6px",
          }}
        />
      ))}
    </Box>
  );
};
