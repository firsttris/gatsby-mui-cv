import { Box, Typography } from "@mui/material";
import { Chips } from "./chips";

interface SkillGridProps {
  title: string;
  skills: string;
}

export const SkillGrid = ({ skills, title }: SkillGridProps) => {
  return (
    <Box sx={{ display: "flex", alignItems: "top" }}>
      <Box sx={{ mt: "2px", width: "140px" }}>
        <Typography variant="body1" sx={{ fontSize: "12px" }}>
          {title}
        </Typography>
      </Box>

      <Chips skills={skills} />
    </Box>
  );
};
