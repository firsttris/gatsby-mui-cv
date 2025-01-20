import styled from "@emotion/styled";
import { navigate } from "gatsby";

const CenteredBox = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
});

const CircularProgress = styled.div({
  border: "4px solid rgba(0, 0, 0, 0.1)",
  borderRadius: "50%",
  borderTop: "4px solid #000",
  width: "40px",
  height: "40px",
  animation: "spin 2s linear infinite",
  "@keyframes spin": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
});

export default (): JSX.Element => {
  if (typeof window !== "undefined") {
    let locale = "en";
    if (navigator.language.includes("de")) {
      locale = "de";
    }
    navigate(`/${locale}/`);
  }

  return (
    <CenteredBox>
      <CircularProgress />
    </CenteredBox>
  );
};