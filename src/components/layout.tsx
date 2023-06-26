import { MDXProvider } from "@mdx-js/react"
import { List, ListItem, Typography } from "@mui/material"

interface Props {
    children: React.ReactNode 
}

export const Layout: React.FC<Props> = ({ children })  => {
  return (
    <MDXProvider
      components={{
        // Map HTML element tag to React component
        h1: ({children}) => <Typography variant="h4">{children}</Typography>,
        ul: ({children}) => <List>{children}</List>,
        li: ({children}) => <ListItem sx={{ listStyleType: "disc", display: "list-item" }}>{children}</ListItem>
      }}
    >
      {children}
    </MDXProvider>
  )
}