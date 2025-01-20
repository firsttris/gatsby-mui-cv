import { useMdx } from "../hooks/useMdx";
import { Layout } from "./Layout";
import { ProfileHeader } from "./ProfileHeader";
import styled from "@emotion/styled";
import "./global.css";

const StyledContainer = styled.div({
  maxWidth: "852px", //md
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  paddingLeft: '16px',
  paddingRight: '16px',
});

const StyledBox = styled.div({
  marginTop: "20px",
});

const PrintStyledBox = styled.div({
  marginTop: "20px",
  "@media print": {
    marginTop: "0",
  },
});

const CenteredBox = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const CV = () => {
  const { Projects, Description, Skills, OpenSource, Footer } = useMdx();

  return (
    <Layout>
      <StyledContainer>
        <div>
          <ProfileHeader />
        </div>
        <StyledBox>
          <Description />
        </StyledBox>
        <StyledBox>
          <Skills />
        </StyledBox>
        <PrintStyledBox>
          <Projects />
        </PrintStyledBox>
        <div>
          <OpenSource />
        </div>
        <CenteredBox>
          <Footer />
        </CenteredBox>
      </StyledContainer>
    </Layout>
  );
};