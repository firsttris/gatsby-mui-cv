import { MDXProvider } from "@mdx-js/react"
import { Typography } from "@mui/material"
import * as React from "react" 

interface Props {
    children: React.ReactNode 
}

export const Layout: React.FC<Props> = ({ children })  => {
  return (
    <MDXProvider
      components={{
        // Map HTML element tag to React component
        h1: props => <Typography variant="h4">{props.children}</Typography>,
      }}
    >
      {children}
    </MDXProvider>
  )
}