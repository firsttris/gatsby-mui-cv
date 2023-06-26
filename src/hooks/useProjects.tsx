import ProjectsDE from './../mdx/de/projects.mdx'
import ProjectsEN from './../mdx/en/projects.mdx'
import { useLocation } from '@reach/router';


export const useProjects = () => {
    const { pathname } = useLocation()
    const isDe = pathname.includes('/de/')
    return isDe ? ProjectsDE : ProjectsEN
}