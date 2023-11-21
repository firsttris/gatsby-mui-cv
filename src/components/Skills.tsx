import { Box } from "@mui/material"
import { SkillGrid } from "./SkillGrid"
import { getLangFromUrl, useTranslations } from "../i18n/utils";


export const Skills = () => {

    const lang = getLangFromUrl();
    const t = useTranslations(lang);

    const skills = [
        {

            title: t('languages'),
            skills: 
            [
                { name: "TypeScript", icon: "vscode-icons:file-type-typescript-official", website: "https://www.typescriptlang.org/" },
                { name: "JavaScript", icon: 'vscode-icons:file-type-js-official', website: "https://www.javascript.com/" },
                { name: "NodeJs", icon: 'vscode-icons:file-type-node2', website: "https://nodejs.org/" },
                { name: 'Python', icon: 'vscode-icons:file-type-python', website: "https://www.python.org/" },
                { name: "Java", icon: 'vscode-icons:file-type-java', website: "https://www.oracle.com/java/" },
                { name: "Go", icon: 'vscode-icons:file-type-go', website: "https://golang.org/" },
                { name: "C#", icon: 'vscode-icons:file-type-csharp', website: "https://docs.microsoft.com/en-us/dotnet/csharp/" }
            ]
        },
        {
            title: t('libraries'),
            skills: 
            [
                { name: "React", icon: 'vscode-icons:file-type-reactts', website: "https://reactjs.org/" },
                { name: "Solid.js", icon: 'vscode-icons:file-type-reactjs', website: "https://www.solidjs.com/" },
                { name: "Gatsby", icon: 'vscode-icons:file-type-gatsby', website: "https://www.gatsbyjs.com/" },
                { name: "Astro", icon: 'vscode-icons:file-type-astro', website: "https://astro.build/" },
                { name: "Svelte", icon: 'vscode-icons:file-type-svelte', website: "https://svelte.dev/" },
                { name: "Angular", icon: 'vscode-icons:file-type-angular', website: "https://angular.io/" },
                { name: "Vue", icon: 'vscode-icons:file-type-vue', website: "https://vuejs.org/" },
                { name: "NextJs", icon: 'vscode-icons:file-type-light-next', website: "https://nextjs.org/" },
                { name: "NX", icon: 'vscode-icons:file-type-light-nx', website: "https://nx.dev/" }
            ]
        },
        {
            title: t('styling'),
            skills: 
            [
                { name: "CSS", icon: 'vscode-icons:file-type-css', website: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
                { name: "SCSS", icon: 'vscode-icons:file-type-scss2', website: "https://sass-lang.com/" },
                { name: "Material-UI (MUI)", icon: 'devicon:materialui', website: "https://mui.com/" },
                { name: "Styled-Components", icon: 'vscode-icons:file-type-styled', website: "https://styled-components.com/" },
                { name: "Tailwind CSS", icon: 'vscode-icons:file-type-tailwind', website: "https://tailwindcss.com/" }
            ]
        },
        {
            title: t('testing'),
            skills: 
            [
                { name: "Testing-Library", icon: 'vscode-icons:file-type-test', website: "https://testing-library.com/" },
                { name: "Jest", icon: 'vscode-icons:file-type-jest', website: "https://jestjs.io/" },
                { name: "Cypress", icon: 'vscode-icons:file-type-cypress', website: "https://www.cypress.io/" },
                { name: "Playwright", icon: 'vscode-icons:file-type-playwright', website: "https://playwright.dev/" }
            ]
        },
        {
            title: t('databases'),
            skills: 
            [
                { name: "MongoDB", icon: 'vscode-icons:file-type-mongo', website: "https://www.mongodb.com/" },
                { name: "SQL", icon: 'vscode-icons:file-type-sql', website: "https://www.sql.com/" }
            ]
        },
        {
            title: t('integration'),
            skills: 
            [
                { name: "Gitlab", icon: 'vscode-icons:file-type-gitlab', website: "https://about.gitlab.com/" },
                { name: "Github", icon: 'vscode-icons:folder-type-github', website: "https://github.com/" },
                { name: "Linux", icon: 'vscode-icons:folder-type-linux', website: "https://www.linux.org/" },
                { name: "Docker", icon: 'vscode-icons:file-type-docker2', website: "https://www.docker.com/" },
                { name: "AWS", icon: 'devicon:amazonwebservices-wordmark', website: "https://aws.amazon.com/" },
                { name: "Azure", icon: 'vscode-icons:file-type-azure', website: "https://azure.microsoft.com/" }
            ]
        },
        {
            title: t('bundlers'),
            skills: 
            [
                { name: "Webpack", icon: 'vscode-icons:file-type-webpack', website: "https://webpack.js.org/" },
                { name: "Vite", icon: 'vscode-icons:file-type-vite', website: "https://vitejs.dev/" }
            ]
        },
        {
            title: t('protocols'),
            skills: 
            [
                { name: "REST", icon: 'vscode-icons:file-type-rest', website: "https://restfulapi.net/" },
                { name: "JSON-RPC", icon: 'vscode-icons:file-type-json', website: "https://www.jsonrpc.org/" },
                { name: "WebSocket", icon: 'devicon:socketio', website: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" },
                { name: "Open-API", icon: 'vscode-icons:folder-type-api-opened', website: "https://www.openapis.org/" },
                { name: "GraphQL", icon: 'vscode-icons:file-type-graphql', website: "https://graphql.org/" }
            ]
        },
        {
            title: t('ide'),
            skills: 
            [
                { name: "Visual Studio Code", icon: 'vscode-icons:folder-type-vscode', website: "https://code.visualstudio.com/" }, 
                { name: "Jetbrains IntelliJ", icon: 'devicon:intellij', website: "https://www.jetbrains.com/idea/" }
            ]
        },
        {
            title: t('projectMethology'),
            skills: 
            [
                { name: "Scrum", icon: 'simple-icons:scrumalliance', website: "https://www.scrum.org/" }, 
                { name: "Kanban", icon: 'material-symbols:view-kanban-outline', website: "https://kanbanize.com/kanban-resources/getting-started/what-is-kanban" }, 
                { name: "Agile", icon: 'iconoir:agile', website: "https://www.agilealliance.org/" }, 
                { name: "Waterfall", icon: 'material-symbols:waterfall-chart', website: "https://www.waterfall2006.com/" }
            ]
        }
    ]

    return <Box>{skills.map((skill, index) => <SkillGrid key={index} {...skill} />)}</Box>
}