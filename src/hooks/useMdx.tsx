import Projects_DE from "./../mdx/de/projects.mdx";
import Projects_EN from "./../mdx/en/projects.mdx";
import Description_DE from "./../mdx/de/description.mdx";
import Description_EN from "./../mdx/en/description.mdx";
import Skills_EN from "./../mdx/en/skills.mdx";
import { useLocation } from "@reach/router";

const mdx = {
  de: {
    Description: Description_DE,
    Projects: Projects_DE,
    Skills: Skills_EN,
  },
  en: {
    Description: Description_EN,
    Projects: Projects_EN,
    Skills: Skills_EN,
  },
};

export const useMdx = () => {
  const { pathname } = useLocation();
  const local = pathname.includes("/de/") ? "de" : "en";
  return mdx[local];
};
