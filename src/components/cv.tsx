import { Box, Container, Link, Typography } from "@mui/material";
import { useMdx } from "../hooks/useMdx";
import { Layout } from "./layout";
import { ProfileHeader } from "./profileHeader";
import "./global.css";

export const CV = () => {
  const { Projects, Description, Skills, OpenSource, Footer } = useMdx();

  return (
    <Layout>
      <Container
        maxWidth={"md"}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Box>
          <ProfileHeader />
        </Box>
        <Box mt="20px">
          <Description />
        </Box>
        <Box mt="20px">
          <Skills />
        </Box>
        <Box sx={{ marginTop: "20px", "@media print": { marginTop: "0" } }}>
          <Projects />
        </Box>
        <Box>
          <OpenSource />
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Footer />
        </Box>
      </Container>
    </Layout>
  );
};
