import {
  correctNotionUrlsInMermaid,
  embedToIframe,
  notionColumnsUpgraded,
} from "@metapages/docu-notion-plugins";
import {
  IDocuNotionConfig,
  IDocuNotionContext,
  IPlugin,
} from "@sillsdev/docu-notion";

const modifiedStandardInternalLinkConversion: IPlugin = {
  name: "modified standard internal link conversion",
  regexMarkdownModifications: [
    {
      regex: /\[([^\]]+)?\]\((?!mailto:)(\/?[^),^\/]+)\)/,
      getReplacement: async (
        context: IDocuNotionContext,
        match: RegExpExecArray,
      ): Promise<string> => {
        const slugPrefix = context.options.markdownOutputPath.split("/").pop();
        const label = match[1];
        let url = match[2];
        // THIS IS TERRIBLE
        // WHY: I want this plugin to run for the "blog" but not for the "docs"
        // because the "docs" are not prefixed with "/docs" but the "blog" is
        // I have to "configure" this plugin here because every other way
        // to do it "properly" ie with args or env vars is overly complicated
        // and hides what is going on.
        if (slugPrefix === "blog" && !url.startsWith(`/${slugPrefix}`)) {
          url = `/${slugPrefix}${url}`;
        }
        return `[${label}](${url})`;
      },
    },
  ],
};

const config: IDocuNotionConfig = {
  plugins: [
    // modifiedStandardInternalLinkConversion,
    notionColumnsUpgraded,
    correctNotionUrlsInMermaid({ slugPrefix: "" }),
    embedToIframe,
  ],
};
export default config;
