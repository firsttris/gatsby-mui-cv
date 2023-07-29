import { Grid, Typography } from "@mui/material";
import { Chips } from "./chips";

interface SkillGridProps {
  title: string;
  skills: string;
}

export const SkillGrid = ({ skills, title }: SkillGridProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3} mt="5px">
        <Typography variant="body1">{title}</Typography>
      </Grid>
      <Grid item xs={9}>
        <Chips skills={skills} />
      </Grid>
    </Grid>
  );
};
