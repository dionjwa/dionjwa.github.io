import { walk } from "https://deno.land/std/fs/mod.ts";
import {
  parseAll,
  stringify as yamlStringify,
} from "https://deno.land/std@0.182.0/encoding/yaml.ts";

export const applyFrontMatterModification = async (
  path: string,
  f: (frontMatter: object) => Promise<object>
): Promise<void> => {
  const text: string = await Deno.readTextFile(path);

  const frontMatterText = /^---\n([\s\S]*?)\n---\n/.exec(text)?.[1];
  if (frontMatterText) {
    let yaml = (parseAll(frontMatterText) as object[])?.[0];
    if (yaml) {
      const newYaml = await f(yaml);
      const updatedText = text.replace(frontMatterText, yamlStringify(newYaml));
      await Deno.writeTextFile(path, updatedText);
    }
  }
};

export const applyFrontMatterModificationToAll = async (args: {
  path: string;
  f: (frontMatter: object) => Promise<object>;
}) => {
  const { path, f } = args;
  for await (const e of walk(path, {
    includeDirs: false,
    exts: [".md", ".mdx"],
  })) {
    if (e.isFile) {
      await applyFrontMatterModification(e.path, f);
    }
  }
};
