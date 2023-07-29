import { styled } from "@mui/system";
import { Box } from "@mui/material";

const PageBreakBox = styled(Box)({
  "@media print": {
    pageBreakBefore: "always",
  },
});

export const PageBreak = () => {
  return <PageBreakBox />;
};
