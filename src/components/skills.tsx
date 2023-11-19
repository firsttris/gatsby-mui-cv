import { Box } from "@mui/material"
import { SkillGrid } from "./skillGrid"
import { getLangFromUrl, useTranslations } from "../i18n/utils";



export const Skills = () => {

    const lang = getLangFromUrl();
    const t = useTranslations(lang);

    const skills = [
        {

            title: t('languages'),
            skills: ["TypeScript / JavaScript (10)", "NodeJs (9)", "Python (7)", "Java (7)", "Go (7)"]
        },
        {
            title: t('libraries'),
            skills: ["React (10)", "Solid.js (9)", "Gatsby (9)", "Astro (9)", "Svelte (7)", "Angular (8)", "Vue (7)", "NextJs (9)", "NX (10)"]
        },
        {
            title: t('styling'),
            skills: ["CSS/SCSS (8)", "Material-UI (MUI) (10)", "Styled-Components (10)", "Tailwind CSS (8)"]
        },
        {
            title: t('testing'),
            skills: ["React-Testing-Library (10)", "Jest (10)", "Cypress (10)"]
        },
        {
            title: t('databases'),
            skills: ["MongoDB (8)", "SQL (9)"]
        },
        {
            title: t('integration'),
            skills: ["Gitlab (10)", "Github (10)", "Linux (9)", "Docker (8)", "AWS (7)", "Azure (7)"]
        },
        {
            title: t('bundlers'),
            skills: ["Webpack (9)", "Vite (9)"]
        },
        {
            title: t('protocols'),
            skills: ["REST (10)", "JSON-RPC (9)", "WebSocket (8)", "Open-API (9)", "GraphQL (8)"]
        },
        {
            title: t('ide'),
            skills: ["VS Code (10)", "Jetbrains IntelliJ (8)"]
        },
        {
            title: t('projectMethology'),
            skills: ["Scrum (9)", "Kanban (9)", "Agile (9)", "Waterfall (9)"]
        }
    ]

    return <Box>{skills.map((skill, index) => <SkillGrid key={index} {...skill} />)}</Box>
}