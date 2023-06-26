import { useProjects } from '../hooks/useProjects'
import { Layout } from './layout'

export const CV = () => {

    const Projects = useProjects();

    return <Layout>
        <Projects/>
        </Layout>
}