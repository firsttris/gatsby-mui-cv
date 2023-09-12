import type { CreatePagesArgs } from "gatsby";
import path from "path";

export const createPages = async ({
  graphql,
  actions,
  reporter,
}: CreatePagesArgs) => {
  const { createPage } = actions;

  ["en", "de"].forEach((locale) =>
    createPage({
      path: `/${locale}`,
      component: path.resolve("src/templates/cv.tsx"),
      context: { locale },
    }),
  );
};
