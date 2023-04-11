import { applyFrontMatterModificationToAll } from "./mod.ts";

const hideTableOfContents = async (frontMatter: object) :Promise<object> => {
    if (frontMatter) {
      frontMatter["hide_table_of_contents"] = true;
    }
    return frontMatter;
};

await applyFrontMatterModificationToAll({ path: "./docs", f: (frontMatter: object) => {
  return hideTableOfContents(frontMatter);
}});
