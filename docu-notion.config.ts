import {
  correctNotionUrlsInMermaid,
  embedToIframe,
  notionColumnsUpgraded,
} from '@metapages/docu-notion-plugins';
import { IDocuNotionConfig } from '@sillsdev/docu-notion';

// Log.setLogLevel("verbose");

const config: IDocuNotionConfig = {
  plugins: [
    notionColumnsUpgraded,
    correctNotionUrlsInMermaid({slugPrefix:""}),
    embedToIframe, 
  ],
};
export default config;
