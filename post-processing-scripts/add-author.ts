/**
 * Workaround for:
 *   https://github.com/souvikinator/notion-to-md/issues/62
 * Removes duplicate mermaid blocks from notion-to-md
 * It's a personal script, it makes a bunch of assumptions
 * because the underlying problem is likely to be fixed eventually
 */
import { applyFrontMatterModificationToAll } from "./mod.ts";

const addAuthorToFrontMatter = async (author:string, frontMatter: object) :Promise<object> => {
    if (frontMatter) {
      if (!frontMatter["authors"]) {
        frontMatter["authors"] = [];
      }
      if (!frontMatter["authors"].includes(author)) {
        frontMatter["authors"].push(author);
      }
    }
    return frontMatter;
};

await applyFrontMatterModificationToAll({ path: "./blog", f: (frontMatter: object) => {
  return addAuthorToFrontMatter("dion", frontMatter);
}});
