import { Box } from "@mui/material"
import { SkillGrid } from "./SkillGrid"
import { getLangFromUrl, useTranslations } from "../i18n/utils";

export const languages = {
    typescript: { name: "TypeScript", icon: "vscode-icons:file-type-typescript-official", website: "https://www.typescriptlang.org/" },
    javascript: { name: "JavaScript", icon: 'vscode-icons:file-type-js-official', website: "https://www.javascript.com/" },
    nodejs: { name: "NodeJs", icon: 'vscode-icons:file-type-node2', website: "https://nodejs.org/" },
    python: { name: 'Python', icon: 'vscode-icons:file-type-python', website: "https://www.python.org/" },
    java: { name: "Java", icon: 'vscode-icons:file-type-java', website: "https://www.oracle.com/java/" },
    go: { name: "Go", icon: 'vscode-icons:file-type-go', website: "https://golang.org/" },
    csharp: { name: "C#", icon: 'vscode-icons:file-type-csharp', website: "https://docs.microsoft.com/en-us/dotnet/csharp/" }
}

export const libraries = {
    react: { name: "React", icon: 'vscode-icons:file-type-reactts', website: "https://reactjs.org/" },
    solid: { name: "Solid.js", icon: 'vscode-icons:file-type-reactjs', website: "https://www.solidjs.com/" },
    gatsby: { name: "Gatsby", icon: 'vscode-icons:file-type-gatsby', website: "https://www.gatsbyjs.com/" },
    astro: { name: "Astro", icon: 'vscode-icons:file-type-astro', website: "https://astro.build/" },
    svelte: { name: "Svelte", icon: 'vscode-icons:file-type-svelte', website: "https://svelte.dev/" },
    angular: { name: "Angular", icon: 'vscode-icons:file-type-angular', website: "https://angular.io/" },
    vue: { name: "Vue", icon: 'vscode-icons:file-type-vue', website: "https://vuejs.org/" },
    nextjs: { name: "NextJs", icon: 'vscode-icons:file-type-light-next', website: "https://nextjs.org/" },
    nx: { name: "NX", icon: 'vscode-icons:file-type-light-nx', website: "https://nx.dev/" }
}

export const styling = {
    css: { name: "CSS", icon: 'vscode-icons:file-type-css', website: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    scss: { name: "SCSS", icon: 'vscode-icons:file-type-scss2', website: "https://sass-lang.com/" },
    mui: { name: "Material-UI (MUI)", icon: 'devicon:materialui', website: "https://mui.com/" },
    styled: { name: "Styled-Components", icon: 'vscode-icons:file-type-styled', website: "https://styled-components.com/" },
    tailwind: { name: "Tailwind CSS", icon: 'vscode-icons:file-type-tailwind', website: "https://tailwindcss.com/" }
}

export const testing = {
    testingLibrary: { name: "Testing-Library", icon: 'vscode-icons:file-type-test', website: "https://testing-library.com/" },
    jest: { name: "Jest", icon: 'vscode-icons:file-type-jest', website: "https://jestjs.io/" },
    cypress: { name: "Cypress", icon: 'vscode-icons:file-type-cypress', website: "https://www.cypress.io/" },
    playwright: { name: "Playwright", icon: 'vscode-icons:file-type-playwright', website: "https://playwright.dev/" }
}

export const databases = {
    mongodb: { name: "MongoDB", icon: 'vscode-icons:file-type-mongo', website: "https://www.mongodb.com/" },
    sql: { name: "SQL", icon: 'vscode-icons:file-type-sql', website: "https://www.sql.com/" }
}

export const integration = {
    gitlab: { name: "Gitlab", icon: 'vscode-icons:file-type-gitlab', website: "https://about.gitlab.com/" },
    github: { name: "Github", icon: 'vscode-icons:folder-type-github', website: "https://github.com/" },
    linux: { name: "Linux", icon: 'vscode-icons:folder-type-linux', website: "https://www.linux.org/" },
    docker: { name: "Docker", icon: 'vscode-icons:file-type-docker2', website: "https://www.docker.com/" },
    aws: { name: "AWS", icon: 'devicon:amazonwebservices-wordmark', website: "https://aws.amazon.com/" },
    azure: { name: "Azure", icon: 'vscode-icons:file-type-azure', website: "https://azure.microsoft.com/" }
}

export const bundlers = {
    webpack: { name: "Webpack", icon: 'vscode-icons:file-type-webpack', website: "https://webpack.js.org/" },
    vite: { name: "Vite", icon: 'vscode-icons:file-type-vite', website: "https://vitejs.dev/" }
}

export const protocols = {
    rest: { name: "REST", icon: 'vscode-icons:file-type-rest', website: "https://restfulapi.net/" },
    jsonrpc: { name: "JSON-RPC", icon: 'vscode-icons:file-type-json', website: "https://www.jsonrpc.org/" },
    websocket: { name: "WebSocket", icon: 'devicon:socketio', website: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" },
    openapi: { name: "Open-API", icon: 'vscode-icons:folder-type-api-opened', website: "https://www.openapis.org/" },
    graphql: { name: "GraphQL", icon: 'vscode-icons:file-type-graphql', website: "https://graphql.org/" }
}

export const ide = {
    vscode: { name: "Visual Studio Code", icon: 'vscode-icons:folder-type-vscode', website: "https://code.visualstudio.com/" },
    intellij: { name: "Jetbrains IntelliJ", icon: 'devicon:intellij', website: "https://www.jetbrains.com/idea/" }
}

export const projectMethology = {
    scrum: { name: "Scrum", icon: 'simple-icons:scrumalliance', website: "https://www.scrum.org/" },
    kanban: { name: "Kanban", icon: 'material-symbols:view-kanban-outline', website: "https://kanbanize.com/kanban-resources/getting-started/what-is-kanban" },
    agile: { name: "Agile", icon: 'iconoir:agile', website: "https://www.agilealliance.org/" },
    waterfall: { name: "Waterfall", icon: 'material-symbols:waterfall-chart', website: "https://www.waterfall2006.com/" }
}

export const Skills = () => {

    const lang = getLangFromUrl();
    const t = useTranslations(lang);

    const skills = [
        {

            title: t('languages'),
            skills:
                [
                    languages.typescript, languages.javascript, languages.nodejs, languages.python, languages.java, languages.go, languages.csharp
                ]
        },
        {
            title: t('libraries'),
            skills:
                [
                    libraries.react, libraries.solid, libraries.gatsby, libraries.astro, libraries.svelte, libraries.angular, libraries.vue, libraries.nextjs, libraries.nx
                ]
        },
        {
            title: t('styling'),
            skills:
                [
                    styling.css, styling.scss, styling.mui, styling.styled, styling.tailwind
                ]
        },
        {
            title: t('testing'),
            skills:
                [
                    testing.testingLibrary, testing.jest, testing.cypress, testing.playwright
                ]
        },
        {
            title: t('databases'),
            skills:
                [
                    databases.mongodb, databases.sql
                ]
        },
        {
            title: t('integration'),
            skills:
                [
                    integration.aws, integration.azure, integration.docker, integration.gitlab, integration.github, integration.linux
                ]
        },
        {
            title: t('bundlers'),
            skills:
                [
                    bundlers.vite, bundlers.webpack
                ]
        },
        {
            title: t('protocols'),
            skills:
                [
                    protocols.rest, protocols.jsonrpc, protocols.websocket, protocols.openapi, protocols.graphql
                ]
        },
        {
            title: t('ide'),
            skills:
                [
                    ide.intellij, ide.vscode
                ]
        },
        {
            title: t('projectMethology'),
            skills:
                [
                    projectMethology.scrum, projectMethology.kanban, projectMethology.agile, projectMethology.waterfall
                ]
        }
    ]

    return <Box>{skills.map((skill, index) => <SkillGrid key={index} {...skill} />)}</Box>
}