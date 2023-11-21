import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { MDXProvider } from "@mdx-js/react";
import { Link, List, ListItem, ListItemText, Typography } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <MDXProvider
      components={{
        // Map HTML element tag to React component
        p: ({ children }) => <Typography sx={{ fontSize: '14px'}}>{children}</Typography>,
        h1: ({ children }) => (
          <Typography fontWeight={500} sx={{ fontSize: "25px" }}>
            {children}
          </Typography>
        ),
        h2: ({ children }) => (
          <Typography mt={2} fontWeight={500} sx={{ fontSize: "20px" }}>
            {children}
          </Typography>
        ),
        h3: ({ children }) => (
          <Typography sx={{ fontSize: "12px" }}>{children}</Typography>
        ),
        h4: ({ children }) => (
          <Typography sx={{ fontSize: "10px" }}>{children}</Typography>
        ),
        ul: ({ children }) => (
          <List sx={{ listStyle: "disc", pl: 4, pb: 0 }}>{children}</List>
        ),
        li: ({ children }) => (
          <ListItem sx={{ display: "list-item", py: "0px" }}>
            <ListItemText primary={children} sx={{ my: 0 }} primaryTypographyProps={{fontSize: '14px'}}  />
          </ListItem>
        ),
        a: ({ children, href }) => (
          <Link underline="none" href={href} rel="noopener" target="_blank">
            {children}
          </Link>
        ),
      }}
    >
      {children}
    </MDXProvider>
  );
};
