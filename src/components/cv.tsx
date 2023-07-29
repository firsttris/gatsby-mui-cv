import { Box, Container } from "@mui/material";
import { useMdx } from "../hooks/useMdx";
import { Layout } from "./layout";
import { ProfileHeader } from "./profileHeader";
import "./global.css";

export const CV = () => {
  const { Projects, Description, Skills } = useMdx();

  return (
    <Layout>
      <Container
        maxWidth={"md"}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Box>
          <ProfileHeader />
        </Box>
        <Box mt="30px">
          <Description />
        </Box>
        <Box mt="30px">
          <Skills />
        </Box>
        <Box sx={{ marginTop: "30px", "@media print": { marginTop: "0" } }}>
          <Projects />
        </Box>
      </Container>
    </Layout>
  );
};
