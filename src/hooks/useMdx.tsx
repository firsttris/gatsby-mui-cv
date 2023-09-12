import Projects_DE from "./../mdx/de/projects.mdx";
import Projects_EN from "./../mdx/en/projects.mdx";
import Description_DE from "./../mdx/de/description.mdx";
import Description_EN from "./../mdx/en/description.mdx";
import OpenSourceDE from "./../mdx/de/open-source.mdx";
import OpenSourceEN from "./../mdx/en/open-source.mdx";
import Skills_EN from "./../mdx/en/skills.mdx";
import Skills_DE from "./../mdx/de/skills.mdx";
import Footer_EN from "./../mdx/en/footer.mdx";
import Footer_DE from "./../mdx/de/footer.mdx";
import { useLocation } from "@reach/router";

const mdx = {
  de: {
    Description: Description_DE,
    Projects: Projects_DE,
    Skills: Skills_DE,
    OpenSource: OpenSourceDE,
    Footer: Footer_DE
  },
  en: {
    Description: Description_EN,
    Projects: Projects_EN,
    Skills: Skills_EN,
    OpenSource: OpenSourceEN,
    Footer: Footer_EN
  },
};

export const useMdx = () => {
  const { pathname } = useLocation();
  const local = pathname.includes("/de/") ? "de" : "en";
  return mdx[local];
};
