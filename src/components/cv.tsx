import { Container } from "@mui/material";
import { useProjects } from "../hooks/useProjects";
import { Layout } from "./layout";
import { ProfileHeader } from "./profileHeader";

export const CV = () => {
  const Projects = useProjects();

  return (
    <Layout>
      <Container maxWidth={'md'}>
        <ProfileHeader />
       
      </Container>
    </Layout>
  );
};
