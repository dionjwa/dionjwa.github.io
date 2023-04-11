/**
 * Workaround for:
 *   https://github.com/souvikinator/notion-to-md/issues/62
 * Removes duplicate mermaid blocks from notion-to-md
 * It's a personal script, it makes a bunch of assumptions
 * because the underlying problem is likely to be fixed eventually
 */
import { walk } from "https://deno.land/std/fs/mod.ts";

const removePagination = async (path: string) => {
  const text: string = await Deno.readTextFile(path);
  const lines = text.split("\n");
  lines[0] = lines[0] + "\npagination_next: null\npagination_prev: null";
  await Deno.writeTextFile(path, lines.join("\n"));

};

const removeAllPagination = async (targetPath: string) => {
  for await (const e of walk(targetPath, {
    includeDirs: false,
    exts: [".md", ".mdx"],
  })) {
    if (e.isFile) {
      await removePagination(e.path);
    }
  }
};

await removeAllPagination("./blog");
