import { styled } from "@mui/system";
import { Box } from "@mui/material";

const StyledBox = styled(Box)({
  "@media print": {
    pageBreakBefore: "always",
  },
});

export const PageBreakBefore = () => {
  return <StyledBox />;
};