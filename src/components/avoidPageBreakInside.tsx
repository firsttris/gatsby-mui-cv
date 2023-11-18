import { styled } from "@mui/system";
import { Box } from "@mui/material";

const StyledBox = styled(Box)({
  "@media print": {
    pageBreakInside: "avoid",
  },
});

interface AvoidPageBreakInsideProps 
{
  children: React.ReactNode;
}

export const AvoidPageBreakInside = ({children}: AvoidPageBreakInsideProps) => {
  return <StyledBox >{children}</StyledBox>;
};