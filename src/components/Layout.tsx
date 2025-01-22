import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { MDXProvider } from "@mdx-js/react";
import styled from "@emotion/styled";

interface Props {
  children: React.ReactNode;
}

interface TypographyProps {
  fontSize?: string;
  fontWeight?: number;
  mt?: number;
}

const StyledTypography = styled.p<TypographyProps>(({ fontSize, fontWeight, mt }) => ({
  margin: 0,
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",

  lineHeight: 1.5,
  letterSpacing: "0.00938em",
  fontSize,
  fontWeight,

  marginTop: mt,
}));

const StyledList = styled.ul({
  listStyle: "disc",
  paddingLeft: "16px",
  paddingBottom: "0px",
});

const StyledListItem = styled.li({
  display: "list-item",
  paggingTop: "0px",
  paddingBottom: "0px",
});

const StyledListItemText = styled.span({
  marginTop: "0px",
  marginBottom: "0px",
  fontSize: "14px",
});

const StyledLink = styled.a({
  margin: "0px",
  font: "inherit",
  color: "rgb(25, 118, 210)",
  textDecoration: "none",
});

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <MDXProvider
      components={{
        p: ({ children }) => <StyledTypography fontSize="14px">{children}</StyledTypography>,
        h1: ({ children }) => (
          <StyledTypography fontWeight={500} fontSize="25px">
            {children}
          </StyledTypography>
        ),
        h2: ({ children }) => (
          <StyledTypography mt={2} fontWeight={500} fontSize="20px">
            {children}
          </StyledTypography>
        ),
        h3: ({ children }) => (
          <StyledTypography fontSize="12px">{children}</StyledTypography>
        ),
        h4: ({ children }) => (
          <StyledTypography fontSize="10px">{children}</StyledTypography>
        ),
        ul: ({ children }) => <StyledList>{children}</StyledList>,
        li: ({ children }) => (
          <StyledListItem>
            <StyledListItemText>{children}</StyledListItemText>
          </StyledListItem>
        ),
        a: ({ children, href }) => (
          <StyledLink href={href} rel="noopener" target="_blank">
            {children}
          </StyledLink>
        ),
      }}
    >
      {children}
    </MDXProvider>
  );
};