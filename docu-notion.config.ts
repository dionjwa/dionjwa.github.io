import {
  correctNotionUrlsInMermaid,
  notionColumnsUpgraded,
} from '@metapages/docu-notion-plugins';
import {
  IDocuNotionConfig,
  Log,
} from '@sillsdev/docu-notion';

Log.setLogLevel("verbose");

const config: IDocuNotionConfig = {
  plugins: [
    notionColumnsUpgraded,
    correctNotionUrlsInMermaid({slugPrefix:""}),
    // modifiedStandardInternalLinkConversion,
  ],
};
export default config;
