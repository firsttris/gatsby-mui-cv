import { SkillGrid } from "./SkillGrid"
import { getLangFromUrl, useTranslations } from "../i18n/utils";

export const languages = {
    typescript: { name: "TypeScript", icon: "vscode-icons:file-type-typescript-official", website: "https://www.typescriptlang.org/" },
    javascript: { name: "JavaScript", icon: 'vscode-icons:file-type-js-official', website: "https://www.javascript.com/" },
    nodejs: { name: "NodeJs", icon: 'vscode-icons:file-type-node2', website: "https://nodejs.org/" },
    python: { name: 'Python', icon: 'vscode-icons:file-type-python', website: "https://www.python.org/" },
    java: { name: "Java", icon: 'devicon:java-wordmark', website: "https://www.oracle.com/java/" },
    go: { name: "Go", icon: 'vscode-icons:file-type-go', website: "https://golang.org/" },
    csharp: { name: "C#", icon: 'vscode-icons:file-type-csharp', website: "https://docs.microsoft.com/en-us/dotnet/csharp/" },
    php: { name: "PHP", icon: 'vscode-icons:file-type-php', website: "https://www.php.net/" },
    groovy: { name: "Groovy", icon: 'devicon:groovy', website: "https://groovy-lang.org/" },
    swift: { name: "Swift", icon: 'vscode-icons:file-type-swift', website: "https://swift.org/" }
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
    nx: { name: "NX", icon: 'vscode-icons:file-type-light-nx', website: "https://nx.dev/" },
    reactQuery: { name: "React-Query", icon: 'logos:react-query-icon', website: "https://react-query.tanstack.com/" },
    apollo: { name: "Apollo", icon: 'logos:apollostack', website: "https://www.apollographql.com/" },
    leaflet: { name: "Leaflet", icon: 'logos:leaflet', website: "https://leafletjs.com/" },
    recharts: { name: "Recharts", icon: 'material-symbols:stacked-line-chart', website: "https://recharts.org/" },
    reactBeautifulDnd: { name: "React-Beautiful-Dnd", icon: 'logos:atlassian', website: "https://github.com/atlassian/react-beautiful-dnd"},
    redux: { name: "Redux", icon: 'skill-icons:redux', website: "https://redux.js.org/" },
    agGrid: { name: "Ag-Grid", icon: 'material-symbols:grid-4x4', website: "https://www.ag-grid.com/" },
    knockoutJs: { name: "KnockoutJs", icon: 'logos:knockout', website: "https://knockoutjs.com/" },
    laravel: { name: "Laravel", icon: 'logos:laravel', website: "https://laravel.com/" },
    reselect: { name: "Reselect", icon: 'logos:react', website: "https://github.com/reduxjs/reselect"},
    immutablejs: { name: "Immutable.js", icon: 'logos:immutable', website: "https://immutable-js.github.io/immutable-js/"},
    sequelize: { name: "Sequelize", icon: 'logos:sequelize', website: "https://sequelize.org/"},
    hapi: { name: "HapiJs", icon: 'logos:hapi', website: "https://hapi.dev/" },
    jquery: { name: "jQuery", icon: 'logos:jquery', website: "https://jquery.com/" },
    oracleAdf: { name: "Oracle ADF", icon: 'simple-icons:oracle', website: "https://www.oracle.com/middleware/technologies/adf.html" },
    cordova: { name: "Cordova", icon: 'logos:cordova', website: "https://cordova.apache.org/" },
    babel: { name: "Babel", icon: 'logos:babel', website: "https://babeljs.io/" },
}

export const styling = {
    css: { name: "CSS", icon: 'vscode-icons:file-type-css', website: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    scss: { name: "SCSS", icon: 'vscode-icons:file-type-scss2', website: "https://sass-lang.com/" },
    mui: { name: "Material-UI (MUI)", icon: 'devicon:materialui', website: "https://mui.com/" },
    angularMaterial: { name: "Angular-Material", icon: 'devicon:angularmaterial', website: "https://material.angular.io/" },
    styled: { name: "Styled-Components", icon: 'vscode-icons:file-type-styled', website: "https://styled-components.com/" },
    tailwind: { name: "Tailwind CSS", icon: 'vscode-icons:file-type-tailwind', website: "https://tailwindcss.com/" },
    bootstrap: { name: "Bootstrap", icon: 'devicon:bootstrap-wordmark', website: "https://getbootstrap.com/" }
}

export const testing = {
    testingLibrary: { name: "Testing-Library", icon: 'vscode-icons:file-type-test', website: "https://testing-library.com/" },
    jest: { name: "Jest", icon: 'vscode-icons:file-type-jest', website: "https://jestjs.io/" },
    cypress: { name: "Cypress", icon: 'vscode-icons:file-type-cypress', website: "https://www.cypress.io/" },
    playwright: { name: "Playwright", icon: 'vscode-icons:file-type-playwright', website: "https://playwright.dev/" },
    xRay: { name: "X-Ray", icon: 'logos:xray-for-jira', website: "https://aws.amazon.com/xray/" },
    junit: { name: "JUnit", icon: 'devicon:junit', website: "https://junit.org/junit5/" }
}

export const databases = {
    mongodb: { name: "MongoDB", icon: 'vscode-icons:file-type-mongo', website: "https://www.mongodb.com/" },
    sql: { name: "SQL", icon: 'vscode-icons:file-type-sql', website: "https://www.sql.com/" },
    lowdb: { name: "LowDB", icon: 'vscode-icons:file-type-json', website: "https://github.com/typicode/lowdb" }
}

export const integration = {
    gitlab: { name: "Gitlab", icon: 'vscode-icons:file-type-gitlab', website: "https://about.gitlab.com/" },
    github: { name: "Github", icon: 'vscode-icons:folder-type-github', website: "https://github.com/" },
    linux: { name: "Linux", icon: 'vscode-icons:folder-type-linux', website: "https://www.linux.org/" },
    docker: { name: "Docker", icon: 'vscode-icons:file-type-docker2', website: "https://www.docker.com/" },
    aws: { name: "AWS", icon: 'devicon:amazonwebservices-wordmark', website: "https://aws.amazon.com/" },
    azure: { name: "Azure", icon: 'vscode-icons:file-type-azure', website: "https://azure.microsoft.com/" },
    jenkins: { name: "Jenkins", icon: 'vscode-icons:file-type-jenkins', website: "https://www.jenkins.io/" },
    gerrit: { name: "Gerrit", icon: 'cib:gerrit', website: "https://www.gerritcodereview.com/" },
    bitbucket: { name: "Bitbucket", icon: 'logos:bitbucket', website: "https://bitbucket.org/" },
    traefik: { name: "Traefik", icon: 'devicon:traefikproxy', website: "https://traefik.io/" },
    kubernetes: { name: "Kubernetes", icon: 'logos:kubernetes', website: "https://kubernetes.io/" },
    maven: { name: "Maven", icon: 'vscode-icons:file-type-maven', website: "https://maven.apache.org/" },
    svn: { name: "Subversion", icon: 'logos:subversion', website: "https://subversion.apache.org/" },
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
    visualStudio: { name: "Visual Studio", icon: 'logos:visual-studio', website: "https://visualstudio.microsoft.com/" },
    intellij: { name: "Jetbrains IntelliJ", icon: 'devicon:intellij', website: "https://www.jetbrains.com/idea/" },
    eclipse: { name: "Eclipse", icon: 'logos:eclipse-icon', website: "https://www.eclipse.org/" }
}

export const projectMethology = {
    scrum: { name: "Scrum", icon: 'simple-icons:scrumalliance', website: "https://www.scrum.org/" },
    kanban: { name: "Kanban", icon: 'material-symbols:view-kanban-outline', website: "https://kanbanize.com/kanban-resources/getting-started/what-is-kanban" },
    agile: { name: "Agile", icon: 'iconoir:agile', website: "https://www.agilealliance.org/" },
    waterfall: { name: "Waterfall", icon: 'material-symbols:waterfall-chart', website: "https://www.waterfall2006.com/" }
}

export const authentication = {
    msal: { name: "Microsoft Authentication Library (MSAL)", icon: 'vscode-icons:file-type-azure', website: "https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-overview" },
}

export const tools = {
    jira: { name: "Jira", icon: 'logos:jira', website: "https://www.atlassian.com/software/jira" },
    confluence: { name: "Confluence", icon: 'logos:confluence', website: "https://www.atlassian.com/software/confluence" },
    wordpress: { name: "Wordpress", icon: 'logos:wordpress-icon', website: "https://wordpress.com/" },
    sqlDeveloper: { name: "Oracle SQL Developer", icon: 'devicon:sqldeveloper', website: "https://www.oracle.com/tools/downloads/sqldev-downloads.html" },
    soapUI: { name: "SoapUI", icon: 'vscode-icons:folder-type-api-opened', website: "https://www.soapui.org/" },
    oracleSoaSuite: { name: "Oracle SOA Suite", icon: 'simple-icons:oracle', website: "https://www.oracle.com/middleware/technologies/soasuite.html" },
    kodi: { name: "Kodi", icon: 'mdi:kodi', website: "https://kodi.tv/" }
}

export const webserver = {
    nginx: { name: "Nginx", icon: 'vscode-icons:file-type-nginx', website: "https://www.nginx.com/" },
}

export const skillsForRwe = [ide.vscode, ide.visualStudio, languages.typescript, libraries.angular, styling.angularMaterial, styling.scss, testing.cypress, testing.jest, databases.mongodb, protocols.graphql, integration.azure, integration.aws, authentication.msal, libraries.nx, libraries.apollo]

export const skillsForCtream = [languages.typescript, libraries.react, libraries.nextjs, styling.mui, protocols.websocket, languages.python, integration.aws, ide.vscode, styling.styled, libraries.reactQuery]

export const skillsForAtis = [languages.typescript, libraries.react, testing.cypress, styling.mui, libraries.reactQuery, ide.vscode, protocols.openapi, libraries.nx, libraries.leaflet, libraries.recharts, integration.jenkins, libraries.reactBeautifulDnd]

export const skillsForHeidelbergCement = [languages.typescript, libraries.react, libraries.redux, testing.cypress, testing.jest, testing.testingLibrary, styling.mui, libraries.reactQuery, ide.vscode, integration.azure, tools.confluence, tools.jira, testing.xRay, integration.gitlab, webserver.nginx]

export const skillsForKlarsolar = [languages.typescript, libraries.angular, styling.angularMaterial, styling.tailwind, protocols.graphql, libraries.apollo, ide.vscode, integration.github]

export const skillsForSeeburger = [languages.java, protocols.openapi, ide.intellij, ide.vscode, languages.typescript, libraries.react, libraries.redux, testing.testingLibrary, testing.jest, styling.mui, libraries.agGrid, tools.jira, tools.confluence, integration.gerrit]

export const skillsForTeamviewer = [libraries.knockoutJs, languages.typescript, bundlers.webpack, languages.csharp, ide.visualStudio, ide.vscode, integration.bitbucket, tools.jira, tools.confluence]

export const skillsForProctorAndGamble = [ide.vscode, languages.typescript, languages.php, libraries.laravel, libraries.vue, bundlers.webpack, languages.javascript, databases.sql, integration.bitbucket, tools.jira, tools.confluence]

export const skillsForDaimler = [ide.vscode, languages.typescript, libraries.react, libraries.redux, testing.jest, bundlers.webpack, languages.nodejs, databases.sql, integration.docker, protocols.rest, protocols.openapi, tools.jira, tools.confluence, integration.github, libraries.reselect, libraries.immutablejs, integration.traefik, libraries.sequelize]

export const skillsForGameforge = [languages.javascript, libraries.angular, libraries.react, libraries.redux, styling.scss, protocols.rest, integration.docker, integration.kubernetes, languages.nodejs, integration.bitbucket, tools.jira, tools.confluence, bundlers.webpack, protocols.openapi]

export const skillsForTimify = [languages.javascript, languages.nodejs, databases.mongodb, libraries.hapi, integration.github, tools.jira, tools.confluence]

export const skillsForCybermanufaktur = [languages.javascript, libraries.angular, ide.intellij, libraries.jquery, languages.php, integration.bitbucket, tools.jira, tools.confluence, tools.wordpress]

export const skillsForArvato = [languages.java, ide.eclipse, integration.maven, testing.junit, tools.confluence, tools.jira, databases.sql, tools.sqlDeveloper, integration.svn, languages.groovy]

export const skillsForEc4u = [languages.javascript, libraries.jquery, languages.php, libraries.oracleAdf, tools.soapUI, ide.intellij, databases.sql, tools.sqlDeveloper, languages.java, tools.oracleSoaSuite, libraries.cordova, protocols.rest, tools.jira, tools.confluence]

export const skillsForJestRunner = [languages.typescript, languages.nodejs, ide.vscode, integration.github, testing.jest, libraries.babel]

export const skillsForSendToKodi = [languages.python, languages.swift, languages.typescript, libraries.react, integration.github, tools.kodi]

export const skillsForReactTrack = [languages.typescript, libraries.react, integration.github, libraries.apollo, protocols.graphql, styling.scss, styling.bootstrap, libraries.recharts, languages.nodejs, databases.lowdb, integration.docker]
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

    return <div>{skills.map((skill, index) => <SkillGrid key={index} {...skill} />)}</div>
}