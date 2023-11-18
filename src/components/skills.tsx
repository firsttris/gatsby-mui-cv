import { Box } from "@mui/material"
import { SkillGrid } from "./skillGrid"

export const skills = [
    {
        title_en: "Languages",
        title_de: "Sprachen",
        skills: ["TypeScript/JavaScript (10)", "NodeJs (9)", "Python (7)", "Java (7)"]
    },
    {
        title_en: "Libraries",
        title_de: "Bibliotheken",
        skills: ["React (10)", "SolidJs (10)", "Svelte (9)", "Angular (9)", "Vue (9)", "NextJs (9)", "NX (10)"]
    },
    {
        title_en: "Styling",
        title_de: "Styling",
        skills: ["Material-UI (MUI) (10)", "Styled-Components (10)", "CSS-Modules (9)", "TailwindCSS (8)"]
    },
    {
        title_en: "Testing",
        title_de: "Testen",
        skills: ["React-Testing-Library (10)", "Jest (10)", "Cypress (10)"]
    },
    {
        title_en: "Databases",
        title_de: "Datenbanken",
        skills: ["MongoDB (8)", "SQL (9)"]
    },
    {
        title_en: "Integration",
        title_de: "Integration",
        skills: ["Gitlab (10)", "Github (10)", "Linux (9)", "Azure (7)", "Docker (8)", "AWS (7)"]
    },
    {
        title_en: "Bundler",
        title_de: "Bundler",
        skills: ["Webpack (9)", "Vite (9)"]
    },
    {
        title_en: "Protcols",
        title_de: "Protokolle",
        skills: ["REST (10)", "JSON-RPC (10)", "WebSocket (10)", "Open-API (10)", "GraphQL (8)"]
    },
    {
        title_en: "IDE",
        title_de: "IDE",
        skills: ["VS Code (10)", "Jetbrains IntelliJ (8)"]
    },
    {
        title_en: "Projectmethology",
        title_de: "Projektmethodik",
        skills: ["Scrum (10)", "Kanban (10)", "Agile (10)", "Waterfall (10)"]
    }
]

export const SkillsForDE = () => <Box>{skills.map((skill, index) => <SkillGrid key={index} title={skill.title_de} skills={skill.skills} />)}</Box>
export const SkillsForEN = () => <Box>{skills.map((skill, index) => <SkillGrid key={index} title={skill.title_en} skills={skill.skills} />)}</Box>