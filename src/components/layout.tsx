import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { MDXProvider } from "@mdx-js/react"
import { List, ListItem, ListItemText, Typography } from "@mui/material"

interface Props {
    children: React.ReactNode 
}

export const Layout: React.FC<Props> = ({ children })  => {
  return (
    <MDXProvider
      components={{
        // Map HTML element tag to React component
        h1: ({children}) => <Typography variant="h4">{children}</Typography>,
        ul: ({children}) => <List sx={{ listStyle: "disc", pl: 4 }}>{children}</List>,
        li: ({children}) => <ListItem sx={{ display: "list-item", py: '2px' }}><ListItemText primary={children} sx={{ my: 0}}/></ListItem>
      }}
    >
      {children}
    </MDXProvider>
  )
}