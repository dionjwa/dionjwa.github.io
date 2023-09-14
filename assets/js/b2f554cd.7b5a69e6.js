"use strict";(self.webpackChunkdionjwa_resume_docusaurus=self.webpackChunkdionjwa_resume_docusaurus||[]).push([[477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/deno-and-tool-ecosystems","metadata":{"permalink":"/blog/deno-and-tool-ecosystems","source":"@site/blog/blog/deno-and-tool-ecosystems.md","title":"Deno is part of the golden three","description":"","date":"2023-09-14T21:11:50.000Z","formattedDate":"September 14, 2023","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Deno is part of the golden three","sidebar_position":2,"slug":"/deno-and-tool-ecosystems"},"nextItem":{"title":"Docker and wasm","permalink":"/blog/docker-wasm-web-containers"}},"content":"```mermaid\\nflowchart LR\\n    subgraph g [golden three]\\n        direction LR\\n        j[justfiles]\\n        d[deno]\\n        docker[docker]\\n        j --\x3e d --\x3e docker --\x3e j\\n    end\\n\\n    click j https://www.notion.so/metapages/justfiles-to-bind-them-7b15587ae7a041b9acca4a65a1f30ea5?pvs=4\\n    click d https://www.notion.so/metapages/deno-is-part-of-the-golden-three-61b14da38e9f4f33b823fb39965a6bd6?pvs=4\\n    click docker https://www.notion.so/metapages/Docker-and-wasm-a61f5e7656224c91987e211375a28dd6?pvs=4\\n```"},{"id":"/docker-wasm-web-containers","metadata":{"permalink":"/blog/docker-wasm-web-containers","source":"@site/blog/blog/docker-wasm-web-containers.md","title":"Docker and wasm","description":"","date":"2023-09-14T21:11:50.000Z","formattedDate":"September 14, 2023","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Docker and wasm","sidebar_position":3,"slug":"/docker-wasm-web-containers"},"prevItem":{"title":"Deno is part of the golden three","permalink":"/blog/deno-and-tool-ecosystems"},"nextItem":{"title":"How this blog is automated","permalink":"/blog/how-this-blog-is-automated"}},"content":"```mermaid\\nflowchart LR\\n    subgraph g [golden three]\\n        direction LR\\n        j[justfiles]\\n        d[deno]\\n        docker[docker]\\n        j --\x3e d --\x3e docker --\x3e j\\n    end\\n\\n    click j https://www.notion.so/metapages/justfiles-to-bind-them-7b15587ae7a041b9acca4a65a1f30ea5?pvs=4\\n    click d https://www.notion.so/metapages/deno-is-part-of-the-golden-three-61b14da38e9f4f33b823fb39965a6bd6?pvs=4\\n    click docker https://www.notion.so/metapages/Docker-and-wasm-a61f5e7656224c91987e211375a28dd6?pvs=4\\n```"},{"id":"/how-this-blog-is-automated","metadata":{"permalink":"/blog/how-this-blog-is-automated","source":"@site/blog/blog/how-this-blog-is-automated.md","title":"How this blog is automated","description":"1. I write blog posts in notion, structured how I like","date":"2023-09-14T21:11:50.000Z","formattedDate":"September 14, 2023","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"How this blog is automated","sidebar_position":5,"slug":"/how-this-blog-is-automated"},"prevItem":{"title":"Docker and wasm","permalink":"/blog/docker-wasm-web-containers"},"nextItem":{"title":"Justfiles - universal command control","permalink":"/blog/one-justfile-to-bind-them-all"}},"content":"1. I write blog posts in [notion](https://notion.so/), structured how I like\\n2. Automatically ~15 minutes later the website + blog is generated from notion, using [docusaurus](https://docusaurus.io/) + [docu-notion](https://github.com/sillsdev/docu-notion), and pushed to github pages\\n3. ~~There\u2019s nothing I actually needed to do except write~~\\n\\nThat\u2019s it. I just write. The rest is automated.\\n\\n\\n### How it works {#1900a1e531c64d3ab4896817eefc7eba}\\n\\n\\nSource: [https://github.com/dionjwa/dionjwa.github.io](https://github.com/dionjwa/dionjwa.github.io)\\n\\n\\n```mermaid\\nflowchart LR\\n    subgraph gh [github action every 30m]\\n        direction LR\\n        db[(notion.so)] --\x3e D[docu-notion]\\n        D --\x3e ds(docusaurus)\\n        ds --\x3e deploy[deploy to github pages ]\\n\\n    end\\n  \\n  click D https://github.com/sillsdev/docu-notion\\n  click ds https://docusaurus.io/\\n  click db https://www.notion.so\\n```\\n\\n\\nA github action runs a few scripts commands:\\n\\n1. Using [docu-notion](https://github.com/sillsdev/docu-notion) (and a root notion page) the docusaurus blog markdown is generated from specified notion pages\\n2. The docusaurus website is built\\n3. Then deployed to github pages\\n\\nIt\u2019s otherwise tricky to find a set of tools for writing/publishing a blog+resume with the following requirements (for me):\\n\\n- open source, or high data trust\\n- able to output from notion. I\u2019m too tired to convert to anything, like multiple publishing endpoints. I just want to write, and have everything be automated\\n- but also look good\\n- where i just write, and do absolutely nothing else. no saving, no publishing step.\\n- but also everything is backed up, with full version history"},{"id":"/one-justfile-to-bind-them-all","metadata":{"permalink":"/blog/one-justfile-to-bind-them-all","source":"@site/blog/blog/one-justfile-to-bind-them-all.md","title":"Justfiles - universal command control","description":"Just Words of Wisdom (To Myself)","date":"2023-09-14T21:11:50.000Z","formattedDate":"September 14, 2023","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Justfiles - universal command control","sidebar_position":1,"slug":"/one-justfile-to-bind-them-all"},"prevItem":{"title":"How this blog is automated","permalink":"/blog/how-this-blog-is-automated"},"nextItem":{"title":"The golden trifecta- justfiles, deno, and docker","permalink":"/blog/the-golden-three-just-deno-docker"}},"content":"```mermaid\\nflowchart LR\\n    subgraph g [golden three]\\n        direction LR\\n        j[justfiles]\\n        d[deno]\\n        docker[docker]\\n        j --\x3e d --\x3e docker --\x3e j\\n    end\\n\\n    click j https://www.notion.so/metapages/justfiles-to-bind-them-7b15587ae7a041b9acca4a65a1f30ea5?pvs=4\\n    click d https://www.notion.so/metapages/deno-is-part-of-the-golden-three-61b14da38e9f4f33b823fb39965a6bd6?pvs=4\\n    click docker https://www.notion.so/metapages/Docker-and-wasm-a61f5e7656224c91987e211375a28dd6?pvs=4\\n```\\n\\n\\n## Just Words of Wisdom (To Myself) {#a660199f26954368939f6ff59ee255ae}\\n\\n\\n### Always include the full path of commands {#d2d23cebe20b4d158daa8400e3cdf9ac}\\n\\n\\nIf you document something with what &lt;command&gt; you should run, e.g.\\n\\n\\n```bash\\n# And then you type: \'just <command>\'\\n```\\n\\n\\nbut you are `</over/here>` but you have to be `</somewhere/else>` then please include the full path so there is never any doubt and you don\u2019t have to go `fd`\'ing: `\'</be/specific> just <command>\'`. It doesn\u2019t have to be this exact formula, but try to remove this kind of friction."},{"id":"/the-golden-three-just-deno-docker","metadata":{"permalink":"/blog/the-golden-three-just-deno-docker","source":"@site/blog/blog/the-golden-three-just-deno-docker.md","title":"The golden trifecta- justfiles, deno, and docker","description":"","date":"2023-09-14T21:11:50.000Z","formattedDate":"September 14, 2023","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"The golden trifecta- justfiles, deno, and docker","sidebar_position":4,"slug":"/the-golden-three-just-deno-docker"},"prevItem":{"title":"Justfiles - universal command control","permalink":"/blog/one-justfile-to-bind-them-all"}},"content":"```mermaid\\nflowchart LR\\n    subgraph g [golden three]\\n        direction LR\\n        j[justfiles]\\n        d[deno]\\n        docker[docker]\\n        j --\x3e d --\x3e docker --\x3e j\\n    end\\n\\n    click j https://www.notion.so/metapages/justfiles-to-bind-them-7b15587ae7a041b9acca4a65a1f30ea5?pvs=4\\n    click d https://www.notion.so/metapages/deno-is-part-of-the-golden-three-61b14da38e9f4f33b823fb39965a6bd6?pvs=4\\n    click docker https://www.notion.so/metapages/Docker-and-wasm-a61f5e7656224c91987e211375a28dd6?pvs=4\\n```"}]}')}}]);