import {
  correctNotionUrlsInMermaid,
  notionColumnsUpgraded,
} from '@metapages/docu-notion-plugins';
import { IDocuNotionConfig } from '@sillsdev/docu-notion';

import { embedToIframe } from './src/docu-notion-plugins/embed';

// Log.setLogLevel("verbose");

const config: IDocuNotionConfig = {
  plugins: [
    notionColumnsUpgraded,
    correctNotionUrlsInMermaid({slugPrefix:""}),
    embedToIframe, 
  ],
};
export default config;
