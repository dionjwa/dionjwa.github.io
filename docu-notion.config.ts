import {
  IDocuNotionConfig,
  IPlugin,
  IDocuNotionContext,
  Log,
  NotionBlock,
} from "docu-notion";
import { join } from "path";
import { Client } from "@notionhq/client";
import { CodeBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

// Log.setLogLevel("verbose");

/**
 * Replacing synced blocks is returning either the synced block, or
 * the first child of the synced block, and keep going until you reach
 * a non-synced block.
 */
const replaceSyncedBlockWithTargets = async (
  block: NotionBlock,
  client: Client
): Promise<NotionBlock[]> => {
  if (block.type !== "synced_block") {
    return [block];
  }
  const synced_from = block?.synced_block?.synced_from?.block_id;
  if (synced_from) {
    const syncedBlock = await client.blocks.retrieve({ block_id: synced_from });
    return await replaceSyncedBlockWithTargets(
      syncedBlock as NotionBlock,
      client
    );
  }

  const children = await client.blocks.children.list({ block_id: block.id });
  if (children.results.length === 0) {
    return [block];
  }

  const finalResults :NotionBlock[] = [];
  for (const child of children.results) {
    const syncedTargets = await replaceSyncedBlockWithTargets(
      child as NotionBlock,
      client
    );
    syncedTargets.forEach(target => finalResults.push(target));
  }
  return finalResults;

  // return await replaceSyncedBlockWithTargets(
  //   children.results[0] as NotionBlock,
  //   client
  // );
};

const convertHref = (args: {
  url: string;
  context: IDocuNotionContext;
  slugPrefix?: string;
}) => {
  const { url, context, slugPrefix } = args;

  // Do not convert non-notion links
  if (!url.startsWith("https://www.notion.so/")) {
    return url;
  }
  const notionId = new URL(url).pathname.split("-").pop() || "";

  const page = context.pages.find((p) => {
    return p.matchesLinkId(notionId);
  });
  if (page) {
    let convertedLink = context.layoutStrategy.getLinkPathForPage(page);

    if (slugPrefix) {
      convertedLink =
        (slugPrefix.startsWith("/") ? "" : "/") +
        join(slugPrefix, convertedLink);
    }

    Log.verbose(`Converting Link ${url} --> ${convertedLink}`);
    return convertedLink;
  }

  // About this situation. See https://github.com/sillsdev/docu-notion/issues/9
  Log.warning(
    `Could not find the target of this link. Note that links to outline sections are not supported. ${url}. https://github.com/sillsdev/docu-notion/issues/9`
  );

  return url;
};

const transformMermaidLinks = (
  pageMarkdown: string,
  convertHref: (url: string) => string
) => {
  // The mermaid interactive click syntax:
  // https://mermaid.js.org/syntax/flowchart.html#interaction
  // NB this processing is just for internal link navigation
  const linkRegExp =
    /\s*click\s+([A-za-z][A-za-z0-9_-]*)\s+"?(https:\/\/www\.notion\.so\/\S*)"?/g;
  let output = pageMarkdown;
  let match: RegExpExecArray | null;

  // The key to understanding this while is that linkRegExp actually has state, and
  // it gives you a new one each time. https://stackoverflow.com/a/1520853/723299

  while ((match = linkRegExp.exec(pageMarkdown)) !== null) {
    const originalLink = match[0];

    const hrefFromNotion = match[2];
    const hrefForDocusaurus = convertHref(hrefFromNotion);

    if (hrefForDocusaurus) {
      output = output.replace(
        match[0],
        `\n  click ${match[1]} "${hrefForDocusaurus}"`
      );
      Log.verbose(`transformed link: ${originalLink}-->${hrefForDocusaurus}`);
    } else {
      Log.verbose(`Maybe problem with link ${JSON.stringify(match)}`);
    }
  }

  return output;
};

// The mermaid interactive click syntax:
// https://mermaid.js.org/syntax/flowchart.html#interaction
// NB this processing is just for internal link navigation
// const linkRegExp = /\s*click\s+([A-za-z][A-za-z0-9_-]*)\s+"(https:\/\/www\.notion\.so\/\S*)"/g;
// const linkNotionRegExp = /.*(https:\/\/www\.notion\.so\/)(.*)/;

let client: Client;
// This is an example of a plugin that needs customization by the end user.
// It uses a closure to supply the plugin with the customization parameter.
const syncedBlocksAlreadyProcessed = new Set<string>();
function docunotionMermaidLinks(args: { slugPrefix: string }): IPlugin {
  const { slugPrefix } = args;
  return {
    name: "mermaidLinksAndDedupeSyncedBlocks",

    notionToMarkdownTransforms: [
      {
        type: "code",
        getStringFromBlock: (
          context: IDocuNotionContext,
          block: NotionBlock
        ) => {
          const codeBlock = block as CodeBlockObjectResponse;
          let text: string = codeBlock.code.rich_text[0].plain_text;
          let language: string = codeBlock.code.language;

          if (language === "plain text") {
            language = "text";
          }

          if (language === "mermaid") {
            text = transformMermaidLinks(text, (url) =>
              convertHref({ url, context, slugPrefix })
            );
          }

          return `\`\`\`${language}\n${text}\n\`\`\``;
        },
      },

      // drill down and replace synced blocks with their target
      {
        type: "synced_block",
        getStringFromBlock: async (
          context: IDocuNotionContext,
          block: NotionBlock
        ) => {
          if (!client) {
            client = new Client({
              auth: context.options.notionToken,
            });
          }

          if (syncedBlocksAlreadyProcessed.has(block.id)) {
            return "";
          }

          const actualContentBlocks = await replaceSyncedBlockWithTargets(
            block,
            client
          );

          Log.verbose(
            `synced_block ${block.id} actualContentBlock` +
              JSON.stringify(actualContentBlocks, null, 2)
          );
          syncedBlocksAlreadyProcessed.add(block.id);
          let syncedBlockString = "";

          for (const actualContentBlock of actualContentBlocks) {
            const md = await context.notionToMarkdown.blockToMarkdown(actualContentBlock);
            // workaround for duplicated synced blocks
            if (!syncedBlockString.includes(md)) {
              syncedBlockString += md + "\n";
            }
          }

          return syncedBlockString;
        },
      },
    ],
  };
}

const config: IDocuNotionConfig = {
  plugins: [
    docunotionMermaidLinks({
      slugPrefix: process.env.NOTION_LINK_PREFIX
        ? process.env.NOTION_LINK_PREFIX
        : "",
    }),
  ],
};
export default config;

// Example code block
// {
//   "object": "block",
//   "id": "74411f1a-f3fd-4108-a616-cefb41948d33",
//   "parent": {
//       "type": "page_id",
//       "page_id": "63f6f281-a336-49cc-9dfa-bb86d26ad829"
//   },
//   "created_time": "2022-12-26T22:41:00.000Z",
//   "last_edited_time": "2023-04-01T22:13:00.000Z",
//   "created_by": {
//       "object": "user",
//       "id": "38433169-6845-4c23-a787-f24081088d0c"
//   },
//   "last_edited_by": {
//       "object": "user",
//       "id": "38433169-6845-4c23-a787-f24081088d0c"
//   },
//   "has_children": false,
//   "archived": false,
//   "type": "code",
//   "code": {
//       "caption": [],
//       "rich_text": [
//           {
//               "type": "text",
//               "text": {
//                   "content": "graph LR\n  A[An internal page] -->|Get money| B(Go shopping)\n  click A \"https://www.notion.so/metapages/Introduction-to-docu-notion-779f83504bd94642a9b87b2afc810a97\"\n",
//                   "link": null
//               },
//               "annotations": {
//                   "bold": false,
//                   "italic": false,
//                   "strikethrough": false,
//                   "underline": false,
//                   "code": false,
//                   "color": "default"
//               },
//               "plain_text": "graph LR\n  A[An internal page] -->|Get money| B(Go shopping)\n  click A \"https://www.notion.so/metapages/Introduction-to-docu-notion-779f83504bd94642a9b87b2afc810a97\"\n",
//               "href": null
//           }
//       ],
//       "language": "mermaid"
//   }
// }
