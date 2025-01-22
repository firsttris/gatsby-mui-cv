import { Icon } from "@iconify-icon/react";
import styled from "@emotion/styled";

export interface Skill {
  name: string;
  icon: string;
  website: string;
}

interface Props {
  skills: Skill[];
}

const StyledBox = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
});

const StyledLink = styled.a({
  textDecoration: 'none',
  color: 'black',
});

const StyledChip = styled.div({
  cursor: 'pointer',
  margin: '2px 3px',
  height: '20px',
  backgroundColor: 'white',
  border: '1px solid black',
  borderRadius: '6px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '5px',
  padding: '0 8px',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    color: 'inherit',
  },
});

const StyledTypography = styled.div({
  fontSize: '16px',
  margin: 0,
  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  fontWeight: 400,
  lineHeight: 1.5,
  letterSpacing: '0.00938em',
});

export const ChipsWithIcon: React.FC<Props> = ({ skills, ...otherProps }) => {
  return (
    <StyledBox {...otherProps}>
      {skills.map((skill, index) => (
        <StyledLink key={index} href={skill.website} target="_blank" rel="noopener">
          <StyledChip onClick={() => console.log(skill.website)}>
            <Icon icon={skill.icon} style={{ fontSize: '16px' }} />
            <StyledTypography>{skill.name}</StyledTypography>
          </StyledChip>
        </StyledLink>
      ))}
    </StyledBox>
  );
};

export const ChipsWithIconAndMargin = styled(ChipsWithIcon)({
  marginTop: '10px',
  marginBottom: '30px',
});