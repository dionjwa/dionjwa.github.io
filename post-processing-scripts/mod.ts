import {
  parseAll,
  stringify as yamlStringify,
} from 'https://deno.land/std@0.182.0/encoding/yaml.ts';
import { walk } from 'https://deno.land/std@0.182.0/fs/mod.ts';

export const applyFrontMatterModification = (
  path: string,
  f: (frontMatter: Record<string, unknown>) => Record<string, unknown>
): void => {
  const text: string = Deno.readTextFileSync(path);

  const frontMatterText = /^---\n([\s\S]*?)\n---\n/.exec(text)?.[1];
  if (frontMatterText) {
    const yaml = (parseAll(frontMatterText) as Record<string, unknown>[])?.[0];
    if (yaml) {
      const newYaml = f(yaml);
      const updatedText = text.replace(frontMatterText, yamlStringify(newYaml));
      Deno.writeTextFileSync(path, updatedText);
    }
  }
};

export const applyFrontMatterModificationToAll = async (args: {
  path: string;
  f: (frontMatter: Record<string, unknown>) => Record<string, unknown>;
}) => {
  const { path, f } = args;
  const st = await Deno.stat(path);
  if (st.isFile) {
    applyFrontMatterModification(path, f);
    return;
  }

  for await (const e of walk(path, {
    includeDirs: false,
    exts: [".md", ".mdx"],
  })) {
    if (e.isFile) {
      applyFrontMatterModification(e.path, f);
    }
  }
};

export const removeSidebar = (
  frontMatter: Record<string, unknown>
): Record<string, unknown> => {
  if (frontMatter) {
    frontMatter["displayed_sidebar"] = null;
  }
  return frontMatter;
};

export const addAuthorToFrontMatter = (author:string, frontMatter: Record<string, string[]>) :Record<string, string[]> => {
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

export const hideTableOfContents = (frontMatter: Record<string, unknown>) :Record<string, unknown> => {
  if (frontMatter) {
    frontMatter["hide_table_of_contents"] = true;
  }
  return frontMatter;
};

export const hideTitle = (frontMatter: Record<string, unknown>) :Record<string, unknown> => {
  if (frontMatter) {
    frontMatter["hide_title"] = true;
  }
  return frontMatter;
};
