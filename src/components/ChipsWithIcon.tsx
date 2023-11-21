import { Icon } from "@iconify-icon/react";
import { Box, Chip, Link, Typography } from "@mui/material";
import { styled } from "@mui/system";

export interface Skill {
  name: string
  icon: string
  website: string
}


interface Props {
  skills: Skill[];
}

export const ChipsWithIcon: React.FC<Props> = ({ skills, ...otherProps }) => {

  return (
    <Box {...otherProps}>
      {skills.map((skill, index) => (
        <Link key={index} href={skill.website} target="_blank" rel="noopener">
          <Chip
            onClick={() => console.log(skill.website)}

            label={
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                <Icon icon={skill.icon} style={{ fontSize: '16px' }} />
                <Typography>{skill.name}</Typography>
              </Box>}
            sx={{
              cursor: 'pointer',
              mx: "2px",
              my: "3px",
              height: "20px",
              backgroundColor: "white",
              border: "1px solid black",
              borderRadius: "6px",
              '& .MuiChip-label': {
                px: '8px'
              }
            }}
          />
        </Link>

      ))}
    </Box>
  );
};

export const ChipsWithIconAndMargin = styled(ChipsWithIcon)({
  marginTop: "10px",
  marginBottom: '30px'
});