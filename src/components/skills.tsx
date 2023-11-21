import { Box } from "@mui/material"
import { SkillGrid } from "./skillGrid"
import { getLangFromUrl, useTranslations } from "../i18n/utils";



export const Skills = () => {

    const lang = getLangFromUrl();
    const t = useTranslations(lang);

    const skills = [
        {

            title: t('languages'),
            skills: ["TypeScript / JavaScript", "NodeJs", "Python", "Java", "Go", "C#"]
        },
        {
            title: t('libraries'),
            skills: ["React", "Solid.js", "Gatsby", "Astro", "Svelte", "Angular", "Vue", "NextJs", "NX"]
        },
        {
            title: t('styling'),
            skills: ["CSS/SCSS", "Material-UI (MUI)", "Styled-Components", "Tailwind CSS"]
        },
        {
            title: t('testing'),
            skills: ["React-Testing-Library", "Jest", "Cypress", "Playwright"]
        },
        {
            title: t('databases'),
            skills: ["MongoDB", "SQL"]
        },
        {
            title: t('integration'),
            skills: ["Gitlab", "Github", "Linux", "Docker", "AWS", "Azure"]
        },
        {
            title: t('bundlers'),
            skills: ["Webpack", "Vite"]
        },
        {
            title: t('protocols'),
            skills: ["REST", "JSON-RPC", "WebSocket", "Open-API", "GraphQL"]
        },
        {
            title: t('ide'),
            skills: ["VS Code", "Jetbrains IntelliJ"]
        },
        {
            title: t('projectMethology'),
            skills: ["Scrum", "Kanban", "Agile", "Waterfall"]
        }
    ]

    return <Box>{skills.map((skill, index) => <SkillGrid key={index} {...skill} />)}</Box>
}