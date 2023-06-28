import { Container } from '@mui/material';
import { useProjects } from '../hooks/useProjects'
import { Layout } from './layout'

export const CV = () => {

    const Projects = useProjects();

    return <Layout>
        <Container>
        <Projects/>

        </Container>
        
        </Layout>
}