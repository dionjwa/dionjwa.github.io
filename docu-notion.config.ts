import {
  correctNotionUrlsInMermaid,
  notionColumnsUpgraded,
} from '@metapages/docu-notion-plugins';
import {
  IDocuNotionConfig,
  Log,
} from '@sillsdev/docu-notion';

// import {
//   correctNotionUrlsInMermaid,
// } from './src/tmp/correctNotionUrlsInMermaid';

Log.setLogLevel("verbose");

const config: IDocuNotionConfig = {
  plugins: [
    notionColumnsUpgraded,
    correctNotionUrlsInMermaid({slugPrefix:""}),
    // modifiedStandardInternalLinkConversion,
  ],
};
export default config;
