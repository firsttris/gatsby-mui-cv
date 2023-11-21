import { Box, Typography } from "@mui/material";
import { Chips, Skill } from "./ChipWithIcon";


interface SkillGridProps {
  title: string;
  skills: Skill[];
}

export const SkillGrid = ({ skills, title }: SkillGridProps) => {
  return (
    <Box sx={{ display: "flex", alignItems: "top" }}>
      <Box sx={{ mt: "2px", minWidth: "100px" }}>
        <Typography variant="body1" sx={{ fontSize: "12px" }}>
          {title}
        </Typography>
      </Box>
      <Box sx={{ maxWidth: "500px" }}>
        <Chips skills={skills} />
      </Box>
    </Box>
  );
};
