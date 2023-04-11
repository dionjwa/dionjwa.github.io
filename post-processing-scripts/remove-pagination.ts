/**
 * Workaround for:
 *   https://github.com/souvikinator/notion-to-md/issues/62
 * Removes duplicate mermaid blocks from notion-to-md
 * It's a personal script, it makes a bunch of assumptions
 * because the underlying problem is likely to be fixed eventually
 */
import { applyFrontMatterModificationToAll } from "./mod.ts";

const removePagination = async (frontMatter: object) :Promise<object> => {
    if (frontMatter) {
      frontMatter["pagination_next"] = null;
      frontMatter["pagination_prev"] = null;
    }
    return frontMatter;
};

await applyFrontMatterModificationToAll({ path: "./blog", f: (frontMatter: object) => {
  return removePagination(frontMatter);
}});
