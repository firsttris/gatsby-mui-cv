import { Box, Chip } from "@mui/material";

interface Props {
  skills: string | string[];
}

export const Chips: React.FC<Props> = ({ skills }) => {
  const skillsArray = Array.isArray(skills) ? skills : skills.split(",");
  return (
    <Box sx={{ mb: '30px', mt: '10px' }}>
      {skillsArray.map((label, index) => (
        <Chip
          key={index}
          label={label}
          sx={{
            mx: "2px",
            my: "3px",
            height: "20px",
            backgroundColor: "white",
            border: "1px solid black",
            borderRadius: "6px",
          }}
        />
      ))}
    </Box>
  );
};
