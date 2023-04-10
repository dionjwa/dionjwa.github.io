"use strict";(self.webpackChunkdionjwa_resume_docusaurus=self.webpackChunkdionjwa_resume_docusaurus||[]).push([[477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/a61f5e76-5622-4c91-987e-211375a28dd6","metadata":{"permalink":"/blog/a61f5e76-5622-4c91-987e-211375a28dd6","source":"@site/blog/blog/Docker-and-wasm.md","title":"Docker and wasm","description":"","date":"2023-04-10T15:28:21.000Z","formattedDate":"April 10, 2023","tags":[],"readingTime":0,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Docker and wasm","sidebar_position":2,"slug":"/a61f5e76-5622-4c91-987e-211375a28dd6"},"nextItem":{"title":"How this blog is automated","permalink":"/blog/e03a55f0-1333-47cc-85a6-5f39e22a917a"}},"content":""},{"id":"/e03a55f0-1333-47cc-85a6-5f39e22a917a","metadata":{"permalink":"/blog/e03a55f0-1333-47cc-85a6-5f39e22a917a","source":"@site/blog/blog/How-this-blog-is-automated.md","title":"How this blog is automated","description":"1. I write blog posts in notion","date":"2023-04-10T15:28:21.000Z","formattedDate":"April 10, 2023","tags":[],"readingTime":1.005,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"How this blog is automated","sidebar_position":3,"slug":"/e03a55f0-1333-47cc-85a6-5f39e22a917a"},"prevItem":{"title":"Docker and wasm","permalink":"/blog/a61f5e76-5622-4c91-987e-211375a28dd6"},"nextItem":{"title":"deno is part of the golden three","permalink":"/blog/61b14da3-8e9f-4f33-b823-fb39965a6bd6"}},"content":"1. I write blog posts in [notion](https://notion.so)\\n1. Automatically ~15 minutes later the [docusaurus](https://docusaurus.io/) website has pages generated from notion, and pushed to github pages\\n1. ~~There\u2019s nothing I actually needed to do except write~~\\n\\nThat\u2019s it. I just write. The rest is automated.\\n\\n\\n### How it works {#1900a1e531c64d3ab4896817eefc7eba}\\n\\n\\nSource: [https://github.com/dionjwa/dionjwa.github.io](https://github.com/dionjwa/dionjwa.github.io)\\n\\n\\n```mermaid\\nflowchart LR\\n    subgraph gh [github action every 30m]\\n        direction LR\\n        db[(notion.so)] --\x3e D[docu-notion]\\n        D --\x3e ds(docusaurus)\\n\\n    end\\n  \\n  click D https://github.com/sillsdev/docu-notion\\n  click ds https://docusaurus.io/\\n  click db https://www.notion.so\\n```\\n\\n\\nA github action runs a few scripts commands:\\n\\n1. Using [docu-notion](https://github.com/sillsdev/docu-notion) (and a root notion page) the docusaurus blog markdown is generated from specified notion pages\\n1. The docusaurus website is built\\n1. Then deployed to github pages\\n\\nIt\u2019s otherwise tricky to find a set of tools for writing/publishing a blog+resume with the following requirements (for me):\\n\\n- open source, or high data trust\\n- able to output from notion. I\u2019m too tired to convert to anything, like multiple publishing endpoints. I just want to write, and have everything be automated\\n- but also look good\\n- where i just write, and do absolutely nothing else. no saving, no publishing step.\\n- but also everything is backed up, with full version history"},{"id":"/61b14da3-8e9f-4f33-b823-fb39965a6bd6","metadata":{"permalink":"/blog/61b14da3-8e9f-4f33-b823-fb39965a6bd6","source":"@site/blog/blog/deno-is-part-of-the-golden-three.md","title":"deno is part of the golden three","description":"","date":"2023-04-10T15:28:21.000Z","formattedDate":"April 10, 2023","tags":[],"readingTime":0,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"deno is part of the golden three","sidebar_position":1,"slug":"/61b14da3-8e9f-4f33-b823-fb39965a6bd6"},"prevItem":{"title":"How this blog is automated","permalink":"/blog/e03a55f0-1333-47cc-85a6-5f39e22a917a"},"nextItem":{"title":"justfiles to bind them","permalink":"/blog/one-justfile-to-bind-them-all"}},"content":""},{"id":"/one-justfile-to-bind-them-all","metadata":{"permalink":"/blog/one-justfile-to-bind-them-all","source":"@site/blog/blog/one-justfile-to-bind-them-all.md","title":"justfiles to bind them","description":"Just Words of Wisdom (To Myself)","date":"2023-04-10T15:28:21.000Z","formattedDate":"April 10, 2023","tags":[],"readingTime":0.575,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"justfiles to bind them","sidebar_position":0,"slug":"/one-justfile-to-bind-them-all"},"prevItem":{"title":"deno is part of the golden three","permalink":"/blog/61b14da3-8e9f-4f33-b823-fb39965a6bd6"}},"content":"```mermaid\\nflowchart LR\\n    subgraph g [golden three]\\n        direction LR\\n        j[justfiles]\\n        d[deno]\\n        docker[docker]\\n        j --\x3e d --\x3e docker --\x3e j\\n    end\\n\\n    click j https://www.notion.so/metapages/justfiles-to-bind-them-7b15587ae7a041b9acca4a65a1f30ea5?pvs=4\\n    click d https://www.notion.so/metapages/deno-is-part-of-the-golden-three-61b14da38e9f4f33b823fb39965a6bd6?pvs=4\\n    click docker https://www.notion.so/metapages/Docker-and-wasm-a61f5e7656224c91987e211375a28dd6?pvs=4\\n```\\n\\n\\n## Just Words of Wisdom (To Myself) {#a660199f26954368939f6ff59ee255ae}\\n\\n\\n### Always include the full path of commands {#d2d23cebe20b4d158daa8400e3cdf9ac}\\n\\n\\nIf you document something with what &lt;command&gt; you should run, e.g.\\n\\n\\n```bash\\n# And then you type: \'just <command>\'\\n```\\n\\n\\nbut you are `</over/here>` but you have to be `</somewhere/else>` then please include the full path so there is never any doubt and you don\u2019t have to go `fd`\'ing: `\'</be/specific> just <command>\'`. It doesn\u2019t have to be this exact formula, but try to remove this kind of friction."}]}')}}]);